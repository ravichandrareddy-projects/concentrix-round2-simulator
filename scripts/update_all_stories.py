import json

stories = [
    {
        "id": "st1",
        "title": "The Delayed Package",
        "difficulty": "easy",
        "text": "Maria ordered a birthday gift for her mother online last Monday. The website said the item would arrive within three days. By Friday, the package had not arrived. She contacted customer service and spoke to an agent named James. James checked the tracking system and discovered the package was held at a local warehouse due to an incorrect address. He updated the address in the system and arranged for a re-delivery the following morning. Maria thanked James and left a positive review for his helpful service. The package arrived safely on Saturday, just in time for the birthday celebration on Sunday.",
        "questions": [
            {
                "question": "When did Maria place the online order for her mother's birthday gift?",
                "options": ["Last Monday", "Last Friday", "Last Sunday", "Last Wednesday"],
                "correct": 0
            },
            {
                "question": "What was the name of the customer service agent who assisted Maria?",
                "options": ["James", "Robert", "David", "Marcus"],
                "correct": 0
            },
            {
                "question": "Why was the package held at the local warehouse?",
                "options": ["Incorrect address", "Payment failure", "Item out of stock", "Damaged contents"],
                "correct": 0
            },
            {
                "question": "On which day did the package finally arrive at Maria's home?",
                "options": ["Saturday", "Sunday", "Friday", "Monday"],
                "correct": 0
            },
            {
                "question": "What action did Maria take after receiving James's help?",
                "options": ["Left a positive review", "Canceled the gift", "Demanded a refund", "Filed a complaint"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st2",
        "title": "The Lost Hotel Reservation",
        "difficulty": "medium",
        "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
        "questions": [
            {
                "question": "Which city was the Grand Horizon Hotel located in?",
                "options": ["Chicago", "New York", "Seattle", "Denver"],
                "correct": 0
            },
            {
                "question": "What was the name of the front desk associate who helped Rachel?",
                "options": ["Marcus", "James", "Kevin", "Daniel"],
                "correct": 0
            },
            {
                "question": "Why could Rachel's reservation not be found for that weekend?",
                "options": ["It was booked for the following weekend by mistake", "The credit card was declined", "The hotel canceled all reservations", "Her room was given to a conference speaker"],
                "correct": 0
            },
            {
                "question": "Where did Marcus find an executive king room for Rachel?",
                "options": ["At a sister hotel two blocks away", "At the airport hotel", "On the top floor penthouse", "At her home town hotel"],
                "correct": 0
            },
            {
                "question": "What extra complimentary perks did Marcus provide Rachel?",
                "options": ["Free taxi fare and breakfast coupons", "A free dinner and spa voucher", "A fifty percent cash refund", "Free airline tickets home"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st3",
        "title": "Flight Delay at the Airport",
        "difficulty": "medium",
        "text": "David arrived at the international airport at six in the morning for his flight to Singapore, scheduled for eight fifteen. At seven thirty, the departure board displayed a three-hour delay due to scheduled mechanical maintenance on the aircraft. Passengers were directed to the customer assistance desk where airline agent Sarah distributed meal vouchers worth twenty dollars each and arranged free Wi-Fi access passes. Sarah kept passengers informed with updates every thirty minutes over the terminal speakers. The flight finally departed at eleven forty-five, and David appreciated the transparent communication and smooth coordination during the delay.",
        "questions": [
            {
                "question": "Where was David traveling to?",
                "options": ["Singapore", "Tokyo", "London", "Sydney"],
                "correct": 0
            },
            {
                "question": "What caused the three-hour flight delay?",
                "options": ["Mechanical maintenance on aircraft", "Severe thunderstorms", "Air traffic controller strike", "Missing flight crew"],
                "correct": 0
            },
            {
                "question": "What was the value of the meal vouchers Sarah distributed?",
                "options": ["Twenty dollars", "Ten dollars", "Fifty dollars", "Thirty dollars"],
                "correct": 0
            },
            {
                "question": "How often did Sarah provide updates over the speakers?",
                "options": ["Every thirty minutes", "Every ten minutes", "Every hour", "Only once before boarding"],
                "correct": 0
            },
            {
                "question": "At what time did David's flight finally depart?",
                "options": ["Eleven forty-five", "Eight fifteen", "Ten o'clock", "One in the afternoon"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st4",
        "title": "Customer Internet Outage Resolution",
        "difficulty": "medium",
        "text": "A remote worker named Robert called technical support because his home fiber internet connection had been dropping intermittently for three days, impacting his work. The technical agent, Elena, ran a diagnostic line test and noticed high packet loss originating from the outdoor optical fiber terminal. She scheduled a field technician named Carlos to visit Robert's home the next morning between nine and eleven. Carlos replaced the damaged optical splitter outside and tested the signal speed, which restored full gigabit connectivity. Elena followed up with Robert by telephone that afternoon to verify the repair and applied a twenty-five dollar loyalty discount to his monthly bill.",
        "questions": [
            {
                "question": "How long had Robert's internet connection been dropping intermittently?",
                "options": ["Three days", "One week", "Two hours", "One month"],
                "correct": 0
            },
            {
                "question": "What was the name of the technical support agent who ran the line test?",
                "options": ["Elena", "Sarah", "Jessica", "Rachel"],
                "correct": 0
            },
            {
                "question": "What component did the field technician Carlos replace?",
                "options": ["The outdoor optical splitter", "The indoor router power supply", "The computer network card", "The coaxial TV line"],
                "correct": 0
            },
            {
                "question": "What credit did Elena apply to Robert's monthly bill?",
                "options": ["Twenty-five dollar loyalty discount", "Fifty dollar full refund", "Ten dollar gift card", "Free router upgrade"],
                "correct": 0
            },
            {
                "question": "How did Elena follow up with Robert after the technician's visit?",
                "options": ["By telephone that afternoon", "By postal mail", "Through an online survey", "She did not follow up"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st5",
        "title": "The Grocery Delivery Mix-Up",
        "difficulty": "easy",
        "text": "On Wednesday morning, Chen placed a grocery order through an online delivery app for a family dinner he was hosting that evening. The order included fresh salmon, organic asparagus, and specialty olive oil. When the delivery driver arrived at two in the afternoon, Chen discovered the grocery bags contained chicken breasts and bell peppers belonging to another customer. Chen contacted customer support via live chat and connected with an agent named Priya. Priya immediately initiated a priority replacement delivery from the nearest supermarket, which arrived within forty-five minutes, and credited ten dollars to Chen's account for the inconvenience. Chen prepared dinner on time.",
        "questions": [
            {
                "question": "What special dinner item had Chen originally ordered?",
                "options": ["Fresh salmon, organic asparagus, and olive oil", "Chicken breasts and bell peppers", "Beef steaks and red wine", "Sushi and green tea"],
                "correct": 0
            },
            {
                "question": "At what time did the initial incorrect delivery arrive?",
                "options": ["Two in the afternoon", "Ten in the morning", "Six in the evening", "Noon"],
                "correct": 0
            },
            {
                "question": "What was the name of the live chat agent who assisted Chen?",
                "options": ["Priya", "Elena", "Chloe", "Emma"],
                "correct": 0
            },
            {
                "question": "How fast did the replacement grocery delivery arrive?",
                "options": ["Within forty-five minutes", "Within three hours", "The next morning", "In twenty minutes"],
                "correct": 0
            },
            {
                "question": "How much credit did Priya add to Chen's account?",
                "options": ["Ten dollars", "Twenty-five dollars", "Five dollars", "Fifty dollars"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st6",
        "title": "The Lost Luggage at Heathrow",
        "difficulty": "medium",
        "text": "Priya landed at London Heathrow Airport on Thursday afternoon at three o'clock after an eight-hour flight from Mumbai. When the carousel stopped, her maroon hard-shell suitcase was nowhere to be found. She reported the issue to the baggage service desk, where an agent named Oliver tracked the baggage tag. Oliver discovered that the luggage had accidentally remained on the aircraft in Mumbai and was being forwarded on the next evening flight. Oliver provided Priya with an emergency overnight toiletry kit, fifty pounds in shopping vouchers, and arranged for direct courier delivery to her hotel in Kensington by Friday morning. Priya was impressed by Oliver's professional handling.",
        "questions": [
            {
                "question": "What time did Priya's flight land at London Heathrow Airport?",
                "options": ["Three o'clock on Thursday afternoon", "Eight o'clock in the morning", "Friday at noon", "Six in the evening"],
                "correct": 0
            },
            {
                "question": "What color and type was Priya's missing luggage?",
                "options": ["A maroon hard-shell suitcase", "A black leather duffel bag", "A blue nylon backpack", "A yellow plastic trunk"],
                "correct": 0
            },
            {
                "question": "What was the name of the baggage service agent who assisted Priya?",
                "options": ["Oliver", "James", "Kevin", "Daniel"],
                "correct": 0
            },
            {
                "question": "What did Oliver provide Priya as immediate assistance?",
                "options": ["An emergency toiletry kit and fifty pounds in vouchers", "A free return flight ticket", "A new suitcase from airport duty-free", "A hotel room upgrade"],
                "correct": 0
            },
            {
                "question": "Where was Priya's suitcase scheduled to be delivered on Friday morning?",
                "options": ["Her hotel in Kensington", "Her office in Mumbai", "The Heathrow baggage carousel", "Her home address in London"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st7",
        "title": "The Overcharged Credit Card Bill",
        "difficulty": "medium",
        "text": "On Monday morning, Carlos reviewed his monthly credit card statement and noticed an unfamiliar charge of two hundred and forty dollars from a car rental agency in Miami. Carlos had never visited Florida, so he immediately dialed customer service. A support representative named Jessica reviewed the transaction history and verified that Carlos's physical card had been used in Dallas on the same afternoon. Recognizing this as fraudulent card cloning, Jessica instantly blocked the compromised card, reversed the two hundred and forty dollar charge, and expedited a new security-chipped card to his home in Austin via express mail within forty-eight hours. Carlos thanked Jessica for her swift action.",
        "questions": [
            {
                "question": "How much was the unfamiliar charge that Carlos noticed on his statement?",
                "options": ["Two hundred and forty dollars", "One hundred dollars", "Three hundred and fifty dollars", "Five hundred dollars"],
                "correct": 0
            },
            {
                "question": "In which city was the unauthorized car rental charge made?",
                "options": ["Miami", "Dallas", "Austin", "Chicago"],
                "correct": 0
            },
            {
                "question": "What was the name of the customer support agent who helped Carlos?",
                "options": ["Jessica", "Chloe", "Sarah", "Maria"],
                "correct": 0
            },
            {
                "question": "Where was Carlos actually located when the fraudulent charge occurred?",
                "options": ["Dallas", "Miami", "Seattle", "Atlanta"],
                "correct": 0
            },
            {
                "question": "How quickly did Jessica arrange for the new card to arrive at Carlos's home in Austin?",
                "options": ["Within forty-eight hours", "Within one week", "By the end of the month", "Next business day morning"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st8",
        "title": "The Broken Espresso Machine",
        "difficulty": "medium",
        "text": "Emma bought a high-end espresso coffee machine from a department store in Seattle for her new café. On its very first morning, water began leaking from the bottom base during brewing. Frustrated because opening day was only two days away, Emma called the manufacturer's helpline. A technical support specialist named Kevin asked her to check the serial number under the drip tray. Kevin realized an internal pressure seal had dislodged during shipping. Rather than making Emma wait for repairs, Kevin dispatched a brand-new replacement unit with same-day priority courier and included two free bags of Italian roast coffee beans. The new machine arrived at five in the evening, allowing Emma to open on schedule.",
        "questions": [
            {
                "question": "In which city was Emma opening her new café?",
                "options": ["Seattle", "Portland", "Chicago", "San Francisco"],
                "correct": 0
            },
            {
                "question": "What problem occurred with the espresso machine on its first morning?",
                "options": ["Water leaked from the bottom base", "The power cord caught fire", "The coffee grinder was jammed", "The heating element failed"],
                "correct": 0
            },
            {
                "question": "Where was the serial number located on the espresso machine?",
                "options": ["Under the drip tray", "On the water tank lid", "Behind the steam wand", "On the power cable plug"],
                "correct": 0
            },
            {
                "question": "What complimentary gift did Kevin include with the replacement machine?",
                "options": ["Two free bags of Italian roast coffee beans", "A set of four ceramic espresso cups", "A stainless steel milk pitcher", "A fifty dollar coupon"],
                "correct": 0
            },
            {
                "question": "At what time did the replacement coffee machine arrive at Emma's café?",
                "options": ["Five in the evening", "Eight in the morning", "Noon", "Nine at night"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st9",
        "title": "The Urgent Prescription Refill",
        "difficulty": "medium",
        "text": "On a snowy Friday evening, seventy-year-old Arthur realized he had only two heart medication tablets remaining before a long holiday weekend. His local clinic in Denver was already closed. Worried about running out, Arthur called his online pharmacy helpline. A care coordinator named Sarah looked up his active prescription history and saw that his doctor had approved a sixty-day refill earlier that week. Because courier shipping was halted due to the snowstorm, Sarah contacted a partner twenty-four-hour pharmacy located just three miles from Arthur's home and transferred a temporary emergency supply. Arthur's daughter picked up the medicine within an hour, and Arthur praised Sarah's lifesaving care.",
        "questions": [
            {
                "question": "How many heart medication tablets did Arthur have remaining on Friday?",
                "options": ["Only two tablets", "Ten tablets", "A full bottle", "Five tablets"],
                "correct": 0
            },
            {
                "question": "Which city did Arthur live in?",
                "options": ["Denver", "Boston", "Detroit", "Minneapolis"],
                "correct": 0
            },
            {
                "question": "What was the name of the pharmacy care coordinator who took Arthur's call?",
                "options": ["Sarah", "Jessica", "Elena", "Chloe"],
                "correct": 0
            },
            {
                "question": "Why was standard courier delivery unavailable on Friday evening?",
                "options": ["Courier shipping was halted due to a snowstorm", "The warehouse was on strike", "The delivery truck broke down", "Arthur's address was unverified"],
                "correct": 0
            },
            {
                "question": "Who picked up the emergency medication from the partner pharmacy?",
                "options": ["Arthur's daughter", "Arthur himself", "A neighbor", "A hospital nurse"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st10",
        "title": "The Canceled Concert Tickets",
        "difficulty": "medium",
        "text": "Liam purchased four VIP tickets to an outdoor music festival in Austin, Texas, to celebrate his brother's graduation. Two days before the concert, Liam received an email notification that his order had been canceled due to a payment verification mismatch. Panicked, Liam called ticketing customer support and spoke with an agent named Chloe. Chloe inspected the banking records and saw that Liam's bank had flagged the sudden purchase as suspicious. After Liam verified his billing address and identity code, Chloe manually restored the four VIP tickets in section B and added complimentary backstage pass lanyards to apologize for the stress. Liam and his brother enjoyed a memorable concert.",
        "questions": [
            {
                "question": "What special occasion was Liam celebrating with his brother?",
                "options": ["His brother's graduation", "A milestone birthday", "A job promotion", "A wedding anniversary"],
                "correct": 0
            },
            {
                "question": "How many VIP tickets had Liam purchased for the festival in Austin?",
                "options": ["Four VIP tickets", "Two VIP tickets", "Six VIP tickets", "Eight VIP tickets"],
                "correct": 0
            },
            {
                "question": "What was the name of the ticketing support agent who resolved the issue?",
                "options": ["Chloe", "Sarah", "Brenda", "Priya"],
                "correct": 0
            },
            {
                "question": "Why had the ticket order been automatically canceled?",
                "options": ["Bank flagged transaction as payment mismatch", "The concert was sold out", "The festival was rained out", "The venue was moved"],
                "correct": 0
            },
            {
                "question": "What complimentary perk did Chloe add to Liam's restored tickets?",
                "options": ["Backstage pass lanyards", "Free parking pass", "Two food festival t-shirts", "Half-price drink coupons"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st11",
        "title": "The Stranded Commuter in Chicago",
        "difficulty": "medium",
        "text": "On a bitter Tuesday morning, Nina's electric vehicle battery drained completely while she was driving along Lake Shore Drive in Chicago. Stranded in freezing temperatures, Nina activated the emergency roadside assistance button on her dashboard. A dispatcher named Daniel immediately took her coordinates and confirmed a service truck was ten minutes away. While Nina waited in the car with emergency hazards on, Daniel stayed on the phone with her to monitor her safety and provide tips on conserving cabin heat. The mobile technician arrived, performed a rapid ten-minute battery boost, and provided Nina with a thermal blanket and a hot travel thermos of tea. Nina was deeply grateful for Daniel's compassionate support.",
        "questions": [
            {
                "question": "Along which famous roadway did Nina's electric vehicle battery drain?",
                "options": ["Lake Shore Drive in Chicago", "Broadway in New York", "Sunset Boulevard in Los Angeles", "Michigan Avenue in Detroit"],
                "correct": 0
            },
            {
                "question": "What day of the week did the vehicle emergency occur?",
                "options": ["Tuesday morning", "Friday afternoon", "Saturday evening", "Sunday night"],
                "correct": 0
            },
            {
                "question": "What was the name of the emergency roadside dispatcher?",
                "options": ["Daniel", "Marcus", "Carlos", "Kevin"],
                "correct": 0
            },
            {
                "question": "What did Daniel do while Nina waited for the service truck to arrive?",
                "options": ["Stayed on the call to monitor safety and share heat tips", "Transferred her to an insurance bot", "Told her to walk to the nearest station", "Called her family members"],
                "correct": 0
            },
            {
                "question": "What did the technician provide Nina along with the battery boost?",
                "options": ["A thermal blanket and a thermos of hot tea", "A replacement rental vehicle", "A battery warranty certificate", "A twenty dollar gas card"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st12",
        "title": "The Missing Graduation Gown",
        "difficulty": "medium",
        "text": "Three days before her university graduation in Boston, Maya opened the delivery parcel from the campus bookstore and found a master's degree hood in green instead of the crimson hood required for her biomedical program. Anxious that she would not be properly attired on stage, Maya called student support. A representative named Henry verified her student registration number and confirmed the bookstore packaging team had swapped two adjacent bins. Henry arranged for an on-campus courier to deliver the correct crimson hood directly to Maya's dormitory by noon the next day, and waived the eighty-dollar cap and gown rental fee. Maya attended her graduation ceremony on Saturday feeling relieved and proud.",
        "questions": [
            {
                "question": "In which city was Maya attending her university graduation ceremony?",
                "options": ["Boston", "Chicago", "Philadelphia", "Washington"],
                "correct": 0
            },
            {
                "question": "What color was the incorrect hood Maya found in her package?",
                "options": ["Green", "Crimson", "Navy Blue", "Gold"],
                "correct": 0
            },
            {
                "question": "What was the name of the student support representative who assisted Maya?",
                "options": ["Henry", "James", "Oliver", "Marcus"],
                "correct": 0
            },
            {
                "question": "When was the correct crimson hood delivered to Maya's dorm?",
                "options": ["By noon the next day", "On the morning of graduation", "Three days later", "Immediately within thirty minutes"],
                "correct": 0
            },
            {
                "question": "What fee did Henry waive for Maya to compensate for the error?",
                "options": ["The eighty-dollar cap and gown rental fee", "Her graduation diploma fee", "Her semester parking fee", "Her alumni membership fee"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st13",
        "title": "The Damaged Antique Vase",
        "difficulty": "medium",
        "text": "Lucas ordered a rare handcrafted porcelain vase from an art gallery in San Francisco as a wedding gift for his sister. When the wooden crate was delivered to his apartment in Portland, Lucas heard rattling and found the ceramic handle snapped into three pieces. Distressed, Lucas submitted photos through the gallery's online help portal. A senior support specialist named Sophia called Lucas within twenty minutes. Sophia contacted the master ceramic artisan in California, who agreed to hand-sculpt an identical replacement vase on rush order. Sophia also arranged free return pickup for the broken vase and upgraded the shipping to white-glove courier delivery at no extra charge. The new vase arrived safely four days before the wedding.",
        "questions": [
            {
                "question": "What item did Lucas purchase as a wedding gift for his sister?",
                "options": ["A handcrafted porcelain vase", "A framed oil painting", "A set of silver cutlery", "A crystal chandelier"],
                "correct": 0
            },
            {
                "question": "Which city did Lucas live in where the crate was delivered?",
                "options": ["Portland", "San Francisco", "Seattle", "San Diego"],
                "correct": 0
            },
            {
                "question": "How quickly did Sophia call Lucas after reviewing his uploaded damage photos?",
                "options": ["Within twenty minutes", "The next morning", "Within two hours", "Within three business days"],
                "correct": 0
            },
            {
                "question": "How was the replacement vase produced for Lucas?",
                "options": ["Hand-sculpted on rush order by the artisan in California", "Pulled from warehouse dead stock", "Purchased from another antique shop", "Glued back together by a local restorer"],
                "correct": 0
            },
            {
                "question": "When did the replacement vase arrive at Lucas's apartment?",
                "options": ["Four days before the wedding", "On the day of the ceremony", "Two weeks after the wedding", "The following month"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st14",
        "title": "The Incorrect Airline Meal",
        "difficulty": "medium",
        "text": "Sophie was booked on a ten-hour transatlantic flight from New York to Paris. Due to a severe peanut allergy, she had requested a certified nut-free meal three weeks in advance. During cabin service over the Atlantic, the flight attendant discovered that Sophie's special meal was missing from the galley manifest. The lead purser, Antoine, took immediate action. Antoine consulted with the aircraft head chef, inspected sealed first-class fresh fruit and kosher vegetable trays, and prepared a safe, certified allergen-free meal from scratch. Antoine also gave Sophie fifty thousand frequent flyer bonus miles and a voucher for the business lounge at Charles de Gaulle Airport. Sophie felt safe and valued throughout the journey.",
        "questions": [
            {
                "question": "What severe allergy did Sophie report when booking her transatlantic flight?",
                "options": ["Peanut allergy", "Gluten intolerance", "Lactose allergy", "Shellfish allergy"],
                "correct": 0
            },
            {
                "question": "From New York, where was Sophie's flight traveling to?",
                "options": ["Paris", "London", "Rome", "Madrid"],
                "correct": 0
            },
            {
                "question": "What was the name of the lead purser who resolved Sophie's meal issue?",
                "options": ["Antoine", "Oliver", "Marcus", "Daniel"],
                "correct": 0
            },
            {
                "question": "How did Antoine prepare a safe meal for Sophie?",
                "options": ["Inspected sealed trays and prepared an allergen-free meal from scratch", "Gave her crew snacks from his bag", "Asked passengers for non-perishable food", "Offered her only water and juice"],
                "correct": 0
            },
            {
                "question": "What compensation did Antoine award Sophie for the inconvenience?",
                "options": ["Fifty thousand bonus miles and a Paris lounge voucher", "A free round-trip ticket", "A cash refund of five hundred dollars", "A free hotel room in Paris"],
                "correct": 0
            }
        ]
    },
    {
        "id": "st15",
        "title": "The Locked Online Banking Account",
        "difficulty": "medium",
        "text": "On a Thursday afternoon, Samuel was finalizing a deposit payment for his new apartment in Atlanta when his online banking portal suddenly froze and locked his profile. The system indicated suspicious login attempts from an unknown device. In a panic because the landlord needed the wire transfer by five o'clock, Samuel contacted banking fraud prevention. A fraud investigator named Brenda performed a secure multi-factor video identity verification, confirmed the rogue attempts originated from an overseas IP address, and updated Samuel's security credentials. Brenda then personally authorized and executed the rent wire transfer over the phone, waiving the forty-dollar domestic wire fee. Samuel secured his apartment lease without delay.",
        "questions": [
            {
                "question": "What was Samuel attempting to complete when his bank profile was locked?",
                "options": ["A deposit wire payment for his new apartment", "A credit card bill payoff", "An overseas stock investment", "A car loan application"],
                "correct": 0
            },
            {
                "question": "Which city was Samuel's new apartment located in?",
                "options": ["Atlanta", "Chicago", "Miami", "Dallas"],
                "correct": 0
            },
            {
                "question": "What was the name of the fraud prevention specialist who handled Samuel's call?",
                "options": ["Brenda", "Elena", "Sophia", "Chloe"],
                "correct": 0
            },
            {
                "question": "What deadline had the landlord set for the security deposit wire transfer?",
                "options": ["Five o'clock on Thursday afternoon", "Noon on Friday", "Midnight that evening", "Monday morning at nine"],
                "correct": 0
            },
            {
                "question": "What fee did Brenda waive when processing the transfer over the phone?",
                "options": ["The forty-dollar domestic wire transfer fee", "A hundred dollar account unlock fee", "His annual checking account fee", "His credit card annual fee"],
                "correct": 0
            }
        ]
    }
]

print(f"Total rich stories to write: {len(stories)}")

with open("src/data/questionBank.ts", "r") as f:
    content = f.read()

start_marker = "export const STORIES: StoryItem[] = ["
end_marker = "export const APTITUDE_QUESTIONS: AptitudeQuestion[] = ["

s_idx = content.find(start_marker)
e_idx = content.find(end_marker)

if s_idx == -1 or e_idx == -1:
    print("Markers not found in questionBank.ts!")
    exit(1)

json_str = "export const STORIES: StoryItem[] = " + json.dumps(stories, indent=2) + ";\n\n"

new_content = content[:s_idx] + json_str + content[e_idx:]

with open("src/data/questionBank.ts", "w") as f:
    f.write(new_content)

print(f"Successfully updated questionBank.ts with {len(stories)} rich, unique stories!")
