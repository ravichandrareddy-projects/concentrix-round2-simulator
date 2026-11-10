import os
import math
import html
import json

os.makedirs("public/images/aptitude", exist_ok=True)
os.makedirs("public/images/moderation", exist_ok=True)

# Read the question bank to get exact data
with open("src/data/questionBank.ts", "r") as f:
    text = f.read()

m_start = text.find('export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [')
m_end = text.find('export const MODERATION_SCENARIOS:')
apt_code = text[m_start + len('export const APTITUDE_QUESTIONS: AptitudeQuestion[] = '):m_end].strip().rstrip(';')
apt_list = json.loads(apt_code)

m_mod_start = text.find('export const MODERATION_SCENARIOS: ModerationScenario[] = [')
mod_code = text[m_mod_start + len('export const MODERATION_SCENARIOS: ModerationScenario[] = '):].strip()
if mod_code.endswith(';'): mod_code = mod_code[:-1]
mod_list = json.loads(mod_code)

print(f"Loaded {len(apt_list)} aptitude questions, {len(mod_list)} moderation scenarios.")

# ==============================================================================
# SECTION A: SPECIALIZED APTITUDE SVG GENERATORS
# ==============================================================================

def svg_pie_chart(title, slices):
    cx, cy, r = 160, 160, 115
    current_angle = -90.0
    slice_elements = []

    for s in slices:
        angle = (s["pct"] / 100.0) * 360.0
        start_angle = current_angle
        end_angle = current_angle + angle
        current_angle = end_angle

        rad_start = math.radians(start_angle)
        rad_end = math.radians(end_angle)
        x1 = cx + r * math.cos(rad_start)
        y1 = cy + r * math.sin(rad_start)
        x2 = cx + r * math.cos(rad_end)
        y2 = cy + r * math.sin(rad_end)

        large_arc = 1 if angle > 180 else 0
        path_d = f"M {cx} {cy} L {x1:.2f} {y1:.2f} A {r} {r} 0 {large_arc} 1 {x2:.2f} {y2:.2f} Z"

        mid_angle = math.radians(start_angle + angle / 2.0)
        tx = cx + (r * 0.68) * math.cos(mid_angle)
        ty = cy + (r * 0.68) * math.sin(mid_angle)

        label_txt = f'<text x="{tx:.1f}" y="{ty+4:.1f}" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">{s["pct"]}%</text>' if s["pct"] >= 8 else ''
        slice_elements.append(f'<path d="{path_d}" fill="{s["color"]}" stroke="#0f172a" stroke-width="2.5"/>{label_txt}')

    legend_elements = []
    ly = 65
    for s in slices:
        legend_elements.append(f"""
        <g transform="translate(345, {ly})">
          <rect width="14" height="14" rx="4" fill="{s['color']}"/>
          <text x="22" y="11" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#e2e8f0">{html.escape(s['label'])}</text>
          <text x="195" y="11" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="end">{s['pct']}%</text>
        </g>
        """)
        ly += 28

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 320" width="100%" height="100%">
  <defs>
    <linearGradient id="chartbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="580" height="320" rx="16" fill="url(#chartbg)" stroke="#1e293b" stroke-width="1.5"/>
  <text x="290" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#f8fafc" text-anchor="middle">{html.escape(title)}</text>
  
  <g>
    {''.join(slice_elements)}
    <circle cx="{cx}" cy="{cy}" r="38" fill="#0f172a" stroke="#1e293b" stroke-width="2.5"/>
    <text x="{cx}" y="{cy-4}" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#94a3b8" text-anchor="middle">TOTAL</text>
    <text x="{cx}" y="{cy+12}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">100%</text>
  </g>

  <rect x="330" y="48" width="235" height="{max(120, ly - 35)}" rx="12" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  {''.join(legend_elements)}
</svg>"""

def svg_bar_chart(title, bars):
    max_val = max(b["value"] for b in bars)
    svg_bars = []
    n = len(bars)
    spacing = 420 / max(n, 1)
    bw = min(50, spacing * 0.65)
    start_x = 60 + (spacing - bw) / 2

    for idx, b in enumerate(bars):
        x = start_x + idx * spacing
        h = (b["value"] / max_val) * 155
        y = 230 - h
        color = b.get("color", "#3b82f6")
        svg_bars.append(f"""
        <g>
          <text x="{x + bw/2}" y="{y - 8}" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">{b['value']}</text>
          <rect x="{x}" y="{y}" width="{bw}" height="{h}" rx="6" fill="{color}"/>
          <text x="{x + bw/2}" y="252" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle">{html.escape(b['label'][:15])}</text>
        </g>
        """)

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" width="100%" height="100%">
  <defs>
    <linearGradient id="barbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>
  <rect width="540" height="280" rx="16" fill="url(#barbg)" stroke="#1e293b" stroke-width="1.5"/>
  <text x="270" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#f8fafc" text-anchor="middle">{html.escape(title)}</text>
  
  <line x1="50" y1="75" x2="490" y2="75" stroke="#1e293b" stroke-dasharray="4,4"/>
  <line x1="50" y1="150" x2="490" y2="150" stroke="#1e293b" stroke-dasharray="4,4"/>
  <line x1="50" y1="230" x2="490" y2="230" stroke="#334155" stroke-width="1.5"/>
  
  {''.join(svg_bars)}
</svg>"""

def svg_table_chart(headers, rows, title="Operational Assessment Table"):
    num_cols = len(headers)
    col_w = 480 / num_cols
    
    header_cells = "".join([
        f'<text x="{30 + i * col_w + col_w/2}" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94a3b8" text-anchor="middle">{html.escape(h)}</text>'
        for i, h in enumerate(headers)
    ])

    row_elements = []
    ry = 95
    for r_idx, row in enumerate(rows):
        bg = "#1e293b" if r_idx % 2 == 1 else "#0f172a"
        cells = "".join([
            f'<text x="{30 + i * col_w + col_w/2}" y="{ry + 18}" font-family="system-ui, sans-serif" font-size="12" font-weight="{700 if i==0 else 500}" fill="{ "#f8fafc" if i==0 else "#38bdf8" }" text-anchor="middle">{html.escape(str(c))}</text>'
            for i, c in enumerate(row)
        ])
        row_elements.append(f"""
        <rect x="25" y="{ry}" width="490" height="30" rx="4" fill="{bg}" fill-opacity="0.5"/>
        {cells}
        """)
        ry += 35

    total_h = max(240, ry + 20)

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 {total_h}" width="100%" height="100%">
  <rect width="540" height="{total_h}" rx="16" fill="#090d16" stroke="#1e293b" stroke-width="1.5"/>
  <text x="270" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f8fafc" text-anchor="middle">{html.escape(title)}</text>
  
  <rect x="25" y="48" width="490" height="28" rx="6" fill="#1e1b4b" stroke="#312e81"/>
  {header_cells}
  {''.join(row_elements)}
</svg>"""

def svg_nested_squares():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="100%" height="100%">
  <defs>
    <linearGradient id="nsbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
  </defs>
  <rect width="480" height="260" rx="16" fill="url(#nsbg)" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="240" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#c4b5fd" text-anchor="middle">CONCENTRIC NESTED SQUARES · PATTERN SEQUENCE</text>

  <!-- Left: Figure progression sequence (Figures 1, 2, 3, ?) -->
  <g transform="translate(30, 45)">
    <!-- Fig 1: Top-Left shaded -->
    <rect x="0" y="0" width="60" height="60" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <rect x="0" y="0" width="30" height="30" fill="#8b5cf6" fill-opacity="0.8"/>
    <rect x="15" y="15" width="30" height="30" fill="none" stroke="#a78bfa" stroke-width="1"/>
    <text x="30" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Fig 1</text>
    
    <text x="80" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#64748b">→</text>

    <!-- Fig 2: Top-Right shaded -->
    <rect x="100" y="0" width="60" height="60" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <rect x="130" y="0" width="30" height="30" fill="#8b5cf6" fill-opacity="0.8"/>
    <rect x="115" y="15" width="30" height="30" fill="none" stroke="#a78bfa" stroke-width="1"/>
    <text x="130" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Fig 2</text>
    
    <text x="180" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#64748b">→</text>

    <!-- Fig 3: Bottom-Right shaded -->
    <rect x="200" y="0" width="60" height="60" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <rect x="230" y="30" width="30" height="30" fill="#8b5cf6" fill-opacity="0.8"/>
    <rect x="215" y="15" width="30" height="30" fill="none" stroke="#a78bfa" stroke-width="1"/>
    <text x="230" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Fig 3</text>
    
    <text x="280" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#64748b">→</text>

    <!-- Fig 4: Question Mark Target -->
    <rect x="300" y="0" width="60" height="60" fill="#2e1065" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="330" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#f43f5e" text-anchor="middle">?</text>
    <text x="330" y="78" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#f43f5e" text-anchor="middle">Target [?]</text>
  </g>

  <!-- Bottom Detailed Concentric Breakdown -->
  <g transform="translate(160, 140)">
    <rect x="-45" y="-10" width="90" height="90" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
    <line x1="0" y1="-10" x2="0" y2="80" stroke="#4c1d95" stroke-dasharray="2,2"/>
    <line x1="-45" y1="35" x2="45" y2="35" stroke="#4c1d95" stroke-dasharray="2,2"/>
    <rect x="-30" y="5" width="60" height="60" fill="#1e1b4b" stroke="#a78bfa" stroke-width="1.5"/>
    <polygon points="0,5 30,35 0,65 -30,35" fill="#3b0764" stroke="#c4b5fd" stroke-width="1"/>
    <circle cx="0" cy="35" r="3" fill="#ffffff"/>
  </g>
  <text x="270" y="175" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#e2e8f0">Rule: Clockwise 90° Quadrant Transition</text>
  <text x="270" y="195" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#94a3b8">Outer ➔ Inner concentric midpoint mapping</text>
  <text x="240" y="245" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#c4b5fd" text-anchor="middle">Concentrix Assessment Item #Nested-Pattern</text>
</svg>"""

def svg_geometric_polygons():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" width="100%" height="100%">
  <rect width="520" height="220" rx="16" fill="#090d16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="260" y="28" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#86efac" text-anchor="middle">GEOMETRIC POLYGON PROGRESSION SEQUENCE</text>

  <!-- Triangle (3 sides) -->
  <g transform="translate(40, 60)">
    <polygon points="35,10 65,70 5,70" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
    <text x="35" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">3 Sides</text>
    <text x="35" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Triangle</text>
  </g>
  <text x="125" y="105" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#475569">→</text>

  <!-- Square (4 sides) -->
  <g transform="translate(145, 60)">
    <rect x="5" y="10" width="60" height="60" rx="4" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="35" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">4 Sides</text>
    <text x="35" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Square</text>
  </g>
  <text x="230" y="105" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#475569">→</text>

  <!-- Pentagon (5 sides) -->
  <g transform="translate(250, 60)">
    <polygon points="35,10 68,34 56,70 14,70 2,34" fill="#581c87" stroke="#a855f7" stroke-width="2.5"/>
    <text x="35" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">5 Sides</text>
    <text x="35" y="110" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Pentagon</text>
  </g>
  <text x="335" y="105" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#475569">→</text>

  <!-- Hexagon (6 sides) -->
  <g transform="translate(355, 60)">
    <polygon points="35,10 65,27 65,63 35,80 5,63 5,27" fill="#78350f" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="35" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">6 Sides</text>
    <text x="35" y="113" font-family="system-ui, sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Hexagon</text>
  </g>
  <text x="440" y="105" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#475569">→</text>

  <!-- Question Mark Target (Heptagon) -->
  <g transform="translate(455, 65)">
    <rect x="0" y="5" width="50" height="50" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="25" y="38" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#f87171" text-anchor="middle">?</text>
    <text x="25" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">7 Sides</text>
  </g>
</svg>"""

def svg_clock_rotation():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 250" width="100%" height="100%">
  <rect width="460" height="250" rx="16" fill="#090d16" stroke="#0284c7" stroke-width="1.5"/>
  <text x="230" y="28" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">ANGULAR ROTATION &amp; CLOCK-FACE TRAJECTORY</text>

  <!-- Clock Dial -->
  <g transform="translate(130, 135)">
    <circle cx="0" cy="0" r="85" fill="#0f172a" stroke="#0284c7" stroke-width="3"/>
    
    <!-- Hour Markers -->
    <text x="0" y="-68" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#94a3b8" text-anchor="middle">12</text>
    <text x="70" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#94a3b8" text-anchor="middle">3</text>
    <text x="0" y="76" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#94a3b8" text-anchor="middle">6</text>
    <text x="-70" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#94a3b8" text-anchor="middle">9</text>
    <text x="50" y="50" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#38bdf8" text-anchor="middle">4:30</text>

    <!-- Start Hand: 12:00 -->
    <line x1="0" y1="0" x2="0" y2="-62" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
    <text x="-15" y="-35" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ef4444">Start</text>

    <!-- 135 degree arc -->
    <path d="M 0 -45 A 45 45 0 0 1 31.8 31.8" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="45" y="-10" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#38bdf8">+135°</text>

    <!-- End Hand: 4:30 (135 degrees) -->
    <line x1="0" y1="0" x2="48" y2="48" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
    <text x="65" y="42" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#22c55e">Result</text>

    <!-- Center pin -->
    <circle cx="0" cy="0" r="5" fill="#ffffff"/>
  </g>

  <!-- Explanation card on right -->
  <g transform="translate(255, 65)">
    <rect width="180" height="145" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="15" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Calculation Math:</text>
    <text x="15" y="50" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• 1 Hour = 360° / 12 = 30°</text>
    <text x="15" y="75" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">• Rotation = 135° Clockwise</text>
    <text x="15" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#38bdf8">• 135° / 30° = 4.5 Hours</text>
    <text x="15" y="125" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#22c55e">➔ Position: 4:30 Face</text>
  </g>
</svg>"""

def svg_mirror_reflection():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 230" width="100%" height="100%">
  <rect width="480" height="230" rx="16" fill="#090d16" stroke="#a855f7" stroke-width="1.5"/>
  <text x="240" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#c084fc" text-anchor="middle">REFLECTION &amp; ROTATIONAL SYMMETRY</text>

  <!-- Left: Original Shape -->
  <g transform="translate(80, 115)">
    <circle cx="0" cy="0" r="45" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
    <path d="M 0 0 L 0 -45 A 45 45 0 0 1 45 0 Z" fill="#c084fc"/>
    <text x="0" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#e9d5ff" text-anchor="middle">Original Object</text>
  </g>

  <!-- Mirror Line (Vertical Dashed) -->
  <line x1="240" y1="50" x2="240" y2="185" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="240" y="45" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#38bdf8" text-anchor="middle">MIRROR AXIS</text>

  <!-- Right: Reflected Shape + 180 Rotation -->
  <g transform="translate(400, 115)">
    <circle cx="0" cy="0" r="45" fill="#1e1b4b" stroke="#22c55e" stroke-width="2"/>
    <path d="M 0 0 L 0 45 A 45 45 0 0 1 45 0 Z" fill="#4ade80"/>
    <text x="0" y="65" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86efac" text-anchor="middle">Result Transformation</text>
  </g>

  <rect x="50" y="195" width="380" height="24" rx="6" fill="#0f172a" stroke="#1e293b"/>
  <text x="240" y="211" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Horizontal reflection + 180° rotation = <tspan fill="#38bdf8" font-weight="bold">Vertical reflection only</tspan></text>
</svg>"""

def svg_odd_shape_out():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 230" width="100%" height="100%">
  <rect width="500" height="230" rx="16" fill="#090d16" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fcd34d" text-anchor="middle">CLASSIFICATION · IDENTIFY THE ODD ONE OUT</text>

  <!-- Shape 1: Circle (2D) -->
  <g transform="translate(60, 60)">
    <rect width="80" height="90" rx="8" fill="#0f172a" stroke="#1e293b"/>
    <circle cx="40" cy="40" r="28" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <text x="40" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#cbd5e1" text-anchor="middle">A. Circle (2D)</text>
  </g>

  <!-- Shape 2: Ellipse (2D) -->
  <g transform="translate(165, 60)">
    <rect width="80" height="90" rx="8" fill="#0f172a" stroke="#1e293b"/>
    <ellipse cx="40" cy="40" rx="30" ry="18" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <text x="40" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#cbd5e1" text-anchor="middle">B. Ellipse (2D)</text>
  </g>

  <!-- Shape 3: Sphere (3D Solid - ODD ONE OUT!) -->
  <g transform="translate(270, 60)">
    <rect width="80" height="90" rx="8" fill="#3b0764" stroke="#eab308" stroke-width="2"/>
    <defs>
      <radialGradient id="sphgrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="40%" stop-color="#a855f7"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </radialGradient>
    </defs>
    <circle cx="40" cy="40" r="28" fill="url(#sphgrad)"/>
    <text x="40" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#fde047" text-anchor="middle">C. Sphere (3D)</text>
  </g>

  <!-- Shape 4: Parabola (2D) -->
  <g transform="translate(375, 60)">
    <rect width="80" height="90" rx="8" fill="#0f172a" stroke="#1e293b"/>
    <path d="M 18 20 Q 40 60 62 20" fill="none" stroke="#818cf8" stroke-width="2.5"/>
    <text x="40" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#cbd5e1" text-anchor="middle">D. Parabola (2D)</text>
  </g>

  <rect x="50" y="175" width="400" height="35" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="250" y="196" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fde047" text-anchor="middle">Sphere is a 3-Dimensional (3D) solid; all others are 2D planar figures</text>
</svg>"""

def svg_crimping_tool():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240" width="100%" height="100%">
  <rect width="520" height="240" rx="16" fill="#090d16" stroke="#0284c7" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">IT HARDWARE REASONING · MODULAR CRIMPING TOOL &amp; RJ-45</text>

  <!-- RJ-45 Crimping Tool Vector -->
  <g transform="translate(50, 45)">
    <path d="M 30 140 L 90 60 L 130 50 L 140 70 L 60 160 Z" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <path d="M 120 145 L 140 70 L 170 80 L 150 160 Z" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
    <rect x="120" y="35" width="55" height="40" rx="6" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
    <rect x="135" y="45" width="25" height="20" rx="2" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="100" y="185" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#93c5fd" text-anchor="middle">RJ-45 Ratchet Crimper</text>
  </g>

  <!-- Connecting Cable & Modular Plug -->
  <g transform="translate(290, 60)">
    <rect x="0" y="40" width="70" height="24" rx="4" fill="#0284c7"/>
    <text x="35" y="56" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">CAT-6 UTP</text>
    <line x1="70" y1="44" x2="105" y2="44" stroke="#f97316" stroke-width="2"/>
    <line x1="70" y1="48" x2="105" y2="48" stroke="#22c55e" stroke-width="2"/>
    <line x1="70" y1="52" x2="105" y2="52" stroke="#3b82f6" stroke-width="2"/>
    <line x1="70" y1="56" x2="105" y2="56" stroke="#a855f7" stroke-width="2"/>
    <line x1="70" y1="60" x2="105" y2="60" stroke="#eab308" stroke-width="2"/>
    <rect x="105" y="34" width="45" height="36" rx="4" fill="#1e293b" fill-opacity="0.8" stroke="#38bdf8" stroke-width="2"/>
    <rect x="135" y="38" width="10" height="28" fill="#eab308"/>
    <text x="127" y="90" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#facc15" text-anchor="middle">8P8C Modular Plug</text>
  </g>

  <rect x="30" y="195" width="460" height="30" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="260" y="214" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#cbd5e1" text-anchor="middle">Primary Function: Compresses internal copper pins to terminate 8-conductor twisted pair Ethernet</text>
</svg>"""

def svg_call_center_headset():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" rx="16" fill="#090d16" stroke="#6366f1" stroke-width="1.5"/>
  <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#a5b4fc" text-anchor="middle">TELECOMMUNICATION HARDWARE · BINAURAL NOISE-CANCELLING HEADSET</text>

  <!-- Headset Vector -->
  <g transform="translate(130, 45)">
    <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#475569" stroke-width="8" stroke-linecap="round"/>
    <path d="M 20 90 A 70 70 0 0 1 160 90" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
    <rect x="8" y="80" width="24" height="45" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <rect x="148" y="80" width="24" height="45" rx="10" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
    <path d="M 20 115 Q 40 150 95 145" fill="none" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="95" y="137" width="18" height="15" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
    <path d="M 120 135 Q 125 144 120 153" fill="none" stroke="#22c55e" stroke-width="2"/>
    <path d="M 126 130 Q 133 144 126 158" fill="none" stroke="#22c55e" stroke-width="2" stroke-opacity="0.6"/>
  </g>

  <!-- Feature callout tags -->
  <g transform="translate(290, 75)">
    <rect width="180" height="95" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="15" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#818cf8">Acoustic Specifications:</text>
    <text x="15" y="46" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Directional Cardioid Mic</text>
    <text x="15" y="66" font-family="system-ui, sans-serif" font-size="10" fill="#22c55e">• Ambient Noise Suppression</text>
    <text x="15" y="86" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• High Acoustic Vocal Clarity</text>
  </g>

  <rect x="30" y="195" width="440" height="28" rx="6" fill="#0f172a" stroke="#1e293b"/>
  <text x="250" y="213" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Essential Call Center Hardware: Eliminates background office room acoustics for crystal-clear caller audio</text>
</svg>"""

def svg_hearing_protection():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 240" width="100%" height="100%">
  <rect width="460" height="240" rx="16" fill="#090d16" stroke="#0284c7" stroke-width="1.5"/>
  <text x="230" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">INDUSTRIAL SAFETY · MANDATORY PPE ICON</text>

  <!-- ISO Mandatory Hearing Protection Circle -->
  <g transform="translate(110, 125)">
    <circle cx="0" cy="0" r="70" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="0" cy="-5" r="32" fill="#ffffff"/>
    <rect x="-8" y="20" width="16" height="22" rx="4" fill="#ffffff"/>
    <path d="M -30 -5 A 35 35 0 0 1 30 -5" fill="none" stroke="#0284c7" stroke-width="6"/>
    <rect x="-38" y="-18" width="16" height="28" rx="6" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
    <rect x="22" y="-18" width="16" height="28" rx="6" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
  </g>

  <!-- Info Card -->
  <g transform="translate(225, 60)">
    <rect width="205" height="130" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="15" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#38bdf8">ISO 7010 Standard M003</text>
    <text x="15" y="50" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Shape: Circular</text>
    <text x="15" y="70" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Color: Safety Blue (#0284c7)</text>
    <text x="15" y="90" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">• Meaning: Mandatory Action</text>
    <text x="15" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#22c55e">➔ Wear Ear Protection Required</text>
  </g>
</svg>"""

def svg_speed_train():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230" width="100%" height="100%">
  <rect width="520" height="230" rx="16" fill="#090d16" stroke="#10b981" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6ee7b7" text-anchor="middle">TIME &amp; DISTANCE APTITUDE · TRAIN &amp; TELEPHONE POLE PROBLEM</text>

  <!-- Railroad Track -->
  <line x1="30" y1="130" x2="490" y2="130" stroke="#334155" stroke-width="4"/>
  <line x1="30" y1="138" x2="490" y2="138" stroke="#334155" stroke-width="4"/>
  <g stroke="#475569" stroke-width="2">
    <line x1="50" y1="126" x2="50" y2="142"/>
    <line x1="100" y1="126" x2="100" y2="142"/>
    <line x1="150" y1="126" x2="150" y2="142"/>
    <line x1="200" y1="126" x2="200" y2="142"/>
    <line x1="250" y1="126" x2="250" y2="142"/>
    <line x1="300" y1="126" x2="300" y2="142"/>
    <line x1="350" y1="126" x2="350" y2="142"/>
    <line x1="400" y1="126" x2="400" y2="142"/>
    <line x1="450" y1="126" x2="450" y2="142"/>
  </g>

  <!-- Train Body (180 meters) -->
  <g transform="translate(60, 80)">
    <rect width="220" height="45" rx="8" fill="#047857" stroke="#10b981" stroke-width="2"/>
    <rect x="20" y="10" width="25" height="18" rx="2" fill="#6ee7b7"/>
    <rect x="55" y="10" width="25" height="18" rx="2" fill="#6ee7b7"/>
    <rect x="90" y="10" width="25" height="18" rx="2" fill="#6ee7b7"/>
    <rect x="125" y="10" width="25" height="18" rx="2" fill="#6ee7b7"/>
    <rect x="160" y="10" width="25" height="18" rx="2" fill="#6ee7b7"/>
    <circle cx="35" cy="48" r="7" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="75" cy="48" r="7" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="145" cy="48" r="7" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="185" cy="48" r="7" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
  </g>

  <line x1="60" y1="65" x2="280" y2="65" stroke="#34d399" stroke-width="1.5"/>
  <text x="170" y="58" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">Train Length: 180 Meters</text>

  <!-- Pole -->
  <g transform="translate(340, 50)">
    <line x1="0" y1="0" x2="0" y2="80" stroke="#f59e0b" stroke-width="4"/>
    <line x1="-12" y1="8" x2="12" y2="8" stroke="#f59e0b" stroke-width="3"/>
    <line x1="-12" y1="18" x2="12" y2="18" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="-12" cy="8" r="2.5" fill="#ffffff"/>
    <circle cx="12" cy="8" r="2.5" fill="#ffffff"/>
    <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Pole (Time = 9s)</text>
  </g>

  <g transform="translate(60, 165)">
    <rect width="400" height="50" rx="8" fill="#0f172a" stroke="#1e293b"/>
    <text x="200" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle">
      Speed = Distance / Time = 180m / 9s = <tspan fill="#34d399" font-weight="bold">20 m/s</tspan>
    </text>
    <text x="200" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">
      Convert to km/h: 20 × (18 / 5) = <tspan fill="#fbbf24" font-size="13">72 km/h</tspan>
    </text>
  </g>
</svg>"""

def svg_ratio_mixture():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" rx="16" fill="#090d16" stroke="#0284c7" stroke-width="1.5"/>
  <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">MIXTURE &amp; RATIO APTITUDE · MILK &amp; WATER RATIO BALANCING</text>

  <!-- Initial 60L Flask -->
  <g transform="translate(60, 50)">
    <rect width="130" height="140" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <rect x="10" y="55" width="110" height="50" fill="#059669" rx="4"/>
    <text x="65" y="85" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Milk: 40L (2x)</text>
    <rect x="10" y="110" width="110" height="25" fill="#0284c7" rx="4"/>
    <text x="65" y="127" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Water: 20L (1x)</text>
    <text x="65" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Initial 60L (2:1)</text>
  </g>

  <text x="225" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#64748b">→</text>

  <!-- Final 120L Flask with 60L added -->
  <g transform="translate(280, 50)">
    <rect width="160" height="140" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <rect x="10" y="35" width="140" height="30" fill="#059669" rx="4"/>
    <text x="80" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Milk: 40L (1 part)</text>
    <rect x="10" y="70" width="140" height="65" fill="#0284c7" rx="4"/>
    <text x="80" y="100" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">Water: 80L (2 parts)</text>
    <text x="80" y="120" font-family="system-ui, sans-serif" font-size="9" fill="#93c5fd" text-anchor="middle">(20L original + 60L added)</text>
    <text x="80" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">Final 120L (1:2)</text>
  </g>

  <rect x="30" y="200" width="440" height="26" rx="6" fill="#0f172a" stroke="#1e293b"/>
  <text x="250" y="217" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Required water addition = (2 × 40L) - 20L = <tspan fill="#38bdf8" font-weight="bold">60 Liters</tspan></text>
</svg>"""

def svg_syllogism_venn():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" rx="16" fill="#090d16" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#c4b5fd" text-anchor="middle">LOGICAL DEDUCTION · SYLLOGISM VENN DIAGRAM</text>

  <g transform="translate(160, 130)">
    <circle cx="0" cy="0" r="75" fill="#1e1b4b" fill-opacity="0.6" stroke="#8b5cf6" stroke-width="2.5"/>
    <text x="0" y="-55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#a78bfa" text-anchor="middle">SET: LEADERS</text>

    <circle cx="-25" cy="15" r="38" fill="#3b0764" fill-opacity="0.8" stroke="#d8b4fe" stroke-width="2"/>
    <text x="-25" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">Supervisors</text>

    <circle cx="65" cy="5" r="48" fill="#065f46" fill-opacity="0.5" stroke="#10b981" stroke-width="2"/>
    <text x="80" y="8" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#6ee7b7" text-anchor="middle">Managers</text>
  </g>

  <g transform="translate(290, 65)">
    <rect width="185" height="135" rx="10" fill="#0f172a" stroke="#1e293b"/>
    <text x="15" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f8fafc">Logical Inferences:</text>
    <text x="15" y="48" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">1. All Supervisors ⊂ Leaders</text>
    <text x="15" y="70" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">2. Some Leaders ∩ Managers</text>
    <line x1="15" y1="85" x2="170" y2="85" stroke="#1e293b"/>
    <text x="15" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#22c55e">✓ Valid Deduction:</text>
    <text x="15" y="123" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#86efac">"Some Leaders are Supervisors"</text>
  </g>
</svg>"""

def svg_direction_compass():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" rx="16" fill="#090d16" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="250" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#fcd34d" text-anchor="middle">SPATIAL REASONING · COMPASS VECTOR TRAJECTORY</text>

  <!-- Compass Rose -->
  <g transform="translate(100, 125)">
    <circle cx="0" cy="0" r="50" fill="none" stroke="#1e293b" stroke-width="1"/>
    <line x1="0" y1="-55" x2="0" y2="55" stroke="#f59e0b" stroke-width="2"/>
    <line x1="-55" y1="0" x2="55" y2="0" stroke="#f59e0b" stroke-width="2"/>
    <text x="0" y="-60" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fcd34d" text-anchor="middle">N</text>
    <text x="65" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fcd34d" text-anchor="middle">E</text>
    <text x="0" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fcd34d" text-anchor="middle">S</text>
    <text x="-65" y="4" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fcd34d" text-anchor="middle">W</text>
  </g>

  <!-- Walk Path Vector Diagram -->
  <g transform="translate(240, 160)">
    <circle cx="0" cy="0" r="5" fill="#3b82f6"/>
    <text x="-25" y="5" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#93c5fd">START</text>

    <!-- Leg 1: 10m North -->
    <line x1="0" y1="0" x2="0" y2="-80" stroke="#38bdf8" stroke-width="3"/>
    <text x="-12" y="-40" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#38bdf8">10m N</text>

    <!-- Leg 2: 5m East -->
    <line x1="0" y1="-80" x2="60" y2="-80" stroke="#f59e0b" stroke-width="3"/>
    <text x="30" y="-90" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#fbbf24">5m East</text>

    <!-- Leg 3: 10m South -->
    <line x1="60" y1="-80" x2="60" y2="0" stroke="#ef4444" stroke-width="3"/>
    <text x="75" y="-40" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#f87171">10m S</text>

    <!-- End Point -->
    <circle cx="60" cy="0" r="5" fill="#22c55e"/>
    <text x="75" y="15" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#86efac">END</text>

    <!-- Resultant Displacement -->
    <line x1="0" y1="0" x2="60" y2="0" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="4,4"/>
    <text x="30" y="20" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">5m EAST</text>
  </g>

  <rect x="30" y="195" width="440" height="28" rx="6" fill="#0f172a" stroke="#1e293b"/>
  <text x="250" y="213" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#94a3b8" text-anchor="middle">Displacement: 10m North and 10m South cancel out ➔ Result is <tspan fill="#4ade80" font-weight="bold">5 meters East</tspan> of origin</text>
</svg>"""

def svg_number_series():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" width="100%" height="100%">
  <rect width="520" height="220" rx="16" fill="#090d16" stroke="#10b981" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6ee7b7" text-anchor="middle">NUMERICAL PROGRESSION · DIFFERENCE SERIES</text>

  <g transform="translate(30, 65)">
    <rect x="0" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="22" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">2</text>
    <path d="M 45 30 Q 60 10 75 30" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="60" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#34d399" text-anchor="middle">+4</text>

    <rect x="75" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="97" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">6</text>
    <path d="M 120 30 Q 135 10 150 30" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="135" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#34d399" text-anchor="middle">+6</text>

    <rect x="150" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="172" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">12</text>
    <path d="M 195 30 Q 210 10 225 30" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="210" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#34d399" text-anchor="middle">+8</text>

    <rect x="225" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="247" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">20</text>
    <path d="M 270 30 Q 285 10 300 30" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="285" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#34d399" text-anchor="middle">+10</text>

    <rect x="300" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="322" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">30</text>
    <path d="M 345 30 Q 360 10 375 30" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="360" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#34d399" text-anchor="middle">+12</text>

    <rect x="375" y="10" width="45" height="40" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="397" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">42</text>
    <path d="M 420 30 Q 435 10 450 30" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="435" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="800" fill="#fbbf24" text-anchor="middle">+14</text>

    <rect x="450" y="10" width="45" height="40" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="472" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#fde047" text-anchor="middle">56</text>
  </g>

  <rect x="40" y="155" width="440" height="45" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="260" y="174" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">Pattern Rule: Differences increase by +2 each step (+4, +6, +8, +10, +12, +14)</text>
  <text x="260" y="191" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">Also n × (n + 1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8 = 56</text>
</svg>"""

def svg_markup_discount():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230" width="100%" height="100%">
  <rect width="520" height="230" rx="16" fill="#090d16" stroke="#10b981" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6ee7b7" text-anchor="middle">COMMERCIAL MATHEMATICS · MARKUP &amp; DISCOUNT FLOW</text>

  <!-- Step 1: Cost Price -->
  <g transform="translate(40, 60)">
    <rect width="100" height="65" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
    <text x="50" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle">Cost Price</text>
    <text x="50" y="52" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">$80</text>
  </g>

  <line x1="145" y1="92" x2="195" y2="92" stroke="#10b981" stroke-width="2.5"/>
  <text x="170" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#34d399" text-anchor="middle">+25%</text>

  <!-- Step 2: Marked Price -->
  <g transform="translate(200, 60)">
    <rect width="110" height="65" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="55" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#a7f3d0" text-anchor="middle">Marked Price</text>
    <text x="55" y="52" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">$100</text>
  </g>

  <line x1="315" y1="92" x2="365" y2="92" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="340" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#fb7185" text-anchor="middle">-10%</text>

  <!-- Step 3: Selling Price -->
  <g transform="translate(370, 60)">
    <rect width="110" height="65" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
    <text x="55" y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#fde68a" text-anchor="middle">Final Sale Price</text>
    <text x="55" y="52" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#fde047" text-anchor="middle">$90</text>
  </g>

  <rect x="40" y="150" width="440" height="50" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="260" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">Step 1: $80 × 1.25 = $100 Marked Price</text>
  <text x="260" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fde047" text-anchor="middle">Step 2: $100 × (1 - 0.10) = $90 Final Customer Price</text>
</svg>"""

def svg_letter_series():
    return """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" width="100%" height="100%">
  <rect width="520" height="220" rx="16" fill="#090d16" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#c4b5fd" text-anchor="middle">ALPHABETICAL INVERSE SERIES · AZ, BY, CX, DW, [ ? ]</text>

  <g transform="translate(45, 60)">
    <!-- AZ -->
    <rect x="0" y="10" width="60" height="55" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="30" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">AZ</text>
    <text x="30" y="52" font-family="system-ui, sans-serif" font-size="9" fill="#a78bfa" text-anchor="middle">1 &amp; 26</text>

    <text x="75" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">→</text>

    <!-- BY -->
    <rect x="90" y="10" width="60" height="55" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="120" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">BY</text>
    <text x="120" y="52" font-family="system-ui, sans-serif" font-size="9" fill="#a78bfa" text-anchor="middle">2 &amp; 25</text>

    <text x="165" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">→</text>

    <!-- CX -->
    <rect x="180" y="10" width="60" height="55" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="210" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">CX</text>
    <text x="210" y="52" font-family="system-ui, sans-serif" font-size="9" fill="#a78bfa" text-anchor="middle">3 &amp; 24</text>

    <text x="255" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">→</text>

    <!-- DW -->
    <rect x="270" y="10" width="60" height="55" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="300" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">DW</text>
    <text x="300" y="52" font-family="system-ui, sans-serif" font-size="9" fill="#a78bfa" text-anchor="middle">4 &amp; 23</text>

    <text x="345" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">→</text>

    <!-- EV (Target) -->
    <rect x="360" y="10" width="65" height="55" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
    <text x="392" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#34d399" text-anchor="middle">EV</text>
    <text x="392" y="52" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#6ee7b7" text-anchor="middle">5 &amp; 22</text>
  </g>

  <rect x="40" y="150" width="440" height="45" rx="8" fill="#0f172a" stroke="#1e293b"/>
  <text x="260" y="170" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">First letter moves +1 forward (A, B, C, D, E)</text>
  <text x="260" y="186" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">Second letter moves -1 backward from end (Z, Y, X, W, V) ➔ Result: EV</text>
</svg>"""

def svg_generic_reasoning(q_id, cat, title, icon="📊"):
    cat_themes = {
        "data-interpretation": ("#0f172a", "#1e1b4b", "#4f46e5", "#818cf8"),
        "non-verbal-reasoning": ("#0f172a", "#2e1065", "#7c3aed", "#c084fc"),
        "numerical-aptitude": ("#0f172a", "#064e3b", "#10b981", "#34d399"),
        "logical-reasoning": ("#0f172a", "#451a03", "#d97706", "#fbbf24"),
        "image-reasoning": ("#0f172a", "#082f49", "#0284c7", "#38bdf8")
    }
    bg1, bg2, stroke, accent = cat_themes.get(cat, ("#0f172a", "#1e293b", "#3b82f6", "#60a5fa"))

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230" width="100%" height="100%">
  <defs>
    <linearGradient id="gbg_{q_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg2}"/>
      <stop offset="100%" stop-color="{bg1}"/>
    </linearGradient>
  </defs>
  <rect width="520" height="230" rx="16" fill="url(#gbg_{q_id})" stroke="{stroke}" stroke-width="1.5"/>
  <text x="260" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="{accent}" text-anchor="middle">{cat.upper().replace('-', ' ')} ANALYSIS</text>

  <g transform="translate(60, 50)">
    <rect x="0" y="15" width="85" height="65" rx="8" fill="#0b1120" stroke="{stroke}" stroke-width="1.5"/>
    <text x="42" y="45" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">{icon}</text>
    <text x="42" y="68" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">Input A</text>

    <line x1="90" y1="47" x2="140" y2="47" stroke="{accent}" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="115" y="40" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="{accent}" text-anchor="middle">f(x)</text>

    <circle cx="175" cy="47" r="32" fill="#0b1120" stroke="{accent}" stroke-width="2"/>
    <text x="175" y="52" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">OP</text>

    <line x1="210" y1="47" x2="260" y2="47" stroke="{accent}" stroke-width="2" stroke-dasharray="3,3"/>

    <rect x="265" y="15" width="125" height="65" rx="8" fill="#0b1120" stroke="{stroke}" stroke-width="1.5"/>
    <text x="327" y="42" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f8fafc" text-anchor="middle">Target Evaluation</text>
    <text x="327" y="62" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="{accent}" text-anchor="middle">[ ? ]</text>
  </g>

  <rect x="30" y="155" width="460" height="50" rx="10" fill="#020617" stroke="#1e293b"/>
  <text x="45" y="176" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94a3b8">EXAMINATION ITEM #{q_id.upper()}:</text>
  <text x="45" y="194" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#f8fafc">{html.escape(title[:70])}{'...' if len(title) > 70 else ''}</text>
</svg>"""

# ==============================================================================
# SECTION B: PERFECT CONTENT MODERATION SVG GENERATOR (NO SPOILERS!)
# ==============================================================================

def svg_moderation_card(scenario_id, desc, ctx, emoji, cat_idx):
    platforms = ["Social Feed", "Community Forum", "Marketplace Listing", "Video Reel", "Direct Messaging"]
    p_choice = platforms[hash(scenario_id) % len(platforms)]

    user_handles = [
        "@urban_insider", "@creative_mind", "@traveler_sam", "@tech_guru",
        "@artisan_baker", "@green_living", "@curious_reader", "@fit_runner",
        "@sound_studio", "@pixel_artist", "@explorer_dan", "@kitchen_chronicles"
    ]
    u_choice = user_handles[hash(scenario_id + "user") % len(user_handles)]
    time_ago = ["12m ago", "34m ago", "1h ago", "2h ago", "4h ago"][hash(scenario_id) % 5]

    desc_lower = desc.lower()

    if "watermelon" in desc_lower:
        scene_art = """
        <rect x="40" y="110" width="220" height="30" rx="6" fill="#78350f" stroke="#92400e"/>
        <path d="M 60 110 A 90 90 0 0 1 240 110 Z" fill="#15803d" stroke="#166534" stroke-width="2"/>
        <path d="M 70 110 A 80 80 0 0 1 230 110 Z" fill="#bbf7d0"/>
        <path d="M 78 110 A 72 72 0 0 1 222 110 Z" fill="#ef4444"/>
        <circle cx="110" cy="85" r="2.5" fill="#0f172a"/>
        <circle cx="140" cy="70" r="2.5" fill="#0f172a"/>
        <circle cx="170" cy="75" r="2.5" fill="#0f172a"/>
        <circle cx="190" cy="90" r="2.5" fill="#0f172a"/>
        <circle cx="150" cy="95" r="2.5" fill="#0f172a"/>
        <text x="150" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fca5a5" text-anchor="middle">Fresh Summer Watermelon</text>
        """
    elif "mountain" in desc_lower or "landscape" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="150" rx="8" fill="#1e1b4b"/>
        <circle cx="150" cy="60" r="28" fill="#f59e0b" fill-opacity="0.9"/>
        <polygon points="20,170 90,65 160,170" fill="#334155"/>
        <polygon points="90,65 110,95 80,95" fill="#f8fafc"/>
        <polygon points="120,170 190,45 260,170" fill="#475569"/>
        <polygon points="190,45 210,80 175,80" fill="#f8fafc"/>
        <rect x="20" y="145" width="260" height="25" fill="#0284c7" fill-opacity="0.6"/>
        <text x="150" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#bae6fd" text-anchor="middle">Snowy Mountain Lake at Sunrise</text>
        """
    elif "knife" in desc_lower or "chef" in desc_lower:
        scene_art = """
        <rect x="30" y="30" width="240" height="120" rx="8" fill="#78350f" stroke="#a16207" stroke-width="2"/>
        <circle cx="70" cy="80" r="8" fill="#ea580c"/>
        <circle cx="90" cy="90" r="7" fill="#ea580c"/>
        <circle cx="75" cy="105" r="9" fill="#16a34a"/>
        <circle cx="95" cy="115" r="8" fill="#16a34a"/>
        <rect x="130" y="65" width="45" height="12" rx="3" fill="#1e293b"/>
        <polygon points="175,63 240,68 235,90 175,85" fill="#cbd5e1" stroke="#94a3b8"/>
        <text x="150" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fde047" text-anchor="middle">Culinary Dicing Technique Tutorial</text>
        """
    elif "pill" in desc_lower or "ad" in desc_lower or "spam" in desc_lower or "miracle" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
        <rect x="35" y="32" width="230" height="26" rx="4" fill="#991b1b"/>
        <text x="150" y="49" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fef08a" text-anchor="middle">⚡ SPONSORED PROMOTION</text>
        <text x="150" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">"LOSE 10KG IN 3 DAYS!"</text>
        <text x="150" y="100" font-family="system-ui, sans-serif" font-size="10" fill="#fca5a5" text-anchor="middle">Clinical miracle pill guaranteed results</text>
        <rect x="80" y="115" width="140" height="28" rx="6" fill="#eab308"/>
        <text x="150" y="133" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">CLAIM OFFER NOW ➔</text>
        """
    elif "news" in desc_lower or "broadcaster" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
        <circle cx="150" cy="70" r="30" fill="#1e293b"/>
        <text x="150" y="78" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">🎙️</text>
        <rect x="20" y="125" width="260" height="35" fill="#dc2626"/>
        <rect x="20" y="125" width="60" height="35" fill="#991b1b"/>
        <text x="50" y="147" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">LIVE</text>
        <text x="165" y="147" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">INTERNATIONAL CONFLICT REPORT</text>
        """
    elif "target" in desc_lower or "shooting" in desc_lower or "marksman" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#0f172a"/>
        <g transform="translate(150, 85)">
          <circle cx="0" cy="0" r="60" fill="#f8fafc" stroke="#0f172a" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="48" fill="#0284c7" stroke="#0f172a" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="36" fill="#dc2626" stroke="#0f172a" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="22" fill="#eab308" stroke="#0f172a" stroke-width="1.5"/>
          <circle cx="0" cy="0" r="8" fill="#fef08a"/>
          <circle cx="4" cy="-3" r="2" fill="#0f172a"/>
          <circle cx="6" cy="2" r="2" fill="#0f172a"/>
          <circle cx="-2" cy="1" r="2" fill="#0f172a"/>
        </g>
        <text x="150" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">Olympic 50m Paper Target Grouping</text>
        """
    elif "dog" in desc_lower or "pet" in desc_lower or ("animal" in desc_lower and "cruelty" not in desc_lower and "kick" not in desc_lower):
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#064e3b"/>
        <rect x="20" y="110" width="260" height="50" fill="#15803d"/>
        <circle cx="210" cy="120" r="12" fill="#eab308"/>
        <circle cx="120" cy="85" r="28" fill="#d97706"/>
        <text x="120" y="95" font-family="system-ui, sans-serif" font-size="34" text-anchor="middle">🐕</text>
        <text x="150" y="160" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#bbf7d0" text-anchor="middle">Golden Retriever Playing in Park</text>
        """
    elif "weapon" in desc_lower or "handgun" in desc_lower or "gun" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#1e1b4b" stroke="#6366f1"/>
        <rect x="40" y="35" width="220" height="30" rx="4" fill="#0f172a"/>
        <text x="150" y="54" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#fca5a5" text-anchor="middle">MARKETPLACE CLASSIFIED LISTING</text>
        <g transform="translate(110, 80)">
          <path d="M 0 10 L 50 10 L 50 20 L 40 20 L 30 50 L 15 50 L 22 20 L 0 20 Z" fill="#64748b" stroke="#cbd5e1"/>
        </g>
        <text x="150" y="145" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">$450 · Cash only · Unregistered</text>
        """
    elif "climb" in desc_lower or "electric" in desc_lower or "stunt" in desc_lower or "dangerous" in desc_lower:
        scene_art = """
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#020617" stroke="#eab308"/>
        <line x1="80" y1="160" x2="120" y2="30" stroke="#64748b" stroke-width="2"/>
        <line x1="160" y1="160" x2="120" y2="30" stroke="#64748b" stroke-width="2"/>
        <line x1="90" y1="120" x2="150" y2="120" stroke="#64748b" stroke-width="1.5"/>
        <line x1="100" y1="80" x2="140" y2="80" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="120" cy="25" r="5" fill="#ef4444"/>
        <circle cx="135" cy="40" r="4" fill="#fbbf24"/>
        <line x1="135" y1="44" x2="135" y2="55" stroke="#fbbf24" stroke-width="2"/>
        <rect x="20" y="130" width="260" height="30" fill="#78350f"/>
        <text x="150" y="150" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#fef08a" text-anchor="middle">⚠️ HIGH ELEVATION STUNT VIDEO</text>
        """
    else:
        scene_art = f"""
        <rect x="20" y="20" width="260" height="140" rx="8" fill="#0f172a" stroke="#1e293b"/>
        <circle cx="150" cy="80" r="42" fill="#1e1b4b" fill-opacity="0.6"/>
        <circle cx="150" cy="80" r="30" fill="#312e81" fill-opacity="0.8"/>
        <text x="150" y="93" font-family="system-ui, sans-serif" font-size="42" text-anchor="middle">{emoji}</text>
        <text x="150" y="148" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8" text-anchor="middle">User Uploaded Media Post</text>
        """

    clean_desc = html.escape(desc[:80] + ("..." if len(desc) > 80 else ""))
    clean_ctx = html.escape(ctx[:70] + ("..." if len(ctx) > 70 else ""))

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 350" width="100%" height="100%">
  <defs>
    <linearGradient id="modbg_{scenario_id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
  </defs>

  <!-- Base Console Review Card -->
  <rect width="560" height="350" rx="16" fill="url(#modbg_{scenario_id})" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Top Moderator Console Header (NEUTRAL - NO SPOILERS!) -->
  <rect x="18" y="16" width="524" height="32" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <circle cx="34" cy="32" r="4" fill="#3b82f6"/>
  <text x="46" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#94a3b8">TRUST &amp; SAFETY REVIEW</text>
  <text x="280" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">Item #{scenario_id.upper()} · Queue: Community Standards</text>
  <rect x="465" y="22" width="65" height="20" rx="4" fill="#1e293b"/>
  <text x="497" y="36" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">PENDING</text>

  <!-- Left: Content Media Visual (300px wide) -->
  <g transform="translate(18, 56)">
    <rect width="300" height="180" rx="10" fill="#090d16" stroke="#1e293b"/>
    {scene_art}
  </g>

  <!-- Right: Author & Platform Metadata -->
  <g transform="translate(330, 56)">
    <rect width="212" height="180" rx="10" fill="#0f172a" stroke="#1e293b"/>
    
    <!-- User Profile Header -->
    <circle cx="28" cy="28" r="14" fill="#3b82f6"/>
    <text x="28" y="33" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">{u_choice[1].upper()}</text>
    <text x="48" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#f8fafc">{u_choice}</text>
    <text x="48" y="38" font-family="system-ui, sans-serif" font-size="9" fill="#64748b">{time_ago} · {p_choice}</text>

    <!-- Engagement Stats -->
    <rect x="14" y="55" width="184" height="28" rx="6" fill="#0b1120"/>
    <text x="24" y="73" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">❤️ 1.4K   💬 182   🔄 94</text>

    <!-- Content Context Snippet -->
    <text x="14" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#94a3b8">PLATFORM CONTEXT:</text>
    <foreignObject x="14" y="112" width="184" height="60">
      <div xmlns="http://www.w3.org/1999/xhtml" style="color: #cbd5e1; font-size: 10px; font-family: system-ui, sans-serif; line-height: 1.35; font-style: italic;">
        "{clean_ctx}"
      </div>
    </foreignObject>
  </g>

  <!-- Bottom Detailed Description Strip -->
  <rect x="18" y="246" width="524" height="88" rx="10" fill="#090d16" stroke="#1e293b"/>
  <text x="32" y="268" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#38bdf8" letter-spacing="0.5">SUBMITTED CONTENT TRANSCRIPT / SCENARIO DESCRIPTION:</text>
  
  <foreignObject x="32" y="276" width="496" height="52">
    <div xmlns="http://www.w3.org/1999/xhtml" style="color: #f1f5f9; font-size: 11.5px; font-family: system-ui, sans-serif; line-height: 1.4; font-weight: 500;">
      {html.escape(desc)}
    </div>
  </foreignObject>
</svg>"""

# ==============================================================================
# SECTION C: PROCESS & WRITE ALL 105 APTITUDE SVGS
# ==============================================================================

print("Generating all 105 Aptitude SVGs with precision visual matching...")

for q in apt_list:
    qid = q["id"]
    filename = f"public/images/aptitude/{qid}.svg"
    cat = q.get("category", "numerical-aptitude")
    qtype = q.get("type", "none")
    qtext = q.get("question", "")
    qtext_lower = qtext.lower()

    if qtype == "chart-pie" and "chartData" in q and q["chartData"]:
        svg = svg_pie_chart(q["chartData"]["title"], q["chartData"]["slices"])
    elif qtype == "chart-bar" and "chartData" in q and q["chartData"]:
        svg = svg_bar_chart(q["chartData"]["title"], q["chartData"]["bars"])
    elif qtype == "table" and "tableData" in q and q["tableData"]:
        svg = svg_table_chart(q["tableData"]["headers"], q["tableData"]["rows"], "Operational Ticket / CSAT Performance")
    elif "triangle" in qtext_lower and "pentagon" in qtext_lower:
        svg = svg_geometric_polygons()
    elif qtype == "nested-squares" or "nested square" in qtext_lower:
        svg = svg_nested_squares()
    elif "reflected horizontally" in qtext_lower or "mirror" in qtext_lower:
        svg = svg_mirror_reflection()
    elif "odd one out" in qtext_lower and "sphere" in qtext_lower:
        svg = svg_odd_shape_out()
    elif "clock hand points" in qtext_lower or "135 degrees" in qtext_lower:
        svg = svg_clock_rotation()
    elif "crimping tool" in qtext_lower or "rj-45" in qtext_lower or "rj45" in qtext_lower:
        svg = svg_crimping_tool()
    elif "noise-canceling headset" in qtext_lower or ("headset" in qtext_lower and cat == "image-reasoning"):
        svg = svg_call_center_headset()
    elif "ear hearing protection" in qtext_lower or "safety icon" in qtext_lower:
        svg = svg_hearing_protection()
    elif "marked up by 25%" in qtext_lower or "retail merchandise" in qtext_lower:
        svg = svg_markup_discount()
    elif "train" in qtext_lower and "pole" in qtext_lower:
        svg = svg_speed_train()
    elif "mixture" in qtext_lower and "milk" in qtext_lower:
        svg = svg_ratio_mixture()
    elif "all supervisors are leaders" in qtext_lower:
        svg = svg_syllogism_venn()
    elif "10 meters north" in qtext_lower and "5 meters" in qtext_lower:
        svg = svg_direction_compass()
    elif "az, by, cx" in qtext_lower or "alphabetical series" in qtext_lower:
        svg = svg_letter_series()
    elif "2, 6, 12, 20" in qtext_lower:
        svg = svg_number_series()
    else:
        icon = "📊"
        if cat == "numerical-aptitude": icon = "🔢"
        elif cat == "logical-reasoning": icon = "🧠"
        elif cat == "image-reasoning": icon = "🔍"
        elif cat == "non-verbal-reasoning": icon = "📐"
        svg = svg_generic_reasoning(qid, cat, qtext, icon)

    with open(filename, "w", encoding="utf-8") as f:
        f.write(svg)

print(f"✓ All 105 Aptitude SVGs written to public/images/aptitude/!")

# ==============================================================================
# SECTION D: PROCESS & WRITE ALL 100 CONTENT MODERATION SVGS
# ==============================================================================

print("Generating all 100 Content Moderation SVGs...")

for m in mod_list:
    mid = m["id"]
    filename = f"public/images/moderation/{mid}.svg"
    svg = svg_moderation_card(
        scenario_id=mid,
        desc=m["description"],
        ctx=m["context"],
        emoji=m["emoji"],
        cat_idx=m["correct"]
    )
    with open(filename, "w", encoding="utf-8") as f:
        f.write(svg)

print(f"✓ All 100 Moderation SVGs written to public/images/moderation/!")
