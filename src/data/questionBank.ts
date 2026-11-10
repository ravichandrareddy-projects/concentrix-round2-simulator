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
  type?: 'chart-pie' | 'chart-bar' | 'table' | 'nested-squares' | 'geometric-pattern' | 'none';
  chartData?: any;
  tableData?: any;
  patternData?: any;
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
    "text": "Insert a coin and choose a beverage.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls2",
    "text": "I'm sorry, I lost the file.",
    "difficulty": "easy",
    "wordCount": 6
  },
  {
    "id": "ls3",
    "text": "Please keep the files in the red folder.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls4",
    "text": "Please keep the documents on the table.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls5",
    "text": "The meeting starts at nine in the morning.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls6",
    "text": "Could you send me the report today?",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls7",
    "text": "The package arrived this morning without damage.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls8",
    "text": "Please fill in the registration form now.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls9",
    "text": "Your appointment is confirmed for three o'clock.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls10",
    "text": "The office will be closed this Friday.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls11",
    "text": "Please sign your name on the line.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls12",
    "text": "The supervisor will call you back shortly.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls13",
    "text": "Your order will be delivered this week.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls14",
    "text": "We appreciate your patience and kind understanding.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls15",
    "text": "The customer service counter is now open.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls16",
    "text": "Please have your account number ready today.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls17",
    "text": "The technician will arrive before noon today.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls18",
    "text": "You may track your parcel online anytime.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls19",
    "text": "Thank you for contacting our support desk.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls20",
    "text": "Our team is ready to assist you.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls21",
    "text": "Please confirm your current billing postal code.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls22",
    "text": "The system will restart in five minutes.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls23",
    "text": "All visitors must wear a security badge.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls24",
    "text": "She forwarded the email to her manager.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls25",
    "text": "The store offers free returns within thirty days.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls26",
    "text": "Please mute your microphone during the presentation.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls27",
    "text": "A confirmation receipt was sent by email.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls28",
    "text": "He answered all questions clearly and politely.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls29",
    "text": "The training session will begin at ten.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls30",
    "text": "You can download the mobile application free.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls31",
    "text": "Check your inbox for the verification link.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls32",
    "text": "The elevator is located near the entrance.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls33",
    "text": "We sent a reminder message this afternoon.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls34",
    "text": "Please review the attached contract before signing.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls35",
    "text": "The cafeteria serves lunch until two o'clock.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls36",
    "text": "Keep your password confidential at all times.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls37",
    "text": "The printer needs more paper to finish.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls38",
    "text": "Our business hours are Monday through Friday.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls39",
    "text": "Kindly update your profile with current details.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls40",
    "text": "Please hold the line for a moment.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls41",
    "text": "You can use our web check-in services three hours before the flight.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls42",
    "text": "I take full personal responsibility for every single unanswered question.",
    "difficulty": "medium",
    "wordCount": 10
  },
  {
    "id": "ls43",
    "text": "The customer requested an urgent status update regarding the delayed product delivery.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls44",
    "text": "Please ensure that all mandatory fields are completed before submitting the application.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls45",
    "text": "The regional manager reviewed the complaint and offered a full immediate refund.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls46",
    "text": "Our technical engineering team is investigating the server issue and will report shortly.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls47",
    "text": "The customer service representative apologized politely and escalated the priority ticket immediately.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls48",
    "text": "The revised company security policy will take effect starting next Monday morning.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls49",
    "text": "All full-time employees are required to finish the compliance training this week.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls50",
    "text": "The financial client confirmed that payment was initiated through direct bank transfer.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls51",
    "text": "Could you please verify the primary billing address currently registered on file?",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls52",
    "text": "The network operations center successfully restored internet connectivity within ninety minutes.",
    "difficulty": "medium",
    "wordCount": 11
  },
  {
    "id": "ls53",
    "text": "The manufacturer warranty covers internal mechanical defects but excludes intentional physical drop damage.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls54",
    "text": "Please allow up to five business days for the funds to reflect.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls55",
    "text": "The shift supervisor will examine your service request and provide written feedback.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls56",
    "text": "Your user account was temporarily locked due to repeated incorrect password entries.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls57",
    "text": "All supporting legal documents must be certified before submitting for administrative processing.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls58",
    "text": "We recommend restarting your desktop computer after installing the mandatory system updates.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls59",
    "text": "The automated transaction notification was dispatched directly to your mobile phone number.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls60",
    "text": "Please maintain a stable high-speed broadband connection throughout the entire evaluation period.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls61",
    "text": "The technical helpline operates twenty-four hours a day to assist global customers.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls62",
    "text": "Kindly verify your identity by providing the six-digit verification code sent earlier.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls63",
    "text": "The quarterly financial performance metrics show steady growth across all domestic business sectors.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls64",
    "text": "Please hold the line while I transfer your call to billing.",
    "difficulty": "medium",
    "wordCount": 11
  },
  {
    "id": "ls65",
    "text": "The updated guidelines instruct all representatives to confirm at least two security identifiers.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls66",
    "text": "We regret to inform you that the selected model is temporarily out of stock.",
    "difficulty": "medium",
    "wordCount": 14
  },
  {
    "id": "ls67",
    "text": "Your honest feedback is valuable in helping us improve customer service response standards.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls68",
    "text": "The project coordinator scheduled an emergency meeting to discuss the revised project timeline.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls69",
    "text": "Please submit all travel expense receipts to the accounting department before month-end.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls70",
    "text": "Our digital banking application allows customers to freeze misplaced credit cards instantly.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls71",
    "text": "You will receive an automated tracking link once the warehouse ships your package.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls72",
    "text": "The conference room on the fifth floor is reserved for executive interviews today.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls73",
    "text": "Please inform the receptionist if you require parking validation before departing the premises.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls74",
    "text": "Customer service representatives must document every call summary accurately in the database system.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls75",
    "text": "The new employee orientation program will introduce company values and health benefits.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls76",
    "text": "All remote staff members must connect through the virtual private network daily.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls77",
    "text": "We can reschedule your technician service visit to Thursday morning if that suits you.",
    "difficulty": "medium",
    "wordCount": 14
  },
  {
    "id": "ls78",
    "text": "The international shipping fee depends on package weight and final destination customs regulations.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls79",
    "text": "A customer satisfaction survey will appear on your screen after this conversation ends.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls80",
    "text": "Please verify that your headset microphone volume is adjusted properly before speaking.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls81",
    "text": "May I have your name, company name, email address, and phone number for our official records?",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls82",
    "text": "Although the meeting was postponed, the team completed all assigned responsibilities before the revised deadline.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls83",
    "text": "The internal audit team uncovered several unexplained discrepancies in the financial spreadsheets during their review.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls84",
    "text": "Despite multiple remote troubleshooting attempts, the senior engineer concluded that an on-site hardware inspection was mandatory.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls85",
    "text": "The dissatisfied customer requested that their ongoing service escalation be transferred directly to an operations manager.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls86",
    "text": "According to our subscription records, the annual membership was renewed automatically without receiving a cancellation request.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls87",
    "text": "The executive committee will present the proposed organizational restructuring plan during tomorrow's general employee assembly.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls88",
    "text": "Our fraud investigation determined that the unauthorized login originated from an unrecognized browser in another territory.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls89",
    "text": "The interview candidate demonstrated exceptional verbal communication skills and a deep understanding of corporate customer service.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls90",
    "text": "Pursuant to the signed commercial terms, early termination of the maintenance contract incurs administrative penalty fees.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls91",
    "text": "The engineering team implemented several redundancy safeguards to prevent any recurrence of last Thursday's network failure.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls92",
    "text": "All official media correspondence regarding this incident must receive written approval from the legal affairs department.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls93",
    "text": "The executive director emphasized maintaining consistent quality benchmarks across regional call centers during the quarterly review.",
    "difficulty": "hard",
    "wordCount": 16
  },
  {
    "id": "ls94",
    "text": "Following an exhaustive product safety evaluation, corporate leadership chose to extend customer warranty protection by six months.",
    "difficulty": "hard",
    "wordCount": 17
  },
  {
    "id": "ls95",
    "text": "The deployment of automated customer ticketing software is expected to decrease customer waiting times by forty percent.",
    "difficulty": "hard",
    "wordCount": 17
  },
  {
    "id": "ls96",
    "text": "Although the meeting was postponed, the team completed all assigned responsibilities before the revised deadline without any complaints from stakeholders.",
    "difficulty": "challenge",
    "wordCount": 20
  },
  {
    "id": "ls97",
    "text": "In accordance with international privacy regulations, all confidential customer records must be encrypted securely and accessed strictly by certified personnel.",
    "difficulty": "challenge",
    "wordCount": 20
  },
  {
    "id": "ls98",
    "text": "Despite severe winter weather conditions that delayed regional transportation networks, the logistics center fulfilled every priority medical shipment on schedule.",
    "difficulty": "challenge",
    "wordCount": 20
  },
  {
    "id": "ls99",
    "text": "The comprehensive performance review revealed that introducing interactive agent coaching modules resulted in a twenty percent increase in customer satisfaction.",
    "difficulty": "challenge",
    "wordCount": 20
  },
  {
    "id": "ls100",
    "text": "Before signing the final commercial purchase contract, both corporate legal counsels carefully reviewed every indemnification clause to eliminate operational risks.",
    "difficulty": "challenge",
    "wordCount": 20
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
    "id": "apt1",
    "category": "data-interpretation",
    "type": "chart-pie",
    "chartData": {
      "title": "Annual Company Expenditure Breakdown ($2,000,000 Total)",
      "slices": [
        {
          "label": "Marketing",
          "pct": 30,
          "color": "#3b82f6"
        },
        {
          "label": "Human Resources",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "Research & Dev",
          "pct": 20,
          "color": "#8b5cf6"
        },
        {
          "label": "Operations",
          "pct": 15,
          "color": "#f59e0b"
        },
        {
          "label": "IT Infrastructure",
          "pct": 10,
          "color": "#ef4444"
        }
      ]
    },
    "question": "Based on the pie chart above, what is the combined annual expenditure allocated to Marketing and IT Infrastructure?",
    "options": [
      "$600,000",
      "$800,000",
      "$700,000",
      "$900,000"
    ],
    "correct": 1,
    "explanation": "Marketing is 30% and IT Infrastructure is 10%, giving a combined 40%. 40% of $2,000,000 = 0.40 \u00d7 2,000,000 = $800,000."
  },
  {
    "id": "apt2",
    "category": "data-interpretation",
    "type": "chart-pie",
    "chartData": {
      "title": "Regional Sales Distribution (500,000 Units Sold)",
      "slices": [
        {
          "label": "North Region",
          "pct": 35,
          "color": "#0ea5e9"
        },
        {
          "label": "South Region",
          "pct": 25,
          "color": "#14b8a6"
        },
        {
          "label": "East Region",
          "pct": 20,
          "color": "#f97316"
        },
        {
          "label": "West Region",
          "pct": 20,
          "color": "#a855f7"
        }
      ]
    },
    "question": "What is the ratio of units sold in the North Region compared to the East Region?",
    "options": [
      "5 : 3",
      "7 : 4",
      "3 : 2",
      "7 : 5"
    ],
    "correct": 1,
    "explanation": "North Region sold 35% and East Region sold 20%. The ratio is 35 : 20, which simplifies by dividing both terms by 5 to 7 : 4."
  },
  {
    "id": "apt3",
    "category": "data-interpretation",
    "type": "chart-pie",
    "chartData": {
      "title": "Corporate Headcount by Department (1,200 Employees Total)",
      "slices": [
        {
          "label": "Customer Support",
          "pct": 45,
          "color": "#2563eb"
        },
        {
          "label": "Technical Engineering",
          "pct": 25,
          "color": "#059669"
        },
        {
          "label": "Sales & Accounts",
          "pct": 15,
          "color": "#d97706"
        },
        {
          "label": "Administration & HR",
          "pct": 15,
          "color": "#9333ea"
        }
      ]
    },
    "question": "How many more employees work in Customer Support than in Technical Engineering?",
    "options": [
      "180 employees",
      "240 employees",
      "200 employees",
      "300 employees"
    ],
    "correct": 1,
    "explanation": "Customer Support has 45% of 1,200 = 540 employees. Technical Engineering has 25% of 1,200 = 300 employees. Difference = 540 - 300 = 240 employees."
  },
  {
    "id": "apt4",
    "category": "data-interpretation",
    "type": "chart-bar",
    "chartData": {
      "title": "Customer Support Calls Handled per Weekday",
      "bars": [
        {
          "label": "Mon",
          "value": 140,
          "color": "#3b82f6"
        },
        {
          "label": "Tue",
          "value": 180,
          "color": "#3b82f6"
        },
        {
          "label": "Wed",
          "value": 220,
          "color": "#3b82f6"
        },
        {
          "label": "Thu",
          "value": 160,
          "color": "#3b82f6"
        },
        {
          "label": "Fri",
          "value": 200,
          "color": "#3b82f6"
        }
      ]
    },
    "question": "What is the average number of customer support calls handled per day from Monday to Friday?",
    "options": [
      "170 calls",
      "180 calls",
      "185 calls",
      "190 calls"
    ],
    "correct": 1,
    "explanation": "Total calls = 140 + 180 + 220 + 160 + 200 = 900. Average = 900 / 5 = 180 calls per day."
  },
  {
    "id": "apt5",
    "category": "data-interpretation",
    "type": "chart-bar",
    "chartData": {
      "title": "Quarterly Revenue Comparison: Branch A vs Branch B ($ in thousands)",
      "bars": [
        {
          "label": "Q1 (A: 50, B: 60)",
          "value": 110,
          "color": "#6366f1"
        },
        {
          "label": "Q2 (A: 70, B: 65)",
          "value": 135,
          "color": "#6366f1"
        },
        {
          "label": "Q3 (A: 80, B: 75)",
          "value": 155,
          "color": "#6366f1"
        },
        {
          "label": "Q4 (A: 100, B: 80)",
          "value": 180,
          "color": "#6366f1"
        }
      ]
    },
    "question": "What is the total annual revenue achieved by Branch A across all four quarters?",
    "options": [
      "$280,000",
      "$300,000",
      "$320,000",
      "$350,000"
    ],
    "correct": 1,
    "explanation": "Branch A generated: Q1 = $50k, Q2 = $70k, Q3 = $80k, Q4 = $100k. Total = 50 + 70 + 80 + 100 = $300k ($300,000)."
  },
  {
    "id": "apt6",
    "category": "data-interpretation",
    "type": "table",
    "tableData": {
      "headers": [
        "Department",
        "Tickets Received",
        "Resolved on First Call",
        "Escalated"
      ],
      "rows": [
        [
          "Hardware Support",
          "400",
          "280",
          "120"
        ],
        [
          "Software Billing",
          "600",
          "480",
          "120"
        ],
        [
          "Account Access",
          "500",
          "425",
          "75"
        ],
        [
          "Network Operations",
          "300",
          "210",
          "90"
        ]
      ]
    },
    "question": "Which department achieved the highest First-Call Resolution percentage rate?",
    "options": [
      "Hardware Support",
      "Software Billing",
      "Account Access",
      "Network Operations"
    ],
    "correct": 2,
    "explanation": "FCR rates: Hardware = 280/400 = 70%. Software = 480/600 = 80%. Account Access = 425/500 = 85%. Network = 210/300 = 70%. Account Access has the highest rate at 85%."
  },
  {
    "id": "apt7",
    "category": "data-interpretation",
    "type": "table",
    "tableData": {
      "headers": [
        "Product Line",
        "Manufacturing Cost ($)",
        "Selling Price ($)",
        "Units Sold"
      ],
      "rows": [
        [
          "Model Alpha",
          "40",
          "60",
          "500"
        ],
        [
          "Model Beta",
          "75",
          "100",
          "300"
        ],
        [
          "Model Gamma",
          "120",
          "180",
          "200"
        ],
        [
          "Model Delta",
          "200",
          "260",
          "150"
        ]
      ]
    },
    "question": "What is the total net profit earned from sales of Model Gamma?",
    "options": [
      "$10,000",
      "$12,000",
      "$14,000",
      "$16,000"
    ],
    "correct": 1,
    "explanation": "Profit per unit for Model Gamma = $180 - $120 = $60. Total profit for 200 units = 200 \u00d7 $60 = $12,000."
  },
  {
    "id": "apt8",
    "category": "data-interpretation",
    "type": "chart-pie",
    "chartData": {
      "title": "Website Traffic Sources (100,000 Monthly Visitors)",
      "slices": [
        {
          "label": "Organic Search",
          "pct": 40,
          "color": "#10b981"
        },
        {
          "label": "Direct URL",
          "pct": 25,
          "color": "#3b82f6"
        },
        {
          "label": "Social Media",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Email Campaigns",
          "pct": 10,
          "color": "#8b5cf6"
        },
        {
          "label": "Referrals",
          "pct": 5,
          "color": "#ec4899"
        }
      ]
    },
    "question": "How many monthly visitors reached the website through Social Media and Referrals combined?",
    "options": [
      "20,000",
      "22,500",
      "25,000",
      "30,000"
    ],
    "correct": 2,
    "explanation": "Social Media (20%) + Referrals (5%) = 25%. 25% of 100,000 visitors = 25,000 visitors."
  },
  {
    "id": "apt9",
    "category": "data-interpretation",
    "type": "chart-bar",
    "chartData": {
      "title": "Monthly Average Ticket Resolution Time (Minutes)",
      "bars": [
        {
          "label": "Jan",
          "value": 18,
          "color": "#f43f5e"
        },
        {
          "label": "Feb",
          "value": 16,
          "color": "#fb7185"
        },
        {
          "label": "Mar",
          "value": 15,
          "color": "#f43f5e"
        },
        {
          "label": "Apr",
          "value": 12,
          "color": "#10b981"
        },
        {
          "label": "May",
          "value": 10,
          "color": "#059669"
        }
      ]
    },
    "question": "By what percentage did the average resolution time decrease from January to May?",
    "options": [
      "40.0%",
      "44.4%",
      "50.0%",
      "33.3%"
    ],
    "correct": 1,
    "explanation": "Decrease = 18 - 10 = 8 minutes. Percentage decrease = (8 / 18) \u00d7 100% \u2248 44.4%."
  },
  {
    "id": "apt10",
    "category": "data-interpretation",
    "type": "table",
    "tableData": {
      "headers": [
        "Representative",
        "Calls Handled",
        "Customer CSAT Score (/5)",
        "Avg Handle Time (s)"
      ],
      "rows": [
        [
          "Agent Priya",
          "85",
          "4.8",
          "240"
        ],
        [
          "Agent Rahul",
          "95",
          "4.2",
          "210"
        ],
        [
          "Agent Ananya",
          "90",
          "4.9",
          "230"
        ],
        [
          "Agent David",
          "75",
          "4.7",
          "260"
        ]
      ]
    },
    "question": "Which agent achieved the highest overall Customer Satisfaction (CSAT) score?",
    "options": [
      "Agent Priya",
      "Agent Rahul",
      "Agent Ananya",
      "Agent David"
    ],
    "correct": 2,
    "explanation": "Agent Ananya achieved the highest CSAT score at 4.9 out of 5."
  },
  {
    "id": "apt11",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "patternData": {
      "rule": "Concentric nested squares with alternating corner shading (Top-Left -> Top-Right -> Bottom-Right -> ?)",
      "stage": 4
    },
    "question": "In the concentric nested square sequence, following the clockwise shading rotation (Top-Left -> Top-Right -> Bottom-Right), which position must be shaded in the 4th square?",
    "options": [
      "Top-Left Corner",
      "Top-Right Corner",
      "Bottom-Left Corner",
      "Center Inner Square"
    ],
    "correct": 2,
    "explanation": "The shaded quadrant rotates 90 degrees clockwise in each step: Step 1 = Top-Left, Step 2 = Top-Right, Step 3 = Bottom-Right, Step 4 = Bottom-Left."
  },
  {
    "id": "apt12",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "patternData": {
      "rule": "Nested squares with line count incrementing: Square 1 has 1 internal square, Square 2 has 2, Square 3 has 3...",
      "stage": 4
    },
    "question": "A nested square figure contains 1 internal square in figure 1, 2 in figure 2, and 3 in figure 3. How many total bounding square boundaries exist in figure 4?",
    "options": [
      "3 squares",
      "4 squares",
      "5 squares",
      "6 squares"
    ],
    "correct": 2,
    "explanation": "Each figure includes the outer bounding square plus its internal nested squares. Figure 4 has 1 outer square + 4 internal nested squares = 5 total squares."
  },
  {
    "id": "apt13",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Identify the next geometric shape in the sequence: Triangle (3 sides), Square (4 sides), Pentagon (5 sides), Hexagon (6 sides), ...?",
    "options": [
      "Heptagon (7 sides)",
      "Octagon (8 sides)",
      "Nonagon (9 sides)",
      "Decagon (10 sides)"
    ],
    "correct": 0,
    "explanation": "The number of sides increases by 1 each step: 3, 4, 5, 6, so the next polygon has 7 sides (Heptagon)."
  },
  {
    "id": "apt14",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "A solid dark circle is reflected horizontally across a vertical mirror line, then rotated 180 degrees. What is the net orientation transformation?",
    "options": [
      "Vertical reflection only",
      "Horizontal reflection only",
      "180 degree rotation only",
      "Original unchanged position"
    ],
    "correct": 0,
    "explanation": "A horizontal reflection followed by a 180-degree rotation is geometrically equivalent to a vertical reflection (reflection across the horizontal axis)."
  },
  {
    "id": "apt15",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "patternData": {
      "rule": "Nested squares with alternating diagonal lines from top-left to bottom-right and top-right to bottom-left.",
      "stage": 3
    },
    "question": "Square 1 has diagonal line \\ (top-left to bottom-right). Square 2 has diagonal line / (bottom-left to top-right). Square 3 has both diagonals X. What should Square 4 contain to complete the sequence of removing the first diagonal?",
    "options": [
      "Diagonal \\",
      "Diagonal /",
      "No diagonals",
      "A central dot"
    ],
    "correct": 1,
    "explanation": "Pattern progression: [Line 1], [Line 2], [Line 1 + Line 2], [Line 2 remaining]."
  },
  {
    "id": "apt16",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape is the odd one out among the following: Circle, Ellipse, Sphere, Parabola?",
    "options": [
      "Circle",
      "Ellipse",
      "Sphere",
      "Parabola"
    ],
    "correct": 2,
    "explanation": "Sphere is a three-dimensional (3D) solid geometric object, whereas Circle, Ellipse, and Parabola are two-dimensional (2D) planar curves."
  },
  {
    "id": "apt17",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "A clock hand points at 12:00. If it rotates 135 degrees clockwise, where will it point on the clock face?",
    "options": [
      "Between 3 and 4",
      "Between 4 and 5",
      "Exactly at 5",
      "Between 5 and 6"
    ],
    "correct": 1,
    "explanation": "Each hour on a clock face represents 360 / 12 = 30 degrees. 135 degrees / 30 = 4.5 hours, so the hand points at 4:30 (between 4 and 5)."
  },
  {
    "id": "apt18",
    "category": "image-reasoning",
    "question": "Which tool is primarily utilized by IT network engineers to terminate twisted-pair copper cables into RJ-45 modular connectors?",
    "options": [
      "Soldering Iron",
      "RJ-45 Crimping Tool",
      "Wire Stripper Plier",
      "Oscilloscope Probe"
    ],
    "correct": 1,
    "explanation": "An RJ-45 modular crimping tool mechanically compresses the contact pins into individual cable wire conductors."
  },
  {
    "id": "apt19",
    "category": "image-reasoning",
    "question": "In standard telecommunication and customer support operations, what is the primary acoustic purpose of a noise-canceling headset microphone?",
    "options": [
      "To amplify background keyboard typing",
      "To eliminate ambient background room noise for the caller",
      "To record audio directly to local flash storage",
      "To translate foreign languages automatically"
    ],
    "correct": 1,
    "explanation": "Noise-canceling directional microphones attenuate ambient background room acoustic noise so callers hear the agent clearly."
  },
  {
    "id": "apt20",
    "category": "image-reasoning",
    "question": "Select the item that maintains the same relational connection: 'Stethoscope is to Physician as Headset is to ...?'",
    "options": [
      "Architect",
      "Call Center Agent",
      "Chef",
      "Pilot"
    ],
    "correct": 1,
    "explanation": "A stethoscope is the defining tool used by a physician; similarly, a headset is the essential operational communication equipment used by a call center agent."
  },
  {
    "id": "apt21",
    "category": "image-reasoning",
    "question": "Which computer peripheral hardware device is strictly classified as an input device?",
    "options": [
      "Inkjet Color Printer",
      "Flatbed Optical Scanner",
      "Stereo Desktop Speakers",
      "Computer LCD Monitor"
    ],
    "correct": 1,
    "explanation": "A flatbed optical scanner captures external paper images and sends digital data into the computer system (input device)."
  },
  {
    "id": "apt22",
    "category": "image-reasoning",
    "question": "Which safety icon represents mandatory ear hearing protection in an industrial data center server room?",
    "options": [
      "Blue circle with white earmuffs",
      "Yellow triangle with lightning bolt",
      "Red circle with diagonal slash",
      "Green square with first aid cross"
    ],
    "correct": 0,
    "explanation": "Under ISO safety standards, mandatory personal protective equipment (PPE) requirements are designated by a circular blue background with a white symbol (earmuffs for hearing protection)."
  },
  {
    "id": "apt23",
    "category": "numerical-aptitude",
    "question": "A retail merchandise item priced at $80 is marked up by 25%, and subsequently sold with a 10% promotional discount. What is the final customer price?",
    "options": [
      "$88",
      "$90",
      "$92",
      "$95"
    ],
    "correct": 1,
    "explanation": "Marked-up price = $80 \u00d7 1.25 = $100. Discounted price = $100 \u00d7 (1 - 0.10) = $100 \u00d7 0.90 = $90."
  },
  {
    "id": "apt24",
    "category": "numerical-aptitude",
    "question": "The ratio of male to female customer support agents in an operational department is 5 : 3. If there are 45 male agents, how many female agents are employed?",
    "options": [
      "24",
      "27",
      "30",
      "36"
    ],
    "correct": 1,
    "explanation": "Let 1 ratio unit = 45 / 5 = 9. Number of female agents = 3 \u00d7 9 = 27."
  },
  {
    "id": "apt25",
    "category": "numerical-aptitude",
    "question": "An agent's average call quality score across five evaluated interactions is 78 points. If the sixth call receives a score of 90 points, what is the new average score?",
    "options": [
      "79 points",
      "80 points",
      "81 points",
      "82 points"
    ],
    "correct": 1,
    "explanation": "Sum of first 5 calls = 5 \u00d7 78 = 390. New sum = 390 + 90 = 480. New average across 6 calls = 480 / 6 = 80 points."
  },
  {
    "id": "apt26",
    "category": "numerical-aptitude",
    "question": "Technician A can configure a network router in 12 minutes, while Technician B requires 6 minutes. Working collaboratively, how long will they take to configure one router?",
    "options": [
      "3 minutes",
      "4 minutes",
      "5 minutes",
      "4.5 minutes"
    ],
    "correct": 1,
    "explanation": "Combined rate per minute = 1/12 + 1/6 = 1/12 + 2/12 = 3/12 = 1/4. Time required = 1 / (1/4) = 4 minutes."
  },
  {
    "id": "apt27",
    "category": "numerical-aptitude",
    "question": "Determine the next missing number in the mathematical progression: 3, 7, 15, 31, 63, ...?",
    "options": [
      "95",
      "124",
      "127",
      "129"
    ],
    "correct": 2,
    "explanation": "Each term follows the rule: next = (current \u00d7 2) + 1. 3\u00d72+1=7, 7\u00d72+1=15, 15\u00d72+1=31, 31\u00d72+1=63, 63\u00d72+1 = 127."
  },
  {
    "id": "apt28",
    "category": "numerical-aptitude",
    "question": "A merchant purchases a shipment of headsets for $1,200 and sells them for $1,500. What is the merchant's percentage profit on the cost price?",
    "options": [
      "20%",
      "25%",
      "30%",
      "33.3%"
    ],
    "correct": 1,
    "explanation": "Profit = $1,500 - $1,200 = $300. Profit percentage = ($300 / $1,200) \u00d7 100% = 25%."
  },
  {
    "id": "apt29",
    "category": "numerical-aptitude",
    "question": "If 8 customer service agents can review 320 dispute cases in 4 hours, how many cases can 12 agents review in 5 hours at the same handling rate?",
    "options": [
      "480 cases",
      "540 cases",
      "600 cases",
      "640 cases"
    ],
    "correct": 2,
    "explanation": "Cases per agent per hour = 320 / (8 \u00d7 4) = 320 / 32 = 10 cases/hr. For 12 agents working 5 hours: 12 \u00d7 5 \u00d7 10 = 600 cases."
  },
  {
    "id": "apt30",
    "category": "numerical-aptitude",
    "question": "What is 15% of 40% of 2,000?",
    "options": [
      "90",
      "120",
      "150",
      "180"
    ],
    "correct": 1,
    "explanation": "40% of 2,000 = 0.40 \u00d7 2,000 = 800. 15% of 800 = 0.15 \u00d7 800 = 120."
  },
  {
    "id": "apt31",
    "category": "numerical-aptitude",
    "question": "A vehicle travels at an average speed of 60 km/h for the first 2 hours, and 90 km/h for the subsequent 3 hours. What is the vehicle's overall average speed?",
    "options": [
      "72 km/h",
      "75 km/h",
      "78 km/h",
      "80 km/h"
    ],
    "correct": 2,
    "explanation": "Total distance = (60 \u00d7 2) + (90 \u00d7 3) = 120 + 270 = 390 km. Total time = 2 + 3 = 5 hours. Average speed = 390 / 5 = 78 km/h."
  },
  {
    "id": "apt32",
    "category": "numerical-aptitude",
    "question": "Find the missing number in the sequence: 2, 6, 12, 20, 30, 42, ...?",
    "options": [
      "52",
      "54",
      "56",
      "58"
    ],
    "correct": 2,
    "explanation": "The differences between consecutive terms increase by 2: +4, +6, +8, +10, +12. Next difference = +14. 42 + 14 = 56. (Also n\u00d7(n+1): 1\u00d72, 2\u00d73, 3\u00d74, 4\u00d75, 5\u00d76, 6\u00d77, 7\u00d78=56)."
  },
  {
    "id": "apt33",
    "category": "logical-reasoning",
    "question": "Identify the missing letter pair in the alphabetical series: AZ, BY, CX, DW, ...?",
    "options": [
      "ET",
      "EV",
      "FU",
      "EX"
    ],
    "correct": 1,
    "explanation": "First letter moves forward: A, B, C, D, E. Second letter moves backward from Z: Z, Y, X, W, V. Result is EV."
  },
  {
    "id": "apt34",
    "category": "logical-reasoning",
    "question": "If in a certain code language, 'CHAT' is written as 'DIBU', how will 'TEAM' be coded in that same system?",
    "options": [
      "UDBN",
      "UFBN",
      "VGBN",
      "UEBN"
    ],
    "correct": 1,
    "explanation": "Each letter is shifted forward by +1: T -> U, E -> F, A -> B, M -> N. The result is UFBN."
  },
  {
    "id": "apt35",
    "category": "logical-reasoning",
    "question": "Statement 1: All supervisors are leaders. Statement 2: Some leaders are managers. Conclusion: Which deduction is logically valid?",
    "options": [
      "All supervisors are managers.",
      "All managers are leaders.",
      "Some leaders are supervisors.",
      "No managers are supervisors."
    ],
    "correct": 2,
    "explanation": "Since all supervisors are leaders, the set of supervisors is a subset of leaders. Therefore, it is guaranteed that some leaders are supervisors."
  },
  {
    "id": "apt36",
    "category": "logical-reasoning",
    "question": "Pointing to a photograph, Marcus said: 'Her brother is the only son of my father.' How is the person in the photograph related to Marcus?",
    "options": [
      "His daughter",
      "His sister",
      "His mother",
      "His niece"
    ],
    "correct": 1,
    "explanation": "'The only son of my father' is Marcus himself (assuming speaker is male). Since her brother is Marcus, the person in the photograph is Marcus's sister."
  },
  {
    "id": "apt37",
    "category": "logical-reasoning",
    "question": "A person walks 10 meters North, turns right and walks 5 meters, turns right again and walks 10 meters. How far and in which direction is the person from the starting point?",
    "options": [
      "5 meters North",
      "5 meters East",
      "10 meters South",
      "5 meters West"
    ],
    "correct": 1,
    "explanation": "Walking 10m North and later 10m South cancels the vertical displacement. The 5m East displacement remains. The person is 5 meters East of the origin."
  },
  {
    "id": "apt38",
    "category": "logical-reasoning",
    "question": "Which word does NOT belong with the others in the group: Keyboard, Mouse, Monitor, Touchpad?",
    "options": [
      "Keyboard",
      "Mouse",
      "Monitor",
      "Touchpad"
    ],
    "correct": 2,
    "explanation": "Keyboard, Mouse, and Touchpad are input devices. Monitor is an output display device."
  },
  {
    "id": "apt39",
    "category": "logical-reasoning",
    "question": "In a line of 30 employees, Sanjay is 12th from the front. What is Sanjay's position from the back of the line?",
    "options": [
      "18th",
      "19th",
      "20th",
      "21st"
    ],
    "correct": 1,
    "explanation": "Position from back = (Total count - Position from front) + 1 = (30 - 12) + 1 = 18 + 1 = 19th."
  },
  {
    "id": "apt40",
    "category": "logical-reasoning",
    "question": "Find the missing term in the sequence: B2D, D4F, F6H, H8J, ...?",
    "options": [
      "J10K",
      "J10L",
      "K10L",
      "J12L"
    ],
    "correct": 1,
    "explanation": "First letter skips 1 (B, D, F, H, J). Number adds 2 (2, 4, 6, 8, 10). Last letter skips 1 (D, F, H, J, L). Result is J10L."
  },
  {
    "id": "apt41",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt42",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt43",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt44",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt45",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
  },
  {
    "id": "apt46",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "The average age of 4 siblings is 15 years. When their mother's age is included, the average becomes 21 years. How old is the mother?",
    "options": [
      "42 years",
      "45 years",
      "48 years",
      "50 years"
    ],
    "correct": 1,
    "explanation": "Sum of 4 siblings = 4 \u00d7 15 = 60. Sum of 5 people = 5 \u00d7 21 = 105. Mother's age = 105 - 60 = 45 years."
  },
  {
    "id": "apt47",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A mixture of 60 liters contains milk and water in the ratio 2 : 1. How many liters of water must be added to make the ratio 1 : 2?",
    "options": [
      "40 liters",
      "60 liters",
      "50 liters",
      "30 liters"
    ],
    "correct": 1,
    "explanation": "Initial: Milk = 40L, Water = 20L. For ratio to be 1:2, water must be 2 \u00d7 40 = 80L. Water to add = 80 - 20 = 60 liters."
  },
  {
    "id": "apt48",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "question": "When an inner square inside an outer bounding square is rotated 45 degrees, what shape profile does its vertices form within the boundary?",
    "options": [
      "A diamond (rhombus) touching the outer midpoints",
      "A circle",
      "A triangle",
      "An octagon"
    ],
    "correct": 0,
    "explanation": "A square rotated 45 degrees within another square creates a diamond whose 4 vertices touch the midpoints of the outer square's 4 sides.",
    "patternData": {
      "stage": 2,
      "rule": "Inner square rotated 45 degrees into diamond orientation"
    }
  },
  {
    "id": "apt49",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape has exactly 8 rotational symmetries in a full 360-degree rotation?",
    "options": [
      "Regular Hexagon",
      "Regular Octagon",
      "Equilateral Triangle",
      "Regular Pentagon"
    ],
    "correct": 1,
    "explanation": "A regular octagon has 8 sides and 8-fold rotational symmetry (every 45 degrees)."
  },
  {
    "id": "apt50",
    "category": "logical-reasoning",
    "type": "none",
    "question": "In a code, 'SYSTEM' is written as 'SYSMET'. How is 'BRANCH' written in that code?",
    "options": [
      "BRANHC",
      "BRAHCN",
      "BRANHC",
      "BRNACH"
    ],
    "correct": 0,
    "explanation": "The first 3 letters remain unchanged ('SYS', 'BRA'), while the last 3 letters are reversed ('TEM' -> 'MET', 'NCH' -> 'HCN'). Result is BRAHCN."
  },
  {
    "id": "apt51",
    "category": "logical-reasoning",
    "type": "none",
    "question": "If Monday falls on the 1st of a month, what day will fall on the 25th of that same month?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correct": 1,
    "explanation": "Difference = 25 - 1 = 24 days. 24 mod 7 = 3 days after Monday: Tuesday (1), Wednesday (2), Thursday (3). It is Thursday."
  },
  {
    "id": "apt52",
    "category": "logical-reasoning",
    "type": "none",
    "question": "Which number replaces the question mark in the series: 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "49",
      "50",
      "64"
    ],
    "correct": 1,
    "explanation": "These are consecutive perfect squares: 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49."
  },
  {
    "id": "apt53",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt54",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt55",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt56",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt57",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
  },
  {
    "id": "apt58",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "The average age of 4 siblings is 15 years. When their mother's age is included, the average becomes 21 years. How old is the mother?",
    "options": [
      "42 years",
      "45 years",
      "48 years",
      "50 years"
    ],
    "correct": 1,
    "explanation": "Sum of 4 siblings = 4 \u00d7 15 = 60. Sum of 5 people = 5 \u00d7 21 = 105. Mother's age = 105 - 60 = 45 years."
  },
  {
    "id": "apt59",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A mixture of 60 liters contains milk and water in the ratio 2 : 1. How many liters of water must be added to make the ratio 1 : 2?",
    "options": [
      "40 liters",
      "60 liters",
      "50 liters",
      "30 liters"
    ],
    "correct": 1,
    "explanation": "Initial: Milk = 40L, Water = 20L. For ratio to be 1:2, water must be 2 \u00d7 40 = 80L. Water to add = 80 - 20 = 60 liters."
  },
  {
    "id": "apt60",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "question": "When an inner square inside an outer bounding square is rotated 45 degrees, what shape profile does its vertices form within the boundary?",
    "options": [
      "A diamond (rhombus) touching the outer midpoints",
      "A circle",
      "A triangle",
      "An octagon"
    ],
    "correct": 0,
    "explanation": "A square rotated 45 degrees within another square creates a diamond whose 4 vertices touch the midpoints of the outer square's 4 sides.",
    "patternData": {
      "stage": 2,
      "rule": "Inner square rotated 45 degrees into diamond orientation"
    }
  },
  {
    "id": "apt61",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape has exactly 8 rotational symmetries in a full 360-degree rotation?",
    "options": [
      "Regular Hexagon",
      "Regular Octagon",
      "Equilateral Triangle",
      "Regular Pentagon"
    ],
    "correct": 1,
    "explanation": "A regular octagon has 8 sides and 8-fold rotational symmetry (every 45 degrees)."
  },
  {
    "id": "apt62",
    "category": "logical-reasoning",
    "type": "none",
    "question": "In a code, 'SYSTEM' is written as 'SYSMET'. How is 'BRANCH' written in that code?",
    "options": [
      "BRANHC",
      "BRAHCN",
      "BRANHC",
      "BRNACH"
    ],
    "correct": 0,
    "explanation": "The first 3 letters remain unchanged ('SYS', 'BRA'), while the last 3 letters are reversed ('TEM' -> 'MET', 'NCH' -> 'HCN'). Result is BRAHCN."
  },
  {
    "id": "apt63",
    "category": "logical-reasoning",
    "type": "none",
    "question": "If Monday falls on the 1st of a month, what day will fall on the 25th of that same month?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correct": 1,
    "explanation": "Difference = 25 - 1 = 24 days. 24 mod 7 = 3 days after Monday: Tuesday (1), Wednesday (2), Thursday (3). It is Thursday."
  },
  {
    "id": "apt64",
    "category": "logical-reasoning",
    "type": "none",
    "question": "Which number replaces the question mark in the series: 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "49",
      "50",
      "64"
    ],
    "correct": 1,
    "explanation": "These are consecutive perfect squares: 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49."
  },
  {
    "id": "apt65",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt66",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt67",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt68",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt69",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
  },
  {
    "id": "apt70",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "The average age of 4 siblings is 15 years. When their mother's age is included, the average becomes 21 years. How old is the mother?",
    "options": [
      "42 years",
      "45 years",
      "48 years",
      "50 years"
    ],
    "correct": 1,
    "explanation": "Sum of 4 siblings = 4 \u00d7 15 = 60. Sum of 5 people = 5 \u00d7 21 = 105. Mother's age = 105 - 60 = 45 years."
  },
  {
    "id": "apt71",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A mixture of 60 liters contains milk and water in the ratio 2 : 1. How many liters of water must be added to make the ratio 1 : 2?",
    "options": [
      "40 liters",
      "60 liters",
      "50 liters",
      "30 liters"
    ],
    "correct": 1,
    "explanation": "Initial: Milk = 40L, Water = 20L. For ratio to be 1:2, water must be 2 \u00d7 40 = 80L. Water to add = 80 - 20 = 60 liters."
  },
  {
    "id": "apt72",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "question": "When an inner square inside an outer bounding square is rotated 45 degrees, what shape profile does its vertices form within the boundary?",
    "options": [
      "A diamond (rhombus) touching the outer midpoints",
      "A circle",
      "A triangle",
      "An octagon"
    ],
    "correct": 0,
    "explanation": "A square rotated 45 degrees within another square creates a diamond whose 4 vertices touch the midpoints of the outer square's 4 sides.",
    "patternData": {
      "stage": 2,
      "rule": "Inner square rotated 45 degrees into diamond orientation"
    }
  },
  {
    "id": "apt73",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape has exactly 8 rotational symmetries in a full 360-degree rotation?",
    "options": [
      "Regular Hexagon",
      "Regular Octagon",
      "Equilateral Triangle",
      "Regular Pentagon"
    ],
    "correct": 1,
    "explanation": "A regular octagon has 8 sides and 8-fold rotational symmetry (every 45 degrees)."
  },
  {
    "id": "apt74",
    "category": "logical-reasoning",
    "type": "none",
    "question": "In a code, 'SYSTEM' is written as 'SYSMET'. How is 'BRANCH' written in that code?",
    "options": [
      "BRANHC",
      "BRAHCN",
      "BRANHC",
      "BRNACH"
    ],
    "correct": 0,
    "explanation": "The first 3 letters remain unchanged ('SYS', 'BRA'), while the last 3 letters are reversed ('TEM' -> 'MET', 'NCH' -> 'HCN'). Result is BRAHCN."
  },
  {
    "id": "apt75",
    "category": "logical-reasoning",
    "type": "none",
    "question": "If Monday falls on the 1st of a month, what day will fall on the 25th of that same month?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correct": 1,
    "explanation": "Difference = 25 - 1 = 24 days. 24 mod 7 = 3 days after Monday: Tuesday (1), Wednesday (2), Thursday (3). It is Thursday."
  },
  {
    "id": "apt76",
    "category": "logical-reasoning",
    "type": "none",
    "question": "Which number replaces the question mark in the series: 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "49",
      "50",
      "64"
    ],
    "correct": 1,
    "explanation": "These are consecutive perfect squares: 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49."
  },
  {
    "id": "apt77",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt78",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt79",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt80",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt81",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
  },
  {
    "id": "apt82",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "The average age of 4 siblings is 15 years. When their mother's age is included, the average becomes 21 years. How old is the mother?",
    "options": [
      "42 years",
      "45 years",
      "48 years",
      "50 years"
    ],
    "correct": 1,
    "explanation": "Sum of 4 siblings = 4 \u00d7 15 = 60. Sum of 5 people = 5 \u00d7 21 = 105. Mother's age = 105 - 60 = 45 years."
  },
  {
    "id": "apt83",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A mixture of 60 liters contains milk and water in the ratio 2 : 1. How many liters of water must be added to make the ratio 1 : 2?",
    "options": [
      "40 liters",
      "60 liters",
      "50 liters",
      "30 liters"
    ],
    "correct": 1,
    "explanation": "Initial: Milk = 40L, Water = 20L. For ratio to be 1:2, water must be 2 \u00d7 40 = 80L. Water to add = 80 - 20 = 60 liters."
  },
  {
    "id": "apt84",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "question": "When an inner square inside an outer bounding square is rotated 45 degrees, what shape profile does its vertices form within the boundary?",
    "options": [
      "A diamond (rhombus) touching the outer midpoints",
      "A circle",
      "A triangle",
      "An octagon"
    ],
    "correct": 0,
    "explanation": "A square rotated 45 degrees within another square creates a diamond whose 4 vertices touch the midpoints of the outer square's 4 sides.",
    "patternData": {
      "stage": 2,
      "rule": "Inner square rotated 45 degrees into diamond orientation"
    }
  },
  {
    "id": "apt85",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape has exactly 8 rotational symmetries in a full 360-degree rotation?",
    "options": [
      "Regular Hexagon",
      "Regular Octagon",
      "Equilateral Triangle",
      "Regular Pentagon"
    ],
    "correct": 1,
    "explanation": "A regular octagon has 8 sides and 8-fold rotational symmetry (every 45 degrees)."
  },
  {
    "id": "apt86",
    "category": "logical-reasoning",
    "type": "none",
    "question": "In a code, 'SYSTEM' is written as 'SYSMET'. How is 'BRANCH' written in that code?",
    "options": [
      "BRANHC",
      "BRAHCN",
      "BRANHC",
      "BRNACH"
    ],
    "correct": 0,
    "explanation": "The first 3 letters remain unchanged ('SYS', 'BRA'), while the last 3 letters are reversed ('TEM' -> 'MET', 'NCH' -> 'HCN'). Result is BRAHCN."
  },
  {
    "id": "apt87",
    "category": "logical-reasoning",
    "type": "none",
    "question": "If Monday falls on the 1st of a month, what day will fall on the 25th of that same month?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correct": 1,
    "explanation": "Difference = 25 - 1 = 24 days. 24 mod 7 = 3 days after Monday: Tuesday (1), Wednesday (2), Thursday (3). It is Thursday."
  },
  {
    "id": "apt88",
    "category": "logical-reasoning",
    "type": "none",
    "question": "Which number replaces the question mark in the series: 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "49",
      "50",
      "64"
    ],
    "correct": 1,
    "explanation": "These are consecutive perfect squares: 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49."
  },
  {
    "id": "apt89",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt90",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt91",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt92",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt93",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
  },
  {
    "id": "apt94",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "The average age of 4 siblings is 15 years. When their mother's age is included, the average becomes 21 years. How old is the mother?",
    "options": [
      "42 years",
      "45 years",
      "48 years",
      "50 years"
    ],
    "correct": 1,
    "explanation": "Sum of 4 siblings = 4 \u00d7 15 = 60. Sum of 5 people = 5 \u00d7 21 = 105. Mother's age = 105 - 60 = 45 years."
  },
  {
    "id": "apt95",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A mixture of 60 liters contains milk and water in the ratio 2 : 1. How many liters of water must be added to make the ratio 1 : 2?",
    "options": [
      "40 liters",
      "60 liters",
      "50 liters",
      "30 liters"
    ],
    "correct": 1,
    "explanation": "Initial: Milk = 40L, Water = 20L. For ratio to be 1:2, water must be 2 \u00d7 40 = 80L. Water to add = 80 - 20 = 60 liters."
  },
  {
    "id": "apt96",
    "category": "non-verbal-reasoning",
    "type": "nested-squares",
    "question": "When an inner square inside an outer bounding square is rotated 45 degrees, what shape profile does its vertices form within the boundary?",
    "options": [
      "A diamond (rhombus) touching the outer midpoints",
      "A circle",
      "A triangle",
      "An octagon"
    ],
    "correct": 0,
    "explanation": "A square rotated 45 degrees within another square creates a diamond whose 4 vertices touch the midpoints of the outer square's 4 sides.",
    "patternData": {
      "stage": 2,
      "rule": "Inner square rotated 45 degrees into diamond orientation"
    }
  },
  {
    "id": "apt97",
    "category": "non-verbal-reasoning",
    "type": "geometric-pattern",
    "question": "Which shape has exactly 8 rotational symmetries in a full 360-degree rotation?",
    "options": [
      "Regular Hexagon",
      "Regular Octagon",
      "Equilateral Triangle",
      "Regular Pentagon"
    ],
    "correct": 1,
    "explanation": "A regular octagon has 8 sides and 8-fold rotational symmetry (every 45 degrees)."
  },
  {
    "id": "apt98",
    "category": "logical-reasoning",
    "type": "none",
    "question": "In a code, 'SYSTEM' is written as 'SYSMET'. How is 'BRANCH' written in that code?",
    "options": [
      "BRANHC",
      "BRAHCN",
      "BRANHC",
      "BRNACH"
    ],
    "correct": 0,
    "explanation": "The first 3 letters remain unchanged ('SYS', 'BRA'), while the last 3 letters are reversed ('TEM' -> 'MET', 'NCH' -> 'HCN'). Result is BRAHCN."
  },
  {
    "id": "apt99",
    "category": "logical-reasoning",
    "type": "none",
    "question": "If Monday falls on the 1st of a month, what day will fall on the 25th of that same month?",
    "options": [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "correct": 1,
    "explanation": "Difference = 25 - 1 = 24 days. 24 mod 7 = 3 days after Monday: Tuesday (1), Wednesday (2), Thursday (3). It is Thursday."
  },
  {
    "id": "apt100",
    "category": "logical-reasoning",
    "type": "none",
    "question": "Which number replaces the question mark in the series: 4, 9, 16, 25, 36, ...?",
    "options": [
      "45",
      "49",
      "50",
      "64"
    ],
    "correct": 1,
    "explanation": "These are consecutive perfect squares: 2^2, 3^2, 4^2, 5^2, 6^2, so the next is 7^2 = 49."
  },
  {
    "id": "apt101",
    "category": "data-interpretation",
    "type": "chart-pie",
    "question": "How much budget is dedicated to Cybersecurity?",
    "options": [
      "$100,000",
      "$125,000",
      "$150,000",
      "$175,000"
    ],
    "correct": 1,
    "explanation": "25% of $500,000 = 0.25 \u00d7 500,000 = $125,000.",
    "chartData": {
      "title": "Corporate IT Cloud Budget Allocation ($500,000)",
      "slices": [
        {
          "label": "Cloud Hosting",
          "pct": 40,
          "color": "#3b82f6"
        },
        {
          "label": "Cybersecurity",
          "pct": 25,
          "color": "#10b981"
        },
        {
          "label": "DevOps Tools",
          "pct": 20,
          "color": "#f59e0b"
        },
        {
          "label": "Data Backup",
          "pct": 15,
          "color": "#8b5cf6"
        }
      ]
    }
  },
  {
    "id": "apt102",
    "category": "data-interpretation",
    "type": "chart-bar",
    "question": "What was the percentage increase in licenses deployed from Q2 to Q4?",
    "options": [
      "50.0%",
      "66.7%",
      "75.0%",
      "80.0%"
    ],
    "correct": 1,
    "explanation": "Increase = 500 - 300 = 200. Percentage increase = (200 / 300) \u00d7 100% = 66.7%.",
    "chartData": {
      "title": "Quarterly Software Licenses Deployed",
      "bars": [
        {
          "label": "Q1",
          "value": 250,
          "color": "#0ea5e9"
        },
        {
          "label": "Q2",
          "value": 300,
          "color": "#0ea5e9"
        },
        {
          "label": "Q3",
          "value": 450,
          "color": "#0ea5e9"
        },
        {
          "label": "Q4",
          "value": 500,
          "color": "#0ea5e9"
        }
      ]
    }
  },
  {
    "id": "apt103",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A train 180 meters long passes a telephone pole in 9 seconds. What is the speed of the train in km/h?",
    "options": [
      "60 km/h",
      "72 km/h",
      "80 km/h",
      "90 km/h"
    ],
    "correct": 1,
    "explanation": "Speed in m/s = 180 / 9 = 20 m/s. Convert to km/h: 20 \u00d7 (18/5) = 72 km/h."
  },
  {
    "id": "apt104",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "If 15% of a number is 45, what is 40% of that same number?",
    "options": [
      "100",
      "120",
      "140",
      "150"
    ],
    "correct": 1,
    "explanation": "Number = 45 / 0.15 = 300. 40% of 300 = 0.40 \u00d7 300 = 120."
  },
  {
    "id": "apt105",
    "category": "numerical-aptitude",
    "type": "none",
    "question": "A sum of money doubles itself in 5 years under simple interest. What is the annual rate of interest?",
    "options": [
      "15%",
      "20%",
      "25%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Interest = Principal in 5 years. Rate = (100 \u00d7 Interest) / (Principal \u00d7 Time) = (100 \u00d7 P) / (P \u00d7 5) = 20%."
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
