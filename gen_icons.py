"""Generate icon-192.png and icon-512.png from scratch (stdlib only)."""
import struct, zlib, math

def _png(pixels, w, h):
    def chunk(t, d):
        c = t + d
        return struct.pack('>I', len(d)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)
    raw = b''.join(b'\x00' + bytes(v for px in pixels[y*w:(y+1)*w] for v in px)
                   for y in range(h))
    return (b'\x89PNG\r\n\x1a\n'
            + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
            + chunk(b'IDAT', zlib.compress(raw, 9))
            + chunk(b'IEND', b''))

def _ss(edge0, edge1, x):
    t = max(0.0, min(1.0, (x - edge0) / (edge1 - edge0)))
    return t * t * (3 - 2 * t)

def _dist(x, y, cx, cy):
    return math.sqrt((x-cx)**2 + (y-cy)**2)

def make_icon(size):
    aa = 1.8
    px = []
    for y in range(size):
        for x in range(size):
            fx, fy = x + 0.5, y + 0.5
            s = size

            # Background: deep purple, rounded square
            bg = [24, 11, 46]
            corner_r = s * 0.175
            # distance to rounded-rect edge (signed: negative = inside)
            dx = max(abs(fx - s/2) - (s/2 - corner_r), 0)
            dy = max(abs(fy - s/2) - (s/2 - corner_r), 0)
            rr_dist = math.sqrt(dx*dx + dy*dy) - corner_r
            bg_alpha = _ss(aa, -aa, rr_dist)
            if bg_alpha <= 0:
                px.append((0, 0, 0, 0))
                continue

            r, g, b = bg

            # Crescent moon
            moon_cx, moon_cy, moon_r = s*0.460, s*0.523, s*0.293
            shad_cx, shad_cy, shad_r = s*0.597, s*0.457, s*0.270
            d_moon = _dist(fx, fy, moon_cx, moon_cy) - moon_r
            d_shad = _dist(fx, fy, shad_cx, shad_cy) - shad_r
            moon_a = _ss(aa, -aa, d_moon) * _ss(-aa, aa, d_shad)
            if moon_a > 0:
                mr, mg, mb = 240, 192, 0
                r = int(r*(1-moon_a) + mr*moon_a)
                g = int(g*(1-moon_a) + mg*moon_a)
                b = int(b*(1-moon_a) + mb*moon_a)

            # Stars (cx, cy as fraction, radius as fraction)
            stars = [
                (0.726, 0.211, 0.0137),
                (0.820, 0.383, 0.0088),
                (0.211, 0.289, 0.0107),
                (0.777, 0.703, 0.0078),
                (0.188, 0.664, 0.0068),
                (0.859, 0.566, 0.0059),
                (0.266, 0.820, 0.0059),
            ]
            for scx, scy, sr in stars:
                d_s = _dist(fx, fy, scx*s, scy*s) - sr*s
                sa = _ss(aa*0.6, -aa*0.6, d_s) * 0.88
                if sa > 0:
                    r = int(r*(1-sa) + 255*sa)
                    g = int(g*(1-sa) + 248*sa)
                    b = int(b*(1-sa) + 220*sa)

            # 4-pointed sparkle (top-right area)
            def sparkle_alpha(cx, cy, outer, inner, pts=4):
                angle_to = math.atan2(fy-cy, fx-cx)
                dist_to  = _dist(fx, fy, cx, cy)
                spike = abs(math.cos(pts * angle_to))
                local_r = inner + (outer-inner) * spike
                return _ss(aa*0.5, -aa*0.5, dist_to - local_r)
            sp_a = sparkle_alpha(s*0.797, s*0.148, s*0.044, s*0.010)
            if sp_a > 0:
                r = int(r*(1-sp_a) + 240*sp_a)
                g = int(g*(1-sp_a) + 192*sp_a)
                b = int(b*(1-sp_a) + 0  *sp_a)

            # Small sparkle mid-right
            sp2_a = sparkle_alpha(s*0.871, s*0.480, s*0.026, s*0.006)
            if sp2_a > 0:
                wa = sp2_a * 0.65
                r = int(r*(1-wa) + 255*wa)
                g = int(g*(1-wa) + 255*wa)
                b = int(b*(1-wa) + 255*wa)

            alpha = int(bg_alpha * 255)
            px.append((max(0,min(255,r)), max(0,min(255,g)), max(0,min(255,b)), alpha))

    return px

for size, name in [(192, 'icon-192.png'), (512, 'icon-512.png'), (180, 'icon-180.png')]:
    print(f'Generating {name}...')
    data = _png(make_icon(size), size, size)
    with open(name, 'wb') as f:
        f.write(data)
    print(f'  {len(data):,} bytes')

print('Done.')
