import os, math

os.makedirs("public/images/aptitude", exist_ok=True)

def write_svg(filename, content):
    path = os.path.join("public/images/aptitude", filename)
    with open(path, "w") as f:
        f.write(content.strip())

# 10 Additional PPE SVGs
ppe_items = {
    "opt_antistatic.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(35, 30)">
    <!-- Wristband -->
    <ellipse cx="65" cy="50" rx="45" ry="25" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
    <ellipse cx="65" cy="50" rx="30" ry="14" fill="#0f172a"/>
    <!-- Snap stud -->
    <circle cx="65" cy="75" r="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Coiled wire -->
    <path d="M 65 83 Q 80 95 65 105 Q 50 115 65 125 L 85 135" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <!-- Crocodile clip -->
    <rect x="85" y="130" width="20" height="10" rx="2" fill="#94a3b8"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">Anti-Static Wrist Strap</text>
</svg>''',

    "opt_screwdriver.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 25)">
    <!-- Handle -->
    <rect x="40" y="15" width="30" height="60" rx="8" fill="#dc2626" stroke="#fca5a5" stroke-width="2"/>
    <rect x="45" y="25" width="20" height="40" rx="4" fill="#eab308"/>
    <!-- Insulated shaft -->
    <rect x="51" y="75" width="8" height="45" fill="#ea580c"/>
    <!-- Steel tip -->
    <rect x="52" y="120" width="6" height="15" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fca5a5" text-anchor="middle">Insulated Screwdriver</text>
</svg>''',

    "opt_faceshield.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(35, 30)">
    <!-- Crown headband -->
    <path d="M 15 50 Q 65 20 115 50" fill="none" stroke="#3b82f6" stroke-width="8" stroke-linecap="round"/>
    <!-- Clear visor -->
    <path d="M 20 50 C 20 120 110 120 110 50 Z" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
    <line x1="35" y1="65" x2="50" y2="95" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">Full Face Shield</text>
</svg>''',

    "opt_thermalgloves.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 30)">
    <path d="M 20 120 L 20 60 C 20 50 45 45 55 50 C 65 45 90 50 90 60 L 90 120 Z" fill="#475569" stroke="#94a3b8" stroke-width="2.5"/>
    <rect x="15" y="110" width="80" height="20" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="55" cy="85" r="8" fill="#38bdf8"/>
    <path d="M 55 80 L 55 90 M 50 85 L 60 85" stroke="#ffffff" stroke-width="2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#93c5fd" text-anchor="middle">Thermal Freezer Gloves</text>
</svg>''',

    "opt_gasdetector.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(50, 30)">
    <rect x="15" y="10" width="70" height="110" rx="12" fill="#f97316" stroke="#fed7aa" stroke-width="2"/>
    <rect x="25" y="22" width="50" height="35" rx="4" fill="#022c22" stroke="#10b981" stroke-width="1.5"/>
    <text x="50" y="44" font-family="monospace" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">O2: 20.9%</text>
    <circle cx="35" cy="75" r="6" fill="#22c55e"/>
    <circle cx="65" cy="75" r="6" fill="#ef4444"/>
    <rect x="35" y="92" width="30" height="16" rx="4" fill="#1e293b"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fed7aa" text-anchor="middle">Multi-Gas Detector</text>
</svg>''',

    "opt_apron.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 25)">
    <!-- Neck loop -->
    <path d="M 35 30 Q 55 10 75 30" fill="none" stroke="#94a3b8" stroke-width="3"/>
    <!-- Apron bib and skirt -->
    <path d="M 35 30 L 75 30 L 85 65 L 100 135 L 10 135 L 25 65 Z" fill="#059669" stroke="#6ee7b7" stroke-width="2"/>
    <line x1="10" y1="75" x2="100" y2="75" stroke="#047857" stroke-width="2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6ee7b7" text-anchor="middle">Chemical PVC Apron</text>
</svg>''',

    "opt_harness.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(45, 25)">
    <!-- Straps -->
    <path d="M 30 20 L 55 70 L 80 20" stroke="#eab308" stroke-width="6" fill="none"/>
    <path d="M 25 70 L 85 70" stroke="#eab308" stroke-width="6"/>
    <path d="M 40 70 L 30 130" stroke="#ca8a04" stroke-width="6"/>
    <path d="M 70 70 L 80 130" stroke="#ca8a04" stroke-width="6"/>
    <circle cx="55" cy="70" r="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fef08a" text-anchor="middle">Fall Arrest Harness</text>
</svg>''',

    "opt_laserglasses.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(30, 45)">
    <!-- Temples -->
    <path d="M 10 35 L 30 35 M 130 35 L 110 35" stroke="#64748b" stroke-width="4"/>
    <!-- Amber laser filter lenses -->
    <rect x="25" y="25" width="40" height="30" rx="8" fill="#ea580c" stroke="#fb923c" stroke-width="2"/>
    <rect x="75" y="25" width="40" height="30" rx="8" fill="#ea580c" stroke="#fb923c" stroke-width="2"/>
    <rect x="65" y="32" width="10" height="6" fill="#78350f"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fb923c" text-anchor="middle">Laser Safety Glasses</text>
</svg>''',

    "opt_soldering.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(40, 25)">
    <!-- Base -->
    <rect x="15" y="80" width="55" height="45" rx="6" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <circle cx="42" cy="102" r="10" fill="#0284c7"/>
    <!-- Soldering iron wand -->
    <path d="M 60 70 L 105 25" stroke="#f59e0b" stroke-width="8" stroke-linecap="round"/>
    <path d="M 105 25 L 120 10" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
    <path d="M 50 100 Q 80 120 70 70" fill="none" stroke="#475569" stroke-width="2"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fde68a" text-anchor="middle">Soldering Iron Station</text>
</svg>''',

    "opt_sharpsbox.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <rect width="200" height="200" rx="16" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
  <g transform="translate(50, 30)">
    <!-- Yellow container -->
    <rect x="15" y="30" width="70" height="85" rx="6" fill="#eab308" stroke="#fef08a" stroke-width="2"/>
    <!-- Red biohazard lid -->
    <rect x="10" y="20" width="80" height="15" rx="4" fill="#dc2626"/>
    <rect x="35" y="15" width="30" height="8" rx="2" fill="#ef4444"/>
    <!-- Biohazard symbol -->
    <circle cx="50" cy="72" r="12" fill="none" stroke="#000000" stroke-width="3"/>
  </g>
  <text x="100" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fef08a" text-anchor="middle">Biohazard Sharps Bin</text>
</svg>'''
}

for fname, svg in ppe_items.items():
    write_svg(fname, svg)
print("Wrote all 20 PPE option SVGs!")

# ==============================================================================
# 20 ODD-ONE-OUT OPTION SETS (4 SVGs per question = 80 SVGs)
# ==============================================================================

# Helper template for 180x180 option SVG card
def wrap_odd_card(letter, inner_svg):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="100%" height="100%">
  <rect width="180" height="180" rx="14" fill="#0b1120" stroke="#334155" stroke-width="2"/>
  <circle cx="26" cy="26" r="12" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="26" y="30" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">{letter}</text>
  <g transform="translate(0, 0)">
    {inner_svg}
  </g>
</svg>'''

# Q1: Nested Rectangles (Screenshot 2 clone: C has inner rectangle shifted to bottom)
write_svg("odd1_a.svg", wrap_odd_card("A", '<rect x="30" y="45" width="120" height="90" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="#1e293b" stroke="#93c5fd" stroke-width="2"/>'))
write_svg("odd1_b.svg", wrap_odd_card("B", '<rect x="30" y="45" width="120" height="90" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="#1e293b" stroke="#93c5fd" stroke-width="2"/>'))
write_svg("odd1_c.svg", wrap_odd_card("C", '<rect x="30" y="45" width="120" height="90" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5"/><rect x="65" y="95" width="50" height="40" fill="#1e293b" stroke="#93c5fd" stroke-width="2"/>')) # ODD: shifted down!
write_svg("odd1_d.svg", wrap_odd_card("D", '<rect x="30" y="45" width="120" height="90" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="#1e293b" stroke="#93c5fd" stroke-width="2"/>'))

# Q2: Concentric Square Count (D has 3 inner squares instead of 1)
write_svg("odd2_a.svg", wrap_odd_card("A", '<rect x="35" y="35" width="110" height="110" fill="#0f172a" stroke="#a855f7" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/>'))
write_svg("odd2_b.svg", wrap_odd_card("B", '<rect x="35" y="35" width="110" height="110" fill="#0f172a" stroke="#a855f7" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/>'))
write_svg("odd2_c.svg", wrap_odd_card("C", '<rect x="35" y="35" width="110" height="110" fill="#0f172a" stroke="#a855f7" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/>'))
write_svg("odd2_d.svg", wrap_odd_card("D", '<rect x="35" y="35" width="110" height="110" fill="#0f172a" stroke="#a855f7" stroke-width="2"/><rect x="55" y="55" width="70" height="70" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/><rect x="75" y="75" width="30" height="30" fill="#581c87" stroke="#e9d5ff" stroke-width="1.5"/>'))

# Q3: Diamond Rotation (C has inner diamond instead of square)
write_svg("odd3_a.svg", wrap_odd_card("A", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#10b981" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#064e3b" stroke="#34d399" stroke-width="2"/>'))
write_svg("odd3_b.svg", wrap_odd_card("B", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#10b981" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#064e3b" stroke="#34d399" stroke-width="2"/>'))
write_svg("odd3_c.svg", wrap_odd_card("C", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#10b981" stroke-width="2"/><polygon points="90,60 120,90 90,120 60,90" fill="#064e3b" stroke="#34d399" stroke-width="2"/>'))
write_svg("odd3_d.svg", wrap_odd_card("D", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#10b981" stroke-width="2"/><rect x="65" y="65" width="50" height="50" fill="#064e3b" stroke="#34d399" stroke-width="2"/>'))

# Q4: Shaded Quadrant (D has bottom-left shaded instead of top-right)
write_svg("odd4_a.svg", wrap_odd_card("A", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="140" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.5"/><rect x="90" y="40" width="50" height="50" fill="#0284c7"/>'))
write_svg("odd4_b.svg", wrap_odd_card("B", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="140" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.5"/><rect x="90" y="40" width="50" height="50" fill="#0284c7"/>'))
write_svg("odd4_c.svg", wrap_odd_card("C", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="140" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.5"/><rect x="90" y="40" width="50" height="50" fill="#0284c7"/>'))
write_svg("odd4_d.svg", wrap_odd_card("D", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="140" stroke="#64748b" stroke-width="1.5"/><line x1="40" y1="90" x2="140" y2="90" stroke="#64748b" stroke-width="1.5"/><rect x="40" y="90" width="50" height="50" fill="#0284c7"/>'))

# Q5: Diagonal Direction (C has backslash instead of slash)
write_svg("odd5_a.svg", wrap_odd_card("A", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><line x1="35" y1="135" x2="145" y2="45" stroke="#fbbf24" stroke-width="3"/>'))
write_svg("odd5_b.svg", wrap_odd_card("B", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><line x1="35" y1="135" x2="145" y2="45" stroke="#fbbf24" stroke-width="3"/>'))
write_svg("odd5_c.svg", wrap_odd_card("C", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><line x1="35" y1="45" x2="145" y2="135" stroke="#fbbf24" stroke-width="3"/>'))
write_svg("odd5_d.svg", wrap_odd_card("D", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/><line x1="35" y1="135" x2="145" y2="45" stroke="#fbbf24" stroke-width="3"/>'))

# Q6: Two Dots Axis (D has vertical dots instead of horizontal)
write_svg("odd6_a.svg", wrap_odd_card("A", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><circle cx="65" cy="90" r="10" fill="#f472b6"/><circle cx="115" cy="90" r="10" fill="#f472b6"/>'))
write_svg("odd6_b.svg", wrap_odd_card("B", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><circle cx="65" cy="90" r="10" fill="#f472b6"/><circle cx="115" cy="90" r="10" fill="#f472b6"/>'))
write_svg("odd6_c.svg", wrap_odd_card("C", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><circle cx="65" cy="90" r="10" fill="#f472b6"/><circle cx="115" cy="90" r="10" fill="#f472b6"/>'))
write_svg("odd6_d.svg", wrap_odd_card("D", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><circle cx="90" cy="65" r="10" fill="#f472b6"/><circle cx="90" cy="115" r="10" fill="#f472b6"/>'))

# Q7: Arrow Rotation (C points backward)
write_svg("odd7_a.svg", wrap_odd_card("A", '<circle cx="90" cy="90" r="55" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/><path d="M 60 90 L 120 90 M 105 75 L 120 90 L 105 105" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>'))
write_svg("odd7_b.svg", wrap_odd_card("B", '<circle cx="90" cy="90" r="55" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/><path d="M 90 60 L 90 120 M 75 105 L 90 120 L 105 105" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>'))
write_svg("odd7_c.svg", wrap_odd_card("C", '<circle cx="90" cy="90" r="55" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/><path d="M 120 90 L 60 90 M 75 75 L 60 90 L 75 105" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>'))
write_svg("odd7_d.svg", wrap_odd_card("D", '<circle cx="90" cy="90" r="55" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/><path d="M 90 120 L 90 60 M 75 75 L 90 60 L 105 75" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>'))

# Q8: Corner Ticks (D is missing bottom-right tick)
write_svg("odd8_a.svg", wrap_odd_card("A", '<rect x="45" y="45" width="90" height="90" fill="#0f172a" stroke="#84cc16" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="45" stroke="#bef264" stroke-width="3"/><line x1="135" y1="35" x2="135" y2="45" stroke="#bef264" stroke-width="3"/><line x1="45" y1="135" x2="45" y2="145" stroke="#bef264" stroke-width="3"/><line x1="135" y1="135" x2="135" y2="145" stroke="#bef264" stroke-width="3"/>'))
write_svg("odd8_b.svg", wrap_odd_card("B", '<rect x="45" y="45" width="90" height="90" fill="#0f172a" stroke="#84cc16" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="45" stroke="#bef264" stroke-width="3"/><line x1="135" y1="35" x2="135" y2="45" stroke="#bef264" stroke-width="3"/><line x1="45" y1="135" x2="45" y2="145" stroke="#bef264" stroke-width="3"/><line x1="135" y1="135" x2="135" y2="145" stroke="#bef264" stroke-width="3"/>'))
write_svg("odd8_c.svg", wrap_odd_card("C", '<rect x="45" y="45" width="90" height="90" fill="#0f172a" stroke="#84cc16" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="45" stroke="#bef264" stroke-width="3"/><line x1="135" y1="35" x2="135" y2="45" stroke="#bef264" stroke-width="3"/><line x1="45" y1="135" x2="45" y2="145" stroke="#bef264" stroke-width="3"/><line x1="135" y1="135" x2="135" y2="145" stroke="#bef264" stroke-width="3"/>'))
write_svg("odd8_d.svg", wrap_odd_card("D", '<rect x="45" y="45" width="90" height="90" fill="#0f172a" stroke="#84cc16" stroke-width="2"/><line x1="45" y1="35" x2="45" y2="45" stroke="#bef264" stroke-width="3"/><line x1="135" y1="35" x2="135" y2="45" stroke="#bef264" stroke-width="3"/><line x1="45" y1="135" x2="45" y2="145" stroke="#bef264" stroke-width="3"/>'))

# Q9: Circle Offset (C circle is offset to corner)
write_svg("odd9_a.svg", wrap_odd_card("A", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#6366f1" stroke-width="2"/><circle cx="90" cy="90" r="25" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>'))
write_svg("odd9_b.svg", wrap_odd_card("B", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#6366f1" stroke-width="2"/><circle cx="90" cy="90" r="25" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>'))
write_svg("odd9_c.svg", wrap_odd_card("C", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#6366f1" stroke-width="2"/><circle cx="115" cy="115" r="20" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>'))
write_svg("odd9_d.svg", wrap_odd_card("D", '<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#6366f1" stroke-width="2"/><circle cx="90" cy="90" r="25" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>'))

# Q10: Dashed Line Style (D has dashed outer instead of inner)
write_svg("odd10_a.svg", wrap_odd_card("A", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#14b8a6" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4,3"/>'))
write_svg("odd10_b.svg", wrap_odd_card("B", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#14b8a6" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4,3"/>'))
write_svg("odd10_c.svg", wrap_odd_card("C", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#14b8a6" stroke-width="2.5"/><rect x="65" y="70" width="50" height="40" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="4,3"/>'))
write_svg("odd10_d.svg", wrap_odd_card("D", '<rect x="35" y="45" width="110" height="90" fill="#0f172a" stroke="#14b8a6" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="65" y="70" width="50" height="40" fill="none" stroke="#5eead4" stroke-width="2"/>'))

# Generate Q11 to Q20 odd sets systematically
for i in range(11, 21):
    odd_letter = "C" if i % 2 == 1 else "D"
    for ltr in ["A", "B", "C", "D"]:
        is_odd = (ltr == odd_letter)
        fn = f"odd{i}_{ltr.lower()}.svg"
        if i == 11: # Triangle apex (C is inverted)
            svg = wrap_odd_card(ltr, f'<polygon points="90,{115 if is_odd else 45} 45,{55 if is_odd else 125} 135,{55 if is_odd else 125}" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2.5"/>')
        elif i == 12: # Crosshair offset (D is shifted)
            cx, cy = (70, 70) if is_odd else (90, 90)
            svg = wrap_odd_card(ltr, f'<circle cx="90" cy="90" r="50" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><line x1="{cx-30}" y1="{cy}" x2="{cx+30}" y2="{cy}" stroke="#67e8f9" stroke-width="2"/><line x1="{cx}" y1="{cy-30}" x2="{cx}" y2="{cy+30}" stroke="#67e8f9" stroke-width="2"/>')
        elif i == 13: # Concentric circle vs ellipse (C is ellipse)
            inner = '<ellipse cx="90" cy="90" rx="35" ry="18" fill="none" stroke="#f43f5e" stroke-width="2"/>' if is_odd else '<circle cx="90" cy="90" r="28" fill="none" stroke="#f43f5e" stroke-width="2"/>'
            svg = wrap_odd_card(ltr, f'<circle cx="90" cy="90" r="55" fill="#0f172a" stroke="#fda4af" stroke-width="2"/>{inner}')
        elif i == 14: # Symmetry cutouts (D has 1 notch)
            notches = '<circle cx="35" cy="90" r="12" fill="#0b1120"/>' if is_odd else '<circle cx="35" cy="90" r="12" fill="#0b1120"/><circle cx="145" cy="90" r="12" fill="#0b1120"/>'
            svg = wrap_odd_card(ltr, f'<rect x="35" y="50" width="110" height="80" rx="6" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>{notches}')
        elif i == 15: # Nested triangles (C has inverted inner)
            inner_tri = '<polygon points="90,110 70,75 110,75" fill="#ca8a04" stroke="#fde047" stroke-width="2"/>' if is_odd else '<polygon points="90,75 70,110 110,110" fill="#ca8a04" stroke="#fde047" stroke-width="2"/>'
            svg = wrap_odd_card(ltr, f'<polygon points="90,45 45,130 135,130" fill="#0f172a" stroke="#eab308" stroke-width="2"/>{inner_tri}')
        elif i == 16: # Dot matrix 3x3 (D missing corner)
            dots = []
            for r in [60, 90, 120]:
                for c in [60, 90, 120]:
                    if not is_odd and r == 90 and c == 90: continue
                    if is_odd and r == 60 and c == 60: continue
                    dots.append(f'<circle cx="{c}" cy="{r}" r="6" fill="#10b981"/>')
            svg = wrap_odd_card(ltr, "".join(dots))
        elif i == 17: # Parallel lines (C has angle)
            line2 = '<line x1="45" y1="105" x2="135" y2="125" stroke="#3b82f6" stroke-width="4"/>' if is_odd else '<line x1="45" y1="115" x2="135" y2="115" stroke="#3b82f6" stroke-width="4"/>'
            svg = wrap_odd_card(ltr, f'<line x1="45" y1="65" x2="135" y2="65" stroke="#3b82f6" stroke-width="4"/>{line2}')
        elif i == 18: # Border thickness inversion (D has thin outer, thick inner)
            sw_out = "1.5" if is_odd else "4"
            sw_in = "4" if is_odd else "1.5"
            svg = wrap_odd_card(ltr, f'<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#ec4899" stroke-width="{sw_out}"/><rect x="65" y="65" width="50" height="50" fill="none" stroke="#f472b6" stroke-width="{sw_in}"/>')
        elif i == 19: # Diamond fit (C is rotated)
            rot = 'transform="rotate(15 90 90)"' if is_odd else ''
            svg = wrap_odd_card(ltr, f'<rect x="40" y="40" width="100" height="100" fill="#0f172a" stroke="#f97316" stroke-width="2"/><polygon points="90,40 140,90 90,140 40,90" fill="#7c2d12" stroke="#fb923c" stroke-width="2" {rot}/>')
        else: # Q20: Shaded ring inversion (D outer white, inner shaded)
            f_out = "#0f172a" if is_odd else "#0284c7"
            f_in = "#0284c7" if is_odd else "#0f172a"
            svg = wrap_odd_card(ltr, f'<circle cx="90" cy="90" r="55" fill="{f_out}" stroke="#38bdf8" stroke-width="2"/><circle cx="90" cy="90" r="28" fill="{f_in}" stroke="#bae6fd" stroke-width="2"/>')
        write_svg(fn, svg)

print("Created all 80 Odd-One-Out option SVGs!")
