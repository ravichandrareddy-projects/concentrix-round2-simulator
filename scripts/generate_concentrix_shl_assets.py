import os, math, json

os.makedirs("public/images/aptitude", exist_ok=True)

# Helper to write SVG
def write_svg(filename, content):
    path = os.path.join("public/images/aptitude", filename)
    with open(path, "w") as f:
        f.write(content.strip())

# ==============================================================================
# 1. PPE / WORKPLACE EQUIPMENT SVGS (20 items)
# ==============================================================================

def make_gloves_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(40, 25)">
    <!-- Right glove -->
    <path d="M 45 130 L 45 80 C 45 75 40 70 35 70 C 30 70 25 75 25 80 L 25 55 C 25 50 20 45 15 45 C 10 45 5 50 5 55 L 5 85 C 5 85 -5 80 -10 88 C -15 95 -10 105 -5 110 L 15 130 Z" fill="#2563eb" stroke="#60a5fa" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Left glove -->
    <path d="M 75 130 L 75 80 C 75 75 80 70 85 70 C 90 70 95 75 95 80 L 95 55 C 95 50 100 45 105 45 C 110 45 115 50 115 55 L 115 85 C 115 85 125 80 130 88 C 135 95 130 105 125 110 L 105 130 Z" fill="#1d4ed8" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Cuffs -->
    <rect x="20" y="125" width="80" height="18" rx="4" fill="#1e40af" stroke="#93c5fd" stroke-width="1.5"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#93c5fd" text-anchor="middle">Chemical Rubber Gloves</text>
</svg>'''

def make_helmet_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(30, 40)">
    <!-- Helmet dome -->
    <path d="M 10 80 C 10 25, 130 25, 130 80 Z" fill="#eab308" stroke="#fef08a" stroke-width="2.5"/>
    <!-- Helmet rib ridge -->
    <path d="M 60 27 Q 70 20 80 27 L 75 78 L 65 78 Z" fill="#ca8a04"/>
    <!-- Brim -->
    <path d="M 2 80 C 2 75, 138 75, 138 80 C 138 88, 2 88, 2 80 Z" fill="#a16207" stroke="#fef08a" stroke-width="1.5"/>
    <!-- Chin strap -->
    <path d="M 25 85 Q 70 125 115 85" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4,2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fef08a" text-anchor="middle">Safety Hard Hat</text>
</svg>'''

def make_goggles_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(25, 50)">
    <!-- Headband -->
    <path d="M 5 35 Q 75 10 145 35" fill="none" stroke="#475569" stroke-width="7"/>
    <!-- Frame -->
    <path d="M 15 35 C 15 15, 65 15, 75 30 C 85 15, 135 15, 135 35 C 135 65, 85 70, 75 55 C 65 70, 15 65, 15 35 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
    <!-- Left lens reflection -->
    <ellipse cx="45" cy="38" rx="20" ry="14" fill="#38bdf8" fill-opacity="0.35"/>
    <path d="M 35 32 L 45 44" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    <!-- Right lens reflection -->
    <ellipse cx="105" cy="38" rx="20" ry="14" fill="#38bdf8" fill-opacity="0.35"/>
    <path d="M 95 32 L 105 44" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">Protective Safety Goggles</text>
</svg>'''

def make_mask_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(35, 40)">
    <!-- Straps -->
    <path d="M 10 40 L 120 20 M 10 60 L 120 80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,2"/>
    <!-- Mask body -->
    <path d="M 20 50 Q 65 10 110 50 Q 65 95 20 50 Z" fill="#0d9488" stroke="#2dd4bf" stroke-width="2.5"/>
    <!-- Exhalation valve -->
    <circle cx="65" cy="50" r="14" fill="#134e4a" stroke="#5eead4" stroke-width="2"/>
    <rect x="63" y="42" width="4" height="16" fill="#5eead4"/>
    <rect x="57" y="48" width="16" height="4" fill="#5eead4"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#2dd4bf" text-anchor="middle">Respirator Dust Mask</text>
</svg>'''

def make_earmuffs_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(40, 30)">
    <!-- Headband arc -->
    <path d="M 20 70 A 45 45 0 0 1 100 70" fill="none" stroke="#e11d48" stroke-width="8" stroke-linecap="round"/>
    <!-- Ear cups -->
    <rect x="10" y="60" width="22" height="42" rx="10" fill="#be123c" stroke="#fda4af" stroke-width="2"/>
    <rect x="88" y="60" width="22" height="42" rx="10" fill="#be123c" stroke="#fda4af" stroke-width="2"/>
    <ellipse cx="21" cy="81" rx="4" ry="12" fill="#881337"/>
    <ellipse cx="99" cy="81" rx="4" ry="12" fill="#881337"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fda4af" text-anchor="middle">Industrial Ear Defenders</text>
</svg>'''

def make_boots_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(35, 45)">
    <!-- Boot outline -->
    <path d="M 30 20 L 70 20 L 70 65 L 115 75 C 125 78 128 92 120 98 L 20 98 L 20 40 C 20 30 25 20 30 20 Z" fill="#78350f" stroke="#d97706" stroke-width="2.5"/>
    <!-- Steel toe cap indicator -->
    <path d="M 95 72 Q 120 75 115 95 L 90 95 Z" fill="#92400e" stroke="#fbbf24" stroke-width="1.5"/>
    <!-- Tread sole -->
    <rect x="16" y="98" width="108" height="12" rx="3" fill="#18181b" stroke="#71717a" stroke-width="1.5"/>
    <line x1="30" y1="98" x2="30" y2="110" stroke="#71717a" stroke-width="2"/>
    <line x1="50" y1="98" x2="50" y2="110" stroke="#71717a" stroke-width="2"/>
    <line x1="70" y1="98" x2="70" y2="110" stroke="#71717a" stroke-width="2"/>
    <line x1="90" y1="98" x2="90" y2="110" stroke="#71717a" stroke-width="2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">Steel-Toed Boots</text>
</svg>'''

def make_vest_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 35)">
    <!-- Vest body -->
    <path d="M 15 20 L 40 20 L 55 50 L 70 20 L 95 20 L 105 105 L 5 105 Z" fill="#84cc16" stroke="#bef264" stroke-width="2"/>
    <!-- Neck V -->
    <polygon points="40,20 55,55 70,20" fill="#0f172a"/>
    <!-- Silver reflective stripes -->
    <rect x="10" y="65" width="90" height="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
    <rect x="10" y="85" width="90" height="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#bef264" text-anchor="middle">High-Visibility Vest</text>
</svg>'''

def make_crimper_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(50, 30)">
    <!-- Jaws -->
    <rect x="25" y="15" width="50" height="35" rx="5" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
    <rect x="35" y="22" width="12" height="18" fill="#0f172a"/>
    <rect x="52" y="22" width="12" height="18" fill="#0f172a"/>
    <!-- Handles -->
    <path d="M 30 50 L 15 110" stroke="#dc2626" stroke-width="12" stroke-linecap="round"/>
    <path d="M 70 50 L 85 110" stroke="#dc2626" stroke-width="12" stroke-linecap="round"/>
    <circle cx="50" cy="50" r="6" fill="#cbd5e1"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#f87171" text-anchor="middle">RJ-45 Crimping Tool</text>
</svg>'''

def make_multimeter_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 25)">
    <!-- Yellow case -->
    <rect x="15" y="10" width="80" height="115" rx="10" fill="#f59e0b" stroke="#fde68a" stroke-width="2"/>
    <!-- Screen -->
    <rect x="25" y="22" width="60" height="30" rx="4" fill="#022c22" stroke="#059669" stroke-width="1.5"/>
    <text x="55" y="44" font-family="monospace" font-size="16" font-weight="bold" fill="#34d399" text-anchor="middle">230.5V</text>
    <!-- Rotary dial -->
    <circle cx="55" cy="80" r="16" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <line x1="55" y1="80" x2="55" y2="68" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fde68a" text-anchor="middle">Digital Multimeter</text>
</svg>'''

def make_extinguisher_svg():
    return '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(55, 25)">
    <!-- Cylinder -->
    <rect x="25" y="40" width="40" height="85" rx="16" fill="#dc2626" stroke="#fca5a5" stroke-width="2"/>
    <!-- Valve & handle -->
    <rect x="37" y="28" width="16" height="12" fill="#475569"/>
    <path d="M 30 25 L 60 25 M 35 25 L 35 15 L 55 15" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <!-- Hose & nozzle -->
    <path d="M 50 35 Q 80 50 75 90" fill="none" stroke="#1e293b" stroke-width="4"/>
    <rect x="68" y="90" width="14" height="20" rx="2" fill="#18181b"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fca5a5" text-anchor="middle">CO2 Fire Extinguisher</text>
</svg>'''

write_svg("opt_gloves.svg", make_gloves_svg())
write_svg("opt_helmet.svg", make_helmet_svg())
write_svg("opt_goggles.svg", make_goggles_svg())
write_svg("opt_mask.svg", make_mask_svg())
write_svg("opt_earmuffs.svg", make_earmuffs_svg())
write_svg("opt_boots.svg", make_boots_svg())
write_svg("opt_vest.svg", make_vest_svg())
write_svg("opt_crimper.svg", make_crimper_svg())
write_svg("opt_multimeter.svg", make_multimeter_svg())
write_svg("opt_extinguisher.svg", make_extinguisher_svg())

print("Created first 10 PPE option SVGs!")

# ==============================================================================
# 2. FIGURE 1: DELHI RETAIL MERCHANDISE (POSTER & DANGLER PIE CHARTS)
# ==============================================================================

def make_delhi_retail_svg():
    # Poster slices: H:14, A:16, B:8, C:6, D:13, E:19, F:9, G:15 = 100%
    poster_slices = [
        {"name": "H", "pct": 14, "color": "#f43f5e"},
        {"name": "A", "pct": 16, "color": "#10b981"},
        {"name": "B", "pct": 8,  "color": "#3b82f6"},
        {"name": "C", "pct": 6,  "color": "#f97316"},
        {"name": "D", "pct": 13, "color": "#8b5cf6"},
        {"name": "E", "pct": 19, "color": "#06b6d4"},
        {"name": "F", "pct": 9,  "color": "#eab308"},
        {"name": "G", "pct": 15, "color": "#ec4899"}
    ]
    # Dangler slices: H:19, A:24, B:5, C:7, D:11, E:12, F:3, G:19 = 100%
    dangler_slices = [
        {"name": "H", "pct": 19, "color": "#f43f5e"},
        {"name": "A", "pct": 24, "color": "#10b981"},
        {"name": "B", "pct": 5,  "color": "#3b82f6"},
        {"name": "C", "pct": 7,  "color": "#f97316"},
        {"name": "D", "pct": 11, "color": "#8b5cf6"},
        {"name": "E", "pct": 12, "color": "#06b6d4"},
        {"name": "F", "pct": 3,  "color": "#eab308"},
        {"name": "G", "pct": 19, "color": "#ec4899"}
    ]

    def render_pie(cx, cy, r, slices):
        current_angle = -90.0
        paths = []
        for s in slices:
            angle = (s["pct"] / 100.0) * 360.0
            start = current_angle
            end = current_angle + angle
            current_angle = end

            rad_s = math.radians(start)
            rad_e = math.radians(end)
            x1 = cx + r * math.cos(rad_s)
            y1 = cy + r * math.sin(rad_s)
            x2 = cx + r * math.cos(rad_e)
            y2 = cy + r * math.sin(rad_e)

            large = 1 if angle > 180 else 0
            d = f"M {cx} {cy} L {x1:.2f} {y1:.2f} A {r} {r} 0 {large} 1 {x2:.2f} {y2:.2f} Z"

            mid = math.radians(start + angle / 2.0)
            tx = cx + (r * 0.68) * math.cos(mid)
            ty = cy + (r * 0.68) * math.sin(mid)

            paths.append(f'<path d="{d}" fill="{s["color"]}" stroke="#0f172a" stroke-width="2"/>')
            paths.append(f'<text x="{tx:.1f}" y="{ty+4:.1f}" font-family="system-ui" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">{s["name"]} {s["pct"]}%</text>')
        return "\n".join(paths)

    poster_svg = render_pie(180, 160, 95, poster_slices)
    dangler_svg = render_pie(490, 160, 95, dangler_slices)

    legend_items = []
    for i, s in enumerate(poster_slices):
        lx = 40 + i * 78
        legend_items.append(f'''
        <g transform="translate({lx}, 285)">
          <rect width="14" height="14" rx="3" fill="{s["color"]}"/>
          <text x="20" y="11" font-family="system-ui" font-size="11" font-weight="600" fill="#e2e8f0">Co. {s["name"]}</text>
        </g>''')
    legend_svg = "\n".join(legend_items)

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_shl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="680" height="320" rx="16" fill="url(#bg_shl)" stroke="#1e293b" stroke-width="2"/>

  <!-- Main Figure Header -->
  <rect x="20" y="14" width="640" height="36" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="340" y="37" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#f8fafc" text-anchor="middle">
    Figure 1: Distribution of merchandise by different companies (A to H) at various retail stores in Delhi
  </text>

  <!-- Left Chart Box -->
  <rect x="40" y="60" width="280" height="210" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  <text x="180" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">
    Poster Distribution at Retail Stores
  </text>
  <g>{poster_svg}</g>

  <!-- Right Chart Box -->
  <rect x="350" y="60" width="280" height="210" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  <text x="490" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#a78bfa" text-anchor="middle">
    Dangler Distribution at Retail Stores
  </text>
  <g>{dangler_svg}</g>

  <!-- Bottom Legend Bar -->
  <rect x="20" y="278" width="640" height="28" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  {legend_svg}
</svg>'''

write_svg("shl_delhi_retail_merchandise.svg", make_delhi_retail_svg())
print("Created shl_delhi_retail_merchandise.svg!")
