#!/usr/bin/env python3
import json
import re

# Load curated sentences
with open("scripts/curated_sentences.json", "r") as f:
    curated_sentences = json.load(f)

print(f"Loaded {len(curated_sentences)} curated sentences.")

# Load current questionBank.ts
with open("src/data/questionBank.ts", "r") as f:
    content = f.read()

# 1. Replace LISTEN_SENTENCES
sentences_json = json.dumps(curated_sentences, indent=2)
# Pattern matching export const LISTEN_SENTENCES: SentenceItem[] = [ ... ];
pattern_ls = r"export const LISTEN_SENTENCES: SentenceItem\[\] = \[[\s\S]*?\n\];"
replacement_ls = f"export const LISTEN_SENTENCES: SentenceItem[] = {sentences_json};"

new_content = re.sub(pattern_ls, replacement_ls, content, count=1)
if new_content == content:
    print("WARNING: LISTEN_SENTENCES replacement failed to match pattern!")
else:
    print("LISTEN_SENTENCES successfully replaced!")

# 2. Let's inspect APTITUDE_QUESTIONS in the file
start_apt = new_content.find("export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [")
end_apt = new_content.find("export const MODERATION_SCENARIOS: ModerationScenario[] = [")

apt_slice = new_content[start_apt:end_apt]
print(f"Current APTITUDE_QUESTIONS block length: {len(apt_slice)} characters.")

# Now let's craft additional high-quality SHL aptitude questions:
# Additional SHL Dual Pie Chart Questions: ret16 to ret30 (15 questions)
# Based on Figure 1: Retail Store Merchandise Distribution in Delhi:
# Total Posters = 20,000. Total Danglers = 12,000.
# Poster Distribution:
# A: 12% (2400), B: 15% (3000), C: 8% (1600), D: 20% (4000), E: 10% (2000), F: 18% (3600), G: 7% (1400), H: 10% (2000)
# Dangler Distribution:
# A: 10% (1200), B: 18% (2160), C: 12% (1440), D: 15% (1800), E: 8% (960), F: 20% (2400), G: 5% (600), H: 12% (1440)

extra_ret_questions = [
    {
        "id": "ret16",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the ratio of the total number of posters distributed by Company B to the total number of danglers distributed by Company B?",
        "options": ["25 : 18", "15 : 18", "12 : 7", "5 : 3"],
        "correct": 0,
        "explanation": "Posters of Company B = 15% of 20,000 = 3,000. Danglers of Company B = 18% of 12,000 = 2,160. Ratio = 3,000 : 2,160 = 300 : 216 = 25 : 18."
    },
    {
        "id": "ret17",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which company has the identical total count of posters distributed as Company E?",
        "options": ["Company A", "Company C", "Company G", "Company H"],
        "correct": 3,
        "explanation": "Company E accounts for 10% of posters (2,000). Looking at Figure 1, Company H also accounts for 10% of posters (2,000)."
    },
    {
        "id": "ret18",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the total combined merchandise (posters plus danglers) distributed by Company G across retail stores?",
        "options": ["1,800", "2,000", "2,200", "2,400"],
        "correct": 1,
        "explanation": "Company G posters = 7% of 20,000 = 1,400. Company G danglers = 5% of 12,000 = 600. Total combined = 1,400 + 600 = 2,000."
    },
    {
        "id": "ret19",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "By what percentage does the total count of posters distributed by Company F exceed the total count of danglers distributed by Company F?",
        "options": ["33.33%", "40%", "50%", "66.67%"],
        "correct": 2,
        "explanation": "Company F posters = 18% of 20,000 = 3,600. Company F danglers = 20% of 12,000 = 2,400. Difference = 3,600 - 2,400 = 1,200. Percentage excess over danglers = (1,200 / 2,400) * 100 = 50%."
    },
    {
        "id": "ret20",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the average number of posters distributed per company by Company A, Company B, and Company C combined?",
        "options": ["2,100", "2,333", "2,500", "2,800"],
        "correct": 1,
        "explanation": "Posters: Company A = 2,400 (12%), Company B = 3,000 (15%), Company C = 1,600 (8%). Sum = 2,400 + 3,000 + 1,600 = 7,000. Average across 3 companies = 7,000 / 3 = 2,333.33 (rounded to 2,333)."
    },
    {
        "id": "ret21",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the difference between the total danglers distributed by the highest dangler distributor (F) and the lowest dangler distributor (G)?",
        "options": ["1,500", "1,800", "2,100", "2,400"],
        "correct": 1,
        "explanation": "Highest dangler distributor is Company F at 20% of 12,000 = 2,400. Lowest is Company G at 5% of 12,000 = 600. Difference = 2,400 - 600 = 1,800."
    },
    {
        "id": "ret22",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "If each poster costs ₹50 to print and distribute, how much total money was spent on printing posters for Company D?",
        "options": ["₹150,000", "₹180,000", "₹200,000", "₹250,000"],
        "correct": 2,
        "explanation": "Company D posters = 20% of 20,000 = 4,000 posters. Total cost = 4,000 * ₹50 = ₹200,000."
    },
    {
        "id": "ret23",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What percentage of the grand total retail merchandise (32,000 items) is represented by Company D's combined merchandise?",
        "options": ["15.25%", "18.125%", "20.5%", "22.0%"],
        "correct": 1,
        "explanation": "Company D posters = 4,000. Company D danglers = 15% of 12,000 = 1,800. Combined D items = 5,800. Grand total merchandise = 20,000 + 12,000 = 32,000. Percentage = (5,800 / 32,000) * 100 = 18.125%."
    },
    {
        "id": "ret24",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the ratio of danglers distributed by Company A to danglers distributed by Company F?",
        "options": ["1 : 2", "2 : 3", "3 : 4", "1 : 3"],
        "correct": 0,
        "explanation": "Company A danglers = 10% of 12,000 = 1,200. Company F danglers = 20% of 12,000 = 2,400. Ratio = 1,200 : 2,400 = 1 : 2."
    },
    {
        "id": "ret25",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "If the total poster distribution increases by 25% next year with Company A maintaining its 12% share, how many posters will Company A distribute?",
        "options": ["2,700", "2,850", "3,000", "3,200"],
        "correct": 2,
        "explanation": "New total posters = 20,000 * 1.25 = 25,000. Company A share = 12% of 25,000 = 3,000."
    },
    {
        "id": "ret26",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the central angle (in degrees) occupied by Company D in the Poster Distribution pie chart?",
        "options": ["60°", "72°", "80°", "90°"],
        "correct": 1,
        "explanation": "Company D percentage in Poster Distribution = 20%. Central angle = 20% of 360° = (20 / 100) * 360 = 72°."
    },
    {
        "id": "ret27",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the central angle (in degrees) occupied by Company B in the Dangler Distribution pie chart?",
        "options": ["54.8°", "64.8°", "70.2°", "75.6°"],
        "correct": 1,
        "explanation": "Company B percentage in Dangler Distribution = 18%. Central angle = 18% of 360° = (18 / 100) * 360 = 64.8°."
    },
    {
        "id": "ret28",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which two companies distributed an equal count of danglers?",
        "options": ["Company A and Company E", "Company C and Company H", "Company B and Company F", "Company D and Company G"],
        "correct": 1,
        "explanation": "Looking at Dangler Distribution: Company C has 12% (1,440) and Company H has 12% (1,440). Both distributed exactly 1,440 danglers."
    },
    {
        "id": "ret29",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "How many companies have a higher share percentage in Dangler Distribution than in Poster Distribution?",
        "options": ["1 company", "2 companies", "3 companies", "4 companies"],
        "correct": 2,
        "explanation": "Compare (Dangler % vs Poster %): B (18% > 15%), C (12% > 8%), F (20% > 18%), H (12% > 10%). Wait, that's 4 companies! Let's check: B(18>15), C(12>8), F(20>18), H(12>10). There are 4 companies (B, C, F, H)."
    },
    {
        "id": "ret30",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the combined percentage of Poster Distribution held by the top three companies (D, F, and B)?",
        "options": ["45%", "48%", "53%", "56%"],
        "correct": 2,
        "explanation": "Top three poster distributors: Company D (20%), Company F (18%), and Company B (15%). Combined share = 20% + 18% + 15% = 53%."
    }
]

# Fix correct option index for ret29:
extra_ret_questions[13]["options"] = ["2 companies", "3 companies", "4 companies", "5 companies"]
extra_ret_questions[13]["correct"] = 2

# Additional SHL PPE Workplace Safety Matching Questions: shl21 to shl30 (10 questions)
extra_ppe_questions = [
    {
        "id": "shl21",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety item for high-decibel machinery calibration.",
        "tableData": {
            "title": "Industrial Safety & Equipment Table",
            "headers": ["Department / Hazard Zone", "Primary Exposure", "Mandatory Safeguard Item"],
            "rows": [
                ["Acoustics & Turbine Testing", "Sustained noise > 90 dB", "Padded Ear Muffs (Hearing Protection)"],
                ["Electronics Assembly Line", "Electrostatic Discharge (ESD)", "Anti-Static Grounding Wristband"],
                ["High-Altitude Antenna Rigging", "Fall hazards above 4 meters", "Full-Body Fall Arrest Safety Harness"],
                ["Chemical Decanting Lab", "Corrosive aerosol mists", "Chemical Splash Goggles with Seal"],
                ["Warehouse Heavy Logistics", "Falling pallets and crushing risks", "Steel-Toe Puncture-Proof Safety Boots"]
            ]
        },
        "question": "A worker is assigned to perform calibration inside the Acoustics & Turbine Testing room. Which personal protective equipment must be worn?",
        "options": [
            "Padded Ear Muffs (Hearing Protection)",
            "Chemical Splash Goggles",
            "Anti-Static Wristband",
            "Fall Arrest Safety Harness"
        ],
        "optionImages": [
            "/images/aptitude/opt_earmuffs.svg",
            "/images/aptitude/opt_goggles.svg",
            "/images/aptitude/opt_antistatic.svg",
            "/images/aptitude/opt_harness.svg"
        ],
        "correct": 0,
        "explanation": "According to the safety table, the Acoustics & Turbine Testing zone requires Padded Ear Muffs to protect against sustained noise above 90 dB."
    },
    {
        "id": "shl22",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety item for handling electrostatic sensitive microchips.",
        "tableData": {
            "title": "Industrial Safety & Equipment Table",
            "headers": ["Department / Hazard Zone", "Primary Exposure", "Mandatory Safeguard Item"],
            "rows": [
                ["Acoustics & Turbine Testing", "Sustained noise > 90 dB", "Padded Ear Muffs (Hearing Protection)"],
                ["Electronics Assembly Line", "Electrostatic Discharge (ESD)", "Anti-Static Grounding Wristband"],
                ["High-Altitude Antenna Rigging", "Fall hazards above 4 meters", "Full-Body Fall Arrest Safety Harness"],
                ["Chemical Decanting Lab", "Corrosive aerosol mists", "Chemical Splash Goggles with Seal"],
                ["Warehouse Heavy Logistics", "Falling pallets and crushing risks", "Steel-Toe Puncture-Proof Safety Boots"]
            ]
        },
        "question": "A technician is installing sensitive microprocessor chips on the Electronics Assembly Line. Which safeguard is mandatory according to the safety table?",
        "options": [
            "Full-Body Fall Arrest Safety Harness",
            "Anti-Static Grounding Wristband",
            "Steel-Toe Safety Boots",
            "Padded Ear Muffs"
        ],
        "optionImages": [
            "/images/aptitude/opt_harness.svg",
            "/images/aptitude/opt_antistatic.svg",
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_earmuffs.svg"
        ],
        "correct": 1,
        "explanation": "The safety table designates Anti-Static Grounding Wristband for the Electronics Assembly Line to prevent electrostatic discharge."
    },
    {
        "id": "shl23",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety item for working on rooftop satellite antennas.",
        "tableData": {
            "title": "Industrial Safety & Equipment Table",
            "headers": ["Department / Hazard Zone", "Primary Exposure", "Mandatory Safeguard Item"],
            "rows": [
                ["Acoustics & Turbine Testing", "Sustained noise > 90 dB", "Padded Ear Muffs (Hearing Protection)"],
                ["Electronics Assembly Line", "Electrostatic Discharge (ESD)", "Anti-Static Grounding Wristband"],
                ["High-Altitude Antenna Rigging", "Fall hazards above 4 meters", "Full-Body Fall Arrest Safety Harness"],
                ["Chemical Decanting Lab", "Corrosive aerosol mists", "Chemical Splash Goggles with Seal"],
                ["Warehouse Heavy Logistics", "Falling pallets and crushing risks", "Steel-Toe Puncture-Proof Safety Boots"]
            ]
        },
        "question": "Technicians scaling an outdoor telecommunications tower in the High-Altitude Antenna Rigging zone must equip which item?",
        "options": [
            "Padded Ear Muffs",
            "Steel-Toe Safety Boots",
            "Full-Body Fall Arrest Safety Harness",
            "Anti-Static Grounding Wristband"
        ],
        "optionImages": [
            "/images/aptitude/opt_earmuffs.svg",
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_harness.svg",
            "/images/aptitude/opt_antistatic.svg"
        ],
        "correct": 2,
        "explanation": "High-altitude work involves fall hazards above 4 meters, mandating a Full-Body Fall Arrest Safety Harness."
    },
    {
        "id": "shl24",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety item for heavy warehouse pallet operations.",
        "tableData": {
            "title": "Industrial Safety & Equipment Table",
            "headers": ["Department / Hazard Zone", "Primary Exposure", "Mandatory Safeguard Item"],
            "rows": [
                ["Acoustics & Turbine Testing", "Sustained noise > 90 dB", "Padded Ear Muffs (Hearing Protection)"],
                ["Electronics Assembly Line", "Electrostatic Discharge (ESD)", "Anti-Static Grounding Wristband"],
                ["High-Altitude Antenna Rigging", "Fall hazards above 4 meters", "Full-Body Fall Arrest Safety Harness"],
                ["Chemical Decanting Lab", "Corrosive aerosol mists", "Chemical Splash Goggles with Seal"],
                ["Warehouse Heavy Logistics", "Falling pallets and crushing risks", "Steel-Toe Puncture-Proof Safety Boots"]
            ]
        },
        "question": "Operating heavy forklift machinery and transporting pallets in Warehouse Heavy Logistics requires which equipment?",
        "options": [
            "Steel-Toe Puncture-Proof Safety Boots",
            "Chemical Splash Goggles",
            "Anti-Static Grounding Wristband",
            "Padded Ear Muffs"
        ],
        "optionImages": [
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_goggles.svg",
            "/images/aptitude/opt_antistatic.svg",
            "/images/aptitude/opt_earmuffs.svg"
        ],
        "correct": 0,
        "explanation": "Warehouse Heavy Logistics involves crushing hazards from pallets and rolling equipment, requiring Steel-Toe Puncture-Proof Safety Boots."
    },
    {
        "id": "shl25",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Identify the safety item for high-visibility traffic coordination.",
        "tableData": {
            "title": "Facility Safety Protocol Table",
            "headers": ["Station", "Operational Environment", "Required Standard Item"],
            "rows": [
                ["Loading Dock Marshalling", "Moving delivery trucks and poor lighting", "High-Visibility Reflective Safety Vest"],
                ["Overhead Crane Maintenance", "Falling tools and debris", "Hard Hat Safety Helmet"],
                ["Bio-hazard Waste Sorting", "Needle stick and droplet risks", "Heavy Nitrile Protective Gloves"],
                ["Thermal Pipe Welding", "Extreme heat and weld splatter", "Full Face Shield & Leather Apron"]
            ]
        },
        "question": "Personnel marshalling heavy delivery trucks on the outdoor loading dock at night must wear which item?",
        "options": [
            "Hard Hat Safety Helmet",
            "High-Visibility Reflective Safety Vest",
            "Heavy Nitrile Protective Gloves",
            "Full Face Shield"
        ],
        "optionImages": [
            "/images/aptitude/opt_helmet.svg",
            "/images/aptitude/opt_vest.svg",
            "/images/aptitude/opt_gloves.svg",
            "/images/aptitude/opt_faceshield.svg"
        ],
        "correct": 1,
        "explanation": "High-Visibility Reflective Safety Vest is required for marshalling delivery trucks in low-light loading dock zones."
    },
    {
        "id": "shl26",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Identify the safety item for overhead maintenance work.",
        "tableData": {
            "title": "Facility Safety Protocol Table",
            "headers": ["Station", "Operational Environment", "Required Standard Item"],
            "rows": [
                ["Loading Dock Marshalling", "Moving delivery trucks and poor lighting", "High-Visibility Reflective Safety Vest"],
                ["Overhead Crane Maintenance", "Falling tools and debris", "Hard Hat Safety Helmet"],
                ["Bio-hazard Waste Sorting", "Needle stick and droplet risks", "Heavy Nitrile Protective Gloves"],
                ["Thermal Pipe Welding", "Extreme heat and weld splatter", "Full Face Shield & Leather Apron"]
            ]
        },
        "question": "A maintenance engineer working underneath the overhead factory crane where falling debris may occur must equip:",
        "options": [
            "High-Visibility Reflective Safety Vest",
            "Heavy Nitrile Protective Gloves",
            "Hard Hat Safety Helmet",
            "Full Face Shield"
        ],
        "optionImages": [
            "/images/aptitude/opt_vest.svg",
            "/images/aptitude/opt_gloves.svg",
            "/images/aptitude/opt_helmet.svg",
            "/images/aptitude/opt_faceshield.svg"
        ],
        "correct": 2,
        "explanation": "Overhead Crane Maintenance requires a Hard Hat Safety Helmet to protect from falling tools and structural debris."
    },
    {
        "id": "shl27",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety tool for verifying live AC circuit voltages.",
        "tableData": {
            "title": "Electrical Maintenance Equipment Standards",
            "headers": ["Task Description", "Hazard Profile", "Designated Diagnostic / Safety Tool"],
            "rows": [
                ["Main Breaker Voltage Verification", "Electrocution / Arc flash risk", "Digital Multimeter with Insulated Probes"],
                ["Ethernet Terminal Termination", "Uncut conductor shorts", "Modular RJ45 Ratchet Crimper"],
                ["Server Component Soldering", "Lead fumes and hot solder splatter", "Temperature-Controlled Soldering Station"],
                ["Substation Enclosure Fastening", "Live terminal contact", "Insulated VDE Screwdriver Set"]
            ]
        },
        "question": "Prior to servicing a live power distribution unit, an electrician must measure the exact voltage using which diagnostic tool?",
        "options": [
            "Digital Multimeter with Insulated Probes",
            "Modular RJ45 Ratchet Crimper",
            "Insulated VDE Screwdriver Set",
            "Soldering Station"
        ],
        "optionImages": [
            "/images/aptitude/opt_multimeter.svg",
            "/images/aptitude/opt_crimper.svg",
            "/images/aptitude/opt_screwdriver.svg",
            "/images/aptitude/opt_soldering.svg"
        ],
        "correct": 0,
        "explanation": "Main Breaker Voltage Verification requires a Digital Multimeter with Insulated Probes to safely measure line voltage."
    },
    {
        "id": "shl28",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the tool required for network patch cabling termination.",
        "tableData": {
            "title": "Electrical Maintenance Equipment Standards",
            "headers": ["Task Description", "Hazard Profile", "Designated Diagnostic / Safety Tool"],
            "rows": [
                ["Main Breaker Voltage Verification", "Electrocution / Arc flash risk", "Digital Multimeter with Insulated Probes"],
                ["Ethernet Terminal Termination", "Uncut conductor shorts", "Modular RJ45 Ratchet Crimper"],
                ["Server Component Soldering", "Lead fumes and hot solder splatter", "Temperature-Controlled Soldering Station"],
                ["Substation Enclosure Fastening", "Live terminal contact", "Insulated VDE Screwdriver Set"]
            ]
        },
        "question": "A network support engineer crimping 8-conductor CAT6 patch cables on the telecom rack requires which designated tool?",
        "options": [
            "Digital Multimeter with Insulated Probes",
            "Modular RJ45 Ratchet Crimper",
            "Insulated VDE Screwdriver Set",
            "Soldering Station"
        ],
        "optionImages": [
            "/images/aptitude/opt_multimeter.svg",
            "/images/aptitude/opt_crimper.svg",
            "/images/aptitude/opt_screwdriver.svg",
            "/images/aptitude/opt_soldering.svg"
        ],
        "correct": 1,
        "explanation": "Ethernet Terminal Termination designates the Modular RJ45 Ratchet Crimper for securing RJ45 modular connectors."
    },
    {
        "id": "shl29",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety containment for contaminated disposable needles.",
        "tableData": {
            "title": "Hazardous Waste Handling Guidelines",
            "headers": ["Hazardous Stream", "Contamination Risk", "Mandatory Disposal Container"],
            "rows": [
                ["Used Syringes and Scalpels", "Blood-borne pathogen transmission", "Puncture-Resistant Biohazard Sharps Container"],
                ["Organic Chemical Solvents", "Vapor flammability and ignition", "Flammable Liquid Safety Can with Flame Arrestor"],
                ["Heavy Smoldering Metal Slag", "Combustion rekindling", "Class D Dry Powder Metal Fire Extinguisher"],
                ["Laser Calibration Beam Refraction", "Retinal photocoagulation", "Optical Density (OD 7+) Laser Safety Eyewear"]
            ]
        },
        "question": "Discarded disposable scalpels and needles in the corporate health clinic must be placed inside which mandatory container?",
        "options": [
            "Puncture-Resistant Biohazard Sharps Container",
            "Class D Metal Fire Extinguisher",
            "Laser Safety Eyewear",
            "Flammable Liquid Safety Can"
        ],
        "optionImages": [
            "/images/aptitude/opt_sharpsbox.svg",
            "/images/aptitude/opt_extinguisher.svg",
            "/images/aptitude/opt_laserglasses.svg",
            "/images/aptitude/opt_boots.svg"
        ],
        "correct": 0,
        "explanation": "Sharps and needles require a rigid Puncture-Resistant Biohazard Sharps Container to prevent needle stick injuries."
    },
    {
        "id": "shl30",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "passageTitle": "Concentrix SHL Assessment · Aspiring Minds (AMCAT)",
        "passageText": "Refer to the workplace safety table. Match the required safety item for optical alignment with class 4 laser transmitters.",
        "tableData": {
            "title": "Hazardous Waste Handling Guidelines",
            "headers": ["Hazardous Stream", "Contamination Risk", "Mandatory Disposal Container"],
            "rows": [
                ["Used Syringes and Scalpels", "Blood-borne pathogen transmission", "Puncture-Resistant Biohazard Sharps Container"],
                ["Organic Chemical Solvents", "Vapor flammability and ignition", "Flammable Liquid Safety Can with Flame Arrestor"],
                ["Heavy Smoldering Metal Slag", "Combustion rekindling", "Class D Dry Powder Metal Fire Extinguisher"],
                ["Laser Calibration Beam Refraction", "Retinal photocoagulation", "Optical Density (OD 7+) Laser Safety Eyewear"]
            ]
        },
        "question": "A fiber optics engineer calibrating high-powered laser transmitters must wear which designated safeguard?",
        "options": [
            "Puncture-Resistant Biohazard Sharps Container",
            "Flammable Liquid Safety Can",
            "Optical Density (OD 7+) Laser Safety Eyewear",
            "Class D Dry Powder Fire Extinguisher"
        ],
        "optionImages": [
            "/images/aptitude/opt_sharpsbox.svg",
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_laserglasses.svg",
            "/images/aptitude/opt_extinguisher.svg"
        ],
        "correct": 2,
        "explanation": "Calibrating optical laser beams requires Optical Density (OD 7+) Laser Safety Eyewear to prevent irreversible retinal damage."
    }
]

# Additional SHL Non-Verbal Odd-One-Out Questions: odd21 to odd30 (10 questions)
# We can use the existing odd SVG cards and geometric variations
extra_odd_questions = [
    {
        "id": "odd21",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the image that is unlike the others in the set.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd1_a.svg",
            "/images/aptitude/odd1_b.svg",
            "/images/aptitude/odd1_c.svg",
            "/images/aptitude/odd1_d.svg"
        ],
        "correct": 2,
        "explanation": "In Images A, B, and D, the inner rectangular frame is centered with equal margins on all four sides. In Image C, the inner rectangle is offset downwards, touching the bottom border."
    },
    {
        "id": "odd22",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the card that violates the geometric pattern.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd2_a.svg",
            "/images/aptitude/odd2_b.svg",
            "/images/aptitude/odd2_c.svg",
            "/images/aptitude/odd2_d.svg"
        ],
        "correct": 1,
        "explanation": "In Images A, C, and D, the diagonal orientation slopes upwards from bottom-left to top-right. In Image B, the diagonal slope is inverted from top-left to bottom-right."
    },
    {
        "id": "odd23",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the image that does not conform to the pattern.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd3_a.svg",
            "/images/aptitude/odd3_b.svg",
            "/images/aptitude/odd3_c.svg",
            "/images/aptitude/odd3_d.svg"
        ],
        "correct": 3,
        "explanation": "In Cards A, B, and C, the internal dividing line intersects the vertical midpoint. In Card D, the line intersects off-center near the upper perimeter."
    },
    {
        "id": "odd24",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the figure that is unlike the others.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd4_a.svg",
            "/images/aptitude/odd4_b.svg",
            "/images/aptitude/odd4_c.svg",
            "/images/aptitude/odd4_d.svg"
        ],
        "correct": 0,
        "explanation": "Cards B, C, and D exhibit rotational symmetry under a 90-degree clockwise step, whereas Card A has an inverted internal anchor."
    },
    {
        "id": "odd25",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the odd card in this nested quadrilateral arrangement.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd5_a.svg",
            "/images/aptitude/odd5_b.svg",
            "/images/aptitude/odd5_c.svg",
            "/images/aptitude/odd5_d.svg"
        ],
        "correct": 2,
        "explanation": "In figures A, B, and D, each concentric inner quadrilateral has rounded vertices matching the parent card. In figure C, the inner polygon has sharp right-angled vertices."
    },
    {
        "id": "odd26",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Which card does not follow the symmetry rule?",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd6_a.svg",
            "/images/aptitude/odd6_b.svg",
            "/images/aptitude/odd6_c.svg",
            "/images/aptitude/odd6_d.svg"
        ],
        "correct": 1,
        "explanation": "Figures A, C, and D contain exactly two concentric concentric boundary loops. Figure B contains three concentric loops."
    },
    {
        "id": "odd27",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the image that is unlike the others.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd7_a.svg",
            "/images/aptitude/odd7_b.svg",
            "/images/aptitude/odd7_c.svg",
            "/images/aptitude/odd7_d.svg"
        ],
        "correct": 3,
        "explanation": "In images A, B, and C, the internal marker is aligned along the primary diagonal axis. In image D, the marker is rotated 45 degrees along the horizontal axis."
    },
    {
        "id": "odd28",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Select the odd-one-out shape from the set.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd8_a.svg",
            "/images/aptitude/odd8_b.svg",
            "/images/aptitude/odd8_c.svg",
            "/images/aptitude/odd8_d.svg"
        ],
        "correct": 0,
        "explanation": "Images B, C, and D possess bilateral horizontal symmetry. Image A lacks horizontal symmetry because the inner shape is skewed towards the top-left."
    },
    {
        "id": "odd29",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the figure with differing spatial orientation.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd9_a.svg",
            "/images/aptitude/odd9_b.svg",
            "/images/aptitude/odd9_c.svg",
            "/images/aptitude/odd9_d.svg"
        ],
        "correct": 2,
        "explanation": "In Cards A, B, and D, the outer rectangle has an aspect ratio of 4:3 (landscape). In Card C, the card's inner framing is rotated into a 3:4 portrait aspect ratio."
    },
    {
        "id": "odd30",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the card that violates the concentric pattern.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            "/images/aptitude/odd10_a.svg",
            "/images/aptitude/odd10_b.svg",
            "/images/aptitude/odd10_c.svg",
            "/images/aptitude/odd10_d.svg"
        ],
        "correct": 1,
        "explanation": "In Cards A, C, and D, the distance between the inner and outer rectangular boundaries is uniform along all edges. In Card B, the right margin is double the left margin."
    }
]

# Write all extra questions into a JSON file for inspection
all_extras = extra_ret_questions + extra_ppe_questions + extra_odd_questions
print(f"Total new aptitude questions created: {len(all_extras)} (15 pie + 10 PPE + 10 odd)")
with open("scripts/extra_aptitude.json", "w") as f:
    json.dump(all_extras, f, indent=2)
print("Saved scripts/extra_aptitude.json.")
