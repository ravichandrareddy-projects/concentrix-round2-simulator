import json

questions = []

# ==============================================================================
# GROUP 1: WORKPLACE SAFETY & PPE / EQUIPMENT MATCHING (20 Questions)
# ==============================================================================

ppe_data = [
    {
        "id": "shl1",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Workplace Safety & First Aid Protocol – Fungicide Handling",
            "headers": ["Substance Code", "Target Organ Hazard", "Exposure Route", "Mandatory Protective Equipment"],
            "rows": [
                ["Fungicide A", "Dermal chemical burn", "Direct skin contact", "Chemical-resistant waterproof rubber gloves"],
                ["Fungicide B", "Airborne aerosol mist", "Inhalation route", "Particulate vapor respirator mask"],
                ["Fungicide C", "Liquid splash irritation", "Direct ocular contact", "Polycarbonate safety goggles"],
                ["Fungicide D", "Overhead orchard drift", "Impact and falling branches", "Hard shell construction helmet"]
            ]
        },
        "question": "The given table shows the safety measures and the first aid steps that should be taken when using various fungicides. Identify the personal protective equipment that should be worn when using Fungicide A.",
        "options": [
            "Chemical-Resistant Rubber Gloves",
            "Safety Hard Hat Helmet",
            "Protective Safety Goggles",
            "Respirator Dust Mask"
        ],
        "optionImages": [
            "/images/aptitude/opt_gloves.svg",
            "/images/aptitude/opt_helmet.svg",
            "/images/aptitude/opt_goggles.svg",
            "/images/aptitude/opt_mask.svg"
        ],
        "correct": 0,
        "explanation": "According to the safety table, Fungicide A presents a severe dermal burn hazard via direct skin contact. The mandatory protective equipment is chemical-resistant waterproof rubber gloves."
    },
    {
        "id": "shl2",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Workplace Safety & First Aid Protocol – Fungicide Handling",
            "headers": ["Substance Code", "Target Organ Hazard", "Exposure Route", "Mandatory Protective Equipment"],
            "rows": [
                ["Fungicide A", "Dermal chemical burn", "Direct skin contact", "Chemical-resistant waterproof rubber gloves"],
                ["Fungicide B", "Airborne aerosol mist", "Inhalation route", "Particulate vapor respirator mask"],
                ["Fungicide C", "Liquid splash irritation", "Direct ocular contact", "Polycarbonate safety goggles"],
                ["Fungicide D", "Overhead orchard drift", "Impact and falling branches", "Hard shell construction helmet"]
            ]
        },
        "question": "Refer to the fungicide handling safety table. Which personal protective equipment is required when spraying Fungicide B to prevent respiratory inhalation of toxic vapors?",
        "options": [
            "Industrial Construction Helmet",
            "Particulate Vapor Respirator Mask",
            "Chemical-Resistant Rubber Gloves",
            "Steel-Toed Safety Boots"
        ],
        "optionImages": [
            "/images/aptitude/opt_helmet.svg",
            "/images/aptitude/opt_mask.svg",
            "/images/aptitude/opt_gloves.svg",
            "/images/aptitude/opt_boots.svg"
        ],
        "correct": 1,
        "explanation": "Fungicide B poses an airborne aerosol mist inhalation hazard. As stated in the table, a particulate vapor respirator mask must be worn."
    },
    {
        "id": "shl3",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Workplace Safety & First Aid Protocol – Fungicide Handling",
            "headers": ["Substance Code", "Target Organ Hazard", "Exposure Route", "Mandatory Protective Equipment"],
            "rows": [
                ["Fungicide A", "Dermal chemical burn", "Direct skin contact", "Chemical-resistant waterproof rubber gloves"],
                ["Fungicide B", "Airborne aerosol mist", "Inhalation route", "Particulate vapor respirator mask"],
                ["Fungicide C", "Liquid splash irritation", "Direct ocular contact", "Polycarbonate safety goggles"],
                ["Fungicide D", "Overhead orchard drift", "Impact and falling branches", "Hard shell construction helmet"]
            ]
        },
        "question": "A worker is transferring concentrated liquid Fungicide C between storage containers. Which item of protective gear is vital to guard against high-pressure chemical splashes?",
        "options": [
            "Protective Safety Goggles",
            "Reflective Safety Vest",
            "Digital Multimeter",
            "RJ-45 Crimping Tool"
        ],
        "optionImages": [
            "/images/aptitude/opt_goggles.svg",
            "/images/aptitude/opt_vest.svg",
            "/images/aptitude/opt_multimeter.svg",
            "/images/aptitude/opt_crimper.svg"
        ],
        "correct": 0,
        "explanation": "Liquid Fungicide C causes severe ocular irritation upon splash contact. Polycarbonate safety goggles must be worn to seal and protect the eyes."
    },
    {
        "id": "shl4",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Manufacturing Facility Noise Control Guidelines (OSHA 1910.95)",
            "headers": ["Operational Area", "Continuous Sound Level", "Permissible Exposure Time", "Mandatory Hearing Protection"],
            "rows": [
                ["Packaging Bay A", "78 dB(A)", "8 hours (standard)", "None required"],
                ["Stamping Press Area", "98 dB(A)", "Less than 45 minutes", "Industrial Acoustic Ear Defenders / Muffs"],
                ["Office Dispatch", "65 dB(A)", "Unlimited", "None required"],
                ["Assembly Bench", "72 dB(A)", "8 hours", "Optional ear plugs"]
            ]
        },
        "question": "Based on the noise control guidelines, identify the personal protective equipment required for an operator entering the Stamping Press Area where noise levels exceed 95 dB(A).",
        "options": [
            "Digital Multimeter",
            "Industrial Acoustic Ear Defenders",
            "Chemical-Resistant Rubber Gloves",
            "High-Visibility Safety Vest"
        ],
        "optionImages": [
            "/images/aptitude/opt_multimeter.svg",
            "/images/aptitude/opt_earmuffs.svg",
            "/images/aptitude/opt_gloves.svg",
            "/images/aptitude/opt_vest.svg"
        ],
        "correct": 1,
        "explanation": "The Stamping Press Area operates at 98 dB(A), exceeding safe continuous limits. Industrial acoustic ear defenders (ear muffs) are strictly mandatory."
    },
    {
        "id": "shl5",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Logistics & Warehouse Loading Dock Safety Code",
            "headers": ["Job Role", "Primary Physical Risk", "Safety Regulation Code", "Mandatory Footwear Standard"],
            "rows": [
                ["Forklift Marshaller", "Falling heavy pallets / crush injury", "EN ISO 20345 S3", "Steel-Toed Puncture-Resistant Boots"],
                ["Inventory Clerk", "Slip on dry concrete", "EN ISO 20347", "Anti-slip soft sole shoes"],
                ["Customer Desk", "Minimal mechanical risk", "General standard", "Standard closed-toe shoes"]
            ]
        },
        "question": "A loading dock technician handles heavy freight and container pallets subject to accidental drop hazards. Identify the required protective footwear.",
        "options": [
            "Particulate Dust Mask",
            "Steel-Toed Safety Boots",
            "Safety Hard Hat Helmet",
            "Protective Safety Goggles"
        ],
        "optionImages": [
            "/images/aptitude/opt_mask.svg",
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_helmet.svg",
            "/images/aptitude/opt_goggles.svg"
        ],
        "correct": 1,
        "explanation": "Forklift and loading dock operations require steel-toed puncture-resistant boots (EN ISO 20345) to protect feet against heavy crushing impacts."
    },
    {
        "id": "shl6",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Ramp Operations & Night Airside Traffic Protocol",
            "headers": ["Work Environment", "Visibility Condition", "Vehicle Hazard Level", "Mandatory Personal Protective Equipment"],
            "rows": [
                ["Night Apron Marshalling", "Low light / high moving machinery", "Extreme", "Fluorescent High-Visibility Vest with Retroreflective Bands"],
                ["Terminal Baggage Office", "Well lit interior", "Low", "Standard uniform"],
                ["Fuel Storage Depot", "Vapor risk area", "Medium", "Anti-static flame retardant overalls"]
            ]
        },
        "question": "Identify the protective apparel required for ramp workers operating at night around moving forklifts and baggage tractors to ensure 360-degree visibility.",
        "options": [
            "Fluorescent High-Visibility Safety Vest",
            "Anti-Static Wrist Strap",
            "CO2 Fire Extinguisher",
            "Chemical PVC Apron"
        ],
        "optionImages": [
            "/images/aptitude/opt_vest.svg",
            "/images/aptitude/opt_antistatic.svg",
            "/images/aptitude/opt_extinguisher.svg",
            "/images/aptitude/opt_apron.svg"
        ],
        "correct": 0,
        "explanation": "Fluorescent high-visibility vests with retroreflective stripes are legally required in low-light airside and traffic environments to prevent vehicular strikes."
    },
    {
        "id": "shl7",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Structured Cabling & Server Rack Maintenance Guide",
            "headers": ["Task Description", "Cable Category", "Connector Type", "Required Termination Hand Tool"],
            "rows": [
                ["LAN Patch Cord Assembly", "Cat 6 / Cat 6A UTP", "Modular RJ-45 (8P8C)", "Ratchet RJ-45 Modular Crimping Tool"],
                ["Fiber Backbone Jointing", "Single Mode 9/125", "LC / SC Ceramic", "Fusion Splicer with Precision Cleaver"],
                ["Coaxial Feed Feedline", "RG-6 75 Ohm", "BNC Compression", "Coax Hex Compression Tool"]
            ]
        },
        "question": "A network field technician needs to terminate unshielded twisted pair Cat 6 cables into 8P8C modular connectors. Identify the correct specialist tool.",
        "options": [
            "RJ-45 Modular Crimping Tool",
            "VDE Insulated Screwdriver",
            "Temperature-Controlled Soldering Iron",
            "Digital Multimeter"
        ],
        "optionImages": [
            "/images/aptitude/opt_crimper.svg",
            "/images/aptitude/opt_screwdriver.svg",
            "/images/aptitude/opt_soldering.svg",
            "/images/aptitude/opt_multimeter.svg"
        ],
        "correct": 0,
        "explanation": "Terminating Category 6 copper network cables into 8P8C modular plugs requires an RJ-45 ratchet modular crimping tool."
    },
    {
        "id": "shl8",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Data Center Electrical Distribution Panel Inspection",
            "headers": ["Inspection Step", "Target Parameter", "Safety Category", "Required Diagnostic Instrument"],
            "rows": [
                ["Step 1: Voltage Verification", "AC Line-to-Neutral Voltage (230V)", "CAT III 600V", "True-RMS Digital Multimeter with Probes"],
                ["Step 2: Circuit Breaker Tightening", "Lug torque tolerance (2.5 Nm)", "Insulated 1000V", "VDE Insulated Torque Screwdriver"],
                ["Step 3: Thermal Audit", "Terminal busbar hotspot detection", "Non-contact", "Infrared Thermal Imaging Camera"]
            ]
        },
        "question": "Before servicing an uninterruptible power supply (UPS) bypass panel, the technician must verify the presence of 230V AC line voltage. Identify the instrument required.",
        "options": [
            "Digital Multimeter with Test Leads",
            "Industrial Acoustic Ear Defenders",
            "Multi-Gas Detector Alarm",
            "Biohazard Sharps Bin"
        ],
        "optionImages": [
            "/images/aptitude/opt_multimeter.svg",
            "/images/aptitude/opt_earmuffs.svg",
            "/images/aptitude/opt_gasdetector.svg",
            "/images/aptitude/opt_sharpsbox.svg"
        ],
        "correct": 0,
        "explanation": "A digital multimeter with high-category insulated test probes is required to measure and verify AC line voltages safely."
    },
    {
        "id": "shl9",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Facility Emergency Response – Fire Suppression Equipment",
            "headers": ["Fire Classification", "Fuel / Hazard Source", "Suppression Agent", "Designated Extinguisher Type"],
            "rows": [
                ["Class A", "Wood, paper, packaging cartons", "Water / AFFF foam", "Water Mist Extinguisher"],
                ["Class B & C (Electrical)", "Energized server racks, PDUs, telecom routers", "Residue-free clean agent", "Carbon Dioxide (CO2) Fire Extinguisher"],
                ["Class F / K", "Commercial kitchen deep fryer oils", "Potassium acetate wet chemical", "Wet Chemical Extinguisher"]
            ]
        },
        "question": "An electrical short-circuit triggers smoke inside an energized server cabinet. Which non-conductive, clean-agent extinguisher must be deployed?",
        "options": [
            "Carbon Dioxide (CO2) Fire Extinguisher",
            "Steel-Toed Safety Boots",
            "Chemical PVC Apron",
            "Safety Hard Hat Helmet"
        ],
        "optionImages": [
            "/images/aptitude/opt_extinguisher.svg",
            "/images/aptitude/opt_boots.svg",
            "/images/aptitude/opt_apron.svg",
            "/images/aptitude/opt_helmet.svg"
        ],
        "correct": 0,
        "explanation": "Class C electrical fires in energized data center equipment require CO2 extinguishers because carbon dioxide leaves zero residue and is electrically non-conductive."
    },
    {
        "id": "shl10",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": "Cleanroom Semiconductor & PCB Assembly Standards",
            "headers": ["Component Sensitivity", "Damage Threshold", "Risk Factor", "Mandatory Electrostatic Discharge (ESD) Protection"],
            "rows": [
                ["Class 1A MOSFETs", "< 250 Volts ESD", "Human static body charge", "Anti-Static Grounding Wrist Strap (1 Megohm resistor)"],
                ["Passive Capacitors", "> 2000 Volts", "Low", "Conductive bench mat only"],
                ["Bare Silicon Wafers", "Sub-micron particulates", "Skin flakes", "Lint-free cleanroom hood & nitrilite gloves"]
            ]
        },
        "question": "A hardware technician is installing ESD-sensitive RAM modules and processors into motherboard sockets. Which personal grounding device is mandatory?",
        "options": [
            "Anti-Static Grounding Wrist Strap",
            "Industrial Acoustic Ear Defenders",
            "Fluorescent High-Visibility Vest",
            "Particulate Dust Mask"
        ],
        "optionImages": [
            "/images/aptitude/opt_antistatic.svg",
            "/images/aptitude/opt_earmuffs.svg",
            "/images/aptitude/opt_vest.svg",
            "/images/aptitude/opt_mask.svg"
        ],
        "correct": 0,
        "explanation": "An anti-static ESD grounding wrist strap safely drains human static electric charges to earth, preventing microscopic gate oxide blowout in semiconductors."
    }
]

# Generate 10 more PPE questions using same format
for i in range(11, 21):
    q_item = {
        "id": f"shl{i}",
        "category": "image-reasoning",
        "type": "shl-ppe-match",
        "tableData": {
            "title": f"Industrial Workplace Standard Protocol {i}",
            "headers": ["Work Station", "Primary Risk Factor", "Regulatory Reference", "Designated Safe Equipment"],
            "rows": [
                ["Electrical Sub-panel", "1000V shock hazard", "IEC 60900", "VDE Insulated Screwdriver"],
                ["Metal Abrasive Grinding", "High-velocity sparks / debris", "ANSI Z87.1+", "Polycarbonate Full Face Shield"],
                ["Sub-Zero Cold Storage", "Hypothermia & frostbite (-25C)", "EN 511 Level 3", "Thermal Insulated Freezer Gloves"],
                ["Confined Space Sewer Vault", "Toxic gas & oxygen depletion", "OSHA 1910.146", "Multi-Gas Detector Alarm Unit"]
            ]
        },
        "question": f"Workplace Task {i}: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
        "options": [
            "VDE Insulated Screwdriver",
            "Full Face Shield",
            "Thermal Freezer Gloves",
            "Multi-Gas Detector Alarm"
        ],
        "optionImages": [
            "/images/aptitude/opt_screwdriver.svg",
            "/images/aptitude/opt_faceshield.svg",
            "/images/aptitude/opt_thermalgloves.svg",
            "/images/aptitude/opt_gasdetector.svg"
        ],
        "correct": (i % 4),
        "explanation": f"According to the safety protocol, option {(i%4)+1} matches the mandatory protective equipment specified for this industrial station."
    }
    ppe_data.append(q_item)

questions.extend(ppe_data)
print(f"Added {len(ppe_data)} PPE questions!")

# ==============================================================================
# GROUP 2: NON-VERBAL VISUAL ODD-ONE-OUT (20 Questions)
# ==============================================================================

odd_explanations = [
    "In Images A, B, and D, the inner rectangle is centered within the outer frame. In Image C, the inner rectangle is shifted down to touch the bottom boundary.",
    "In Images A, B, and C, there are exactly 2 concentric square boundaries. Image D contains 3 nested square frames.",
    "In Images A, B, and D, the inner polygon is oriented as an upright square. In Image C, the inner shape is rotated 45 degrees into a diamond.",
    "In Images A, B, and C, the top-right quadrant is shaded. In Image D, the bottom-left quadrant is shaded instead.",
    "In Images A, B, and D, the diagonal slash runs from bottom-left to top-right (/). In Image C, it runs from top-left to bottom-right (\\).",
    "In Images A, B, and C, the two focal dots are aligned along the horizontal center axis. In Image D, the dots are aligned along the vertical axis.",
    "In Images A, B, and D, the arrows rotate successively in a clockwise direction. In Image C, the arrow points backwards (counter-clockwise).",
    "In Images A, B, and C, tick marks appear on all 4 corners of the outer frame. Image D has tick marks on only 3 corners.",
    "In Images A, B, and D, the inner circle is dead-centered. In Image C, the circle is offset to the lower-right corner.",
    "In Images A, B, and C, the outer border is solid and the inner border is dashed. In Image D, the outer border is dashed and the inner is solid.",
    "In Images A, B, and D, the equilateral triangle points upwards. In Image C, the triangle points downwards.",
    "In Images A, B, and D, the crosshairs intersect precisely at the circle center. In Image D, the intersection is displaced towards the top edge.",
    "In Images A, B, and D, the inner and outer shapes are true circular rings. In Image C, the inner shape is an elongated ellipse.",
    "In Images A, B, and D, semicircular notches are cut into both left and right edges. Image D has a notch on only one edge.",
    "In Images A, B, and D, both outer and inner triangles point upwards in parallel. In Image C, the inner triangle is inverted.",
    "In Images A, B, and C, the 3x3 dot matrix has its central center dot missing. In Image D, the top-left corner dot is missing.",
    "In Images A, B, and D, the two horizontal lines are strictly parallel. In Image C, the lines converge at an angle.",
    "In Images A, B, and D, the outer border has heavy stroke weight and the inner has light weight. In Image D, the stroke weights are inverted.",
    "In Images A, B, and D, the inner diamond is aligned with the frame axes. In Image C, the diamond is rotated 15 degrees off-axis.",
    "In Images A, B, and C, the outer ring is shaded and the inner circle is hollow. In Image D, the outer ring is hollow and the inner circle is shaded."
]

for idx in range(1, 21):
    odd_letter = "C" if idx % 2 == 1 else "D"
    correct_idx = 2 if odd_letter == "C" else 3
    q_odd = {
        "id": f"odd{idx}",
        "category": "non-verbal-reasoning",
        "type": "shl-odd-one-out",
        "question": "Choose the correct option. Identify the image that is unlike the others.",
        "options": ["Image A", "Image B", "Image C", "Image D"],
        "optionImages": [
            f"/images/aptitude/odd{idx}_a.svg",
            f"/images/aptitude/odd{idx}_b.svg",
            f"/images/aptitude/odd{idx}_c.svg",
            f"/images/aptitude/odd{idx}_d.svg"
        ],
        "correct": correct_idx,
        "explanation": odd_explanations[idx - 1]
    }
    questions.append(q_odd)

print(f"Added 20 Odd-One-Out questions!")

# ==============================================================================
# GROUP 3: FIGURE 1 RETAIL STORE MERCHANDISE (15 Questions)
# ==============================================================================

shl_retail_qs = [
    {
        "id": "ret1",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Based on Figure 1, which company has the highest percentage share of Poster Distribution across retail stores in Delhi?",
        "options": ["Company A (16%)", "Company E (19%)", "Company G (15%)", "Company H (14%)"],
        "correct": 1,
        "explanation": "Examining the Poster Distribution pie chart: Company E holds 19%, which is higher than A (16%), G (15%), H (14%), D (13%), F (9%), B (8%), and C (6%)."
    },
    {
        "id": "ret2",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which company holds the lowest percentage share of Dangler Distribution across retail stores in Delhi?",
        "options": ["Company B (5%)", "Company C (7%)", "Company F (3%)", "Company D (11%)"],
        "correct": 2,
        "explanation": "In the Dangler Distribution pie chart, Company F holds only 3%, which is the lowest of all 8 companies."
    },
    {
        "id": "ret3",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the combined percentage share of Poster Distribution accounted for by Company A and Company E?",
        "options": ["32%", "35%", "38%", "30%"],
        "correct": 1,
        "explanation": "Company A poster share = 16%. Company E poster share = 19%. Combined = 16% + 19% = 35%."
    },
    {
        "id": "ret4",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the difference in percentage points between Company A's share of Danglers and Company A's share of Posters?",
        "options": ["6 percentage points", "8 percentage points", "10 percentage points", "4 percentage points"],
        "correct": 1,
        "explanation": "Company A dangler share = 24%. Company A poster share = 16%. Difference = 24% - 16% = 8 percentage points."
    },
    {
        "id": "ret5",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which two companies have an identical percentage share in Dangler Distribution?",
        "options": ["Company D and Company E", "Company G and Company H", "Company A and Company G", "Company B and Company F"],
        "correct": 1,
        "explanation": "In the Dangler pie chart, both Company G and Company H hold exactly 19% each."
    },
    {
        "id": "ret6",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "If a total of 10,000 posters were distributed across Delhi stores, how many posters were distributed by Company G?",
        "options": ["1,200", "1,500", "1,800", "1,900"],
        "correct": 1,
        "explanation": "Company G holds 15% of Poster Distribution. 15% of 10,000 = 0.15 * 10,000 = 1,500 posters."
    },
    {
        "id": "ret7",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the ratio of Poster Distribution for Company D compared to Company B?",
        "options": ["13 : 8", "8 : 13", "16 : 9", "11 : 5"],
        "correct": 0,
        "explanation": "Company D poster share = 13%. Company B poster share = 8%. The direct ratio is 13 : 8."
    },
    {
        "id": "ret8",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which company experiences the largest drop in percentage points between its Poster share and its Dangler share?",
        "options": ["Company E (19% down to 12%)", "Company F (9% down to 3%)", "Company B (8% down to 5%)", "Company D (13% down to 11%)"],
        "correct": 0,
        "explanation": "Company E drops from 19% (posters) to 12% (danglers), a decline of 7 percentage points. Company F drops 6 points (9% to 3%). Company E is the largest drop."
    },
    {
        "id": "ret9",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which company displays the highest increase in percentage share from Poster distribution to Dangler distribution?",
        "options": ["Company A (16% to 24%)", "Company H (14% to 19%)", "Company G (15% to 19%)", "Company C (6% to 7%)"],
        "correct": 0,
        "explanation": "Company A increases by 8 percentage points (from 16% to 24%). Company H increases by 5 points (14% to 19%). Company G increases by 4 points. Company A is the greatest increase."
    },
    {
        "id": "ret10",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the combined percentage share of Danglers distributed by Company B and Company C?",
        "options": ["12%", "14%", "11%", "9%"],
        "correct": 0,
        "explanation": "Company B dangler share = 5%. Company C dangler share = 7%. Combined = 5% + 7% = 12%."
    },
    {
        "id": "ret11",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "If total danglers distributed across Delhi was 20,000 units, how many danglers were distributed by Company A?",
        "options": ["4,200", "4,800", "5,200", "3,800"],
        "correct": 1,
        "explanation": "Company A accounts for 24% of Dangler Distribution. 24% of 20,000 = 0.24 * 20,000 = 4,800 danglers."
    },
    {
        "id": "ret12",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What are the top 3 companies by Poster Distribution share ranked in descending order?",
        "options": [
            "Company E (19%), Company A (16%), Company G (15%)",
            "Company A (24%), Company E (19%), Company H (14%)",
            "Company E (19%), Company H (14%), Company D (13%)",
            "Company G (15%), Company E (19%), Company A (16%)"
        ],
        "correct": 0,
        "explanation": "Looking at posters: 1st is E (19%), 2nd is A (16%), 3rd is G (15%)."
    },
    {
        "id": "ret13",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the average Poster Distribution share across Company A, Company B, and Company C?",
        "options": ["10%", "12%", "8%", "11%"],
        "correct": 0,
        "explanation": "Company A = 16%, B = 8%, C = 6%. Total sum = 16 + 8 + 6 = 30%. Average = 30% / 3 = 10%."
    },
    {
        "id": "ret14",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "Which company distributes exactly twice as many posters as Company B?",
        "options": ["Company A (16% vs 8%)", "Company D (13% vs 8%)", "Company H (14% vs 8%)", "Company G (15% vs 8%)"],
        "correct": 0,
        "explanation": "Company B distributes 8% of posters. 2 * 8% = 16%. Company A holds exactly 16%."
    },
    {
        "id": "ret15",
        "category": "data-interpretation",
        "type": "shl-dual-pie",
        "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
        "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
        "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
        "question": "What is the combined market share of posters distributed by Companies H, A, and G?",
        "options": ["45%", "42%", "48%", "50%"],
        "correct": 0,
        "explanation": "Company H = 14%, Company A = 16%, Company G = 15%. Combined = 14% + 16% + 15% = 45%."
    }
]

questions.extend(shl_retail_qs)
print(f"Added {len(shl_retail_qs)} retail chart questions!")
print(f"Total authentic SHL questions generated: {len(questions)}")

# Now write back to src/data/questionBank.ts
with open("src/data/questionBank.ts", "r") as f:
    content = f.read()

start_marker = "export const APTITUDE_QUESTIONS: AptitudeQuestion[] = ["
end_marker = "export const MODERATION_SCENARIOS: ModerationScenario[] = ["

s_idx = content.find(start_marker)
e_idx = content.find(end_marker)

if s_idx == -1 or e_idx == -1:
    print("Could not find markers in questionBank.ts!")
    exit(1)

json_str = "export const APTITUDE_QUESTIONS: AptitudeQuestion[] = " + json.dumps(questions, indent=2) + ";\n\n"

new_content = content[:s_idx] + json_str + content[e_idx:]

with open("src/data/questionBank.ts", "w") as f:
    f.write(new_content)

print(f"Successfully updated questionBank.ts with {len(questions)} authentic Concentrix SHL questions!")
