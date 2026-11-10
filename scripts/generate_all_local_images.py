import os
import json
import html

# Palette definitions for diverse, professional SVG illustrations
THEMES = [
    {"bg1": "#0f172a", "bg2": "#1e293b", "accent": "#38bdf8", "circle": "#0284c7"},
    {"bg1": "#064e3b", "bg2": "#022c22", "accent": "#34d399", "circle": "#059669"},
    {"bg1": "#4c1d95", "bg2": "#2e1065", "accent": "#a78bfa", "circle": "#7c3aed"},
    {"bg1": "#78350f", "bg2": "#451a03", "accent": "#fbbf24", "circle": "#d97706"},
    {"bg1": "#831843", "bg2": "#500724", "accent": "#f472b6", "circle": "#db2777"},
    {"bg1": "#134e4a", "bg2": "#042f2e", "accent": "#2dd4bf", "circle": "#0d9488"},
    {"bg1": "#1e1b4b", "bg2": "#0f0e26", "accent": "#818cf8", "circle": "#4f46e5"},
    {"bg1": "#374151", "bg2": "#111827", "accent": "#9ca3af", "circle": "#4b5563"},
    {"bg1": "#701a75", "bg2": "#4a044e", "accent": "#e879f9", "circle": "#c026d3"},
    {"bg1": "#14532d", "bg2": "#052e16", "accent": "#4ade80", "circle": "#16a34a"},
]

ICONS_MAP = {
    "laptop": "💻", "computer": "🖥️", "cooking": "🍳", "kitchen": "👨‍🍳",
    "bicycle": "🚲", "bike": "🚴", "reading": "📖", "book": "📚",
    "swimming": "🏊", "pool": "🌊", "meeting": "👥", "office": "🏢",
    "restaurant": "🍽️", "fruits": "🍎", "vegetables": "🥦", "market": "🛒",
    "phone": "📱", "smartphone": "📲", "airplane": "✈️", "plane": "🛫",
    "doctor": "🩺", "patient": "🏥", "beach": "🏖️", "ocean": "🌴",
    "coffee": "☕", "cup": "🍵", "dog": "🐕", "park": "🌳",
    "city": "🏙️", "skyline": "🌆", "presentation": "📊", "speaker": "🎙️",
    "shopping": "🛍️", "cart": "🛒", "support": "🎧", "headset": "📞",
    "traffic": "🚗", "highway": "🛣️", "yoga": "🧘", "exercise": "🏃",
    "bus": "🚌", "transit": "🚏", "rain": "🌧️", "umbrella": "☂️",
    "handshake": "🤝", "agreement": "📝", "library": "🏛️", "warehouse": "📦",
    "delivery": "🚚", "package": "📦", "hardware": "🔧", "mechanic": "⚙️",
    "artist": "🎨", "painting": "🖌️", "piano": "🎹", "music": "🎵",
    "dentist": "🦷", "camera": "📷", "photographer": "📸", "fire": "🚒"
}

def pick_icon(label):
    lbl_lower = label.lower()
    for word, ico in ICONS_MAP.items():
        if word in lbl_lower:
            return ico
    return "🖼️"

def create_picture_svg(label, opt_letter, theme, filename):
    ico = pick_icon(label)
    clean_label = html.escape(label)
    # Split label into max 2 lines for clear rendering
    words = clean_label.split()
    line1 = " ".join(words[:4])
    line2 = " ".join(words[4:8]) if len(words) > 4 else ""

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{theme['bg1']}"/>
      <stop offset="100%" stop-color="{theme['bg2']}"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  
  <!-- Background Card -->
  <rect width="400" height="280" rx="16" fill="url(#bg)"/>
  <rect width="398" height="278" x="1" y="1" rx="15" fill="none" stroke="{theme['accent']}" stroke-opacity="0.25" stroke-width="2"/>
  
  <!-- Subtle decorative ambient circles -->
  <circle cx="200" cy="115" r="75" fill="{theme['circle']}" opacity="0.25"/>
  <circle cx="200" cy="115" r="50" fill="{theme['circle']}" opacity="0.35"/>
  
  <!-- Option Badge (A, B, C, D, E) -->
  <rect x="18" y="18" width="36" height="36" rx="10" fill="#0f172a" fill-opacity="0.9" stroke="{theme['accent']}" stroke-width="1.5"/>
  <text x="36" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" text-anchor="middle" fill="#ffffff">{opt_letter}</text>

  <!-- Central Graphic Icon -->
  <text x="200" y="135" font-family="system-ui, sans-serif" font-size="64" text-anchor="middle">{ico}</text>
  
  <!-- Description Banner -->
  <rect x="20" y="195" width="360" height="65" rx="10" fill="#020617" fill-opacity="0.85" stroke="#334155" stroke-width="1"/>
  <text x="200" y="222" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#f8fafc">{line1}</text>
  {"<text x='200' y='242' font-family='system-ui, -apple-system, sans-serif' font-size='12' font-weight='500' text-anchor='middle' fill='#cbd5e1'>" + line2 + "</text>" if line2 else ""}
</svg>"""
    with open(filename, "w", encoding="utf-8") as f:
        f.write(svg)

# Read the generated question bank
with open("src/data/questionBank.ts", "r", encoding="utf-8") as f:
    qb_text = f.read()

# We can import the arrays by running python json extraction or parsing
import re

# Extract PICTURE_QUESTIONS JSON
match_pq = re.search(r'export const PICTURE_QUESTIONS: PictureQuestion\[\] = (\[[\s\S]*?\]);', qb_text)
if not match_pq:
    print("Could not find PICTURE_QUESTIONS in questionBank.ts")
    exit(1)

picture_questions = json.loads(match_pq.group(1))

# Generate SVGs for all picture questions
out_dir = "public/images/pictures"
os.makedirs(out_dir, exist_ok=True)

for q_idx, q in enumerate(picture_questions):
    q_id = q["id"]
    for opt_idx, opt in enumerate(q["options"]):
        opt_letter = chr(65 + opt_idx)
        theme = THEMES[(q_idx * 5 + opt_idx) % len(THEMES)]
        svg_filename = f"{out_dir}/{q_id}_opt{opt_idx}.svg"
        create_picture_svg(opt["label"], opt_letter, theme, svg_filename)
        # Update option image to local relative path
        opt["image"] = f"/images/pictures/{q_id}_opt{opt_idx}.svg"

print(f"Generated {len(picture_questions) * 5} local picture SVGs in {out_dir}!")

# Extract MODERATION_SCENARIOS JSON
match_mod = re.search(r'export const MODERATION_SCENARIOS: ModerationScenario\[\] = (\[[\s\S]*?\]);', qb_text)
if not match_mod:
    print("Could not find MODERATION_SCENARIOS in questionBank.ts")
    exit(1)

moderation_scenarios = json.loads(match_mod.group(1))
mod_dir = "public/images/moderation"
os.makedirs(mod_dir, exist_ok=True)

# Generate moderation SVGs
for m_idx, mod in enumerate(moderation_scenarios):
    m_id = mod["id"]
    theme = THEMES[m_idx % len(THEMES)]
    svg_filename = f"{mod_dir}/{m_id}.svg"
    desc_clean = html.escape(mod["description"][:50] + "...")
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320" width="100%" height="100%">
  <defs>
    <linearGradient id="modbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{theme['bg1']}"/>
      <stop offset="100%" stop-color="{theme['bg2']}"/>
    </linearGradient>
  </defs>
  <rect width="500" height="320" rx="16" fill="url(#modbg)"/>
  <rect width="498" height="318" x="1" y="1" rx="15" fill="none" stroke="{theme['accent']}" stroke-opacity="0.3" stroke-width="2"/>
  
  <circle cx="250" cy="130" r="70" fill="{theme['circle']}" opacity="0.3"/>
  <text x="250" y="155" font-family="system-ui, sans-serif" font-size="80" text-anchor="middle">{mod['emoji']}</text>
  
  <rect x="25" y="235" width="450" height="60" rx="10" fill="#020617" fill-opacity="0.85" stroke="#334155" stroke-width="1"/>
  <text x="250" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="#f8fafc">Case #{m_idx + 1}</text>
  <text x="250" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" text-anchor="middle" fill="#cbd5e1">{desc_clean}</text>
</svg>"""
    with open(svg_filename, "w", encoding="utf-8") as f:
        f.write(svg)

print(f"Generated {len(moderation_scenarios)} local moderation SVGs in {mod_dir}!")

# Now re-write src/data/questionBank.ts with the updated local paths
new_pq_json = json.dumps(picture_questions, indent=2)

# Replace PICTURE_QUESTIONS in qb_text
new_qb_text = re.sub(
    r'export const PICTURE_QUESTIONS: PictureQuestion\[\] = \[[\s\S]*?\];',
    f'export const PICTURE_QUESTIONS: PictureQuestion[] = {new_pq_json};',
    qb_text
)

with open("src/data/questionBank.ts", "w", encoding="utf-8") as f:
    f.write(new_qb_text)

print("Updated src/data/questionBank.ts with local image references!")
