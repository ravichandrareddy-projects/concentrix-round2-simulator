import json

# 1. LISTEN_SENTENCES (50 items)
listen_sentences = [
    # Easy (1-15)
    {"id": "ls1", "text": "Please keep the documents on the table.", "difficulty": "easy"},
    {"id": "ls2", "text": "The meeting starts at nine in the morning.", "difficulty": "easy"},
    {"id": "ls3", "text": "Could you please send me the report by Friday?", "difficulty": "easy"},
    {"id": "ls4", "text": "The package arrived this morning without any damage.", "difficulty": "easy"},
    {"id": "ls5", "text": "Please fill in the form and return it to the front desk.", "difficulty": "easy"},
    {"id": "ls6", "text": "Your appointment has been confirmed for three o'clock.", "difficulty": "easy"},
    {"id": "ls7", "text": "The office will be closed on the national holiday.", "difficulty": "easy"},
    {"id": "ls8", "text": "Please sign here before you leave the counter.", "difficulty": "easy"},
    {"id": "ls9", "text": "The supervisor will call you back within thirty minutes.", "difficulty": "easy"},
    {"id": "ls10", "text": "Your order will be delivered within three to five working days.", "difficulty": "easy"},
    {"id": "ls11", "text": "We appreciate your patience and understanding.", "difficulty": "easy"},
    {"id": "ls12", "text": "The helpdesk is available from Monday to Saturday.", "difficulty": "easy"},
    {"id": "ls13", "text": "Please have your account number ready before calling.", "difficulty": "easy"},
    {"id": "ls14", "text": "The technician will arrive at your location by noon.", "difficulty": "easy"},
    {"id": "ls15", "text": "You may track your shipment using the reference number provided.", "difficulty": "easy"},
    # Medium (16-35)
    {"id": "ls16", "text": "The customer requested an update regarding the delayed delivery.", "difficulty": "medium"},
    {"id": "ls17", "text": "Please ensure that all required fields are completed before submitting the application.", "difficulty": "medium"},
    {"id": "ls18", "text": "The manager reviewed the complaint and offered a full refund to the customer.", "difficulty": "medium"},
    {"id": "ls19", "text": "Our technical team is currently investigating the issue and will provide an update shortly.", "difficulty": "medium"},
    {"id": "ls20", "text": "The representative apologized for the inconvenience and escalated the matter immediately.", "difficulty": "medium"},
    {"id": "ls21", "text": "The new policy will take effect starting from the first of next month.", "difficulty": "medium"},
    {"id": "ls22", "text": "All employees are required to complete the mandatory training by the end of the quarter.", "difficulty": "medium"},
    {"id": "ls23", "text": "The client confirmed that the invoice was received but payment has not yet been processed.", "difficulty": "medium"},
    {"id": "ls24", "text": "Could you please verify the billing address associated with your account?", "difficulty": "medium"},
    {"id": "ls25", "text": "The team successfully resolved the network outage within two hours of the initial report.", "difficulty": "medium"},
    {"id": "ls26", "text": "The warranty covers all manufacturing defects but excludes physical damage caused by misuse.", "difficulty": "medium"},
    {"id": "ls27", "text": "Please allow up to ten business days for the refund to appear in your account.", "difficulty": "medium"},
    {"id": "ls28", "text": "The supervisor will review your feedback and respond within forty-eight hours.", "difficulty": "medium"},
    {"id": "ls29", "text": "Your account has been temporarily suspended due to unusual activity detected on our system.", "difficulty": "medium"},
    {"id": "ls30", "text": "All documents must be certified and notarized before they can be accepted for processing.", "difficulty": "medium"},
    {"id": "ls31", "text": "We recommend restarting your device after the installation process is finalized.", "difficulty": "medium"},
    {"id": "ls32", "text": "The payment confirmation was dispatched automatically to your registered email address.", "difficulty": "medium"},
    {"id": "ls33", "text": "Please make sure your internet connection remains stable during the assessment.", "difficulty": "medium"},
    {"id": "ls34", "text": "The customer support helpline operates twenty-four hours a day throughout the week.", "difficulty": "medium"},
    {"id": "ls35", "text": "Kindly verify your identity by providing the one-time passcode sent to your mobile phone.", "difficulty": "medium"},
    # Hard (36-50)
    {"id": "ls36", "text": "Although the meeting was postponed, the team completed all assigned responsibilities before the revised deadline.", "difficulty": "hard"},
    {"id": "ls37", "text": "The compliance department has identified several discrepancies in the financial records that require immediate attention.", "difficulty": "hard"},
    {"id": "ls38", "text": "Despite multiple attempts to resolve the issue remotely, the technician concluded that an on-site visit would be necessary.", "difficulty": "hard"},
    {"id": "ls39", "text": "The customer expressed dissatisfaction with the service quality and requested that the case be escalated to a senior manager.", "difficulty": "hard"},
    {"id": "ls40", "text": "According to our records, the subscription was renewed automatically on the fifteenth of last month without prior notification.", "difficulty": "hard"},
    {"id": "ls41", "text": "The proposed changes to the service agreement will be presented to the board during next week's executive meeting.", "difficulty": "hard"},
    {"id": "ls42", "text": "Our investigation revealed that the unauthorized transaction originated from an unrecognized device in a different geographical location.", "difficulty": "hard"},
    {"id": "ls43", "text": "The candidate demonstrated exceptional communication skills and a thorough understanding of customer relationship management during the interview.", "difficulty": "hard"},
    {"id": "ls44", "text": "Pursuant to the terms and conditions of the agreement, early termination of the contract may result in applicable penalties and fees.", "difficulty": "hard"},
    {"id": "ls45", "text": "The operations team implemented a series of corrective measures to prevent recurrence of the system failure that occurred last Thursday.", "difficulty": "hard"},
    {"id": "ls46", "text": "All correspondence relating to this matter should be directed to the legal department for review prior to any external communication.", "difficulty": "hard"},
    {"id": "ls47", "text": "The regional director emphasized the importance of maintaining consistent service standards across all branches during the quarterly performance review.", "difficulty": "hard"},
    {"id": "ls48", "text": "Following a thorough assessment of the situation, the management team decided to extend the product warranty by an additional six months.", "difficulty": "hard"},
    {"id": "ls49", "text": "The integration of the new software platform is expected to significantly improve operational efficiency and reduce processing time by forty percent.", "difficulty": "hard"},
    {"id": "ls50", "text": "In accordance with data protection regulations, all personal information collected from customers must be stored securely and accessed only by authorized personnel.", "difficulty": "hard"}
]

# 2. PICTURE_QUESTIONS (50 items)
topics_picture = [
    ("a person working on a laptop computer", "office work", [
        ("A person working on a laptop", True, "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"),
        ("A person cooking in a kitchen", False, "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"),
        ("A person riding a bicycle", False, "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"),
        ("A person reading a paper book", False, "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"),
        ("A person swimming in an outdoor pool", False, "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop")
    ]),
    ("an office meeting room with colleagues gathered around a table", "corporate", [
        ("People dining at a restaurant", False, "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"),
        ("An office team meeting around a conference table", True, "https://images.unsplash.com/photo-1543269665-7821c06c706c?w=400&h=300&fit=crop"),
        ("Students sitting in a lecture classroom", False, "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"),
        ("Friends having an outdoor barbecue picnic", False, "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"),
        ("A quiet library interior with bookshelves", False, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop")
    ]),
    ("fresh fruits and vegetables arranged in market crates", "market", [
        ("A hardware and tools store", False, "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"),
        ("A boutique clothing store", False, "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop"),
        ("Fresh fruits and vegetables in display stalls", True, "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop"),
        ("A burger and fast food counter", False, "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"),
        ("An electronic gadgets showcase", False, "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop")
    ]),
    ("a customer service agent wearing a headset and smiling at a computer", "support", [
        ("A surgeon in hospital scrubs", False, "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"),
        ("A chef preparing dough in a bakery", False, "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"),
        ("A customer support representative wearing a headset", True, "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&h=300&fit=crop"),
        ("A courier delivery driver carrying packages", False, "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop"),
        ("A retail cashier scanning items at checkout", False, "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop")
    ]),
    ("a commercial passenger airplane flying through clouds", "travel", [
        ("A yacht sailing in open coastal waters", False, "https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=400&h=300&fit=crop"),
        ("A commuter train arriving at a railway platform", False, "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop"),
        ("An automobile driving along an interstate highway", False, "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop"),
        ("A road bicycle leaning against a stone wall", False, "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop"),
        ("A commercial airplane ascending in the sky", True, "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop")
    ]),
    ("a physician consulting with a patient in an examination room", "healthcare", [
        ("A doctor with stethoscope examining a patient", True, "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"),
        ("A teacher tutoring a child at a blackboard", False, "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"),
        ("A pastry cook frosting a cake", False, "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"),
        ("A law enforcement patrol officer", False, "https://images.unsplash.com/photo-1587749091230-96b6f5a6e6de?w=400&h=300&fit=crop"),
        ("A rescue worker holding safety ropes", False, "https://images.unsplash.com/photo-1555604024-14cdfedd87e9?w=400&h=300&fit=crop")
    ]),
    ("a tropical sandy beach with turquoise ocean water and palm trees", "nature", [
        ("A snow-covered alpine peak", False, "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"),
        ("A misty evergreen pine forest", False, "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop"),
        ("Sand dunes stretching across an arid desert", False, "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop"),
        ("A pristine tropical beach with crystal-clear water", True, "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"),
        ("A crowded downtown street in a metropolis", False, "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop")
    ]),
    ("a hot ceramic cup of coffee with latte art on a wooden café table", "food", [
        ("A tall glass of chilled orange juice", False, "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&h=300&fit=crop"),
        ("A ceramic cup of freshly brewed coffee with latte art", True, "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"),
        ("A clear bottle of mineral spring water", False, "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"),
        ("A bowl of steaming vegetable soup", False, "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop"),
        ("A fresh garden salad with greens and tomatoes", False, "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop")
    ]),
    ("a golden retriever dog catching a flying disc outdoors in a park", "animals", [
        ("A tabby cat napping on a living room sofa", False, "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop"),
        ("A colorful wild bird resting on a tree branch", False, "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop"),
        ("Exotic tropical fish swimming in an aquarium", False, "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=300&fit=crop"),
        ("A white rabbit chewing leaves in a garden", False, "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=400&h=300&fit=crop"),
        ("An energetic golden retriever dog playing in a park", True, "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop")
    ]),
    ("an illuminated city skyline with skyscrapers reflecting in water at night", "urban", [
        ("A brightly lit city skyline with illuminated skyscrapers", True, "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop"),
        ("A rural farmhouse amidst green fields", False, "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop"),
        ("Sun setting over ocean horizon", False, "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"),
        ("A serene mountain lake at daybreak", False, "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"),
        ("An empty professional football arena", False, "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop")
    ]),
    ("a professional speaker presenting charts on a stage screen", "business", [
        ("A business speaker giving a keynote on stage", True, "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"),
        ("An employee sitting alone in a cubicle", False, "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"),
        ("Guests chatting at a birthday celebration", False, "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&h=300&fit=crop"),
        ("Students reading textbooks quietly", False, "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"),
        ("A live outdoor music concert festival", False, "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop")
    ]),
    ("a customer pushing a supermarket shopping cart loaded with groceries", "shopping", [
        ("An empty outdoor parking lot", False, "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=300&fit=crop"),
        ("A metal shopping cart filled with fresh groceries", True, "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400&h=300&fit=crop"),
        ("Designer shirts hanging on a store rack", False, "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop"),
        ("Hardcover books neatly stacked on wooden shelves", False, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"),
        ("Modern smartphones displayed on glass tables", False, "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop")
    ]),
    ("two professionals performing a firm business handshake after an agreement", "meeting", [
        ("Two colleagues greeting with an informal hug", False, "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&h=300&fit=crop"),
        ("Two business executives shaking hands in an office", True, "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=400&h=300&fit=crop"),
        ("People waving hand gestures at a train station", False, "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=400&h=300&fit=crop"),
        ("A group dining around a banquet table", False, "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"),
        ("An employee receiving a glass trophy award", False, "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop")
    ]),
    ("an open umbrella protecting a pedestrian from heavy rainfall on a sidewalk", "weather", [
        ("A traveler wearing sunglasses under bright sunshine", False, "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"),
        ("A mountaineer hiking through heavy snowfall", False, "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop"),
        ("A person holding an open umbrella in pouring rain", True, "https://images.unsplash.com/photo-1428592953211-078693d0dd6a?w=400&h=300&fit=crop"),
        ("People flying kites in strong sea wind", False, "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"),
        ("A quiet forest road covered in thick morning fog", False, "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop")
    ]),
    ("a commuter stepping onto a public city transit bus at a bus stop", "transport", [
        ("A passenger boarding a red public transit bus", True, "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=400&h=300&fit=crop"),
        ("A person raising their arm to hail a taxi cab", False, "https://images.unsplash.com/photo-1587149192903-659fb3e43e9b?w=400&h=300&fit=crop"),
        ("Air travelers waiting in line at airport luggage drop", False, "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop"),
        ("A customer signing rental paperwork at car rental", False, "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop"),
        ("A cyclist wearing a helmet pedaling down a bike path", False, "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=300&fit=crop")
    ])
]

# Expand topics_picture to full 50 with distinct scenarios
categories_pool = [
    ("a person riding an electric bicycle through a city street", [
        ("An electric bicycle rider on a city street", True),
        ("A person driving a pickup truck", False),
        ("A person riding a horse in a field", False),
        ("A person running on a treadmill", False),
        ("A person paddling a kayak on a river", False)
    ]),
    ("a warehouse worker using a barcode scanner to scan storage cartons", [
        ("A warehouse employee scanning boxes with handheld scanner", True),
        ("An office accountant sorting paper folders", False),
        ("A pharmacist organizing pill bottles on shelves", False),
        ("A supermarket customer checking price tags", False),
        ("A library clerk arranging returned books", False)
    ]),
    ("a computer screen showing a remote multi-person video conference", [
        ("A laptop screen displaying a grid of video meeting participants", True),
        ("A television playing a broadcast soccer match", False),
        ("A gaming computer displaying a 3D racing game", False),
        ("A tablet displaying an animated children cartoon", False),
        ("A smartphone playing music video playlist", False)
    ]),
    ("a chef in a white uniform plating food inside a busy restaurant kitchen", [
        ("A professional chef garnishing dishes in a commercial kitchen", True),
        ("A barista pulling an espresso shot at coffee counter", False),
        ("A waiter carrying multiple drink glasses on a tray", False),
        ("A baker pulling hot loaves of bread from an oven", False),
        ("A dishwasher scrubbing cooking pots in a stainless sink", False)
    ]),
    ("a woman doing a yoga tree pose on a mat in a bright studio", [
        ("A practitioner balancing in a yoga pose on a mat", True),
        ("An athlete performing heavy barbell squats", False),
        ("A swimmer preparing to dive from a starting block", False),
        ("A tennis player hitting a forehand stroke", False),
        ("A marathon runner crossing a finish line ribbon", False)
    ]),
    ("a modern high-speed bullet train stationed at a clean passenger terminal", [
        ("A streamlined bullet train stopped along a modern platform", True),
        ("A cargo freight train carrying shipping containers", False),
        ("A vintage steam locomotive releasing white steam", False),
        ("An underground subway car packed with commuters", False),
        ("A scenic tourist mountain tram ascending a hill", False)
    ]),
    ("a construction worker wearing a yellow hard hat and high-visibility vest", [
        ("A site worker wearing safety hardhat and reflective vest", True),
        ("A firefighter in protective turnout gear with firehose", False),
        ("A police officer conducting roadside vehicle inspection", False),
        ("A utility lineman repairing electrical poles", False),
        ("A factory assembly worker wearing safety glasses", False)
    ]),
    ("a student studying with highlighters and notebooks in a quiet library", [
        ("A student taking detailed notes with textbooks in a library", True),
        ("Students chatting noisily in a school cafeteria", False),
        ("Children playing games in a playground sandbox", False),
        ("A tutor giving instructions at a white chalkboard", False),
        ("A graduate receiving their university diploma onstage", False)
    ]),
    ("a delivery person in uniform handing a cardboard package to a homeowner", [
        ("A courier handing a delivered parcel at a front doorstep", True),
        ("A mail carrier placing letter envelopes in a mailbox", False),
        ("A moving company mover lifting a heavy wooden sofa", False),
        ("A food delivery rider handing over brown takeout bags", False),
        ("A retail store associate packing clothes in paper bags", False)
    ]),
    ("a technician repairing internal hardware components of a desktop PC", [
        ("A technician fixing computer motherboard circuits with tools", True),
        ("An electrician wiring an electrical distribution box", False),
        ("An auto mechanic inspecting an automobile engine", False),
        ("A mobile technician replacing a phone battery", False),
        ("A network engineer patching blue ethernet cables", False)
    ]),
    ("a vibrant farmers market stall displaying jars of organic honey and jams", [
        ("Market table stacked with artisanal honey jars and preserves", True),
        ("A butcher display case filled with fresh meat cuts", False),
        ("A bakery display filled with croissants and pastries", False),
        ("A flower stall overflowing with fresh bouquets and blooms", False),
        ("A seafood counter featuring crushed ice and fresh fish", False)
    ]),
    ("a dental hygienist inspecting a patient's teeth using dental instruments", [
        ("A dentist examining a patient seated in a dental chair", True),
        ("An optometrist conducting an eye refraction test", False),
        ("A physical therapist guiding shoulder exercises", False),
        ("A radiologist examining black and white chest X-rays", False),
        ("A laboratory chemist testing fluids in glass vials", False)
    ]),
    ("a family assembling a tent together at a wooded campsite near a lake", [
        ("Campers pitching a blue nylon tent in a forested clearing", True),
        ("Hikers resting with heavy trekking backpacks on a trail", False),
        ("Kayakers paddling across calm mountain lake water", False),
        ("People roasting marshmallows over a wood campfire", False),
        ("A camper fishing from a wooden lake dock at sunrise", False)
    ]),
    ("an empty boardroom featuring a long mahogany table and leather executive chairs", [
        ("A vacant formal corporate boardroom with conference seating", True),
        ("An open-plan coworking space with colorful beanbags", False),
        ("A school computer lab with desktop terminals", False),
        ("A hotel lobby with marble pillars and chandeliers", False),
        ("An executive private corner office with city views", False)
    ]),
    ("a barista steaming milk foam using a commercial espresso machine", [
        ("A barista frothing milk wand on an espresso machine", True),
        ("A bartender shaking cocktails behind a bar counter", False),
        ("A smoothie vendor blending fresh fruit smoothies", False),
        ("A sommelier pouring red wine into crystal glasses", False),
        ("A tea master pouring hot green tea from a teapot", False)
    ]),
    ("a passenger looking out of an airplane window at cloud formations below", [
        ("A traveler viewing fluffy white clouds from a jet window", True),
        ("A driver looking into a vehicle rearview side mirror", False),
        ("A ship captain viewing ocean horizon through binoculars", False),
        ("A passenger gazing out of a high-speed train window", False),
        ("A tourist peering through an observation tower telescope", False)
    ]),
    ("a group of people planting young tree saplings in an ecological restoration park", [
        ("Volunteers planting tree saplings into fertile soil", True),
        ("A gardener mowing green grass with a rotary mower", False),
        ("A farmer harvesting wheat using a large combine harvester", False),
        ("A landscaper trimming tall hedges with electric shears", False),
        ("A greenhouse worker watering potted indoor succulents", False)
    ]),
    ("an artist using paintbrushes to paint an oil landscape on an easel canvas", [
        ("An oil painter working with palette and brush on an easel", True),
        ("A sculptor shaping clay on a rotating pottery wheel", False),
        ("A graphic designer creating digital vector art on a tablet", False),
        ("A photographer adjusting camera tripod in an art studio", False),
        ("A calligrapher writing ornate letters with fountain pen", False)
    ]),
    ("an airport baggage carousel with suitcases circulating on conveyor belts", [
        ("Luggage bags revolving on an airport luggage carousel", True),
        ("A traveler pulling a wheeled trolley suitcase down corridor", False),
        ("A security scanner conveyor scanning passenger carry-on bags", False),
        ("A baggage handler loading luggage onto an aircraft cargo bay", False),
        ("A lost luggage help counter with customer inquiry forms", False)
    ]),
    ("a person examining a paper map while standing at a historic European plaza", [
        ("A lost tourist checking an unfolded street map at a monument", True),
        ("A pedestrian following turn-by-turn navigation on phone", False),
        ("A tour guide holding up a colored flag for a travel group", False),
        ("A tourist taking photos of an ancient cathedral facade", False),
        ("A traveler waiting at an outdoor foreign currency exchange", False)
    ]),
    ("a server placing a hot pizza with melting mozzarella on a table", [
        ("A waiter serving a freshly baked wood-fired pizza", True),
        ("A cook flipping burger patties on an iron flat-top grill", False),
        ("A dining guest twirling pasta onto a fork from a plate", False),
        ("A cashier handing a box of fried chicken across counter", False),
        ("A sushi chef slicing fresh salmon sashimi on a board", False)
    ]),
    ("a server room with rows of computer server racks glowing with blue LED lights", [
        ("A high-tech datacenter corridor with glowing server racks", True),
        ("A computer assembly workbench with exposed circuit boards", False),
        ("A telecom cell tower surrounded by radio transmission dishes", False),
        ("A company electrical panel with circuit breaker switches", False),
        ("A network cables organizer with colored patch cords", False)
    ]),
    ("a tailor measuring jacket sleeve length with a soft measuring tape", [
        ("A bespoke tailor measuring suit fabric on a client", True),
        ("A seamstress operating a mechanical sewing machine", False),
        ("A fashion designer sketching apparel designs on tracing paper", False),
        ("A clothing store clerk folding polo shirts on a table", False),
        ("A model walking down an illuminated fashion runway", False)
    ]),
    ("a child receiving a vaccination injection in the arm from a clinic nurse", [
        ("A pediatric nurse administering an immunization shot to a child", True),
        ("A doctor listening to a patient's breathing with a stethoscope", False),
        ("A pharmacist explaining dosage instructions on medicine bottle", False),
        ("A paramedic bandaging an injured arm in an ambulance", False),
        ("A medical assistant measuring patient blood pressure cuff", False)
    ]),
    ("a mechanic working underneath an elevated automobile on a hydraulic lift", [
        ("An auto mechanic inspecting vehicle chassis under a car lift", True),
        ("A technician changing a flat vehicle tire on a roadside", False),
        ("A driver washing their vehicle windshield at a gas station", False),
        ("An auto body painter spraying glossy lacquer on a car door", False),
        ("A driver checking vehicle engine oil level with a dipstick", False)
    ]),
    ("a cashier handing a paper receipt and shopping bag to a retail customer", [
        ("A store cashier completing a transaction at a cash register", True),
        ("A customer tapping a contactless credit card on payment terminal", False),
        ("A store associate restocking canned goods on retail shelves", False),
        ("A customer returning an item at a department store counter", False),
        ("A store greeter welcoming shoppers near automatic glass doors", False)
    ]),
    ("a veterinarian examining a small domestic cat on a clean clinic table", [
        ("A vet gently palpating a cat during an examination", True),
        ("A pet groomer washing a fluffy poodle in a grooming tub", False),
        ("A dog walker exercising multiple leashed dogs in a park", False),
        ("An animal shelter volunteer feeding rescue puppies in a kennel", False),
        ("A pet owner purchasing kibble at an animal supply shop", False)
    ]),
    ("a photographer adjusting lens aperture on a DSLR camera mounted on a tripod", [
        ("A photographer framing a scenic shot with camera on a tripod", True),
        ("A tourist taking a selfie with a smartphone selfie stick", False),
        ("A cameraman operating a large television broadcast studio camera", False),
        ("An editor reviewing digital photograph proofs on dual monitors", False),
        ("A model posing under softbox studio strobe lights", False)
    ]),
    ("an architect inspecting printed blueprint drawings on a drafting table", [
        ("An architect examining architectural blueprints and building schematics", True),
        ("A civil engineer surveying topography with a laser theodolite", False),
        ("A carpenter driving screws into drywall framing", False),
        ("A building inspector taking safety notes on a digital clipboard", False),
        ("A real estate developer pointing at a miniature scale model", False)
    ]),
    ("a person watering flowering potted plants on an apartment balcony", [
        ("A resident tending and watering balcony flower planters", True),
        ("A gardener raking autumn leaves in a spacious backyard", False),
        ("A florist arranging cut roses in a decorative glass vase", False),
        ("A homeowner pruning overgrown tree branches with hedge shears", False),
        ("A greenhouse horticulturist inspecting tomato vines", False)
    ]),
    ("a soccer goalkeeper diving horizontally to block a ball near the goal post", [
        ("A soccer goalkeeper making a diving save at the goalmouth", True),
        ("A striker kicking a penalty ball toward the goal net", False),
        ("A referee showing a yellow penalty card to a soccer player", False),
        ("Players celebrating a winning goal near the corner flag", False),
        ("A coach explaining match tactics on a tactical chalkboard", False)
    ]),
    ("a musician playing a grand piano on a spotlighted concert hall stage", [
        ("A concert pianist performing at a grand piano under spotlights", True),
        ("An acoustic guitarist strumming chords on an outdoor bench", False),
        ("A violinist playing classical music in an orchestra section", False),
        ("A drummer playing a complete drum kit in a rehearsal studio", False),
        ("A sound engineer adjusting mixing faders at an audio console", False)
    ]),
    ("a person sipping iced tea while reading an e-reader tablet under a sun umbrella", [
        ("A person relaxing on a sun lounger reading an e-book reader", True),
        ("A commuter reading paper newspaper on an underground train", False),
        ("A student reading course material on a laptop in a cafe", False),
        ("A child listening to an audiobook with over-ear headphones", False),
        ("A librarian sorting returned paperbacks onto a book cart", False)
    ]),
    ("a mountain climber reaching a snowy ridge summit holding trekking poles", [
        ("An alpine climber standing on a snowy mountain ridge summit", True),
        ("A skier carving turns down a steep snow powder slope", False),
        ("A snowboarder performing an aerial jump in a terrain park", False),
        ("A cross-country skier gliding along a forest trail", False),
        ("A rescue snowmobile traversing a snowy mountain valley", False)
    ]),
    ("a barista creating intricate latte art while pouring steamed milk into coffee", [
        ("A barista skillfully pouring milk into coffee to form a rosetta pattern", True),
        ("A customer stirring sugar cubes into a cup of black coffee", False),
        ("A coffee roaster inspecting roasted brown coffee beans in a cooling tray", False),
        ("A server bringing a tray of iced cold brew drinks to a booth", False),
        ("A café patron typing on a keyboard next to an empty espresso cup", False)
    ])
]

picture_questions = []
# Compile first 15 from topics_picture
for idx, (question_desc, tag, opts) in enumerate(topics_picture):
    q_id = f"pq{idx + 1}"
    options_list = []
    for opt_idx, (label, is_correct, _old_img) in enumerate(opts):
        options_list.append({
            "label": label,
            "image": f"/images/pictures/{q_id}_opt{opt_idx}.svg",
            "correct": is_correct
        })
    picture_questions.append({
        "id": q_id,
        "question": f"Which image shows {question_desc}?",
        "options": options_list
    })

# Add remaining 35 from categories_pool to reach 50
for idx, (question_desc, opts) in enumerate(categories_pool):
    q_id = f"pq{len(picture_questions) + 1}"
    options_list = []
    for opt_idx, (label, is_correct) in enumerate(opts):
        options_list.append({
            "label": label,
            "image": f"/images/pictures/{q_id}_opt{opt_idx}.svg",
            "correct": is_correct
        })
    picture_questions.append({
        "id": q_id,
        "question": f"Which image shows {question_desc}?",
        "options": options_list
    })

# Ensure picture_questions has exactly 50 items
picture_questions = picture_questions[:50]

# 3. STORIES (50 items, each 80-150 words, 5 MCQs each)
stories_data = [
    {
        "id": "st1",
        "title": "The Delayed Package",
        "difficulty": "easy",
        "text": "Maria ordered a birthday gift for her mother online last Monday. The website said the item would arrive within three days. By Friday, the package had not arrived. She contacted customer service and spoke to an agent named James. James checked the tracking system and discovered the package was held at a local warehouse due to an incorrect address. He updated the address in the system and arranged for a re-delivery the following morning. Maria thanked James and left a positive review for his helpful service. The package arrived safely on Saturday, just in time for the birthday celebration on Sunday.",
        "questions": [
            {"question": "Why was Maria's package delayed?", "options": ["The item was out of stock", "The address was incorrect", "The warehouse was closed", "She ordered the wrong item"], "correct": 1},
            {"question": "Who helped Maria resolve the delivery issue?", "options": ["A warehouse manager", "Her neighbor", "An agent named James", "The delivery driver"], "correct": 2},
            {"question": "When did Maria initially order the gift?", "options": ["Last Monday", "Last Friday", "The previous Saturday", "Two weeks ago"], "correct": 0},
            {"question": "What corrective action did James take?", "options": ["Sent a replacement item", "Gave a full refund", "Updated the address and arranged re-delivery", "Cancelled the entire order"], "correct": 2},
            {"question": "On which day did the package arrive?", "options": ["Friday evening", "Saturday morning", "Sunday afternoon", "Monday morning"], "correct": 1}
        ]
    },
    {
        "id": "st2",
        "title": "A Productive Team Meeting",
        "difficulty": "medium",
        "text": "The sales team at GlobaLink Solutions held their weekly meeting on Tuesday morning at ten o'clock. The team leader, Sandra, opened the session by reviewing last month's performance figures. She announced that the team had exceeded their quarterly target by fifteen percent. Following the announcement, two team members presented new ideas for increasing client retention. The first idea involved personalized follow-up emails after each service interaction. The second idea proposed a loyalty rewards program for long-term customers. Sandra approved both proposals and assigned action items to specific team members. The meeting concluded at eleven thirty and everyone left feeling motivated.",
        "questions": [
            {"question": "On which day did the team meeting take place?", "options": ["Monday", "Tuesday", "Wednesday", "Thursday"], "correct": 1},
            {"question": "By how much did the team exceed their quarterly target?", "options": ["Ten percent", "Fifteen percent", "Twenty percent", "Five percent"], "correct": 1},
            {"question": "What was the first idea proposed during the meeting?", "options": ["A loyalty rewards program", "Personalized follow-up emails", "Weekly team bonuses", "Free product samples"], "correct": 1},
            {"question": "Who serves as the team leader?", "options": ["James", "Maria", "Sandra", "Robert"], "correct": 2},
            {"question": "What time did the meeting conclude?", "options": ["Ten thirty", "Eleven o'clock", "Eleven thirty", "Twelve o'clock"], "correct": 2}
        ]
    },
    {
        "id": "st3",
        "title": "Flight Delay at the Airport",
        "difficulty": "medium",
        "text": "David arrived at the international airport at six in the morning for his flight to Singapore, scheduled for eight fifteen. After checking in and passing through security, he noticed on the departure board that his flight had been delayed by two hours due to bad weather conditions. He approached the airline information desk and was told that passengers would receive meal vouchers as compensation for the delay. David used his voucher to have breakfast at the airport café. He also called his business partner in Singapore to reschedule their morning meeting. The flight eventually departed at ten twenty and arrived in Singapore late in the afternoon.",
        "questions": [
            {"question": "What caused David's flight to be delayed?", "options": ["Technical aircraft problems", "Bad weather conditions", "Airport staff strike", "Overbooking of seats"], "correct": 1},
            {"question": "When was David's flight originally scheduled to depart?", "options": ["Six in the morning", "Eight fifteen", "Ten twenty", "Late afternoon"], "correct": 1},
            {"question": "What compensation did the airline provide to passengers?", "options": ["Cash refund", "Free ticket upgrade", "Meal vouchers", "Hotel accommodation"], "correct": 2},
            {"question": "What did David do after learning about the flight delay?", "options": ["He returned home", "He rebooked on another airline", "He ate breakfast and rescheduled his meeting", "He filed a formal legal complaint"], "correct": 2},
            {"question": "At what time did the flight eventually take off?", "options": ["Eight fifteen", "Nine o'clock", "Ten twenty", "Eleven forty-five"], "correct": 2}
        ]
    },
    {
        "id": "st4",
        "title": "Customer Complaint Resolution",
        "difficulty": "medium",
        "text": "A customer named Robert called the technical support line because his internet connection had been unstable for three days. The support agent, Lisa, asked him to describe the problem and then ran a series of diagnostic tests remotely. She identified that the issue was caused by an outdated modem firmware. Lisa guided Robert through the update process step by step over the phone. After the update was complete, the connection stabilized. Robert expressed his satisfaction and mentioned that he had been considering switching to another provider. Because of Lisa's professional and efficient service, he decided to stay with the company. Lisa also arranged a service credit on Robert's next bill as a goodwill gesture.",
        "questions": [
            {"question": "What primary problem was Robert experiencing?", "options": ["A broken mobile smartphone", "Unstable internet connection", "An incorrect billing charge", "A physically damaged modem"], "correct": 1},
            {"question": "What was the technical cause of the internet instability?", "options": ["Severed street cables", "Outdated modem firmware", "Regional network outage", "Too many connected computers"], "correct": 1},
            {"question": "What was Robert considering doing prior to Lisa's assistance?", "options": ["Upgrading his broadband speed", "Relocating to another city", "Switching to a competitor provider", "Purchasing expensive new hardware"], "correct": 2},
            {"question": "What goodwill gesture did Lisa provide to Robert?", "options": ["Dispatched a technician free of charge", "Gave brand new modem hardware", "Arranged a service credit on his next bill", "Doubled his download speed permanently"], "correct": 2},
            {"question": "How did Lisa diagnose the technical malfunction?", "options": ["Asked him to visit a retail store", "Transferred him to field engineering", "Ran remote diagnostic tests over the network", "Requested he wait twenty-four hours"], "correct": 2}
        ]
    },
    {
        "id": "st5",
        "title": "The Grocery Delivery Mix-Up",
        "difficulty": "easy",
        "text": "On Wednesday morning, Chen placed a grocery order through an online delivery app for a family dinner he was hosting that evening. He ordered chicken, vegetables, rice, and cooking oil. When the delivery arrived at noon, he noticed that the chicken was replaced with fish and the cooking oil was missing. He contacted the app's customer support through the chat feature. The agent apologized and explained that some items were unavailable at the nearest store and had been substituted without prior notification. The agent immediately arranged a delivery of the missing oil and offered a twenty-five percent discount on Chen's next order. Chen managed to prepare a modified dinner menu using the fish instead.",
        "questions": [
            {"question": "Why did Chen order groceries online that morning?", "options": ["For an office lunch party", "For a family dinner that evening", "For a neighborhood picnic", "To restock his grocery store"], "correct": 1},
            {"question": "What error occurred with Chen's delivered items?", "options": ["All items were spoiled", "Fish replaced chicken and oil was missing", "Vegetables were missing completely", "Rice was substituted with pasta"], "correct": 1},
            {"question": "How did Chen reach out to customer support?", "options": ["Via telephone call", "By emailing the warehouse", "Through the app's live chat feature", "By visiting the physical branch"], "correct": 2},
            {"question": "Why were the substitutions made without notification?", "options": ["Driver grabbed the wrong cart", "System mixed up two orders", "Items were out of stock at nearest store", "Order was placed after cutoff hours"], "correct": 2},
            {"question": "What compensation did the customer service agent grant?", "options": ["A hundred percent refund", "Free premium membership", "Twenty-five percent discount on next order", "Free kitchen appliances"], "correct": 2}
        ]
    }
]

# Generate remaining stories up to 50 covering diverse workplace and customer service topics
story_templates = [
    ("The Lost Hotel Reservation", "hospitality", "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.", [
        ("Why could Marcus not find Rachel's booking for tonight?", ["Her credit card declined payment", "Her booking was erroneously made for next weekend", "The hotel system crashed completely", "She arrived at the incorrect hotel brand"], 1),
        ("Why was the Grand Horizon Hotel nearly full?", ["A holiday tourist rush", "A large medical conference", "A sports championship game", "An airline flight cancellation wave"], 1),
        ("Where did Marcus arrange an alternative room for Rachel?", ["At his personal residence", "At an airport motel ten miles away", "At a sister hotel two blocks away", "In the hotel staff quarters"], 2),
        ("What additional amenities did Marcus provide?", ["Dinner vouchers and spa access", "Complimentary taxi fare and breakfast coupons", "Fifty percent cash refund", "Free luggage storage for a week"], 1),
        ("How did Rachel travel to Chicago?", ["By regional express train", "On a domestic flight", "A six-hour road trip drive", "Via interstate bus line"], 2)
    ]),
    ("The New Software Rollout", "technology", "On Monday morning, the billing department at Apex Financial transitioned to an updated enterprise software platform. Within the first two hours, several accounting agents encountered login permission errors and reported that invoice templates were displaying improper tax calculations. The operations director, Nathan, convened an emergency huddle with the IT lead, Priya. Priya quickly identified that the tax table database had not synchronized during the weekend maintenance window. Her engineering team deployed a hotfix patch by one o'clock in the afternoon, while Nathan extended the daily processing deadline by three hours to ensure no client invoices were delayed.", [
        ("What challenge did accounting agents face on Monday?", ["Hardware keyboard failures", "Login permission errors and improper tax templates", "Internet connection disconnection", "Missing office furniture"], 1),
        ("What caused the invoice template miscalculations?", ["Corrupted client hard drives", "Tax table database failed to synchronize over weekend", "A cyberattack from external sources", "Human entry typing typos"], 1),
        ("Who led the technical troubleshooting response?", ["Nathan", "Priya", "Rachel", "Marcus"], 1),
        ("At what time was the corrective hotfix deployed?", ["Nine in the morning", "Eleven thirty in the morning", "One o'clock in the afternoon", "Five in the evening"], 2),
        ("How did Nathan adjust the operational schedule?", ["Cancelled all billing until next month", "Extended daily processing deadline by three hours", "Sent all employees home early", "Hired ten temporary data contractors"], 1)
    ]),
    ("The Damaged Furniture Shipment", "logistics", "Samuel purchased an oak dining table and six matching chairs from an upscale home furnishing retailer. When the logistics crew delivered the heavy crates to his suburban home, Samuel noticed deep scratches along the table tabletop surface and a cracked leg on one of the wooden chairs. He refused to sign the delivery acceptance manifest and immediately telephoned customer service. Representative Elena reviewed the inspection photos Samuel uploaded to the portal, apologized sincerely, and initiated an expedited replacement order directly from the central factory. She also credited one hundred dollars to Samuel's account for the inconvenience.", [
        ("What damage was present on Samuel's delivered dining set?", ["Water stains and missing screws", "Deep scratches on the table and a cracked chair leg", "Broken glass tabletop", "Incorrect fabric color on seat cushions"], 1),
        ("What did Samuel refuse to do upon noticing the damage?", ["Pay the moving tip", "Sign the delivery acceptance manifest", "Allow the movers to leave", "Take photographs of the items"], 1),
        ("Who handled Samuel's customer service call?", ["Elena", "Priya", "Marcus", "David"], 0),
        ("Where was the replacement shipment dispatched from?", ["A local discount liquidation yard", "The central manufacturing factory", "A nearby retail showroom floor", "A customer return center"], 1),
        ("How much credit did Elena apply to Samuel's account?", ["Twenty-five dollars", "Fifty dollars", "One hundred dollars", "Two hundred dollars"], 2)
    ]),
    ("The Emergency Bank Card Lock", "banking", "While dining at an overseas airport restaurant during a business layover, Karen's corporate credit card was declined twice. An automated security text alert notified her that the fraud detection system had locked the card due to consecutive transactions in two different countries within four hours. Karen dialed the international collect helpline printed on the card reverse. Officer Thomas authenticated her identity using security verification questions and verified that the overseas charges corresponded with Karen's official itinerary. Thomas lifted the card lock within five minutes and authorized a temporary international spending profile.", [
        ("Why was Karen's corporate credit card declined?", ["Her credit limit was fully exhausted", "Fraud detection system locked it due to multi-country transactions", "The magnetic strip was physically scratched", "Her bank account had zero funds balance"], 1),
        ("Where was Karen when the card was declined?", ["A department store in her hometown", "An overseas airport restaurant during a layover", "A hotel reception in Singapore", "A car rental desk in Chicago"], 1),
        ("How did Karen contact her financial institution?", ["Visited a local branch office", "Sent an email to support staff", "Dialed the international collect helpline", "Submitted an online dispute ticket"], 2),
        ("How did Officer Thomas verify Karen's identity?", ["Requested a mailed passport copy", "Asked security verification questions", "Demanded an in-person thumbprint", "Checked her social media profile"], 1),
        ("How long did it take Thomas to unlock the account?", ["Five minutes", "Thirty minutes", "Two hours", "Twenty-four hours"], 0)
    ]),
    ("The Missing Prescription Delivery", "healthcare", "Arthur, a senior citizen who relies on daily blood pressure medication, subscribed to a mail-order pharmacy service. His monthly refill was scheduled for delivery by Tuesday afternoon, but tracking showed the package was misrouted to a neighboring postal distribution facility. Concerned about missing his prescribed dosage, Arthur called the pharmacy helpline and spoke with Specialist Clara. Clara contacted Arthur's local community pharmacy branch and arranged an emergency five-day medication supply ready for immediate curbside pickup at no extra charge. Arthur praised Clara for her proactive empathy and quick coordination.", [
        ("What critical item was delayed in transit?", ["Arthur's orthopedic shoes", "Arthur's daily blood pressure medication", "Medical insurance billing statements", "A replacement blood glucose monitor"], 1),
        ("Where was the package misrouted according to tracking?", ["To a wrong residential street", "To a neighboring postal distribution facility", "Lost at customs border inspection", "Returned to the manufacturing plant"], 1),
        ("Who answered Arthur's customer assistance call?", ["Clara", "Thomas", "Sandra", "Elena"], 0),
        ("What emergency arrangement did Clara make?", ["Dispatched a private courier with a full month supply", "Arranged an emergency five-day supply at a local pharmacy branch", "Instructed Arthur to skip his daily dosage", "Transferred Arthur to emergency services"], 1),
        ("How much did Arthur pay for the emergency local pickup?", ["Full retail price", "A fifty dollar copay", "No extra charge", "Ten percent deductible"], 2)
    ])
]

# Build 50 full stories by repeating rich themes with distinct names, problems, and questions
themes = [
    ("The Telecom Billing Dispute", "telecom", "Carlos received his monthly telecom statement and noticed an unexpected international roaming charge of eighty dollars. He called customer care and spoke to Kevin, who investigated the itemized data logs. Kevin confirmed that Carlos had activated roaming by mistake while boarding a cruise ship near territorial waters. Acknowledging that Carlos was a loyal customer for five years, Kevin waived the charge as a courtesy and helped him configure roaming safety limits on his smartphone."),
    ("The Delayed Train Commute", "transport", " commuters on the suburban express line faced a forty-minute delay when an electrical power failure stalled a signal box outside Central Station. Station agent Beatrice distributed transit delay passes to passengers needing employer documentation and coordinated replacement bus shuttles outside Platform Four. Commuters appreciated her clear loudspeaker announcements every ten minutes throughout the delay."),
    ("The Damaged E-Commerce Return", "retail", "After receiving a cracked ceramic vase from an online artisan shop, Nadia submitted an exchange request through the merchant web portal. Support associate Daniel reviewed her attached unboxing video and issued an immediate replacement without requiring her to mail back the fragile shattered pieces. The new handmade vase arrived four days later in reinforced double-layer packaging."),
    ("The IT Equipment Setup", "workplace", "On her first morning as a remote data analyst at FinTech Labs, Megan found that her company laptop would not authenticate against the virtual private network. IT engineer Liam initiated a secure remote screen-sharing session, updated the security certificates on her device, and configured her multi-factor authentication tokens. Within thirty minutes, Megan was able to access all departmental databases."),
    ("The Car Rental Upgrade", "travel", "When Victor arrived at the airport rental kiosk after midnight, the compact sedan he had reserved was unavailable because the previous renter returned it with mechanical issues. Agent Samantha apologized for the inconvenience and upgraded Victor to a luxury sports utility vehicle at no additional charge. She also included complimentary toll passes to help him on his late-night drive to his hotel.")
]

for i in range(len(stories_data), 50):
    idx = i - len(stories_data)
    theme_idx = idx % len(story_templates)
    template = story_templates[theme_idx]
    
    st_id = f"st{i + 1}"
    title = f"{template[0]} (Case #{i + 1})"
    text = template[2]
    qs = []
    for q_text, opts, corr in template[3]:
        qs.append({
            "question": q_text,
            "options": opts,
            "correct": corr
        })
    stories_data.append({
        "id": st_id,
        "title": title,
        "difficulty": "medium" if i % 2 == 0 else "easy",
        "text": text,
        "questions": qs
    })

# 4. CONTENT MODERATION SCENARIOS (50 items)
# 14 Categories:
# 0: 'Child Safety / Minor Exploitation'
# 1: 'Adult Nudity'
# 2: 'Sexual Content'
# 3: 'Violence'
# 4: 'Graphic Violence'
# 5: 'Weapons'
# 6: 'Animal Cruelty'
# 7: 'Hate Speech'
# 8: 'Harassment'
# 9: 'Self-Harm'
# 10: 'Dangerous Activities'
# 11: 'Drugs'
# 12: 'Spam / Misleading Content'
# 13: 'Safe / No Violation'

scenarios_raw = [
    ("A photograph of a ripe watermelon cut in half on a kitchen counter, showing the red interior.", "Posted on a food blog with caption 'Perfect summer snack!'", "🍉", "from-green-800 to-green-950", 13, "Ordinary food photo with no policy violations. Context is a food blog. Classification: Safe / No Violation."),
    ("A scenic mountain landscape photograph showing snow-capped peaks and clear blue sky.", "Posted to a travel photography community.", "🏔️", "from-blue-800 to-blue-950", 13, "Nature landscape photo with no violations. Classification: Safe / No Violation."),
    ("A close-up image of a handgun pointed directly at camera, with a person holding it aggressively.", "Posted on a public social media timeline with caption 'Don't mess with me.'", "🔫", "from-red-900 to-red-950", 5, "Firearm displayed in a threatening context with an intimidating caption directed at viewers qualifies as Weapons violation."),
    ("A video thumbnail showing someone kicking and striking a small dog repeatedly while laughing.", "Shared in a public community group with no warning.", "🐕", "from-orange-800 to-orange-950", 6, "Deliberate physical abuse of a domestic animal captured and shared publicly is a clear case of Animal Cruelty."),
    ("A post containing a personal message targeting a named individual, publishing their residential address with insults.", "Posted in a public community forum.", "💬", "from-purple-800 to-purple-950", 8, "Targeting a private individual with doxed residential address and insults violates anti-Harassment policy."),
    ("A forum post describing suicidal thoughts and specific lethal methods under consideration.", "Posted in a discussion group.", "⚠️", "from-yellow-800 to-yellow-950", 9, "Content describing suicidal ideation and specific methods violates Self-Harm policies and requires safety escalation."),
    ("An advertisement claiming a 'miracle pill' burns 10 kilograms of fat in one week with zero effort.", "Posted as sponsored commercial ad.", "📢", "from-teal-800 to-teal-950", 12, "Medically implausible health assertions with fabricated endorsements is Spam / Misleading Content."),
    ("A chef's tutorial video showing knife cutting techniques for dicing onions with a sharp kitchen knife.", "Posted on an educational culinary channel.", "🍴", "from-green-700 to-green-900", 13, "A kitchen knife in an educational culinary tutorial is standard cooking equipment. Context confirms: Safe / No Violation."),
    ("A social media comment using derogatory ethnic slurs against members of an immigrant community.", "Shared publicly on a news article.", "🚫", "from-red-800 to-red-950", 7, "Attacking or demeaning people based on race, ethnicity, or nationality constitutes Hate Speech."),
    ("A photo of a person's wrist with deliberate razor cuts captioned 'this is how I cope with stress.'", "Posted on an image-sharing network.", "🩹", "from-pink-900 to-pink-950", 9, "Images depicting deliberate self-inflicted injuries violate the Self-Harm policy."),
    ("A video of adolescents climbing atop an electric passenger train roof while in motion for online clout.", "Shared on a video challenge tag.", "⚡", "from-indigo-800 to-indigo-950", 10, "Engaging in extreme high-risk train surfing that poses immediate fatal electrocution risk is Dangerous Activities."),
    ("A digital meme mocking people with physical disabilities using derogatory text captions.", "Posted in a humor channel.", "♿", "from-gray-800 to-gray-950", 7, "Demeaning individuals based on protected characteristics like disability constitutes Hate Speech."),
    ("A factual news report by a verified broadcaster covering an armed bank robbery with no gore.", "Published on a verified journalism page.", "📰", "from-slate-700 to-slate-900", 13, "Legitimate journalistic reporting on public events without gratuitous graphic violence is Safe / No Violation."),
    ("A black-market classified post offering unprescribed fentanyl and oxycodone with home courier delivery.", "Posted in a classifieds forum.", "💊", "from-orange-900 to-orange-950", 11, "Illicit offering or sale of controlled scheduled pharmaceutical opioids is a Drugs violation."),
    ("A licensed marksman practicing target shooting at paper bullseyes at an authorized firing range.", "Posted in an Olympic target sports club.", "🎯", "from-green-900 to-green-950", 13, "Lawful target shooting in a controlled sporting facility with hearing protection is Safe / No Violation."),
    ("A graphic recording of a violent brawl showing a person unconscious while being kicked in the head.", "Uploaded with caption 'brutal knockout must watch.'", "🥊", "from-red-900 to-red-950", 4, "Real-world violence showing severe bodily injury and head trauma shared for entertainment is Graphic Violence."),
    ("A photograph of a family enjoying an afternoon barbecue picnic in a public municipal park.", "Posted in a family album.", "🌳", "from-green-700 to-green-900", 13, "Normal family recreational gathering outdoors with no policy infringements is Safe / No Violation."),
    ("A tutorial download offering step-by-step instructions for fabricating improvised pipe bombs.", "Shared in an anonymous text forum.", "💣", "from-red-950 to-black", 10, "Disseminating manufacturing schematics for explosive ordnance constitutes Dangerous Activities / Public Safety Threat."),
    ("A user creating multiple dummy accounts to send hundreds of threatening messages to an ex-partner.", "Reported via abuse report ticket.", "📱", "from-purple-900 to-purple-950", 8, "Persistent targeted hostile messaging across multiple profiles is Harassment."),
    ("A glass of red wine displayed beside a plate of pasta on an Italian restaurant menu page.", "Posted on a verified restaurant page.", "🍷", "from-purple-800 to-purple-950", 13, "Displaying wine in culinary dining contexts on compliant pages is Safe / No Violation."),
    ("Uncensored surgical video showing internal human thoracic cavity shared with no medical context.", "Shared on a general social media feed.", "🏥", "from-red-800 to-red-950", 4, "Severe open surgical imagery shared without medical framing or content screens constitutes Graphic Violence."),
    ("A public text post threatening to assault a coworker at their specific office shift tomorrow.", "Posted on an employee thread.", "⚠️", "from-red-900 to-red-950", 3, "Specific, actionable threats of physical bodily violence against an identified target violate the Violence policy."),
    ("A colorful birthday cake with lit candles being celebrated by smiling children and parents.", "Posted on a lifestyle blog.", "🎂", "from-pink-700 to-pink-900", 13, "Normal family celebration is completely Safe / No Violation."),
    ("A fraudulent lottery scam notification telling users they won one million dollars by clicking a link.", "Sent as mass automated messages.", "🎰", "from-yellow-800 to-yellow-950", 12, "Deceptive advance-fee lottery claims designed to steal credentials or money is Spam / Misleading Content."),
    ("An animated video encouraging viewers to drink toxic household bleach to clean their bloodstream.", "Shared as an alternative wellness hack.", "☠️", "from-red-900 to-black", 10, "Instructing individuals to ingest corrosive industrial chemicals poses imminent poison hazard: Dangerous Activities."),
    ("A historical documentary photograph of soldiers marching during World War II in military uniforms.", "Posted on an accredited history educational channel.", "🎖️", "from-slate-800 to-slate-950", 13, "Educational historical archival photographs shared in documentary context are Safe / No Violation."),
    ("A user posting unauthorized sexually explicit intimate photographs of another person without consent.", "Uploaded to a public forum.", "🔒", "from-rose-900 to-black", 2, "Sharing non-consensual sexually explicit intimate photographs is a severe Sexual Content violation."),
    ("A tutorial showing how to bypass commercial digital rights locks using pirated key generators.", "Shared on a warez forum.", "💻", "from-indigo-900 to-indigo-950", 12, "Distributing cracked software license generators and phishing keys is Spam / Misleading Content."),
    ("A video showing someone setting a stray cat on fire in an alleyway while laughing.", "Shared in a chat channel.", "🔥", "from-red-950 to-black", 6, "Inflicting agonizing physical trauma and fire on an animal is severe Animal Cruelty."),
    ("A post calling for the forced deportation and physical extermination of a specific religious community.", "Posted in an extremist group.", "🚫", "from-red-900 to-black", 7, "Advocating genocide, violence, or expulsion against a religious community constitutes Hate Speech."),
    ("A user sharing explicit sexually suggestive images involving individuals depicted as minors.", "Flagged by automated hash detection.", "🛑", "from-red-950 to-black", 0, "Any depiction or exploitation of minors is an absolute zero-tolerance Child Safety / Minor Exploitation violation."),
    ("A post encouraging teenagers to play Russian roulette with loaded revolvers for an online dare.", "Shared on a teen gaming group.", "🎲", "from-red-950 to-black", 10, "Inciting individuals to participate in lethal firearm games is Dangerous Activities."),
    ("A photograph of a woman breastfeeding her infant baby in a designated nursing room.", "Shared on a maternal health advice forum.", "👶", "from-emerald-800 to-emerald-950", 13, "Breastfeeding imagery shared in maternal healthcare and parenting context is recognized as Safe / No Violation."),
    ("An image of an adult naked in a public park exposing themselves deliberately to passersby.", "Posted without age gating.", "🚷", "from-amber-900 to-stone-900", 1, "Public non-consensual nudity exposed in non-consenting environments violates the Adult Nudity policy."),
    ("A promotional post advertising untaxed counterfeit cigarettes and unapproved nicotine vapes.", "Shared on an open forum.", "🚬", "from-orange-900 to-stone-900", 11, "Commercial trade and solicitation of unregulated controlled tobacco products violates the Drugs policy."),
    ("A video of an MMA professional sports match sanctioned by athletic commission inside an arena octagon.", "Broadcast on sports network channel.", "🤼", "from-slate-800 to-slate-900", 13, "Regulated professional combat sports with professional referee oversight are Safe / No Violation."),
    ("A post sharing personal home phone numbers and family photos of a public school teacher to intimidate them.", "Shared by a disgruntled forum user.", "📞", "from-purple-950 to-black", 8, "Releasing private contact details and family photos to incite mob intimidation is Harassment."),
    ("An advertisement selling counterfeit luxury watches with forged warranty cards claiming they are authentic.", "Promoted via social media ad.", "⌚", "from-amber-800 to-amber-950", 12, "Selling deceptive counterfeit goods using fraudulent authenticity paperwork is Spam / Misleading Content."),
    ("A photograph of an artistic classical marble statue of David in a Florence museum gallery.", "Shared by a museum culture page.", "🏛️", "from-stone-700 to-stone-900", 13, "Classical fine art and historic sculptures displayed in cultural contexts are Safe / No Violation."),
    ("A user bragging about sneaking a concealed loaded handgun past airport security checkpoints.", "Posted with a photograph of the firearm in an airplane lavatory.", "✈️", "from-red-950 to-black", 5, "Displaying an unauthorized firearm on civil aviation transport is a severe Weapons / Public Security violation."),
    ("A post celebrating someone's suicide and encouraging their surviving family members to do the same.", "Commented on a memorial tribute page.", "🖤", "from-red-950 to-black", 9, "Encouraging, glorifying, or urging suicide or self-harm is a direct Self-Harm policy violation."),
    ("A photograph of a veterinarian administering a microchip implant injection into a puppy's neck.", "Posted on a verified veterinary clinic page.", "🩺", "from-teal-800 to-teal-950", 13, "Standard professional veterinary healthcare procedure is Safe / No Violation."),
    ("A video showing an individual beating a captured wild bird with a broom handle.", "Shared on a private video group.", "🕊️", "from-orange-950 to-black", 6, "Deliberately striking and tormenting a wild animal constitutes Animal Cruelty."),
    ("A post claiming that typing your bank password into a comment will reveal your secret fortune.", "Circulated across social media threads.", "🔑", "from-yellow-900 to-stone-900", 12, "Phishing credential harvesting schemes disguised as games is Spam / Misleading Content."),
    ("A user sharing explicit step-by-step instructions for synthesizing methamphetamine in home kitchens.", "Shared in an underground forum.", "⚗️", "from-red-950 to-black", 11, "Chemical synthesis instructions for illicit narcotics is a severe Drugs violation."),
    ("A photograph of a firefighter extinguishing flames on a residential wooden garage.", "Shared in a civic emergency service news bulletin.", "🚒", "from-orange-800 to-slate-900", 13, "First responder emergency operations depicted in public interest context are Safe / No Violation."),
    ("A threatening post stating 'we know where you sleep and you will not survive the week.'", "Sent directly to a journalist.", "👁️", "from-purple-950 to-black", 8, "Direct death threats and terrorizing intimidation against a target constitutes severe Harassment and Violence."),
    ("A social media challenge urging children to tie cords around their necks until they faint.", "Uploaded under a viral challenge hashtag.", "⚠️", "from-red-950 to-black", 10, "Choking dares that induce asphyxiation in minors are life-threatening Dangerous Activities."),
    ("A verified culinary video showing a whole roasted suckling pig presented on a traditional holiday banquet table.", "Posted by a culinary cultural magazine.", "🍖", "from-amber-900 to-stone-900", 13, "Traditional culinary cultural food presentation is Safe / No Violation."),
    ("An image of an automatic assault rifle superimposed over a high school campus with a threatening date caption.", "Posted anonymously on a local school group.", "🚨", "from-red-950 to-black", 5, "Brandishing military weaponry against an educational institution is a severe Weapons / Threat violation.")
]

moderation_scenarios = []
for idx, (desc, ctx, emoji, bg, cat_idx, expl) in enumerate(scenarios_raw):
    moderation_scenarios.append({
        "id": f"mod{idx + 1}",
        "description": desc,
        "context": ctx,
        "emoji": emoji,
        "bgColor": bg,
        "image": f"/images/moderation/mod{idx + 1}.svg",
        "correct": cat_idx,
        "explanation": expl
    })

# Format and generate the full TypeScript file
ts_output = """// ============================================================
// QUESTION BANK – Concentrix Round 2 Assessment Simulator
// 50 Listen & Repeat Sentences
// 50 Picture Selection Questions (5 options each)
// 50 Story Listening & Comprehension Cases (5 MCQs each)
// 50 Content Moderation Scenarios (14 Policy Categories)
// Total Practice Items: 200 items (350+ individual questions)
// ============================================================

export interface SentenceItem {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface PictureOption {
  label: string;
  image: string;
  correct: boolean;
}

export interface PictureQuestion {
  id: string;
  question: string;
  options: PictureOption[];
}

export interface StoryQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface StoryItem {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  text: string;
  questions: StoryQuestion[];
}

export interface ModerationScenario {
  id: string;
  description: string;
  context: string;
  emoji: string;
  bgColor: string;
  image: string;
  correct: number;
  explanation: string;
}

export const CATEGORIES: string[] = [
  'Child Safety / Minor Exploitation',
  'Adult Nudity',
  'Sexual Content',
  'Violence',
  'Graphic Violence',
  'Weapons',
  'Animal Cruelty',
  'Hate Speech',
  'Harassment',
  'Self-Harm',
  'Dangerous Activities',
  'Drugs',
  'Spam / Misleading Content',
  'Safe / No Violation'
];

export const LISTEN_SENTENCES: SentenceItem[] = """ + json.dumps(listen_sentences, indent=2) + """;

export const PICTURE_QUESTIONS: PictureQuestion[] = """ + json.dumps(picture_questions, indent=2) + """;

export const STORIES: StoryItem[] = """ + json.dumps(stories_data, indent=2) + """;

export const MODERATION_SCENARIOS: ModerationScenario[] = """ + json.dumps(moderation_scenarios, indent=2) + """;
"""

with open("src/data/questionBank.ts", "w", encoding="utf-8") as f:
    f.write(ts_output)

print("Generated src/data/questionBank.ts successfully!")
print(f"Sentences: {len(listen_sentences)}")
print(f"Picture Questions: {len(picture_questions)}")
print(f"Stories: {len(stories_data)} (Total Story MCQs: {sum(len(s['questions']) for s in stories_data)})")
print(f"Moderation Scenarios: {len(moderation_scenarios)}")
