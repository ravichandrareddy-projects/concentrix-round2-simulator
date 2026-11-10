// ============================================================
// CONCENTRIX ROUND 2 QUESTION BANK (CORRECTED SPECIFICATION)
// Session 1: 100 Sentences (40% Easy, 40% Med, 15% Hard, 5% Challenge)
// Session 2: 50 Stories (80-150 words, 5 MCQs each)
// Session 3: 105 Mixed Aptitude Qs (Pie charts, Nested squares, Numerical, Logical)
// Session 4: 100 Content Moderation Scenarios (14 categories, "Appropriate Content")
// ============================================================

export interface SentenceItem {
  id: string;
  text: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'challenge';
  wordCount: number;
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

export interface AptitudeQuestion {
  id: string;
  category: 'data-interpretation' | 'image-reasoning' | 'non-verbal-reasoning' | 'numerical-aptitude' | 'logical-reasoning';
  type?: 'chart-pie' | 'chart-bar' | 'table' | 'nested-squares' | 'geometric-pattern' | 'shl-dual-pie' | 'shl-ppe-match' | 'shl-odd-one-out' | 'none';
  passageTitle?: string;
  passageText?: string;
  chartImage?: string;
  chartData?: any;
  tableData?: any;
  patternData?: any;
  optionImages?: string[];
  question: string;
  options: string[];
  correct: number;
  explanation: string;
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
  "Child Safety",
  "Adult Nudity",
  "Sexual Content",
  "Violence",
  "Graphic Violence",
  "Weapons",
  "Animal Cruelty",
  "Hate Speech",
  "Harassment",
  "Self-Harm",
  "Dangerous Activities",
  "Drugs",
  "Spam",
  "Appropriate Content"
];

export const LISTEN_SENTENCES: SentenceItem[] = [
  {
    "id": "ls1",
    "text": "Insert a coin and choose a drink.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls2",
    "text": "Please take your seat now.",
    "difficulty": "easy",
    "wordCount": 5
  },
  {
    "id": "ls3",
    "text": "I am sorry for the delay.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls4",
    "text": "Please keep files in this folder.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls5",
    "text": "The bank closes at five o clock.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls6",
    "text": "How can I help you today?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls7",
    "text": "Please sign your name here.",
    "difficulty": "easy",
    "wordCount": 5
  },
  {
    "id": "ls8",
    "text": "He will call you tomorrow morning.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls9",
    "text": "Thank you for calling our team.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls10",
    "text": "Your order is ready now.",
    "difficulty": "easy",
    "wordCount": 5
  },
  {
    "id": "ls11",
    "text": "Please hold the line a moment.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls12",
    "text": "The shop opens at nine tomorrow.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls13",
    "text": "We sent you an email today.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls14",
    "text": "Press one to speak in English.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls15",
    "text": "I will check your ticket now.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls16",
    "text": "Can you hear me clearly now?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls17",
    "text": "Have a great day ahead.",
    "difficulty": "easy",
    "wordCount": 5
  },
  {
    "id": "ls18",
    "text": "Please leave your message after tone.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls19",
    "text": "Your bill is paid in full.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls20",
    "text": "The morning train leaves very soon.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls21",
    "text": "Where is your local office located?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls22",
    "text": "Welcome to our customer service store.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls23",
    "text": "Please wait here for your turn.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls24",
    "text": "I can help you with that.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls25",
    "text": "What is your full first name?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls26",
    "text": "She will send the form today.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls27",
    "text": "The doctor is ready for you.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls28",
    "text": "Let me find your account file.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls29",
    "text": "Can you speak a little louder?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls30",
    "text": "Your table is ready for lunch.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls31",
    "text": "Please write down this phone number.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls32",
    "text": "The car is parked right outside.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls33",
    "text": "We have received your payment safely.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls34",
    "text": "Turn left at the next corner.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls35",
    "text": "I will call you back shortly.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls36",
    "text": "Please take your bag and keys.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls37",
    "text": "Is this your current home address?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls38",
    "text": "We open seven days every week.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls39",
    "text": "Can I take your food order?",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls40",
    "text": "Your morning flight is on time.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls41",
    "text": "You can check in three hours before flight.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls42",
    "text": "I will check your account balance right now.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls43",
    "text": "Please tell me your phone number once more.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls44",
    "text": "The package will arrive at your home tomorrow.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls45",
    "text": "Please spell your last name for me slowly.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls46",
    "text": "We are happy to answer all your questions.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls47",
    "text": "The store will remain open until eight tonight.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls48",
    "text": "Your new credit card will arrive next week.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls49",
    "text": "Please click the link sent to your phone.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls50",
    "text": "Our agent will visit your home this evening.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls51",
    "text": "You will get a message with your code.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls52",
    "text": "Please carry your identity card with you today.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls53",
    "text": "The manager is speaking with another customer now.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls54",
    "text": "Let me transfer your call to our manager.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls55",
    "text": "We have updated your mobile number on file.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls56",
    "text": "Please confirm if your home address is correct.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls57",
    "text": "You can track your order on our website.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls58",
    "text": "The refund was sent to your bank account.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls59",
    "text": "Please keep your payment receipt in a safe place.",
    "difficulty": "medium",
    "wordCount": 9
  },
  {
    "id": "ls60",
    "text": "Our customer service center is open every day.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls61",
    "text": "I will send a quick message right away.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls62",
    "text": "Could you please hold on for one minute?",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls63",
    "text": "Your flight ticket was booked for next Monday.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls64",
    "text": "Please bring two photos for your new card.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls65",
    "text": "You can pay using cash or your card.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls66",
    "text": "The delivery person will call before arriving today.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls67",
    "text": "We apologize for the delay in your order.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls68",
    "text": "Please let me know if you need anything.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls69",
    "text": "All our team members are ready to help.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls70",
    "text": "Your monthly bill is ready to view now.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls71",
    "text": "Can you tell me your order tracking number?",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls72",
    "text": "Please verify the details on your screen now.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls73",
    "text": "We sent a new package to your address.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls74",
    "text": "You will receive an email within one hour.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls75",
    "text": "Please speak clearly after the short audio tone.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls76",
    "text": "The payment was accepted by our computer system.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls77",
    "text": "We will resolve this issue by this evening.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls78",
    "text": "Your account password was updated without any error.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls79",
    "text": "Please check your mailbox for our official letter.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls80",
    "text": "Thank you for choosing our banking services today.",
    "difficulty": "medium",
    "wordCount": 8
  },
  {
    "id": "ls81",
    "text": "May I have your name, email address, and phone number?",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls82",
    "text": "Although the bus was late, we arrived on time.",
    "difficulty": "hard",
    "wordCount": 9
  },
  {
    "id": "ls83",
    "text": "Please keep your card ready before you start the call.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls84",
    "text": "We will send an agent to your house this afternoon.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls85",
    "text": "Please make sure your phone battery is charged before testing.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls86",
    "text": "The manager will meet all new customers in the lobby.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls87",
    "text": "You can change your delivery address until tomorrow morning.",
    "difficulty": "hard",
    "wordCount": 9
  },
  {
    "id": "ls88",
    "text": "Please read the short note printed on the back cover.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls89",
    "text": "Our staff will guide you through every simple step.",
    "difficulty": "hard",
    "wordCount": 9
  },
  {
    "id": "ls90",
    "text": "If you face any problem, please call us right away.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls91",
    "text": "The repair person will arrive between two and four.",
    "difficulty": "hard",
    "wordCount": 9
  },
  {
    "id": "ls92",
    "text": "Please remember to sign the paper before you submit it.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls93",
    "text": "You can download the mobile app from the app store.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls94",
    "text": "All visitors must register their names at the front desk.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls95",
    "text": "I have noted your request and sent it to billing.",
    "difficulty": "hard",
    "wordCount": 10
  },
  {
    "id": "ls96",
    "text": "Thank you for waiting, and I am glad to help you today.",
    "difficulty": "challenge",
    "wordCount": 12
  },
  {
    "id": "ls97",
    "text": "Please check your spam folder if you do not see our message.",
    "difficulty": "challenge",
    "wordCount": 12
  },
  {
    "id": "ls98",
    "text": "We are sending a link to reset your account password right now.",
    "difficulty": "challenge",
    "wordCount": 12
  },
  {
    "id": "ls99",
    "text": "You can collect your package from the nearest store after five o clock.",
    "difficulty": "challenge",
    "wordCount": 13
  },
  {
    "id": "ls100",
    "text": "Please keep this reference number safe for all your future questions.",
    "difficulty": "challenge",
    "wordCount": 11
  }
];

export const STORIES: StoryItem[] = [
  {
    "id": "st1",
    "title": "The Delayed Package",
    "difficulty": "easy",
    "text": "Maria ordered a birthday gift for her mother online last Monday. The website said the item would arrive within three days. By Friday, the package had not arrived. She contacted customer service and spoke to an agent named James. James checked the tracking system and discovered the package was held at a local warehouse due to an incorrect address. He updated the address in the system and arranged for a re-delivery the following morning. Maria thanked James and left a positive review for his helpful service. The package arrived safely on Saturday, just in time for the birthday celebration on Sunday.",
    "questions": [
      {
        "question": "Why was Maria's package delayed?",
        "options": [
          "The item was out of stock",
          "The address was incorrect",
          "The warehouse was closed",
          "She ordered the wrong item"
        ],
        "correct": 1
      },
      {
        "question": "Who helped Maria resolve the delivery issue?",
        "options": [
          "A warehouse manager",
          "Her neighbor",
          "An agent named James",
          "The delivery driver"
        ],
        "correct": 2
      },
      {
        "question": "When did Maria initially order the gift?",
        "options": [
          "Last Monday",
          "Last Friday",
          "The previous Saturday",
          "Two weeks ago"
        ],
        "correct": 0
      },
      {
        "question": "What corrective action did James take?",
        "options": [
          "Sent a replacement item",
          "Gave a full refund",
          "Updated the address and arranged re-delivery",
          "Cancelled the entire order"
        ],
        "correct": 2
      },
      {
        "question": "On which day did the package arrive?",
        "options": [
          "Friday evening",
          "Saturday morning",
          "Sunday afternoon",
          "Monday morning"
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "st2",
    "title": "A Productive Team Meeting",
    "difficulty": "medium",
    "text": "The sales team at GlobaLink Solutions held their weekly meeting on Tuesday morning at ten o'clock. The team leader, Sandra, opened the session by reviewing last month's performance figures. She announced that the team had exceeded their quarterly target by fifteen percent. Following the announcement, two team members presented new ideas for increasing client retention. The first idea involved personalized follow-up emails after each service interaction. The second idea proposed a loyalty rewards program for long-term customers. Sandra approved both proposals and assigned action items to specific team members. The meeting concluded at eleven thirty and everyone left feeling motivated.",
    "questions": [
      {
        "question": "On which day did the team meeting take place?",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "correct": 1
      },
      {
        "question": "By how much did the team exceed their quarterly target?",
        "options": [
          "Ten percent",
          "Fifteen percent",
          "Twenty percent",
          "Five percent"
        ],
        "correct": 1
      },
      {
        "question": "What was the first idea proposed during the meeting?",
        "options": [
          "A loyalty rewards program",
          "Personalized follow-up emails",
          "Weekly team bonuses",
          "Free product samples"
        ],
        "correct": 1
      },
      {
        "question": "Who serves as the team leader?",
        "options": [
          "James",
          "Maria",
          "Sandra",
          "Robert"
        ],
        "correct": 2
      },
      {
        "question": "What time did the meeting conclude?",
        "options": [
          "Ten thirty",
          "Eleven o'clock",
          "Eleven thirty",
          "Twelve o'clock"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st3",
    "title": "Flight Delay at the Airport",
    "difficulty": "medium",
    "text": "David arrived at the international airport at six in the morning for his flight to Singapore, scheduled for eight fifteen. After checking in and passing through security, he noticed on the departure board that his flight had been delayed by two hours due to bad weather conditions. He approached the airline information desk and was told that passengers would receive meal vouchers as compensation for the delay. David used his voucher to have breakfast at the airport caf\u00e9. He also called his business partner in Singapore to reschedule their morning meeting. The flight eventually departed at ten twenty and arrived in Singapore late in the afternoon.",
    "questions": [
      {
        "question": "What caused David's flight to be delayed?",
        "options": [
          "Technical aircraft problems",
          "Bad weather conditions",
          "Airport staff strike",
          "Overbooking of seats"
        ],
        "correct": 1
      },
      {
        "question": "When was David's flight originally scheduled to depart?",
        "options": [
          "Six in the morning",
          "Eight fifteen",
          "Ten twenty",
          "Late afternoon"
        ],
        "correct": 1
      },
      {
        "question": "What compensation did the airline provide to passengers?",
        "options": [
          "Cash refund",
          "Free ticket upgrade",
          "Meal vouchers",
          "Hotel accommodation"
        ],
        "correct": 2
      },
      {
        "question": "What did David do after learning about the flight delay?",
        "options": [
          "He returned home",
          "He rebooked on another airline",
          "He ate breakfast and rescheduled his meeting",
          "He filed a formal legal complaint"
        ],
        "correct": 2
      },
      {
        "question": "At what time did the flight eventually take off?",
        "options": [
          "Eight fifteen",
          "Nine o'clock",
          "Ten twenty",
          "Eleven forty-five"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st4",
    "title": "Customer Complaint Resolution",
    "difficulty": "medium",
    "text": "A customer named Robert called the technical support line because his internet connection had been unstable for three days. The support agent, Lisa, asked him to describe the problem and then ran a series of diagnostic tests remotely. She identified that the issue was caused by an outdated modem firmware. Lisa guided Robert through the update process step by step over the phone. After the update was complete, the connection stabilized. Robert expressed his satisfaction and mentioned that he had been considering switching to another provider. Because of Lisa's professional and efficient service, he decided to stay with the company. Lisa also arranged a service credit on Robert's next bill as a goodwill gesture.",
    "questions": [
      {
        "question": "What primary problem was Robert experiencing?",
        "options": [
          "A broken mobile smartphone",
          "Unstable internet connection",
          "An incorrect billing charge",
          "A physically damaged modem"
        ],
        "correct": 1
      },
      {
        "question": "What was the technical cause of the internet instability?",
        "options": [
          "Severed street cables",
          "Outdated modem firmware",
          "Regional network outage",
          "Too many connected computers"
        ],
        "correct": 1
      },
      {
        "question": "What was Robert considering doing prior to Lisa's assistance?",
        "options": [
          "Upgrading his broadband speed",
          "Relocating to another city",
          "Switching to a competitor provider",
          "Purchasing expensive new hardware"
        ],
        "correct": 2
      },
      {
        "question": "What goodwill gesture did Lisa provide to Robert?",
        "options": [
          "Dispatched a technician free of charge",
          "Gave brand new modem hardware",
          "Arranged a service credit on his next bill",
          "Doubled his download speed permanently"
        ],
        "correct": 2
      },
      {
        "question": "How did Lisa diagnose the technical malfunction?",
        "options": [
          "Asked him to visit a retail store",
          "Transferred him to field engineering",
          "Ran remote diagnostic tests over the network",
          "Requested he wait twenty-four hours"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st5",
    "title": "The Grocery Delivery Mix-Up",
    "difficulty": "easy",
    "text": "On Wednesday morning, Chen placed a grocery order through an online delivery app for a family dinner he was hosting that evening. He ordered chicken, vegetables, rice, and cooking oil. When the delivery arrived at noon, he noticed that the chicken was replaced with fish and the cooking oil was missing. He contacted the app's customer support through the chat feature. The agent apologized and explained that some items were unavailable at the nearest store and had been substituted without prior notification. The agent immediately arranged a delivery of the missing oil and offered a twenty-five percent discount on Chen's next order. Chen managed to prepare a modified dinner menu using the fish instead.",
    "questions": [
      {
        "question": "Why did Chen order groceries online that morning?",
        "options": [
          "For an office lunch party",
          "For a family dinner that evening",
          "For a neighborhood picnic",
          "To restock his grocery store"
        ],
        "correct": 1
      },
      {
        "question": "What error occurred with Chen's delivered items?",
        "options": [
          "All items were spoiled",
          "Fish replaced chicken and oil was missing",
          "Vegetables were missing completely",
          "Rice was substituted with pasta"
        ],
        "correct": 1
      },
      {
        "question": "How did Chen reach out to customer support?",
        "options": [
          "Via telephone call",
          "By emailing the warehouse",
          "Through the app's live chat feature",
          "By visiting the physical branch"
        ],
        "correct": 2
      },
      {
        "question": "Why were the substitutions made without notification?",
        "options": [
          "Driver grabbed the wrong cart",
          "System mixed up two orders",
          "Items were out of stock at nearest store",
          "Order was placed after cutoff hours"
        ],
        "correct": 2
      },
      {
        "question": "What compensation did the customer service agent grant?",
        "options": [
          "A hundred percent refund",
          "Free premium membership",
          "Twenty-five percent discount on next order",
          "Free kitchen appliances"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st6",
    "title": "The Lost Hotel Reservation (Case #6)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st7",
    "title": "The Lost Hotel Reservation (Case #7)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st8",
    "title": "The Lost Hotel Reservation (Case #8)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st9",
    "title": "The Lost Hotel Reservation (Case #9)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st10",
    "title": "The Lost Hotel Reservation (Case #10)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st11",
    "title": "The Lost Hotel Reservation (Case #11)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st12",
    "title": "The Lost Hotel Reservation (Case #12)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st13",
    "title": "The Lost Hotel Reservation (Case #13)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st14",
    "title": "The Lost Hotel Reservation (Case #14)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st15",
    "title": "The Lost Hotel Reservation (Case #15)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st16",
    "title": "The Lost Hotel Reservation (Case #16)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st17",
    "title": "The Lost Hotel Reservation (Case #17)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st18",
    "title": "The Lost Hotel Reservation (Case #18)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st19",
    "title": "The Lost Hotel Reservation (Case #19)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st20",
    "title": "The Lost Hotel Reservation (Case #20)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st21",
    "title": "The Lost Hotel Reservation (Case #21)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st22",
    "title": "The Lost Hotel Reservation (Case #22)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st23",
    "title": "The Lost Hotel Reservation (Case #23)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st24",
    "title": "The Lost Hotel Reservation (Case #24)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st25",
    "title": "The Lost Hotel Reservation (Case #25)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st26",
    "title": "The Lost Hotel Reservation (Case #26)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st27",
    "title": "The Lost Hotel Reservation (Case #27)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st28",
    "title": "The Lost Hotel Reservation (Case #28)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st29",
    "title": "The Lost Hotel Reservation (Case #29)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st30",
    "title": "The Lost Hotel Reservation (Case #30)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st31",
    "title": "The Lost Hotel Reservation (Case #31)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st32",
    "title": "The Lost Hotel Reservation (Case #32)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st33",
    "title": "The Lost Hotel Reservation (Case #33)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st34",
    "title": "The Lost Hotel Reservation (Case #34)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st35",
    "title": "The Lost Hotel Reservation (Case #35)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st36",
    "title": "The Lost Hotel Reservation (Case #36)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st37",
    "title": "The Lost Hotel Reservation (Case #37)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st38",
    "title": "The Lost Hotel Reservation (Case #38)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st39",
    "title": "The Lost Hotel Reservation (Case #39)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st40",
    "title": "The Lost Hotel Reservation (Case #40)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st41",
    "title": "The Lost Hotel Reservation (Case #41)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st42",
    "title": "The Lost Hotel Reservation (Case #42)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st43",
    "title": "The Lost Hotel Reservation (Case #43)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st44",
    "title": "The Lost Hotel Reservation (Case #44)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st45",
    "title": "The Lost Hotel Reservation (Case #45)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st46",
    "title": "The Lost Hotel Reservation (Case #46)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st47",
    "title": "The Lost Hotel Reservation (Case #47)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st48",
    "title": "The Lost Hotel Reservation (Case #48)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st49",
    "title": "The Lost Hotel Reservation (Case #49)",
    "difficulty": "medium",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "st50",
    "title": "The Lost Hotel Reservation (Case #50)",
    "difficulty": "easy",
    "text": "Rachel arrived at the Grand Horizon Hotel in Chicago after a six-hour road trip, only to learn that her weekend reservation could not be found in the front desk computer system. The front desk associate, Marcus, calmly verified her confirmation code and discovered that her booking had been scheduled for the following weekend due to a date selection error online. Because the hotel was nearly fully booked for a medical conference, Marcus contacted a sister property two blocks away, secured an executive king room at the same rate, and provided complimentary taxi fare and breakfast coupons for her stay. Rachel expressed deep gratitude for his quick problem-solving.",
    "questions": [
      {
        "question": "Why could Marcus not find Rachel's booking for tonight?",
        "options": [
          "Her credit card declined payment",
          "Her booking was erroneously made for next weekend",
          "The hotel system crashed completely",
          "She arrived at the incorrect hotel brand"
        ],
        "correct": 1
      },
      {
        "question": "Why was the Grand Horizon Hotel nearly full?",
        "options": [
          "A holiday tourist rush",
          "A large medical conference",
          "A sports championship game",
          "An airline flight cancellation wave"
        ],
        "correct": 1
      },
      {
        "question": "Where did Marcus arrange an alternative room for Rachel?",
        "options": [
          "At his personal residence",
          "At an airport motel ten miles away",
          "At a sister hotel two blocks away",
          "In the hotel staff quarters"
        ],
        "correct": 2
      },
      {
        "question": "What additional amenities did Marcus provide?",
        "options": [
          "Dinner vouchers and spa access",
          "Complimentary taxi fare and breakfast coupons",
          "Fifty percent cash refund",
          "Free luggage storage for a week"
        ],
        "correct": 1
      },
      {
        "question": "How did Rachel travel to Chicago?",
        "options": [
          "By regional express train",
          "On a domestic flight",
          "A six-hour road trip drive",
          "Via interstate bus line"
        ],
        "correct": 2
      }
    ]
  }
];

export const APTITUDE_QUESTIONS: AptitudeQuestion[] = [
  {
    "id": "shl1",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Workplace Safety & First Aid Protocol \u2013 Fungicide Handling",
      "headers": [
        "Substance Code",
        "Target Organ Hazard",
        "Exposure Route",
        "Mandatory Protective Equipment"
      ],
      "rows": [
        [
          "Fungicide A",
          "Dermal chemical burn",
          "Direct skin contact",
          "Chemical-resistant waterproof rubber gloves"
        ],
        [
          "Fungicide B",
          "Airborne aerosol mist",
          "Inhalation route",
          "Particulate vapor respirator mask"
        ],
        [
          "Fungicide C",
          "Liquid splash irritation",
          "Direct ocular contact",
          "Polycarbonate safety goggles"
        ],
        [
          "Fungicide D",
          "Overhead orchard drift",
          "Impact and falling branches",
          "Hard shell construction helmet"
        ]
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
      "title": "Workplace Safety & First Aid Protocol \u2013 Fungicide Handling",
      "headers": [
        "Substance Code",
        "Target Organ Hazard",
        "Exposure Route",
        "Mandatory Protective Equipment"
      ],
      "rows": [
        [
          "Fungicide A",
          "Dermal chemical burn",
          "Direct skin contact",
          "Chemical-resistant waterproof rubber gloves"
        ],
        [
          "Fungicide B",
          "Airborne aerosol mist",
          "Inhalation route",
          "Particulate vapor respirator mask"
        ],
        [
          "Fungicide C",
          "Liquid splash irritation",
          "Direct ocular contact",
          "Polycarbonate safety goggles"
        ],
        [
          "Fungicide D",
          "Overhead orchard drift",
          "Impact and falling branches",
          "Hard shell construction helmet"
        ]
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
      "title": "Workplace Safety & First Aid Protocol \u2013 Fungicide Handling",
      "headers": [
        "Substance Code",
        "Target Organ Hazard",
        "Exposure Route",
        "Mandatory Protective Equipment"
      ],
      "rows": [
        [
          "Fungicide A",
          "Dermal chemical burn",
          "Direct skin contact",
          "Chemical-resistant waterproof rubber gloves"
        ],
        [
          "Fungicide B",
          "Airborne aerosol mist",
          "Inhalation route",
          "Particulate vapor respirator mask"
        ],
        [
          "Fungicide C",
          "Liquid splash irritation",
          "Direct ocular contact",
          "Polycarbonate safety goggles"
        ],
        [
          "Fungicide D",
          "Overhead orchard drift",
          "Impact and falling branches",
          "Hard shell construction helmet"
        ]
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
      "headers": [
        "Operational Area",
        "Continuous Sound Level",
        "Permissible Exposure Time",
        "Mandatory Hearing Protection"
      ],
      "rows": [
        [
          "Packaging Bay A",
          "78 dB(A)",
          "8 hours (standard)",
          "None required"
        ],
        [
          "Stamping Press Area",
          "98 dB(A)",
          "Less than 45 minutes",
          "Industrial Acoustic Ear Defenders / Muffs"
        ],
        [
          "Office Dispatch",
          "65 dB(A)",
          "Unlimited",
          "None required"
        ],
        [
          "Assembly Bench",
          "72 dB(A)",
          "8 hours",
          "Optional ear plugs"
        ]
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
      "headers": [
        "Job Role",
        "Primary Physical Risk",
        "Safety Regulation Code",
        "Mandatory Footwear Standard"
      ],
      "rows": [
        [
          "Forklift Marshaller",
          "Falling heavy pallets / crush injury",
          "EN ISO 20345 S3",
          "Steel-Toed Puncture-Resistant Boots"
        ],
        [
          "Inventory Clerk",
          "Slip on dry concrete",
          "EN ISO 20347",
          "Anti-slip soft sole shoes"
        ],
        [
          "Customer Desk",
          "Minimal mechanical risk",
          "General standard",
          "Standard closed-toe shoes"
        ]
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
      "headers": [
        "Work Environment",
        "Visibility Condition",
        "Vehicle Hazard Level",
        "Mandatory Personal Protective Equipment"
      ],
      "rows": [
        [
          "Night Apron Marshalling",
          "Low light / high moving machinery",
          "Extreme",
          "Fluorescent High-Visibility Vest with Retroreflective Bands"
        ],
        [
          "Terminal Baggage Office",
          "Well lit interior",
          "Low",
          "Standard uniform"
        ],
        [
          "Fuel Storage Depot",
          "Vapor risk area",
          "Medium",
          "Anti-static flame retardant overalls"
        ]
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
      "headers": [
        "Task Description",
        "Cable Category",
        "Connector Type",
        "Required Termination Hand Tool"
      ],
      "rows": [
        [
          "LAN Patch Cord Assembly",
          "Cat 6 / Cat 6A UTP",
          "Modular RJ-45 (8P8C)",
          "Ratchet RJ-45 Modular Crimping Tool"
        ],
        [
          "Fiber Backbone Jointing",
          "Single Mode 9/125",
          "LC / SC Ceramic",
          "Fusion Splicer with Precision Cleaver"
        ],
        [
          "Coaxial Feed Feedline",
          "RG-6 75 Ohm",
          "BNC Compression",
          "Coax Hex Compression Tool"
        ]
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
      "headers": [
        "Inspection Step",
        "Target Parameter",
        "Safety Category",
        "Required Diagnostic Instrument"
      ],
      "rows": [
        [
          "Step 1: Voltage Verification",
          "AC Line-to-Neutral Voltage (230V)",
          "CAT III 600V",
          "True-RMS Digital Multimeter with Probes"
        ],
        [
          "Step 2: Circuit Breaker Tightening",
          "Lug torque tolerance (2.5 Nm)",
          "Insulated 1000V",
          "VDE Insulated Torque Screwdriver"
        ],
        [
          "Step 3: Thermal Audit",
          "Terminal busbar hotspot detection",
          "Non-contact",
          "Infrared Thermal Imaging Camera"
        ]
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
      "title": "Facility Emergency Response \u2013 Fire Suppression Equipment",
      "headers": [
        "Fire Classification",
        "Fuel / Hazard Source",
        "Suppression Agent",
        "Designated Extinguisher Type"
      ],
      "rows": [
        [
          "Class A",
          "Wood, paper, packaging cartons",
          "Water / AFFF foam",
          "Water Mist Extinguisher"
        ],
        [
          "Class B & C (Electrical)",
          "Energized server racks, PDUs, telecom routers",
          "Residue-free clean agent",
          "Carbon Dioxide (CO2) Fire Extinguisher"
        ],
        [
          "Class F / K",
          "Commercial kitchen deep fryer oils",
          "Potassium acetate wet chemical",
          "Wet Chemical Extinguisher"
        ]
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
      "headers": [
        "Component Sensitivity",
        "Damage Threshold",
        "Risk Factor",
        "Mandatory Electrostatic Discharge (ESD) Protection"
      ],
      "rows": [
        [
          "Class 1A MOSFETs",
          "< 250 Volts ESD",
          "Human static body charge",
          "Anti-Static Grounding Wrist Strap (1 Megohm resistor)"
        ],
        [
          "Passive Capacitors",
          "> 2000 Volts",
          "Low",
          "Conductive bench mat only"
        ],
        [
          "Bare Silicon Wafers",
          "Sub-micron particulates",
          "Skin flakes",
          "Lint-free cleanroom hood & nitrilite gloves"
        ]
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
  },
  {
    "id": "shl11",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 11",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 11: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 3,
    "explanation": "According to the safety protocol, option 4 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl12",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 12",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 12: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 0,
    "explanation": "According to the safety protocol, option 1 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl13",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 13",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 13: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 1,
    "explanation": "According to the safety protocol, option 2 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl14",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 14",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 14: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 2,
    "explanation": "According to the safety protocol, option 3 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl15",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 15",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 15: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 3,
    "explanation": "According to the safety protocol, option 4 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl16",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 16",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 16: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 0,
    "explanation": "According to the safety protocol, option 1 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl17",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 17",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 17: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 1,
    "explanation": "According to the safety protocol, option 2 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl18",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 18",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 18: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 2,
    "explanation": "According to the safety protocol, option 3 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl19",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 19",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 19: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 3,
    "explanation": "According to the safety protocol, option 4 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "shl20",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "tableData": {
      "title": "Industrial Workplace Standard Protocol 20",
      "headers": [
        "Work Station",
        "Primary Risk Factor",
        "Regulatory Reference",
        "Designated Safe Equipment"
      ],
      "rows": [
        [
          "Electrical Sub-panel",
          "1000V shock hazard",
          "IEC 60900",
          "VDE Insulated Screwdriver"
        ],
        [
          "Metal Abrasive Grinding",
          "High-velocity sparks / debris",
          "ANSI Z87.1+",
          "Polycarbonate Full Face Shield"
        ],
        [
          "Sub-Zero Cold Storage",
          "Hypothermia & frostbite (-25C)",
          "EN 511 Level 3",
          "Thermal Insulated Freezer Gloves"
        ],
        [
          "Confined Space Sewer Vault",
          "Toxic gas & oxygen depletion",
          "OSHA 1910.146",
          "Multi-Gas Detector Alarm Unit"
        ]
      ]
    },
    "question": "Workplace Task 20: Identify the mandatory equipment required for high-risk operations according to the safety compliance matrix.",
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
    "correct": 0,
    "explanation": "According to the safety protocol, option 1 matches the mandatory protective equipment specified for this industrial station."
  },
  {
    "id": "odd1",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd1_a.svg",
      "/images/aptitude/odd1_b.svg",
      "/images/aptitude/odd1_c.svg",
      "/images/aptitude/odd1_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the inner rectangle is centered within the outer frame. In Image C, the inner rectangle is shifted down to touch the bottom boundary."
  },
  {
    "id": "odd2",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd2_a.svg",
      "/images/aptitude/odd2_b.svg",
      "/images/aptitude/odd2_c.svg",
      "/images/aptitude/odd2_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, there are exactly 2 concentric square boundaries. Image D contains 3 nested square frames."
  },
  {
    "id": "odd3",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd3_a.svg",
      "/images/aptitude/odd3_b.svg",
      "/images/aptitude/odd3_c.svg",
      "/images/aptitude/odd3_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the inner polygon is oriented as an upright square. In Image C, the inner shape is rotated 45 degrees into a diamond."
  },
  {
    "id": "odd4",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd4_a.svg",
      "/images/aptitude/odd4_b.svg",
      "/images/aptitude/odd4_c.svg",
      "/images/aptitude/odd4_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, the top-right quadrant is shaded. In Image D, the bottom-left quadrant is shaded instead."
  },
  {
    "id": "odd5",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd5_a.svg",
      "/images/aptitude/odd5_b.svg",
      "/images/aptitude/odd5_c.svg",
      "/images/aptitude/odd5_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the diagonal slash runs from bottom-left to top-right (/). In Image C, it runs from top-left to bottom-right (\\)."
  },
  {
    "id": "odd6",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd6_a.svg",
      "/images/aptitude/odd6_b.svg",
      "/images/aptitude/odd6_c.svg",
      "/images/aptitude/odd6_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, the two focal dots are aligned along the horizontal center axis. In Image D, the dots are aligned along the vertical axis."
  },
  {
    "id": "odd7",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd7_a.svg",
      "/images/aptitude/odd7_b.svg",
      "/images/aptitude/odd7_c.svg",
      "/images/aptitude/odd7_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the arrows rotate successively in a clockwise direction. In Image C, the arrow points backwards (counter-clockwise)."
  },
  {
    "id": "odd8",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd8_a.svg",
      "/images/aptitude/odd8_b.svg",
      "/images/aptitude/odd8_c.svg",
      "/images/aptitude/odd8_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, tick marks appear on all 4 corners of the outer frame. Image D has tick marks on only 3 corners."
  },
  {
    "id": "odd9",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd9_a.svg",
      "/images/aptitude/odd9_b.svg",
      "/images/aptitude/odd9_c.svg",
      "/images/aptitude/odd9_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the inner circle is dead-centered. In Image C, the circle is offset to the lower-right corner."
  },
  {
    "id": "odd10",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd10_a.svg",
      "/images/aptitude/odd10_b.svg",
      "/images/aptitude/odd10_c.svg",
      "/images/aptitude/odd10_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, the outer border is solid and the inner border is dashed. In Image D, the outer border is dashed and the inner is solid."
  },
  {
    "id": "odd11",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd11_a.svg",
      "/images/aptitude/odd11_b.svg",
      "/images/aptitude/odd11_c.svg",
      "/images/aptitude/odd11_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the equilateral triangle points upwards. In Image C, the triangle points downwards."
  },
  {
    "id": "odd12",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd12_a.svg",
      "/images/aptitude/odd12_b.svg",
      "/images/aptitude/odd12_c.svg",
      "/images/aptitude/odd12_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and D, the crosshairs intersect precisely at the circle center. In Image D, the intersection is displaced towards the top edge."
  },
  {
    "id": "odd13",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd13_a.svg",
      "/images/aptitude/odd13_b.svg",
      "/images/aptitude/odd13_c.svg",
      "/images/aptitude/odd13_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the inner and outer shapes are true circular rings. In Image C, the inner shape is an elongated ellipse."
  },
  {
    "id": "odd14",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd14_a.svg",
      "/images/aptitude/odd14_b.svg",
      "/images/aptitude/odd14_c.svg",
      "/images/aptitude/odd14_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and D, semicircular notches are cut into both left and right edges. Image D has a notch on only one edge."
  },
  {
    "id": "odd15",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd15_a.svg",
      "/images/aptitude/odd15_b.svg",
      "/images/aptitude/odd15_c.svg",
      "/images/aptitude/odd15_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, both outer and inner triangles point upwards in parallel. In Image C, the inner triangle is inverted."
  },
  {
    "id": "odd16",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd16_a.svg",
      "/images/aptitude/odd16_b.svg",
      "/images/aptitude/odd16_c.svg",
      "/images/aptitude/odd16_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, the 3x3 dot matrix has its central center dot missing. In Image D, the top-left corner dot is missing."
  },
  {
    "id": "odd17",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd17_a.svg",
      "/images/aptitude/odd17_b.svg",
      "/images/aptitude/odd17_c.svg",
      "/images/aptitude/odd17_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the two horizontal lines are strictly parallel. In Image C, the lines converge at an angle."
  },
  {
    "id": "odd18",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd18_a.svg",
      "/images/aptitude/odd18_b.svg",
      "/images/aptitude/odd18_c.svg",
      "/images/aptitude/odd18_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and D, the outer border has heavy stroke weight and the inner has light weight. In Image D, the stroke weights are inverted."
  },
  {
    "id": "odd19",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd19_a.svg",
      "/images/aptitude/odd19_b.svg",
      "/images/aptitude/odd19_c.svg",
      "/images/aptitude/odd19_d.svg"
    ],
    "correct": 2,
    "explanation": "In Images A, B, and D, the inner diamond is aligned with the frame axes. In Image C, the diamond is rotated 15 degrees off-axis."
  },
  {
    "id": "odd20",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others.",
    "options": [
      "Image A",
      "Image B",
      "Image C",
      "Image D"
    ],
    "optionImages": [
      "/images/aptitude/odd20_a.svg",
      "/images/aptitude/odd20_b.svg",
      "/images/aptitude/odd20_c.svg",
      "/images/aptitude/odd20_d.svg"
    ],
    "correct": 3,
    "explanation": "In Images A, B, and C, the outer ring is shaded and the inner circle is hollow. In Image D, the outer ring is hollow and the inner circle is shaded."
  },
  {
    "id": "ret1",
    "category": "data-interpretation",
    "type": "shl-dual-pie",
    "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
    "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
    "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
    "question": "Based on Figure 1, which company has the highest percentage share of Poster Distribution across retail stores in Delhi?",
    "options": [
      "Company A (16%)",
      "Company E (19%)",
      "Company G (15%)",
      "Company H (14%)"
    ],
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
    "options": [
      "Company B (5%)",
      "Company C (7%)",
      "Company F (3%)",
      "Company D (11%)"
    ],
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
    "options": [
      "32%",
      "35%",
      "38%",
      "30%"
    ],
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
    "options": [
      "6 percentage points",
      "8 percentage points",
      "10 percentage points",
      "4 percentage points"
    ],
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
    "options": [
      "Company D and Company E",
      "Company G and Company H",
      "Company A and Company G",
      "Company B and Company F"
    ],
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
    "options": [
      "1,200",
      "1,500",
      "1,800",
      "1,900"
    ],
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
    "options": [
      "13 : 8",
      "8 : 13",
      "16 : 9",
      "11 : 5"
    ],
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
    "options": [
      "Company E (19% down to 12%)",
      "Company F (9% down to 3%)",
      "Company B (8% down to 5%)",
      "Company D (13% down to 11%)"
    ],
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
    "options": [
      "Company A (16% to 24%)",
      "Company H (14% to 19%)",
      "Company G (15% to 19%)",
      "Company C (6% to 7%)"
    ],
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
    "options": [
      "12%",
      "14%",
      "11%",
      "9%"
    ],
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
    "options": [
      "4,200",
      "4,800",
      "5,200",
      "3,800"
    ],
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
    "options": [
      "10%",
      "12%",
      "8%",
      "11%"
    ],
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
    "options": [
      "Company A (16% vs 8%)",
      "Company D (13% vs 8%)",
      "Company H (14% vs 8%)",
      "Company G (15% vs 8%)"
    ],
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
    "options": [
      "45%",
      "42%",
      "48%",
      "50%"
    ],
    "correct": 0,
    "explanation": "Company H = 14%, Company A = 16%, Company G = 15%. Combined = 14% + 16% + 15% = 45%."
  }
];

export const MODERATION_SCENARIOS: ModerationScenario[] = [
  {
    "id": "mod1",
    "description": "A photograph of a ripe watermelon cut in half on a kitchen counter, showing the red interior.",
    "context": "Posted on a food blog with caption 'Perfect summer snack!'",
    "emoji": "\ud83c\udf49",
    "bgColor": "from-green-800 to-green-950",
    "image": "/images/moderation/mod1.svg",
    "correct": 13,
    "explanation": "Ordinary food photo with no policy violations. Context is a food blog. Classification: Appropriate Content."
  },
  {
    "id": "mod2",
    "description": "A scenic mountain landscape photograph showing snow-capped peaks and clear blue sky.",
    "context": "Posted to a travel photography community.",
    "emoji": "\ud83c\udfd4\ufe0f",
    "bgColor": "from-blue-800 to-blue-950",
    "image": "/images/moderation/mod2.svg",
    "correct": 13,
    "explanation": "Nature landscape photo with no violations. Classification: Appropriate Content."
  },
  {
    "id": "mod3",
    "description": "A close-up image of a handgun pointed directly at camera, with a person holding it aggressively.",
    "context": "Posted on a public social media timeline with caption 'Don't mess with me.'",
    "emoji": "\ud83d\udd2b",
    "bgColor": "from-red-900 to-red-950",
    "image": "/images/moderation/mod3.svg",
    "correct": 5,
    "explanation": "Firearm displayed in a threatening context with an intimidating caption directed at viewers qualifies as Weapons violation."
  },
  {
    "id": "mod4",
    "description": "A video thumbnail showing someone kicking and striking a small dog repeatedly while laughing.",
    "context": "Shared in a public community group with no warning.",
    "emoji": "\ud83d\udc15",
    "bgColor": "from-orange-800 to-orange-950",
    "image": "/images/moderation/mod4.svg",
    "correct": 6,
    "explanation": "Deliberate physical abuse of a domestic animal captured and shared publicly is a clear case of Animal Cruelty."
  },
  {
    "id": "mod5",
    "description": "A post containing a personal message targeting a named individual, publishing their residential address with insults.",
    "context": "Posted in a public community forum.",
    "emoji": "\ud83d\udcac",
    "bgColor": "from-purple-800 to-purple-950",
    "image": "/images/moderation/mod5.svg",
    "correct": 8,
    "explanation": "Targeting a private individual with doxed residential address and insults violates anti-Harassment policy."
  },
  {
    "id": "mod6",
    "description": "A forum post describing suicidal thoughts and specific lethal methods under consideration.",
    "context": "Posted in a discussion group.",
    "emoji": "\u26a0\ufe0f",
    "bgColor": "from-yellow-800 to-yellow-950",
    "image": "/images/moderation/mod6.svg",
    "correct": 9,
    "explanation": "Content describing suicidal ideation and specific methods violates Self-Harm policies and requires safety escalation."
  },
  {
    "id": "mod7",
    "description": "An advertisement claiming a 'miracle pill' burns 10 kilograms of fat in one week with zero effort.",
    "context": "Posted as sponsored commercial ad.",
    "emoji": "\ud83d\udce2",
    "bgColor": "from-teal-800 to-teal-950",
    "image": "/images/moderation/mod7.svg",
    "correct": 12,
    "explanation": "Medically implausible health assertions with fabricated endorsements is Spam / Misleading Content."
  },
  {
    "id": "mod8",
    "description": "A chef's tutorial video showing knife cutting techniques for dicing onions with a sharp kitchen knife.",
    "context": "Posted on an educational culinary channel.",
    "emoji": "\ud83c\udf74",
    "bgColor": "from-green-700 to-green-900",
    "image": "/images/moderation/mod8.svg",
    "correct": 13,
    "explanation": "A kitchen knife in an educational culinary tutorial is standard cooking equipment. Context confirms: Appropriate Content."
  },
  {
    "id": "mod9",
    "description": "A social media comment using derogatory ethnic slurs against members of an immigrant community.",
    "context": "Shared publicly on a news article.",
    "emoji": "\ud83d\udeab",
    "bgColor": "from-red-800 to-red-950",
    "image": "/images/moderation/mod9.svg",
    "correct": 7,
    "explanation": "Attacking or demeaning people based on race, ethnicity, or nationality constitutes Hate Speech."
  },
  {
    "id": "mod10",
    "description": "A photo of a person's wrist with deliberate razor cuts captioned 'this is how I cope with stress.'",
    "context": "Posted on an image-sharing network.",
    "emoji": "\ud83e\ude79",
    "bgColor": "from-pink-900 to-pink-950",
    "image": "/images/moderation/mod10.svg",
    "correct": 9,
    "explanation": "Images depicting deliberate self-inflicted injuries violate the Self-Harm policy."
  },
  {
    "id": "mod11",
    "description": "A video of adolescents climbing atop an electric passenger train roof while in motion for online clout.",
    "context": "Shared on a video challenge tag.",
    "emoji": "\u26a1",
    "bgColor": "from-indigo-800 to-indigo-950",
    "image": "/images/moderation/mod11.svg",
    "correct": 10,
    "explanation": "Engaging in extreme high-risk train surfing that poses immediate fatal electrocution risk is Dangerous Activities."
  },
  {
    "id": "mod12",
    "description": "A digital meme mocking people with physical disabilities using derogatory text captions.",
    "context": "Posted in a humor channel.",
    "emoji": "\u267f",
    "bgColor": "from-gray-800 to-gray-950",
    "image": "/images/moderation/mod12.svg",
    "correct": 7,
    "explanation": "Demeaning individuals based on protected characteristics like disability constitutes Hate Speech."
  },
  {
    "id": "mod13",
    "description": "A factual news report by a verified broadcaster covering an armed bank robbery with no gore.",
    "context": "Published on a verified journalism page.",
    "emoji": "\ud83d\udcf0",
    "bgColor": "from-slate-700 to-slate-900",
    "image": "/images/moderation/mod13.svg",
    "correct": 13,
    "explanation": "Legitimate journalistic reporting on public events without gratuitous graphic violence is Appropriate Content."
  },
  {
    "id": "mod14",
    "description": "A black-market classified post offering unprescribed fentanyl and oxycodone with home courier delivery.",
    "context": "Posted in a classifieds forum.",
    "emoji": "\ud83d\udc8a",
    "bgColor": "from-orange-900 to-orange-950",
    "image": "/images/moderation/mod14.svg",
    "correct": 11,
    "explanation": "Illicit offering or sale of controlled scheduled pharmaceutical opioids is a Drugs violation."
  },
  {
    "id": "mod15",
    "description": "A licensed marksman practicing target shooting at paper bullseyes at an authorized firing range.",
    "context": "Posted in an Olympic target sports club.",
    "emoji": "\ud83c\udfaf",
    "bgColor": "from-green-900 to-green-950",
    "image": "/images/moderation/mod15.svg",
    "correct": 13,
    "explanation": "Lawful target shooting in a controlled sporting facility with hearing protection is Appropriate Content."
  },
  {
    "id": "mod16",
    "description": "A graphic recording of a violent brawl showing a person unconscious while being kicked in the head.",
    "context": "Uploaded with caption 'brutal knockout must watch.'",
    "emoji": "\ud83e\udd4a",
    "bgColor": "from-red-900 to-red-950",
    "image": "/images/moderation/mod16.svg",
    "correct": 4,
    "explanation": "Real-world violence showing severe bodily injury and head trauma shared for entertainment is Graphic Violence."
  },
  {
    "id": "mod17",
    "description": "A photograph of a family enjoying an afternoon barbecue picnic in a public municipal park.",
    "context": "Posted in a family album.",
    "emoji": "\ud83c\udf33",
    "bgColor": "from-green-700 to-green-900",
    "image": "/images/moderation/mod17.svg",
    "correct": 13,
    "explanation": "Normal family recreational gathering outdoors with no policy infringements is Appropriate Content."
  },
  {
    "id": "mod18",
    "description": "A tutorial download offering step-by-step instructions for fabricating improvised pipe bombs.",
    "context": "Shared in an anonymous text forum.",
    "emoji": "\ud83d\udca3",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod18.svg",
    "correct": 10,
    "explanation": "Disseminating manufacturing schematics for explosive ordnance constitutes Dangerous Activities / Public Safety Threat."
  },
  {
    "id": "mod19",
    "description": "A user creating multiple dummy accounts to send hundreds of threatening messages to an ex-partner.",
    "context": "Reported via abuse report ticket.",
    "emoji": "\ud83d\udcf1",
    "bgColor": "from-purple-900 to-purple-950",
    "image": "/images/moderation/mod19.svg",
    "correct": 8,
    "explanation": "Persistent targeted hostile messaging across multiple profiles is Harassment."
  },
  {
    "id": "mod20",
    "description": "A glass of red wine displayed beside a plate of pasta on an Italian restaurant menu page.",
    "context": "Posted on a verified restaurant page.",
    "emoji": "\ud83c\udf77",
    "bgColor": "from-purple-800 to-purple-950",
    "image": "/images/moderation/mod20.svg",
    "correct": 13,
    "explanation": "Displaying wine in culinary dining contexts on compliant pages is Appropriate Content."
  },
  {
    "id": "mod21",
    "description": "Uncensored surgical video showing internal human thoracic cavity shared with no medical context.",
    "context": "Shared on a general social media feed.",
    "emoji": "\ud83c\udfe5",
    "bgColor": "from-red-800 to-red-950",
    "image": "/images/moderation/mod21.svg",
    "correct": 4,
    "explanation": "Severe open surgical imagery shared without medical framing or content screens constitutes Graphic Violence."
  },
  {
    "id": "mod22",
    "description": "A public text post threatening to assault a coworker at their specific office shift tomorrow.",
    "context": "Posted on an employee thread.",
    "emoji": "\u26a0\ufe0f",
    "bgColor": "from-red-900 to-red-950",
    "image": "/images/moderation/mod22.svg",
    "correct": 3,
    "explanation": "Specific, actionable threats of physical bodily violence against an identified target violate the Violence policy."
  },
  {
    "id": "mod23",
    "description": "A colorful birthday cake with lit candles being celebrated by smiling children and parents.",
    "context": "Posted on a lifestyle blog.",
    "emoji": "\ud83c\udf82",
    "bgColor": "from-pink-700 to-pink-900",
    "image": "/images/moderation/mod23.svg",
    "correct": 13,
    "explanation": "Normal family celebration is completely Appropriate Content."
  },
  {
    "id": "mod24",
    "description": "A fraudulent lottery scam notification telling users they won one million dollars by clicking a link.",
    "context": "Sent as mass automated messages.",
    "emoji": "\ud83c\udfb0",
    "bgColor": "from-yellow-800 to-yellow-950",
    "image": "/images/moderation/mod24.svg",
    "correct": 12,
    "explanation": "Deceptive advance-fee lottery claims designed to steal credentials or money is Spam / Misleading Content."
  },
  {
    "id": "mod25",
    "description": "An animated video encouraging viewers to drink toxic household bleach to clean their bloodstream.",
    "context": "Shared as an alternative wellness hack.",
    "emoji": "\u2620\ufe0f",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod25.svg",
    "correct": 10,
    "explanation": "Instructing individuals to ingest corrosive industrial chemicals poses imminent poison hazard: Dangerous Activities."
  },
  {
    "id": "mod26",
    "description": "A historical documentary photograph of soldiers marching during World War II in military uniforms.",
    "context": "Posted on an accredited history educational channel.",
    "emoji": "\ud83c\udf96\ufe0f",
    "bgColor": "from-slate-800 to-slate-950",
    "image": "/images/moderation/mod26.svg",
    "correct": 13,
    "explanation": "Educational historical archival photographs shared in documentary context are Appropriate Content."
  },
  {
    "id": "mod27",
    "description": "A user posting unauthorized sexually explicit intimate photographs of another person without consent.",
    "context": "Uploaded to a public forum.",
    "emoji": "\ud83d\udd12",
    "bgColor": "from-rose-900 to-black",
    "image": "/images/moderation/mod27.svg",
    "correct": 2,
    "explanation": "Sharing non-consensual sexually explicit intimate photographs is a severe Sexual Content violation."
  },
  {
    "id": "mod28",
    "description": "A tutorial showing how to bypass commercial digital rights locks using pirated key generators.",
    "context": "Shared on a warez forum.",
    "emoji": "\ud83d\udcbb",
    "bgColor": "from-indigo-900 to-indigo-950",
    "image": "/images/moderation/mod28.svg",
    "correct": 12,
    "explanation": "Distributing cracked software license generators and phishing keys is Spam / Misleading Content."
  },
  {
    "id": "mod29",
    "description": "A video showing someone setting a stray cat on fire in an alleyway while laughing.",
    "context": "Shared in a chat channel.",
    "emoji": "\ud83d\udd25",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod29.svg",
    "correct": 6,
    "explanation": "Inflicting agonizing physical trauma and fire on an animal is severe Animal Cruelty."
  },
  {
    "id": "mod30",
    "description": "A post calling for the forced deportation and physical extermination of a specific religious community.",
    "context": "Posted in an extremist group.",
    "emoji": "\ud83d\udeab",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod30.svg",
    "correct": 7,
    "explanation": "Advocating genocide, violence, or expulsion against a religious community constitutes Hate Speech."
  },
  {
    "id": "mod31",
    "description": "A user sharing explicit sexually suggestive images involving individuals depicted as minors.",
    "context": "Flagged by automated hash detection.",
    "emoji": "\ud83d\uded1",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod31.svg",
    "correct": 0,
    "explanation": "Any depiction or exploitation of minors is an absolute zero-tolerance Child Safety / Minor Exploitation violation."
  },
  {
    "id": "mod32",
    "description": "A post encouraging teenagers to play Russian roulette with loaded revolvers for an online dare.",
    "context": "Shared on a teen gaming group.",
    "emoji": "\ud83c\udfb2",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod32.svg",
    "correct": 10,
    "explanation": "Inciting individuals to participate in lethal firearm games is Dangerous Activities."
  },
  {
    "id": "mod33",
    "description": "A photograph of a woman breastfeeding her infant baby in a designated nursing room.",
    "context": "Shared on a maternal health advice forum.",
    "emoji": "\ud83d\udc76",
    "bgColor": "from-emerald-800 to-emerald-950",
    "image": "/images/moderation/mod33.svg",
    "correct": 13,
    "explanation": "Breastfeeding imagery shared in maternal healthcare and parenting context is recognized as Appropriate Content."
  },
  {
    "id": "mod34",
    "description": "An image of an adult naked in a public park exposing themselves deliberately to passersby.",
    "context": "Posted without age gating.",
    "emoji": "\ud83d\udeb7",
    "bgColor": "from-amber-900 to-stone-900",
    "image": "/images/moderation/mod34.svg",
    "correct": 1,
    "explanation": "Public non-consensual nudity exposed in non-consenting environments violates the Adult Nudity policy."
  },
  {
    "id": "mod35",
    "description": "A promotional post advertising untaxed counterfeit cigarettes and unapproved nicotine vapes.",
    "context": "Shared on an open forum.",
    "emoji": "\ud83d\udeac",
    "bgColor": "from-orange-900 to-stone-900",
    "image": "/images/moderation/mod35.svg",
    "correct": 11,
    "explanation": "Commercial trade and solicitation of unregulated controlled tobacco products violates the Drugs policy."
  },
  {
    "id": "mod36",
    "description": "A video of an MMA professional sports match sanctioned by athletic commission inside an arena octagon.",
    "context": "Broadcast on sports network channel.",
    "emoji": "\ud83e\udd3c",
    "bgColor": "from-slate-800 to-slate-900",
    "image": "/images/moderation/mod36.svg",
    "correct": 13,
    "explanation": "Regulated professional combat sports with professional referee oversight are Appropriate Content."
  },
  {
    "id": "mod37",
    "description": "A post sharing personal home phone numbers and family photos of a public school teacher to intimidate them.",
    "context": "Shared by a disgruntled forum user.",
    "emoji": "\ud83d\udcde",
    "bgColor": "from-purple-950 to-black",
    "image": "/images/moderation/mod37.svg",
    "correct": 8,
    "explanation": "Releasing private contact details and family photos to incite mob intimidation is Harassment."
  },
  {
    "id": "mod38",
    "description": "An advertisement selling counterfeit luxury watches with forged warranty cards claiming they are authentic.",
    "context": "Promoted via social media ad.",
    "emoji": "\u231a",
    "bgColor": "from-amber-800 to-amber-950",
    "image": "/images/moderation/mod38.svg",
    "correct": 12,
    "explanation": "Selling deceptive counterfeit goods using fraudulent authenticity paperwork is Spam / Misleading Content."
  },
  {
    "id": "mod39",
    "description": "A photograph of an artistic classical marble statue of David in a Florence museum gallery.",
    "context": "Shared by a museum culture page.",
    "emoji": "\ud83c\udfdb\ufe0f",
    "bgColor": "from-stone-700 to-stone-900",
    "image": "/images/moderation/mod39.svg",
    "correct": 13,
    "explanation": "Classical fine art and historic sculptures displayed in cultural contexts are Appropriate Content."
  },
  {
    "id": "mod40",
    "description": "A user bragging about sneaking a concealed loaded handgun past airport security checkpoints.",
    "context": "Posted with a photograph of the firearm in an airplane lavatory.",
    "emoji": "\u2708\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod40.svg",
    "correct": 5,
    "explanation": "Displaying an unauthorized firearm on civil aviation transport is a severe Weapons / Public Security violation."
  },
  {
    "id": "mod41",
    "description": "A post celebrating someone's suicide and encouraging their surviving family members to do the same.",
    "context": "Commented on a memorial tribute page.",
    "emoji": "\ud83d\udda4",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod41.svg",
    "correct": 9,
    "explanation": "Encouraging, glorifying, or urging suicide or self-harm is a direct Self-Harm policy violation."
  },
  {
    "id": "mod42",
    "description": "A photograph of a veterinarian administering a microchip implant injection into a puppy's neck.",
    "context": "Posted on a verified veterinary clinic page.",
    "emoji": "\ud83e\ude7a",
    "bgColor": "from-teal-800 to-teal-950",
    "image": "/images/moderation/mod42.svg",
    "correct": 13,
    "explanation": "Standard professional veterinary healthcare procedure is Appropriate Content."
  },
  {
    "id": "mod43",
    "description": "A video showing an individual beating a captured wild bird with a broom handle.",
    "context": "Shared on a private video group.",
    "emoji": "\ud83d\udd4a\ufe0f",
    "bgColor": "from-orange-950 to-black",
    "image": "/images/moderation/mod43.svg",
    "correct": 6,
    "explanation": "Deliberately striking and tormenting a wild animal constitutes Animal Cruelty."
  },
  {
    "id": "mod44",
    "description": "A post claiming that typing your bank password into a comment will reveal your secret fortune.",
    "context": "Circulated across social media threads.",
    "emoji": "\ud83d\udd11",
    "bgColor": "from-yellow-900 to-stone-900",
    "image": "/images/moderation/mod44.svg",
    "correct": 12,
    "explanation": "Phishing credential harvesting schemes disguised as games is Spam / Misleading Content."
  },
  {
    "id": "mod45",
    "description": "A user sharing explicit step-by-step instructions for synthesizing methamphetamine in home kitchens.",
    "context": "Shared in an underground forum.",
    "emoji": "\u2697\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod45.svg",
    "correct": 11,
    "explanation": "Chemical synthesis instructions for illicit narcotics is a severe Drugs violation."
  },
  {
    "id": "mod46",
    "description": "A photograph of a firefighter extinguishing flames on a residential wooden garage.",
    "context": "Shared in a civic emergency service news bulletin.",
    "emoji": "\ud83d\ude92",
    "bgColor": "from-orange-800 to-slate-900",
    "image": "/images/moderation/mod46.svg",
    "correct": 13,
    "explanation": "First responder emergency operations depicted in public interest context are Appropriate Content."
  },
  {
    "id": "mod47",
    "description": "A threatening post stating 'we know where you sleep and you will not survive the week.'",
    "context": "Sent directly to a journalist.",
    "emoji": "\ud83d\udc41\ufe0f",
    "bgColor": "from-purple-950 to-black",
    "image": "/images/moderation/mod47.svg",
    "correct": 8,
    "explanation": "Direct death threats and terrorizing intimidation against a target constitutes severe Harassment and Violence."
  },
  {
    "id": "mod48",
    "description": "A social media challenge urging children to tie cords around their necks until they faint.",
    "context": "Uploaded under a viral challenge hashtag.",
    "emoji": "\u26a0\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod48.svg",
    "correct": 10,
    "explanation": "Choking dares that induce asphyxiation in minors are life-threatening Dangerous Activities."
  },
  {
    "id": "mod49",
    "description": "A verified culinary video showing a whole roasted suckling pig presented on a traditional holiday banquet table.",
    "context": "Posted by a culinary cultural magazine.",
    "emoji": "\ud83c\udf56",
    "bgColor": "from-amber-900 to-stone-900",
    "image": "/images/moderation/mod49.svg",
    "correct": 13,
    "explanation": "Traditional culinary cultural food presentation is Appropriate Content."
  },
  {
    "id": "mod50",
    "description": "An image of an automatic assault rifle superimposed over a high school campus with a threatening date caption.",
    "context": "Posted anonymously on a local school group.",
    "emoji": "\ud83d\udea8",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod50.svg",
    "correct": 5,
    "explanation": "Brandishing military weaponry against an educational institution is a severe Weapons / Threat violation."
  },
  {
    "id": "mod51",
    "description": "A photograph of a plate of pancakes with maple syrup and strawberries on a breakfast table.",
    "context": "Posted on a cooking community.",
    "emoji": "\ud83e\udd5e",
    "bgColor": "from-amber-800 to-amber-950",
    "image": "/images/moderation/mod51.svg",
    "correct": 13,
    "explanation": "Ordinary food photo with no policy violations. Classification: Appropriate Content."
  },
  {
    "id": "mod52",
    "description": "A photo of an office desk with a laptop, notebook, coffee mug, and potted succulent.",
    "context": "Posted on a workspace inspiration blog.",
    "emoji": "\ud83d\udcbb",
    "bgColor": "from-slate-800 to-slate-950",
    "image": "/images/moderation/mod52.svg",
    "correct": 13,
    "explanation": "Standard office workspace photograph. Classification: Appropriate Content."
  },
  {
    "id": "mod53",
    "description": "A photograph of a sunset over an autumn forest with orange and gold foliage.",
    "context": "Posted on a nature photography board.",
    "emoji": "\ud83c\udf05",
    "bgColor": "from-orange-800 to-orange-950",
    "image": "/images/moderation/mod53.svg",
    "correct": 13,
    "explanation": "Scenic natural photography with no violations. Classification: Appropriate Content."
  },
  {
    "id": "mod54",
    "description": "A photo of a ceramic mug filled with hot chamomile tea next to an open book.",
    "context": "Shared in a reading lifestyle group.",
    "emoji": "\ud83c\udf75",
    "bgColor": "from-emerald-800 to-emerald-950",
    "image": "/images/moderation/mod54.svg",
    "correct": 13,
    "explanation": "Harmless beverage photo. Classification: Appropriate Content."
  },
  {
    "id": "mod55",
    "description": "A photo of an architect reviewing building plans at a construction site trailer.",
    "context": "Posted on an engineering firm feed.",
    "emoji": "\ud83d\udcd0",
    "bgColor": "from-blue-800 to-blue-950",
    "image": "/images/moderation/mod55.svg",
    "correct": 13,
    "explanation": "Professional workplace scene with no violations. Classification: Appropriate Content."
  },
  {
    "id": "mod56",
    "description": "A post advertising illegal fentanyl powder shipped discreetly in unmarked envelopes.",
    "context": "Posted in an anonymous marketplace.",
    "emoji": "\ud83d\udc8a",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod56.svg",
    "correct": 11,
    "explanation": "Offering illicit controlled synthetic opioids violates the Drugs policy."
  },
  {
    "id": "mod57",
    "description": "A video showing an individual punching another person repeatedly in the face until bleeding.",
    "context": "Shared on a brawl video feed.",
    "emoji": "\ud83d\udc4a",
    "bgColor": "from-red-900 to-red-950",
    "image": "/images/moderation/mod57.svg",
    "correct": 3,
    "explanation": "Interpersonal physical violence causing bodily harm violates the Violence policy."
  },
  {
    "id": "mod58",
    "description": "A post with text telling a specific user to kill themselves and describing how to hang themselves.",
    "context": "Sent as a public tweet reply.",
    "emoji": "\u26a0\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod58.svg",
    "correct": 9,
    "explanation": "Encouraging suicide or self-harm is a direct Self-Harm policy violation."
  },
  {
    "id": "mod59",
    "description": "An image of a semi-automatic handgun displayed with extra magazines and ammunition on a table with a hostile message.",
    "context": "Posted with caption 'be ready tomorrow.'",
    "emoji": "\ud83d\udd2b",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod59.svg",
    "correct": 5,
    "explanation": "Displaying firearms combined with hostile threat captions violates the Weapons policy."
  },
  {
    "id": "mod60",
    "description": "A mass bot message sent to thousands of users claiming they won a $5,000 gift card by clicking an unknown URL.",
    "context": "Spammed across comments.",
    "emoji": "\ud83d\udce2",
    "bgColor": "from-yellow-900 to-slate-900",
    "image": "/images/moderation/mod60.svg",
    "correct": 12,
    "explanation": "Deceptive commercial phishing campaigns constitute Spam."
  },
  {
    "id": "mod61",
    "description": "A post claiming a certain ethnic community is inferior and advocating burning down their cultural centers.",
    "context": "Shared in an extremist chat.",
    "emoji": "\ud83d\udeab",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod61.svg",
    "correct": 7,
    "explanation": "Inciting hatred or violence based on ethnicity is Hate Speech."
  },
  {
    "id": "mod62",
    "description": "A video of adolescents filming themselves drinking kerosene from a bottle on an internet dare.",
    "context": "Uploaded under viral dare tag.",
    "emoji": "\u2620\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod62.svg",
    "correct": 10,
    "explanation": "Ingesting toxic petrochemicals carries immediate life-threatening risk: Dangerous Activities."
  },
  {
    "id": "mod63",
    "description": "A post publishing the private mobile phone numbers and home addresses of a store manager with calls to harass them.",
    "context": "Shared by an angry forum member.",
    "emoji": "\ud83d\udcf1",
    "bgColor": "from-purple-950 to-black",
    "image": "/images/moderation/mod63.svg",
    "correct": 8,
    "explanation": "Targeted doxing and incitement of mob harassment violates the Harassment policy."
  },
  {
    "id": "mod64",
    "description": "A photograph of a golden retriever puppy resting on a rug in a living room.",
    "context": "Posted in a pet lovers group.",
    "emoji": "\ud83d\udc36",
    "bgColor": "from-amber-900 to-amber-950",
    "image": "/images/moderation/mod64.svg",
    "correct": 13,
    "explanation": "Ordinary domestic pet photography. Classification: Appropriate Content."
  },
  {
    "id": "mod65",
    "description": "A video showing someone setting a live rodent on fire inside a plastic cage.",
    "context": "Shared on a private message channel.",
    "emoji": "\ud83d\udd25",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod65.svg",
    "correct": 6,
    "explanation": "Torturing an animal with fire is severe Animal Cruelty."
  },
  {
    "id": "mod66",
    "description": "An educational biology textbook illustration displaying human muscle anatomy of an arm.",
    "context": "Posted in a pre-med study community.",
    "emoji": "\ud83d\udcaa",
    "bgColor": "from-slate-700 to-slate-900",
    "image": "/images/moderation/mod66.svg",
    "correct": 13,
    "explanation": "Educational anatomical diagram with no violations. Classification: Appropriate Content."
  },
  {
    "id": "mod67",
    "description": "A commercial ad selling counterfeit designer sneakers claiming they are authentic Nike editions.",
    "context": "Posted via sponsored ads.",
    "emoji": "\ud83d\udc5f",
    "bgColor": "from-amber-900 to-slate-900",
    "image": "/images/moderation/mod67.svg",
    "correct": 12,
    "explanation": "Deceptive fraudulent counterfeit merchandise sales constitute Spam."
  },
  {
    "id": "mod68",
    "description": "A user sharing explicit sexually suggestive photos of a high school student.",
    "context": "Flagged by automatic image hashing.",
    "emoji": "\ud83d\uded1",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod68.svg",
    "correct": 0,
    "explanation": "Any sexual depiction or exploitation involving minors is zero-tolerance Child Safety violation."
  },
  {
    "id": "mod69",
    "description": "A public photo showing full frontal adult genital nudity in an unrestricted forum.",
    "context": "Shared without age restrictions.",
    "emoji": "\ud83d\udeb7",
    "bgColor": "from-amber-900 to-slate-900",
    "image": "/images/moderation/mod69.svg",
    "correct": 1,
    "explanation": "Uncensored adult genital nudity in public open spaces violates Adult Nudity rules."
  },
  {
    "id": "mod70",
    "description": "A photograph of a freshly baked loaf of sourdough bread cooling on a wire rack.",
    "context": "Posted on a bakery hobby group.",
    "emoji": "\ud83c\udf5e",
    "bgColor": "from-amber-800 to-stone-900",
    "image": "/images/moderation/mod70.svg",
    "correct": 13,
    "explanation": "Food and baking photo. Classification: Appropriate Content."
  },
  {
    "id": "mod71",
    "description": "A tutorial showing how to mix household chemicals to produce poisonous chlorine gas at home.",
    "context": "Shared in a dark web forum.",
    "emoji": "\ud83e\uddea",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod71.svg",
    "correct": 10,
    "explanation": "Instructions for chemical poison fabrication constitute Dangerous Activities."
  },
  {
    "id": "mod72",
    "description": "A photograph of a licensed archery club target with arrows grouped in the bullseye.",
    "context": "Posted by a regional archery club.",
    "emoji": "\ud83c\udfaf",
    "bgColor": "from-emerald-900 to-emerald-950",
    "image": "/images/moderation/mod72.svg",
    "correct": 13,
    "explanation": "Regulated target sporting activity is Appropriate Content."
  },
  {
    "id": "mod73",
    "description": "A video of someone kicking a cat down a flight of concrete stairs.",
    "context": "Uploaded with laughing emojis.",
    "emoji": "\ud83d\udc31",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod73.svg",
    "correct": 6,
    "explanation": "Deliberate physical assault against an animal is Animal Cruelty."
  },
  {
    "id": "mod74",
    "description": "A social media comment stating that members of a religious faith should be rounded up and shot.",
    "context": "Posted on a news comment thread.",
    "emoji": "\ud83d\udeab",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod74.svg",
    "correct": 7,
    "explanation": "Direct calls to execute people based on religion constitutes Hate Speech."
  },
  {
    "id": "mod75",
    "description": "A photograph of a glass bowl filled with ripe green apples and red cherries.",
    "context": "Shared on a healthy recipes blog.",
    "emoji": "\ud83c\udf4e",
    "bgColor": "from-emerald-800 to-green-950",
    "image": "/images/moderation/mod75.svg",
    "correct": 13,
    "explanation": "Wholesome fruit photography. Classification: Appropriate Content."
  },
  {
    "id": "mod76",
    "description": "A post advertising unprescribed prescription sleeping pills for sale via cash courier.",
    "context": "Posted on a classifieds site.",
    "emoji": "\ud83d\udc8a",
    "bgColor": "from-orange-950 to-black",
    "image": "/images/moderation/mod76.svg",
    "correct": 11,
    "explanation": "Illegal distribution of prescription sedatives violates Drugs policy."
  },
  {
    "id": "mod77",
    "description": "A user repeatedly posting edited photos of a classmate with derogatory sexual rumors.",
    "context": "Reported by school guidance staff.",
    "emoji": "\ud83d\udcac",
    "bgColor": "from-purple-900 to-black",
    "image": "/images/moderation/mod77.svg",
    "correct": 8,
    "explanation": "Targeted sexualized cyberbullying of an individual is Harassment."
  },
  {
    "id": "mod78",
    "description": "An image of deep self-inflicted wounds on a person's thigh captioned 'I deserve this pain.'",
    "context": "Posted on an image sharing feed.",
    "emoji": "\ud83e\ude79",
    "bgColor": "from-rose-950 to-black",
    "image": "/images/moderation/mod78.svg",
    "correct": 9,
    "explanation": "Depicting self-inflicted cutting wounds violates Self-Harm policies."
  },
  {
    "id": "mod79",
    "description": "A photograph of an electric subway train arriving at a modern underground station platform.",
    "context": "Posted in an urban transit community.",
    "emoji": "\ud83d\ude87",
    "bgColor": "from-blue-900 to-slate-950",
    "image": "/images/moderation/mod79.svg",
    "correct": 13,
    "explanation": "Public transit scene. Classification: Appropriate Content."
  },
  {
    "id": "mod80",
    "description": "A video showing an individual doing pull-ups on an exterior skyscraper crane without any safety harness.",
    "context": "Shared with caption 'extreme rooftop adrenaline.'",
    "emoji": "\ud83c\udfd7\ufe0f",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod80.svg",
    "correct": 10,
    "explanation": "High-altitude trespassing without safety equipment poses imminent death risk: Dangerous Activities."
  },
  {
    "id": "mod81",
    "description": "A photograph of a mountain biker wearing a helmet riding on a marked forest trail.",
    "context": "Posted in an outdoor sports forum.",
    "emoji": "\ud83d\udeb5",
    "bgColor": "from-green-800 to-green-950",
    "image": "/images/moderation/mod81.svg",
    "correct": 13,
    "explanation": "Recreational sports with proper safety equipment is Appropriate Content."
  },
  {
    "id": "mod82",
    "description": "A user creating duplicate accounts to bypass blocking and send threatening messages to a former coworker.",
    "context": "Reported via support ticket.",
    "emoji": "\ud83d\udcf5",
    "bgColor": "from-purple-950 to-black",
    "image": "/images/moderation/mod82.svg",
    "correct": 8,
    "explanation": "Circumventing block features to send targeted hostile messages is Harassment."
  },
  {
    "id": "mod83",
    "description": "A photo of a cup of iced latte with a paper straw on an outdoor cafe table.",
    "context": "Posted in a coffee blog.",
    "emoji": "\u2615",
    "bgColor": "from-amber-900 to-stone-950",
    "image": "/images/moderation/mod83.svg",
    "correct": 13,
    "explanation": "Harmless beverage photograph. Classification: Appropriate Content."
  },
  {
    "id": "mod84",
    "description": "A post promoting fraudulent credit repair schemes claiming to erase all loan defaults overnight for an upfront fee.",
    "context": "Spammed across financial threads.",
    "emoji": "\ud83d\udcb3",
    "bgColor": "from-yellow-900 to-black",
    "image": "/images/moderation/mod84.svg",
    "correct": 12,
    "explanation": "Deceptive financial scams with fraudulent upfront fees are Spam."
  },
  {
    "id": "mod85",
    "description": "A photograph of a classical bronze sculpture of a discus thrower in a municipal art gallery.",
    "context": "Shared by a city museum.",
    "emoji": "\ud83c\udfdb\ufe0f",
    "bgColor": "from-stone-800 to-stone-950",
    "image": "/images/moderation/mod85.svg",
    "correct": 13,
    "explanation": "Historic classical sculpture in cultural context is Appropriate Content."
  },
  {
    "id": "mod86",
    "description": "A post offering to sell unpasteurized raw meat contaminated with pathogens for intentional food tampering.",
    "context": "Posted in an underground chat.",
    "emoji": "\u2623\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod86.svg",
    "correct": 10,
    "explanation": "Intentional biological tampering represents a public safety hazard: Dangerous Activities."
  },
  {
    "id": "mod87",
    "description": "A photo of a dentist demonstrating proper toothbrushing technique with a dental model.",
    "context": "Posted on a dental clinic page.",
    "emoji": "\ud83e\udea5",
    "bgColor": "from-cyan-800 to-slate-950",
    "image": "/images/moderation/mod87.svg",
    "correct": 13,
    "explanation": "Educational dental hygiene content. Classification: Appropriate Content."
  },
  {
    "id": "mod88",
    "description": "A post calling an entire gender 'parasites who must be stripped of all human rights.'",
    "context": "Posted in an extremist forum.",
    "emoji": "\ud83d\udeab",
    "bgColor": "from-red-900 to-black",
    "image": "/images/moderation/mod88.svg",
    "correct": 7,
    "explanation": "Dehumanizing and promoting rights denial based on gender is Hate Speech."
  },
  {
    "id": "mod89",
    "description": "A photo of a toddler playing with colorful plastic building blocks in a living room.",
    "context": "Posted in a parenting blog.",
    "emoji": "\ud83e\uddf8",
    "bgColor": "from-pink-800 to-slate-950",
    "image": "/images/moderation/mod89.svg",
    "correct": 13,
    "explanation": "Normal family lifestyle photo. Classification: Appropriate Content."
  },
  {
    "id": "mod90",
    "description": "A video of an unprovoked assault where someone strikes an elderly pedestrian with a wooden plank.",
    "context": "Uploaded with caption 'watch this knockout.'",
    "emoji": "\u26a0\ufe0f",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod90.svg",
    "correct": 4,
    "explanation": "Sensationalized unprovoked assault resulting in serious injury constitutes Graphic Violence."
  },
  {
    "id": "mod91",
    "description": "A photograph of a freshly paved highway winding through green rolling hills.",
    "context": "Posted in a road trip group.",
    "emoji": "\ud83d\udee3\ufe0f",
    "bgColor": "from-slate-700 to-slate-950",
    "image": "/images/moderation/mod91.svg",
    "correct": 13,
    "explanation": "Scenic highway photography. Classification: Appropriate Content."
  },
  {
    "id": "mod92",
    "description": "A post encouraging followers to invest in an unregistered cryptocurrency coin with guaranteed 500% daily returns.",
    "context": "Circulated via mass bots.",
    "emoji": "\ud83e\ude99",
    "bgColor": "from-yellow-900 to-black",
    "image": "/images/moderation/mod92.svg",
    "correct": 12,
    "explanation": "Guaranteed astronomical return investment scams constitute Spam."
  },
  {
    "id": "mod93",
    "description": "A photograph of an emergency rescue helicopter landing on a hospital rooftop helipad.",
    "context": "Posted on a healthcare news page.",
    "emoji": "\ud83d\ude81",
    "bgColor": "from-red-800 to-slate-950",
    "image": "/images/moderation/mod93.svg",
    "correct": 13,
    "explanation": "Emergency aviation scene in journalistic context is Appropriate Content."
  },
  {
    "id": "mod94",
    "description": "A post sharing private medical diagnosis records of an individual to humiliate them publicly.",
    "context": "Posted by a vengeful associate.",
    "emoji": "\ud83d\udccb",
    "bgColor": "from-purple-950 to-black",
    "image": "/images/moderation/mod94.svg",
    "correct": 8,
    "explanation": "Doxing confidential personal health records for public humiliation is Harassment."
  },
  {
    "id": "mod95",
    "description": "A photograph of a slice of chocolate cheesecake with mint garnish on a white ceramic plate.",
    "context": "Posted on a dessert blog.",
    "emoji": "\ud83c\udf70",
    "bgColor": "from-amber-900 to-stone-950",
    "image": "/images/moderation/mod95.svg",
    "correct": 13,
    "explanation": "Food dessert photography. Classification: Appropriate Content."
  },
  {
    "id": "mod96",
    "description": "A photo of a person shooting an Olympic recurve bow at a standardized 70-meter target outdoors.",
    "context": "Posted by an Olympic sports federation.",
    "emoji": "\ud83c\udff9",
    "bgColor": "from-emerald-900 to-slate-950",
    "image": "/images/moderation/mod96.svg",
    "correct": 13,
    "explanation": "Regulated Olympic sport is Appropriate Content."
  },
  {
    "id": "mod97",
    "description": "A post offering to sell bulk pharmaceutical Adderall pills without prescription.",
    "context": "Posted on a social forum.",
    "emoji": "\ud83d\udc8a",
    "bgColor": "from-orange-950 to-black",
    "image": "/images/moderation/mod97.svg",
    "correct": 11,
    "explanation": "Distributing prescription stimulants illegally violates Drugs policy."
  },
  {
    "id": "mod98",
    "description": "A photograph of an electrician installing a circuit breaker in a home electrical panel wearing insulated gloves.",
    "context": "Shared on a home trade portal.",
    "emoji": "\u26a1",
    "bgColor": "from-amber-900 to-slate-950",
    "image": "/images/moderation/mod98.svg",
    "correct": 13,
    "explanation": "Professional electrical trade tutorial is Appropriate Content."
  },
  {
    "id": "mod99",
    "description": "A video showing someone throwing stones at nesting songbirds to destroy their nest.",
    "context": "Shared on a video group.",
    "emoji": "\ud83e\udeba",
    "bgColor": "from-red-950 to-black",
    "image": "/images/moderation/mod99.svg",
    "correct": 6,
    "explanation": "Deliberately injuring wild animals and destroying nests is Animal Cruelty."
  },
  {
    "id": "mod100",
    "description": "A photograph of a garden rose bush in full bloom with dew drops on red petals.",
    "context": "Posted on a gardening community.",
    "emoji": "\ud83c\udf39",
    "bgColor": "from-rose-900 to-slate-950",
    "image": "/images/moderation/mod100.svg",
    "correct": 13,
    "explanation": "Natural botanical flower photography. Classification: Appropriate Content."
  }
];
