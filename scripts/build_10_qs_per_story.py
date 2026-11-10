import json

stories_data = [
    {
        "id": "st1",
        "title": "The Delayed Package",
        "difficulty": "easy",
        "text": "Maria ordered a birthday gift for her mother online last Monday. The website said the item would arrive within three days. By Friday, the package had not arrived. She contacted customer service and spoke to an agent named James. James checked the tracking system and discovered the package was held at a local warehouse due to an incorrect address. He updated the address in the system and arranged for a re-delivery the following morning. Maria thanked James and left a positive review for his helpful service. The package arrived safely on Saturday, just in time for the birthday celebration on Sunday.",
        "questions": [
            {
                "question": "When did Maria place the online order for her mother's gift?",
                "options": ["Last Monday", "Last Wednesday", "Last Friday", "Two weeks ago"],
                "correct": 0
            },
            {
                "question": "How many days was the website's initial delivery window?",
                "options": ["Three days", "Five days", "Next business day", "One week"],
                "correct": 0
            },
            {
                "question": "On which day did Maria notice the package had not arrived?",
                "options": ["Friday", "Thursday", "Saturday", "Wednesday"],
                "correct": 0
            },
            {
                "question": "What was the name of the customer service agent who handled her call?",
                "options": ["James", "Carlos", "Marcus", "Kevin"],
                "correct": 0
            },
            {
                "question": "Where was the package currently held when James checked tracking?",
                "options": ["At a local warehouse", "At the airport sorting center", "In another state", "On a delivery truck"],
                "correct": 0
            },
            {
                "question": "What was the root cause of the delivery delay?",
                "options": ["An incorrect address on the parcel", "A payment verification failure", "The item was out of stock", "Severe weather cancellation"],
                "correct": 0
            },
            {
                "question": "What did James do in the system to fix the problem?",
                "options": ["Updated the address details", "Canceled the order entirely", "Issued a fifty percent refund", "Charged an extra shipping fee"],
                "correct": 0
            },
            {
                "question": "When did James schedule the re-delivery for?",
                "options": ["The following morning", "The following week", "In three business days", "Next Monday afternoon"],
                "correct": 0
            },
            {
                "question": "On what day did the package finally arrive at Maria's doorstep?",
                "options": ["Saturday", "Sunday", "Friday evening", "Monday morning"],
                "correct": 0
            },
            {
                "question": "What special event was taking place on Sunday?",
                "options": ["Her mother's birthday celebration", "A family wedding reception", "A university graduation party", "An anniversary dinner"],
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
                "question": "Which city did Rachel travel to for her weekend trip?",
                "options": ["Chicago", "New York", "Seattle", "Denver"],
                "correct": 0
            },
            {
                "question": "How long was Rachel's road trip before arriving at the hotel?",
                "options": ["Six hours", "Two hours", "Twelve hours", "Four hours"],
                "correct": 0
            },
            {
                "question": "What was the name of the hotel where Rachel arrived?",
                "options": ["Grand Horizon Hotel", "Ocean View Inn", "City Center Suites", "Marriott Plaza"],
                "correct": 0
            },
            {
                "question": "What was the name of the front desk associate who assisted Rachel?",
                "options": ["Marcus", "James", "Kevin", "Daniel"],
                "correct": 0
            },
            {
                "question": "Why could Rachel's reservation not be found for that weekend?",
                "options": ["It was booked for the following weekend by mistake", "Her payment card was declined", "The hotel canceled all reservations", "Her room was given to a conference keynote speaker"],
                "correct": 0
            },
            {
                "question": "Why was the Grand Horizon Hotel unable to accommodate Rachel on site?",
                "options": ["It was nearly fully booked for a medical conference", "The hotel was under plumbing renovations", "The front desk staff were off duty", "The rooms were reserved for wedding guests"],
                "correct": 0
            },
            {
                "question": "Where was the alternative sister property located?",
                "options": ["Two blocks away", "At the airport ten miles away", "In the next suburban town", "Across the river in another district"],
                "correct": 0
            },
            {
                "question": "What type of room did Marcus secure for Rachel at the sister property?",
                "options": ["An executive king room", "A standard double room", "A corner suite", "A single twin room"],
                "correct": 0
            },
            {
                "question": "What room rate did Rachel have to pay for the new room?",
                "options": ["The same rate as her original booking", "Double the original rate", "A discounted half-price rate", "The room was completely free"],
                "correct": 0
            },
            {
                "question": "What complimentary perks did Marcus provide Rachel for the inconvenience?",
                "options": ["Free taxi fare and breakfast coupons", "A free spa treatment voucher", "Fifty dollars cash refund", "Two free airline boarding passes"],
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
                "question": "At what time did David arrive at the international airport?",
                "options": ["Six in the morning", "Eight fifteen", "Seven thirty", "Five in the morning"],
                "correct": 0
            },
            {
                "question": "Where was David's international flight traveling to?",
                "options": ["Singapore", "Tokyo", "London", "Sydney"],
                "correct": 0
            },
            {
                "question": "What was the original scheduled departure time of David's flight?",
                "options": ["Eight fifteen", "Six o'clock", "Seven thirty", "Eleven forty-five"],
                "correct": 0
            },
            {
                "question": "At what time was the flight delay posted on the departure board?",
                "options": ["Seven thirty", "Eight o'clock", "Six thirty", "Nine o'clock"],
                "correct": 0
            },
            {
                "question": "What was the stated reason for the three-hour flight delay?",
                "options": ["Scheduled mechanical maintenance on aircraft", "Severe thunderstorms and lightning", "Air traffic controller strike", "Missing flight crew members"],
                "correct": 0
            },
            {
                "question": "What was the name of the airline customer service agent?",
                "options": ["Sarah", "Jessica", "Elena", "Chloe"],
                "correct": 0
            },
            {
                "question": "What was the exact value of the meal vouchers given to passengers?",
                "options": ["Twenty dollars", "Ten dollars", "Fifty dollars", "Thirty dollars"],
                "correct": 0
            },
            {
                "question": "What additional pass was provided to delayed passengers?",
                "options": ["Free Wi-Fi access passes", "Lounge access cards", "Duty-free discount vouchers", "Free parking tickets"],
                "correct": 0
            },
            {
                "question": "How often did Sarah broadcast public announcements to passengers?",
                "options": ["Every thirty minutes", "Every ten minutes", "Every hour", "Only once before boarding"],
                "correct": 0
            },
            {
                "question": "At what time did David's flight finally depart?",
                "options": ["Eleven forty-five", "Ten thirty", "Noon", "One fifteen in the afternoon"],
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
                "question": "What was Robert's work arrangement that depended on reliable internet?",
                "options": ["A remote worker", "An in-office manager", "A delivery driver", "A traveling salesman"],
                "correct": 0
            },
            {
                "question": "How long had Robert experienced intermittent connection drops?",
                "options": ["Three days", "One week", "Two hours", "One month"],
                "correct": 0
            },
            {
                "question": "What was the name of the technical support agent who answered Robert's call?",
                "options": ["Elena", "Sarah", "Jessica", "Rachel"],
                "correct": 0
            },
            {
                "question": "What diagnostic fault did Elena identify during the remote line test?",
                "options": ["High packet loss from the outdoor optical terminal", "A corrupted router firmware", "An unpaid billing balance", "A severed indoor coaxial cable"],
                "correct": 0
            },
            {
                "question": "What was the name of the field technician assigned to Robert's house?",
                "options": ["Carlos", "Marcus", "Kevin", "Daniel"],
                "correct": 0
            },
            {
                "question": "In what time window was the field technician scheduled to arrive?",
                "options": ["Between nine and eleven the next morning", "Between two and four in the afternoon", "Early evening after six", "The same day at noon"],
                "correct": 0
            },
            {
                "question": "What specific hardware part was replaced by the field technician?",
                "options": ["The damaged outdoor optical splitter", "The indoor wireless router", "The computer network ethernet card", "The coaxial wall jack"],
                "correct": 0
            },
            {
                "question": "What level of internet speed was restored after the repair?",
                "options": ["Full gigabit connectivity", "One hundred megabits", "Basic dial-up speed", "Five hundred megabits"],
                "correct": 0
            },
            {
                "question": "When did Elena follow up with Robert to confirm service restoration?",
                "options": ["That afternoon by telephone", "The following Monday by email", "She did not follow up", "Two weeks later by letter"],
                "correct": 0
            },
            {
                "question": "What discount amount did Elena apply to Robert's monthly statement?",
                "options": ["Twenty-five dollar loyalty discount", "Fifty dollar full refund", "Ten dollar gift coupon", "One hundred dollar promotional credit"],
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
                "question": "On which day of the week did Chen place his grocery order?",
                "options": ["Wednesday morning", "Monday afternoon", "Friday evening", "Saturday morning"],
                "correct": 0
            },
            {
                "question": "What event was Chen hosting at his home that evening?",
                "options": ["A family dinner", "A birthday party", "A business meeting", "A neighborhood barbecue"],
                "correct": 0
            },
            {
                "question": "Which of the following items was included in Chen's original order?",
                "options": ["Fresh salmon, organic asparagus, and olive oil", "Chicken breasts and bell peppers", "Beef steaks and garlic bread", "Sushi rolls and soy sauce"],
                "correct": 0
            },
            {
                "question": "At what time did the delivery driver arrive with the wrong groceries?",
                "options": ["Two in the afternoon", "Ten in the morning", "Six in the evening", "Noon"],
                "correct": 0
            },
            {
                "question": "What groceries did Chen actually find inside the bags upon delivery?",
                "options": ["Chicken breasts and bell peppers", "Frozen pizza and ice cream", "Pasta and tomato sauce", "Fresh salmon and asparagus"],
                "correct": 0
            },
            {
                "question": "Through what support channel did Chen reach out for assistance?",
                "options": ["Live chat", "Telephone call", "Email support ticket", "In-person store visit"],
                "correct": 0
            },
            {
                "question": "What was the name of the customer support agent who helped Chen?",
                "options": ["Priya", "Elena", "Chloe", "Emma"],
                "correct": 0
            },
            {
                "question": "From where did Priya source the priority replacement groceries?",
                "options": ["The nearest supermarket", "A central regional warehouse", "Another delivery driver", "A farmers market"],
                "correct": 0
            },
            {
                "question": "How quickly did the replacement delivery reach Chen's home?",
                "options": ["Within forty-five minutes", "In two hours", "The next morning", "In twenty minutes"],
                "correct": 0
            },
            {
                "question": "How much courtesy credit was added to Chen's account?",
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
                "question": "What city was Priya's flight originating from before landing in London?",
                "options": ["Mumbai", "Delhi", "Dubai", "Singapore"],
                "correct": 0
            },
            {
                "question": "How many hours long was Priya's flight to London Heathrow?",
                "options": ["Eight hours", "Four hours", "Twelve hours", "Six hours"],
                "correct": 0
            },
            {
                "question": "At what time did Priya's flight land at the airport?",
                "options": ["Three o'clock on Thursday afternoon", "Eight o'clock in the morning", "Friday at noon", "Six in the evening"],
                "correct": 0
            },
            {
                "question": "What was the color and style of Priya's missing luggage?",
                "options": ["A maroon hard-shell suitcase", "A black leather duffel bag", "A blue nylon backpack", "A yellow canvas roller"],
                "correct": 0
            },
            {
                "question": "What was the name of the airport baggage service agent who assisted Priya?",
                "options": ["Oliver", "James", "Kevin", "Daniel"],
                "correct": 0
            },
            {
                "question": "Where had Priya's suitcase mistakenly remained?",
                "options": ["On the aircraft in Mumbai", "At customs inspection in London", "At the hotel in Kensington", "On a wrong baggage carousel"],
                "correct": 0
            },
            {
                "question": "When was the missing suitcase scheduled to be flown into London?",
                "options": ["On the next evening flight", "Three days later", "The following week", "The next morning"],
                "correct": 0
            },
            {
                "question": "What monetary compensation voucher did Oliver provide Priya at the desk?",
                "options": ["Fifty pounds in shopping vouchers", "One hundred dollars cash", "A free round-trip ticket", "Twenty pounds food voucher"],
                "correct": 0
            },
            {
                "question": "What emergency kit was handed to Priya for her immediate overnight stay?",
                "options": ["An emergency overnight toiletry kit", "A set of sleepwear", "A phone charger kit", "A medical first-aid kit"],
                "correct": 0
            },
            {
                "question": "To which London district was Priya's suitcase courier-delivered on Friday morning?",
                "options": ["Kensington", "Westminster", "Camden", "Greenwich"],
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
                "question": "On what day did Carlos review his monthly credit card statement?",
                "options": ["Monday morning", "Friday afternoon", "Sunday evening", "Wednesday morning"],
                "correct": 0
            },
            {
                "question": "What was the exact dollar amount of the fraudulent charge?",
                "options": ["Two hundred and forty dollars", "One hundred dollars", "Three hundred and fifty dollars", "Five hundred dollars"],
                "correct": 0
            },
            {
                "question": "What type of business purportedly billed the unfamiliar charge?",
                "options": ["A car rental agency", "An airline booking site", "A luxury hotel chain", "An electronics retail store"],
                "correct": 0
            },
            {
                "question": "In which city did the unauthorized charge claim to originate?",
                "options": ["Miami", "Dallas", "Austin", "Chicago"],
                "correct": 0
            },
            {
                "question": "What was the name of the bank support representative who assisted Carlos?",
                "options": ["Jessica", "Chloe", "Sarah", "Maria"],
                "correct": 0
            },
            {
                "question": "In which city had Carlos actually used his physical card that same afternoon?",
                "options": ["Dallas", "Miami", "Seattle", "Atlanta"],
                "correct": 0
            },
            {
                "question": "What specific cybercrime pattern did Jessica diagnose from the transactions?",
                "options": ["Fraudulent card cloning", "Identity theft via stolen passport", "Phishing email scam", "ATM skimming at grocery store"],
                "correct": 0
            },
            {
                "question": "What immediate preventative action did Jessica take on Carlos's account?",
                "options": ["Instantly blocked the compromised card", "Lowered his credit limit", "Sent him a warning letter", "Asked him to file a police report first"],
                "correct": 0
            },
            {
                "question": "What happened to the fraudulent two hundred and forty dollar charge?",
                "options": ["It was reversed immediately", "Carlos had to pay half", "It was put on hold for thirty days", "Carlos was billed an investigation fee"],
                "correct": 0
            },
            {
                "question": "To which city was the new security-chipped card express mailed within 48 hours?",
                "options": ["Austin", "Dallas", "Houston", "San Antonio"],
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
                "question": "In which city was Emma preparing to open her new café?",
                "options": ["Seattle", "Portland", "Chicago", "San Francisco"],
                "correct": 0
            },
            {
                "question": "From what kind of establishment did Emma purchase the espresso machine?",
                "options": ["A department store", "An online auction website", "A local secondhand flea market", "A direct wholesale importer"],
                "correct": 0
            },
            {
                "question": "What malfunction did the machine experience on its first morning?",
                "options": ["Water leaked from the bottom base during brewing", "The electrical heating element burned out", "The coffee grinder was jammed", "The steam wand exploded"],
                "correct": 0
            },
            {
                "question": "How many days away was the café's official grand opening date?",
                "options": ["Two days away", "One week away", "The very next morning", "Ten days away"],
                "correct": 0
            },
            {
                "question": "What was the name of the manufacturer's technical specialist who helped Emma?",
                "options": ["Kevin", "Carlos", "Oliver", "Marcus"],
                "correct": 0
            },
            {
                "question": "Where did Kevin instruct Emma to check for the serial number?",
                "options": ["Under the drip tray", "On the water reservoir lid", "Behind the power cable plug", "Underneath the steam gauge"],
                "correct": 0
            },
            {
                "question": "What mechanical issue was determined to have caused the leak?",
                "options": ["An internal pressure seal dislodged during shipping", "A cracked water boiler tank", "A defective power pump", "Loose pipe screws"],
                "correct": 0
            },
            {
                "question": "How did Kevin resolve the issue without delaying the café opening?",
                "options": ["Dispatched a brand-new unit via same-day priority courier", "Instructed Emma how to weld the pipe", "Scheduled a repairman for next month", "Refunded her money and canceled the order"],
                "correct": 0
            },
            {
                "question": "What complimentary promotional item was included with the replacement machine?",
                "options": ["Two free bags of Italian roast coffee beans", "Four ceramic coffee mugs", "A professional barista apron", "A fifty dollar gift card"],
                "correct": 0
            },
            {
                "question": "At what time in the evening was the replacement machine delivered?",
                "options": ["At five in the evening", "At eight in the morning", "At noon", "At nine at night"],
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
                "question": "How old was Arthur at the time of this prescription emergency?",
                "options": ["Seventy years old", "Sixty-five years old", "Eighty years old", "Fifty-five years old"],
                "correct": 0
            },
            {
                "question": "What vital health condition was Arthur's medication treating?",
                "options": ["Heart condition", "Diabetes", "High cholesterol", "Arthritis"],
                "correct": 0
            },
            {
                "question": "Exactly how many tablets did Arthur have remaining on Friday evening?",
                "options": ["Only two tablets", "Ten tablets", "Five tablets", "A full week supply"],
                "correct": 0
            },
            {
                "question": "In which city was Arthur's home located?",
                "options": ["Denver", "Boston", "Detroit", "Minneapolis"],
                "correct": 0
            },
            {
                "question": "What weather event prevented home courier medication delivery?",
                "options": ["A severe snowstorm", "A tornado warning", "Flooding from heavy rain", "An ice storm"],
                "correct": 0
            },
            {
                "question": "What was the name of the online pharmacy care coordinator who took the call?",
                "options": ["Sarah", "Jessica", "Elena", "Chloe"],
                "correct": 0
            },
            {
                "question": "How many days of refill had Arthur's doctor already approved earlier that week?",
                "options": ["Sixty-day refill", "Thirty-day refill", "Ninety-day refill", "Fourteen-day refill"],
                "correct": 0
            },
            {
                "question": "How far was the partner 24-hour pharmacy from Arthur's house?",
                "options": ["Three miles away", "Ten miles away", "One block away", "Five miles away"],
                "correct": 0
            },
            {
                "question": "Who picked up the emergency medication from the pharmacy?",
                "options": ["Arthur's daughter", "Arthur himself", "A neighbor", "A visiting nurse"],
                "correct": 0
            },
            {
                "question": "How quickly was the emergency prescription retrieved?",
                "options": ["Within an hour", "The next morning", "In three hours", "Within twenty minutes"],
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
                "question": "How many VIP tickets did Liam originally order for the music festival?",
                "options": ["Four VIP tickets", "Two VIP tickets", "Six VIP tickets", "Eight VIP tickets"],
                "correct": 0
            },
            {
                "question": "In which city was the outdoor music festival taking place?",
                "options": ["Austin, Texas", "Nashville, Tennessee", "Miami, Florida", "Los Angeles, California"],
                "correct": 0
            },
            {
                "question": "What milestone was Liam celebrating with his brother?",
                "options": ["His brother's graduation", "A milestone birthday", "A promotion at work", "A wedding celebration"],
                "correct": 0
            },
            {
                "question": "How many days before the concert did Liam receive the cancellation notice?",
                "options": ["Two days before", "One week before", "On the morning of the show", "Five days before"],
                "correct": 0
            },
            {
                "question": "What reason was provided for the automatic cancellation of the tickets?",
                "options": ["A payment verification mismatch", "The concert was sold out", "The venue changed locations", "The band canceled the show"],
                "correct": 0
            },
            {
                "question": "What was the name of the ticketing support agent who resolved Liam's issue?",
                "options": ["Chloe", "Sarah", "Brenda", "Priya"],
                "correct": 0
            },
            {
                "question": "What did Liam provide over the phone to confirm his identity?",
                "options": ["His billing address and identity code", "His passport photograph", "His driver's license number", "His college student ID"],
                "correct": 0
            },
            {
                "question": "In which seating section were the four VIP tickets restored?",
                "options": ["Section B", "Section A", "Section VIP-1", "Front row general admission"],
                "correct": 0
            },
            {
                "question": "What complimentary perk did Chloe attach to the restored tickets?",
                "options": ["Backstage pass lanyards", "Free parking voucher", "Food and beverage vouchers", "Festival commemorative t-shirts"],
                "correct": 0
            },
            {
                "question": "What was the final outcome for Liam and his brother?",
                "options": ["They enjoyed a memorable concert together", "They arrived late and missed the headliner", "They refunded the tickets and stayed home", "They were denied entry at the gates"],
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
                "question": "On which day of the week did Nina's electric vehicle battery deplete?",
                "options": ["Tuesday morning", "Friday evening", "Sunday afternoon", "Thursday morning"],
                "correct": 0
            },
            {
                "question": "Along which famous roadway in Chicago was Nina driving?",
                "options": ["Lake Shore Drive", "Michigan Avenue", "Wacker Drive", "State Street"],
                "correct": 0
            },
            {
                "question": "How did Nina initiate contact with emergency roadside services?",
                "options": ["The dashboard emergency roadside button", "A smartphone app", "Flagged down a passing driver", "Called 911 on her phone"],
                "correct": 0
            },
            {
                "question": "What was the name of the emergency dispatcher who coordinated the rescue?",
                "options": ["Daniel", "Marcus", "Carlos", "Kevin"],
                "correct": 0
            },
            {
                "question": "How long was the estimated arrival time of the assistance service truck?",
                "options": ["Ten minutes away", "Thirty minutes away", "An hour away", "Five minutes away"],
                "correct": 0
            },
            {
                "question": "What vehicle lights did Nina keep activated while waiting on the road?",
                "options": ["Emergency hazard lights", "High beam headlights", "Interior dome lights", "Fog lights only"],
                "correct": 0
            },
            {
                "question": "How did Daniel support Nina while she waited for the truck to arrive?",
                "options": ["Stayed on the line to monitor safety and share heat tips", "Transferred her to an automated hotline", "Told her to seek shelter in a nearby store", "Called her family members"],
                "correct": 0
            },
            {
                "question": "How long did the technician take to perform the mobile battery boost?",
                "options": ["Ten minutes", "Thirty minutes", "One hour", "Five minutes"],
                "correct": 0
            },
            {
                "question": "What hot beverage was offered to Nina by the technician?",
                "options": ["A travel thermos of tea", "Hot coffee", "Hot chocolate", "Warm soup"],
                "correct": 0
            },
            {
                "question": "What warming item did the mobile technician provide Nina upon arrival?",
                "options": ["A thermal blanket", "A pair of winter gloves", "A heated vest", "A winter scarf"],
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
                "question": "In which city was Maya attending university and preparing to graduate?",
                "options": ["Boston", "Chicago", "Philadelphia", "Washington"],
                "correct": 0
            },
            {
                "question": "What academic field was Maya's master's degree in?",
                "options": ["Biomedical program", "Business administration", "Civil engineering", "Computer science"],
                "correct": 0
            },
            {
                "question": "What color was the incorrect hood Maya found inside her package?",
                "options": ["Green", "Crimson", "Navy Blue", "Gold"],
                "correct": 0
            },
            {
                "question": "What color was the required academic hood for Maya's ceremony?",
                "options": ["Crimson", "Green", "White", "Silver"],
                "correct": 0
            },
            {
                "question": "How many days before the graduation ceremony did Maya discover the error?",
                "options": ["Three days before", "One day before", "A week before", "On the morning of the event"],
                "correct": 0
            },
            {
                "question": "What was the name of the student support representative who helped Maya?",
                "options": ["Henry", "James", "Oliver", "Marcus"],
                "correct": 0
            },
            {
                "question": "What was the operational cause of the mistaken hood delivery?",
                "options": ["Bookstore packaging team swapped adjacent bins", "The supplier ran out of crimson fabric", "Maya entered the wrong degree code", "The order was labeled with the wrong name"],
                "correct": 0
            },
            {
                "question": "Where was the replacement crimson hood delivered for Maya?",
                "options": ["Directly to Maya's dormitory", "To the bookstore pickup counter", "To the stage backstage holding area", "To her parents' house"],
                "correct": 0
            },
            {
                "question": "By what time the following day did the replacement hood arrive?",
                "options": ["By noon the next day", "By five in the evening", "At eight in the morning", "At three in the afternoon"],
                "correct": 0
            },
            {
                "question": "What fee did Henry waive to compensate Maya for the stress?",
                "options": ["The eighty-dollar cap and gown rental fee", "Her graduation diploma filing fee", "Her semester parking permit fee", "Her graduation dinner ticket"],
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
                "question": "For what special event did Lucas purchase the porcelain vase?",
                "options": ["His sister's wedding", "His mother's retirement", "His parents' anniversary", "A housewarming celebration"],
                "correct": 0
            },
            {
                "question": "From what type of business did Lucas purchase the handcrafted vase?",
                "options": ["An art gallery in San Francisco", "An online import website", "A local antique shop", "A home decor department store"],
                "correct": 0
            },
            {
                "question": "In which city was Lucas's apartment located where the crate arrived?",
                "options": ["Portland", "Seattle", "San Francisco", "Salt Lake City"],
                "correct": 0
            },
            {
                "question": "What specific damage did Lucas find when he opened the wooden crate?",
                "options": ["The ceramic handle was snapped into three pieces", "The vase base was completely shattered", "The exterior glaze was scratched", "The rim had a hairline crack"],
                "correct": 0
            },
            {
                "question": "What was the name of the senior customer support specialist at the gallery?",
                "options": ["Sophia", "Jessica", "Elena", "Sarah"],
                "correct": 0
            },
            {
                "question": "How quickly did Sophia call Lucas after he uploaded the damage photos?",
                "options": ["Within twenty minutes", "Within two hours", "The next morning", "Within twenty-four hours"],
                "correct": 0
            },
            {
                "question": "Who agreed to create an identical replacement vase on rush order?",
                "options": ["The master ceramic artisan in California", "A factory production line in Oregon", "A local restoration technician", "A backup apprentice potter"],
                "correct": 0
            },
            {
                "question": "What delivery upgrade did Sophia provide for the replacement shipment?",
                "options": ["White-glove courier delivery at no extra charge", "Overnight cargo air freight", "Same-day drone delivery", "Insured postal delivery"],
                "correct": 0
            },
            {
                "question": "How was the damaged broken vase handled?",
                "options": ["Sophia arranged free return pickup", "Lucas was told to throw it in the trash", "Lucas had to mail it at his own cost", "The artisan asked to keep it"],
                "correct": 0
            },
            {
                "question": "How many days before the wedding did the new replacement vase arrive?",
                "options": ["Four days before the wedding", "On the morning of the wedding", "Two weeks before the wedding", "The day after the wedding"],
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
                "question": "Between which two cities was Sophie flying on her transatlantic journey?",
                "options": ["New York to Paris", "Boston to London", "Chicago to Frankfurt", "Los Angeles to Tokyo"],
                "correct": 0
            },
            {
                "question": "What was the total flight duration of Sophie's trip?",
                "options": ["Ten hours", "Six hours", "Fourteen hours", "Eight hours"],
                "correct": 0
            },
            {
                "question": "What severe medical condition did Sophie report prior to travel?",
                "options": ["A severe peanut allergy", "Gluten intolerance", "Lactose allergy", "A seafood allergy"],
                "correct": 0
            },
            {
                "question": "How far in advance had Sophie requested her certified allergen-free meal?",
                "options": ["Three weeks in advance", "One week in advance", "At check-in at the airport", "Forty-eight hours before"],
                "correct": 0
            },
            {
                "question": "Where did the flight attendant discover that Sophie's meal was missing?",
                "options": ["From the galley manifest", "From the cargo baggage hold", "From the passenger seat list", "From the airport catering truck"],
                "correct": 0
            },
            {
                "question": "What was the name and title of the lead purser who resolved the problem?",
                "options": ["Antoine", "Oliver", "Marcus", "Daniel"],
                "correct": 0
            },
            {
                "question": "How did Antoine and the head chef assemble a safe meal for Sophie?",
                "options": ["Inspected sealed fruit and kosher vegetable trays to prepare from scratch", "Offered her pre-packaged dry snacks from crew luggage", "Asked passengers in nearby rows for packaged food", "Gave her bread rolls and butter"],
                "correct": 0
            },
            {
                "question": "How many frequent flyer bonus miles did Antoine deposit into Sophie's account?",
                "options": ["Fifty thousand bonus miles", "Ten thousand miles", "Twenty-five thousand miles", "One hundred thousand miles"],
                "correct": 0
            },
            {
                "question": "Which airport lounge did Sophie receive a complimentary voucher for?",
                "options": ["Charles de Gaulle Airport business lounge", "JFK International Terminal 4 lounge", "Heathrow Terminal 5 lounge", "Orly Airport arrival lounge"],
                "correct": 0
            },
            {
                "question": "How did Sophie feel about the service she received during the flight?",
                "options": ["Safe and valued throughout the journey", "Upset and anxious the whole time", "Hungry and disappointed with the food", "Frustrated by the crew's slow response"],
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
                "question": "In which city was Samuel finalizing an apartment lease deposit?",
                "options": ["Atlanta", "Chicago", "Miami", "Dallas"],
                "correct": 0
            },
            {
                "question": "What crucial financial transaction was Samuel attempting to execute?",
                "options": ["A deposit payment for his new apartment", "A credit card payment", "An international wire to an investment broker", "A student loan payoff"],
                "correct": 0
            },
            {
                "question": "On which day of the week was Samuel making the payment?",
                "options": ["Thursday afternoon", "Monday morning", "Friday evening", "Saturday morning"],
                "correct": 0
            },
            {
                "question": "Why did the online banking portal freeze and lock Samuel's profile?",
                "options": ["Suspicious login attempts from an unknown device", "His checking account had insufficient funds", "He entered an expired credit card number", "The entire bank network suffered a power failure"],
                "correct": 0
            },
            {
                "question": "What was the landlord's strict deadline for receiving the wire transfer?",
                "options": ["Five o'clock on Thursday afternoon", "Noon on Friday", "Midnight that evening", "Nine in the morning on Friday"],
                "correct": 0
            },
            {
                "question": "What was the name of the fraud investigator who assisted Samuel?",
                "options": ["Brenda", "Elena", "Sophia", "Chloe"],
                "correct": 0
            },
            {
                "question": "How did Brenda securely verify Samuel's identity during the call?",
                "options": ["Secure multi-factor video identity verification", "Sent a postal mail code", "Asked for his mother's maiden name only", "Required an in-person branch appointment"],
                "correct": 0
            },
            {
                "question": "From where did the unauthorized login attempts originate according to the logs?",
                "options": ["An overseas IP address", "A local internet café", "A mobile network in Atlanta", "A public airport Wi-Fi hotspot"],
                "correct": 0
            },
            {
                "question": "How did Brenda ensure the landlord received the rent deposit on time?",
                "options": ["Personally authorized and executed the wire transfer over the phone", "Told Samuel to withdraw cash from an ATM", "Wrote a physical cashier's check", "Asked the landlord to grant a two-day extension"],
                "correct": 0
            },
            {
                "question": "What fee did Brenda waive for Samuel to alleviate the stress of the incident?",
                "options": ["The forty-dollar domestic wire fee", "His annual checking maintenance fee", "A hundred dollar account unlocking fee", "His wire tracking surcharge"],
                "correct": 0
            }
        ]
    }
]

# Update questionBank.ts
with open("src/data/questionBank.ts", "r") as f:
    content = f.read()

start_marker = "export const STORIES: StoryItem[] = ["
end_marker = "export const APTITUDE_QUESTIONS: AptitudeQuestion[] = ["

s_idx = content.find(start_marker)
e_idx = content.find(end_marker)

if s_idx == -1 or e_idx == -1:
    print("Markers not found in questionBank.ts!")
    exit(1)

json_str = "export const STORIES: StoryItem[] = " + json.dumps(stories_data, indent=2) + ";\n\n"
new_content = content[:s_idx] + json_str + content[e_idx:]

with open("src/data/questionBank.ts", "w") as f:
    f.write(new_content)

print(f"Successfully wrote {len(stories_data)} stories with 10 questions each to questionBank.ts!")
