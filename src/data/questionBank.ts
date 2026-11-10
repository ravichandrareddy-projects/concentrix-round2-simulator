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
    "text": "Please keep your reference number for tracking.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls2",
    "text": "I am happy to assist you today.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls3",
    "text": "Please verify the six digit security code.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls4",
    "text": "Your refund will arrive in three days.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls5",
    "text": "Could you please confirm your email address?",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls6",
    "text": "Please hold while I check your account.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls7",
    "text": "We have updated your current delivery address.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls8",
    "text": "Thank you for choosing our customer service.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls9",
    "text": "You can download the invoice from our app.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls10",
    "text": "Your monthly statement is ready for review.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls11",
    "text": "Please turn off the router for thirty seconds.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls12",
    "text": "A confirmation text was sent to your phone.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls13",
    "text": "Our office opens tomorrow morning at eight.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls14",
    "text": "Please attach a photo of the damaged package.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls15",
    "text": "I have cancelled the recurring monthly subscription.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls16",
    "text": "Let me transfer you to our billing team.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls17",
    "text": "Your payment has been received and verified.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls18",
    "text": "Please speak your registered phone number clearly.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls19",
    "text": "You will receive a tracking link via email.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls20",
    "text": "The representative will join the call shortly.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls21",
    "text": "We are currently experiencing high call volume.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls22",
    "text": "Please allow forty eight hours for shipping.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls23",
    "text": "I have sent a password reset link.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls24",
    "text": "Your flight reservation is now fully confirmed.",
    "difficulty": "easy",
    "wordCount": 7
  },
  {
    "id": "ls25",
    "text": "Please provide the serial number on the box.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls26",
    "text": "The package was delivered to your front door.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls27",
    "text": "I have noted your request in the system.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls28",
    "text": "You can easily track the driver on map.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls29",
    "text": "Please check your email for the return label.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls30",
    "text": "We have issued a credit voucher for you.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls31",
    "text": "Please stay on the line for a survey.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls32",
    "text": "Is there anything else I can help with?",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls33",
    "text": "Your warranty coverage expires at the year end.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls34",
    "text": "Please reboot your computer and try logging in.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls35",
    "text": "I apologize for the wait time you experienced.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls36",
    "text": "Your appointment is scheduled for next Tuesday morning.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls37",
    "text": "Please confirm the primary name on this card.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls38",
    "text": "The replacement part will be delivered by courier.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls39",
    "text": "I am updating your contact details right now.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls40",
    "text": "Thank you for your patience during this call.",
    "difficulty": "easy",
    "wordCount": 8
  },
  {
    "id": "ls41",
    "text": "Please ensure that your mobile phone is connected to the internet.",
    "difficulty": "medium",
    "wordCount": 11
  },
  {
    "id": "ls42",
    "text": "I can help you change your departure date with no penalty.",
    "difficulty": "medium",
    "wordCount": 11
  },
  {
    "id": "ls43",
    "text": "We have processed the full refund back to your original payment card.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls44",
    "text": "You can reset your account password by clicking the link in email.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls45",
    "text": "The technician is scheduled to visit your home between two and four.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls46",
    "text": "Please provide the twelve digit tracking number found on your store receipt.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls47",
    "text": "We sent a one time passcode to your registered mobile telephone number.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls48",
    "text": "You can manage all your billing preferences directly from your account settings.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls49",
    "text": "Our customer support desk is available twenty four hours every single day.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls50",
    "text": "The courier attempted delivery today but nobody was home to sign it.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls51",
    "text": "I have applied a ten percent discount voucher to your next purchase.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls52",
    "text": "Please verify the last four digits of your credit card for authorization.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls53",
    "text": "We apologize for the inconvenience caused by the temporary system maintenance outage.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls54",
    "text": "Your return package has safely arrived at our central inspection warehouse today.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls55",
    "text": "Please keep your confirmation code ready before speaking to our senior specialist.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls56",
    "text": "A digital copy of your payment receipt was sent to your inbox.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls57",
    "text": "You can choose your seat assignment through our mobile application at checkin.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls58",
    "text": "We have extended your trial period for thirty additional days at no charge.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls59",
    "text": "Please check that all cables are firmly plugged into your wifi router.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls60",
    "text": "I will personally monitor your service ticket until the issue is resolved.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls61",
    "text": "The bank requires two business days to clear the transferred balance amount.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls62",
    "text": "Please confirm your date of birth and postal code for security reasons.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls63",
    "text": "Your monthly data plan will automatically renew on the first of next month.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls64",
    "text": "We can schedule a callback for you when our lines are less busy.",
    "difficulty": "medium",
    "wordCount": 13
  },
  {
    "id": "ls65",
    "text": "The tracking update shows that your parcel is out for delivery today.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls66",
    "text": "Please take a screenshot of the error message displayed on your monitor.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls67",
    "text": "I have updated your home address and your new card is dispatched.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls68",
    "text": "You will receive an automated notification as soon as the driver arrives.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls69",
    "text": "Our billing department has waived the late fee on your current statement.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls70",
    "text": "Please ensure that you log out of all public computers after browsing.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls71",
    "text": "The flight departure gate was shifted from gate twelve to gate twenty.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls72",
    "text": "I am pleased to inform you that your claim has been approved.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls73",
    "text": "Please read the terms and conditions before submitting your online warranty registration.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls74",
    "text": "We have credited twenty five dollars to your account for the delay.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls75",
    "text": "You can track the live location of your technician on our website.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls76",
    "text": "Please keep your order confirmation number handy for future reference and assistance.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls77",
    "text": "The customer care department will follow up with an email update tomorrow.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls78",
    "text": "I have successfully updated your email address across our entire customer database.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls79",
    "text": "Your subscription plan allows streaming on up to four separate personal devices.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls80",
    "text": "Please disable your popup blocker before continuing with the online verification process.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls81",
    "text": "We will send a replacement unit immediately without waiting for the return.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls82",
    "text": "You can download your detailed statement in PDF format from the dashboard.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls83",
    "text": "Please double check that the shipping address includes your apartment unit number.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls84",
    "text": "I will stay on the phone while you restart your desktop computer.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls85",
    "text": "Our team has escalated your complaint to the priority support team leader.",
    "difficulty": "medium",
    "wordCount": 12
  },
  {
    "id": "ls86",
    "text": "Although the order was delayed, our dispatch warehouse expedited priority delivery at no additional cost.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls87",
    "text": "Please make sure you have your passport and booking reference number ready at the counter.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls88",
    "text": "We have issued a replacement order that will arrive within two to three business days.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls89",
    "text": "If you do not recognize this transaction, we can block your payment card right now.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls90",
    "text": "The technical support agent will guide you step by step through the device installation procedure.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls91",
    "text": "You can view your real time account balance and recent transactions on the mobile dashboard.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls92",
    "text": "Please remember to keep your login credentials and temporary passwords completely confidential at all times.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls93",
    "text": "Our company policy allows customers to return unopened items within thirty days of purchase date.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls94",
    "text": "I have forwarded your request to the regional supervisor who will call you back today.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls95",
    "text": "Please verify that your registered contact email address is spelled correctly in our current records.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls96",
    "text": "We appreciate your cooperation while our technical team works to resolve this unexpected network disruption.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls97",
    "text": "You can reschedule your technician appointment online anytime without paying any additional cancellation fees whatsoever.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls98",
    "text": "The tracking page indicates that your package was delivered safely to your neighbor next door.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls99",
    "text": "Please keep your service contract agreement number handy whenever you contact our technical support helpline.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls100",
    "text": "Our billing department has refunded the duplicate payment charge directly back to your checking account.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls101",
    "text": "You will receive an email confirmation containing your revised flight itinerary within the next hour.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls102",
    "text": "Please ensure that your computer remains connected to power during the firmware software update process.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls103",
    "text": "I have placed a temporary hold on your account until our security specialists complete verification.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls104",
    "text": "The supervisor confirmed that your store warranty covers both parts and labor for three years.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls105",
    "text": "Please take a moment to answer three brief questions about your customer support experience today.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls106",
    "text": "We have applied a courtesy credit to compensate for the downtime you experienced this week.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls107",
    "text": "You may upload photos of the damaged merchandise directly through our mobile customer portal anytime.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls108",
    "text": "Our customer service department is committed to providing prompt and courteous assistance to every caller.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls109",
    "text": "Please check your spam or junk folder if the confirmation email does not appear immediately.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls110",
    "text": "The shipping company will attempt delivery three times before returning the parcel to our facility.",
    "difficulty": "hard",
    "wordCount": 15
  },
  {
    "id": "ls111",
    "text": "May I please confirm your full legal name, current residential address, and your registered account telephone number?",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls112",
    "text": "Although the scheduled flight was canceled due to weather, all affected passengers received complimentary hotel accommodations.",
    "difficulty": "challenge",
    "wordCount": 16
  },
  {
    "id": "ls113",
    "text": "Please ensure that your mobile device is fully charged before initiating the required system software upgrade process.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls114",
    "text": "Our customer support manager has authorized a full refund along with a twenty dollar store gift voucher.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls115",
    "text": "If your broadband connection does not restore after rebooting, our technician will visit your home tomorrow morning.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls116",
    "text": "Please keep your identification card ready when our courier agent arrives to complete the mandatory physical verification.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls117",
    "text": "We have documented your feedback regarding the delivery delay and shared it with regional logistics management.",
    "difficulty": "challenge",
    "wordCount": 16
  },
  {
    "id": "ls118",
    "text": "You can access all previous monthly billing statements and invoices through the secure online document archive.",
    "difficulty": "challenge",
    "wordCount": 16
  },
  {
    "id": "ls119",
    "text": "Please verify that the shipping address listed on your order confirmation matches your current residential delivery location.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls120",
    "text": "Our customer care team is available around the clock to ensure all your service inquiries are answered.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls121",
    "text": "The warranty coverage protects your electronic equipment against manufacturing defects and sudden hardware malfunctions for two years.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls122",
    "text": "Please allow three to five business days for the credited refund amount to appear on bank statement.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls123",
    "text": "Our senior technical specialist will call you back within thirty minutes to assist with broadband network troubleshooting.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls124",
    "text": "We upgraded your shipping service to priority express delivery at no extra charge to prevent any delays.",
    "difficulty": "challenge",
    "wordCount": 17
  },
  {
    "id": "ls125",
    "text": "Please confirm the verification code that was just sent to your secondary emergency contact mobile telephone number.",
    "difficulty": "challenge",
    "wordCount": 17
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
        "question": "When did Maria place the online order for her mother's gift?",
        "options": [
          "Last Monday",
          "Last Wednesday",
          "Last Friday",
          "Two weeks ago"
        ],
        "correct": 0
      },
      {
        "question": "How many days was the website's initial delivery window?",
        "options": [
          "Three days",
          "Five days",
          "Next business day",
          "One week"
        ],
        "correct": 0
      },
      {
        "question": "On which day did Maria notice the package had not arrived?",
        "options": [
          "Friday",
          "Thursday",
          "Saturday",
          "Wednesday"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the customer service agent who handled her call?",
        "options": [
          "James",
          "Carlos",
          "Marcus",
          "Kevin"
        ],
        "correct": 0
      },
      {
        "question": "Where was the package currently held when James checked tracking?",
        "options": [
          "At a local warehouse",
          "At the airport sorting center",
          "In another state",
          "On a delivery truck"
        ],
        "correct": 0
      },
      {
        "question": "What was the root cause of the delivery delay?",
        "options": [
          "An incorrect address on the parcel",
          "A payment verification failure",
          "The item was out of stock",
          "Severe weather cancellation"
        ],
        "correct": 0
      },
      {
        "question": "What did James do in the system to fix the problem?",
        "options": [
          "Updated the address details",
          "Canceled the order entirely",
          "Issued a fifty percent refund",
          "Charged an extra shipping fee"
        ],
        "correct": 0
      },
      {
        "question": "When did James schedule the re-delivery for?",
        "options": [
          "The following morning",
          "The following week",
          "In three business days",
          "Next Monday afternoon"
        ],
        "correct": 0
      },
      {
        "question": "On what day did the package finally arrive at Maria's doorstep?",
        "options": [
          "Saturday",
          "Sunday",
          "Friday evening",
          "Monday morning"
        ],
        "correct": 0
      },
      {
        "question": "What special event was taking place on Sunday?",
        "options": [
          "Her mother's birthday celebration",
          "A family wedding reception",
          "A university graduation party",
          "An anniversary dinner"
        ],
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
        "options": [
          "Chicago",
          "New York",
          "Seattle",
          "Denver"
        ],
        "correct": 0
      },
      {
        "question": "How long was Rachel's road trip before arriving at the hotel?",
        "options": [
          "Six hours",
          "Two hours",
          "Twelve hours",
          "Four hours"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the hotel where Rachel arrived?",
        "options": [
          "Grand Horizon Hotel",
          "Ocean View Inn",
          "City Center Suites",
          "Marriott Plaza"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the front desk associate who assisted Rachel?",
        "options": [
          "Marcus",
          "James",
          "Kevin",
          "Daniel"
        ],
        "correct": 0
      },
      {
        "question": "Why could Rachel's reservation not be found for that weekend?",
        "options": [
          "It was booked for the following weekend by mistake",
          "Her payment card was declined",
          "The hotel canceled all reservations",
          "Her room was given to a conference keynote speaker"
        ],
        "correct": 0
      },
      {
        "question": "Why was the Grand Horizon Hotel unable to accommodate Rachel on site?",
        "options": [
          "It was nearly fully booked for a medical conference",
          "The hotel was under plumbing renovations",
          "The front desk staff were off duty",
          "The rooms were reserved for wedding guests"
        ],
        "correct": 0
      },
      {
        "question": "Where was the alternative sister property located?",
        "options": [
          "Two blocks away",
          "At the airport ten miles away",
          "In the next suburban town",
          "Across the river in another district"
        ],
        "correct": 0
      },
      {
        "question": "What type of room did Marcus secure for Rachel at the sister property?",
        "options": [
          "An executive king room",
          "A standard double room",
          "A corner suite",
          "A single twin room"
        ],
        "correct": 0
      },
      {
        "question": "What room rate did Rachel have to pay for the new room?",
        "options": [
          "The same rate as her original booking",
          "Double the original rate",
          "A discounted half-price rate",
          "The room was completely free"
        ],
        "correct": 0
      },
      {
        "question": "What complimentary perks did Marcus provide Rachel for the inconvenience?",
        "options": [
          "Free taxi fare and breakfast coupons",
          "A free spa treatment voucher",
          "Fifty dollars cash refund",
          "Two free airline boarding passes"
        ],
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
        "options": [
          "Six in the morning",
          "Eight fifteen",
          "Seven thirty",
          "Five in the morning"
        ],
        "correct": 0
      },
      {
        "question": "Where was David's international flight traveling to?",
        "options": [
          "Singapore",
          "Tokyo",
          "London",
          "Sydney"
        ],
        "correct": 0
      },
      {
        "question": "What was the original scheduled departure time of David's flight?",
        "options": [
          "Eight fifteen",
          "Six o'clock",
          "Seven thirty",
          "Eleven forty-five"
        ],
        "correct": 0
      },
      {
        "question": "At what time was the flight delay posted on the departure board?",
        "options": [
          "Seven thirty",
          "Eight o'clock",
          "Six thirty",
          "Nine o'clock"
        ],
        "correct": 0
      },
      {
        "question": "What was the stated reason for the three-hour flight delay?",
        "options": [
          "Scheduled mechanical maintenance on aircraft",
          "Severe thunderstorms and lightning",
          "Air traffic controller strike",
          "Missing flight crew members"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the airline customer service agent?",
        "options": [
          "Sarah",
          "Jessica",
          "Elena",
          "Chloe"
        ],
        "correct": 0
      },
      {
        "question": "What was the exact value of the meal vouchers given to passengers?",
        "options": [
          "Twenty dollars",
          "Ten dollars",
          "Fifty dollars",
          "Thirty dollars"
        ],
        "correct": 0
      },
      {
        "question": "What additional pass was provided to delayed passengers?",
        "options": [
          "Free Wi-Fi access passes",
          "Lounge access cards",
          "Duty-free discount vouchers",
          "Free parking tickets"
        ],
        "correct": 0
      },
      {
        "question": "How often did Sarah broadcast public announcements to passengers?",
        "options": [
          "Every thirty minutes",
          "Every ten minutes",
          "Every hour",
          "Only once before boarding"
        ],
        "correct": 0
      },
      {
        "question": "At what time did David's flight finally depart?",
        "options": [
          "Eleven forty-five",
          "Ten thirty",
          "Noon",
          "One fifteen in the afternoon"
        ],
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
        "options": [
          "A remote worker",
          "An in-office manager",
          "A delivery driver",
          "A traveling salesman"
        ],
        "correct": 0
      },
      {
        "question": "How long had Robert experienced intermittent connection drops?",
        "options": [
          "Three days",
          "One week",
          "Two hours",
          "One month"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the technical support agent who answered Robert's call?",
        "options": [
          "Elena",
          "Sarah",
          "Jessica",
          "Rachel"
        ],
        "correct": 0
      },
      {
        "question": "What diagnostic fault did Elena identify during the remote line test?",
        "options": [
          "High packet loss from the outdoor optical terminal",
          "A corrupted router firmware",
          "An unpaid billing balance",
          "A severed indoor coaxial cable"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the field technician assigned to Robert's house?",
        "options": [
          "Carlos",
          "Marcus",
          "Kevin",
          "Daniel"
        ],
        "correct": 0
      },
      {
        "question": "In what time window was the field technician scheduled to arrive?",
        "options": [
          "Between nine and eleven the next morning",
          "Between two and four in the afternoon",
          "Early evening after six",
          "The same day at noon"
        ],
        "correct": 0
      },
      {
        "question": "What specific hardware part was replaced by the field technician?",
        "options": [
          "The damaged outdoor optical splitter",
          "The indoor wireless router",
          "The computer network ethernet card",
          "The coaxial wall jack"
        ],
        "correct": 0
      },
      {
        "question": "What level of internet speed was restored after the repair?",
        "options": [
          "Full gigabit connectivity",
          "One hundred megabits",
          "Basic dial-up speed",
          "Five hundred megabits"
        ],
        "correct": 0
      },
      {
        "question": "When did Elena follow up with Robert to confirm service restoration?",
        "options": [
          "That afternoon by telephone",
          "The following Monday by email",
          "She did not follow up",
          "Two weeks later by letter"
        ],
        "correct": 0
      },
      {
        "question": "What discount amount did Elena apply to Robert's monthly statement?",
        "options": [
          "Twenty-five dollar loyalty discount",
          "Fifty dollar full refund",
          "Ten dollar gift coupon",
          "One hundred dollar promotional credit"
        ],
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
        "options": [
          "Wednesday morning",
          "Monday afternoon",
          "Friday evening",
          "Saturday morning"
        ],
        "correct": 0
      },
      {
        "question": "What event was Chen hosting at his home that evening?",
        "options": [
          "A family dinner",
          "A birthday party",
          "A business meeting",
          "A neighborhood barbecue"
        ],
        "correct": 0
      },
      {
        "question": "Which of the following items was included in Chen's original order?",
        "options": [
          "Fresh salmon, organic asparagus, and olive oil",
          "Chicken breasts and bell peppers",
          "Beef steaks and garlic bread",
          "Sushi rolls and soy sauce"
        ],
        "correct": 0
      },
      {
        "question": "At what time did the delivery driver arrive with the wrong groceries?",
        "options": [
          "Two in the afternoon",
          "Ten in the morning",
          "Six in the evening",
          "Noon"
        ],
        "correct": 0
      },
      {
        "question": "What groceries did Chen actually find inside the bags upon delivery?",
        "options": [
          "Chicken breasts and bell peppers",
          "Frozen pizza and ice cream",
          "Pasta and tomato sauce",
          "Fresh salmon and asparagus"
        ],
        "correct": 0
      },
      {
        "question": "Through what support channel did Chen reach out for assistance?",
        "options": [
          "Live chat",
          "Telephone call",
          "Email support ticket",
          "In-person store visit"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the customer support agent who helped Chen?",
        "options": [
          "Priya",
          "Elena",
          "Chloe",
          "Emma"
        ],
        "correct": 0
      },
      {
        "question": "From where did Priya source the priority replacement groceries?",
        "options": [
          "The nearest supermarket",
          "A central regional warehouse",
          "Another delivery driver",
          "A farmers market"
        ],
        "correct": 0
      },
      {
        "question": "How quickly did the replacement delivery reach Chen's home?",
        "options": [
          "Within forty-five minutes",
          "In two hours",
          "The next morning",
          "In twenty minutes"
        ],
        "correct": 0
      },
      {
        "question": "How much courtesy credit was added to Chen's account?",
        "options": [
          "Ten dollars",
          "Twenty-five dollars",
          "Five dollars",
          "Fifty dollars"
        ],
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
        "options": [
          "Mumbai",
          "Delhi",
          "Dubai",
          "Singapore"
        ],
        "correct": 0
      },
      {
        "question": "How many hours long was Priya's flight to London Heathrow?",
        "options": [
          "Eight hours",
          "Four hours",
          "Twelve hours",
          "Six hours"
        ],
        "correct": 0
      },
      {
        "question": "At what time did Priya's flight land at the airport?",
        "options": [
          "Three o'clock on Thursday afternoon",
          "Eight o'clock in the morning",
          "Friday at noon",
          "Six in the evening"
        ],
        "correct": 0
      },
      {
        "question": "What was the color and style of Priya's missing luggage?",
        "options": [
          "A maroon hard-shell suitcase",
          "A black leather duffel bag",
          "A blue nylon backpack",
          "A yellow canvas roller"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the airport baggage service agent who assisted Priya?",
        "options": [
          "Oliver",
          "James",
          "Kevin",
          "Daniel"
        ],
        "correct": 0
      },
      {
        "question": "Where had Priya's suitcase mistakenly remained?",
        "options": [
          "On the aircraft in Mumbai",
          "At customs inspection in London",
          "At the hotel in Kensington",
          "On a wrong baggage carousel"
        ],
        "correct": 0
      },
      {
        "question": "When was the missing suitcase scheduled to be flown into London?",
        "options": [
          "On the next evening flight",
          "Three days later",
          "The following week",
          "The next morning"
        ],
        "correct": 0
      },
      {
        "question": "What monetary compensation voucher did Oliver provide Priya at the desk?",
        "options": [
          "Fifty pounds in shopping vouchers",
          "One hundred dollars cash",
          "A free round-trip ticket",
          "Twenty pounds food voucher"
        ],
        "correct": 0
      },
      {
        "question": "What emergency kit was handed to Priya for her immediate overnight stay?",
        "options": [
          "An emergency overnight toiletry kit",
          "A set of sleepwear",
          "A phone charger kit",
          "A medical first-aid kit"
        ],
        "correct": 0
      },
      {
        "question": "To which London district was Priya's suitcase courier-delivered on Friday morning?",
        "options": [
          "Kensington",
          "Westminster",
          "Camden",
          "Greenwich"
        ],
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
        "options": [
          "Monday morning",
          "Friday afternoon",
          "Sunday evening",
          "Wednesday morning"
        ],
        "correct": 0
      },
      {
        "question": "What was the exact dollar amount of the fraudulent charge?",
        "options": [
          "Two hundred and forty dollars",
          "One hundred dollars",
          "Three hundred and fifty dollars",
          "Five hundred dollars"
        ],
        "correct": 0
      },
      {
        "question": "What type of business purportedly billed the unfamiliar charge?",
        "options": [
          "A car rental agency",
          "An airline booking site",
          "A luxury hotel chain",
          "An electronics retail store"
        ],
        "correct": 0
      },
      {
        "question": "In which city did the unauthorized charge claim to originate?",
        "options": [
          "Miami",
          "Dallas",
          "Austin",
          "Chicago"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the bank support representative who assisted Carlos?",
        "options": [
          "Jessica",
          "Chloe",
          "Sarah",
          "Maria"
        ],
        "correct": 0
      },
      {
        "question": "In which city had Carlos actually used his physical card that same afternoon?",
        "options": [
          "Dallas",
          "Miami",
          "Seattle",
          "Atlanta"
        ],
        "correct": 0
      },
      {
        "question": "What specific cybercrime pattern did Jessica diagnose from the transactions?",
        "options": [
          "Fraudulent card cloning",
          "Identity theft via stolen passport",
          "Phishing email scam",
          "ATM skimming at grocery store"
        ],
        "correct": 0
      },
      {
        "question": "What immediate preventative action did Jessica take on Carlos's account?",
        "options": [
          "Instantly blocked the compromised card",
          "Lowered his credit limit",
          "Sent him a warning letter",
          "Asked him to file a police report first"
        ],
        "correct": 0
      },
      {
        "question": "What happened to the fraudulent two hundred and forty dollar charge?",
        "options": [
          "It was reversed immediately",
          "Carlos had to pay half",
          "It was put on hold for thirty days",
          "Carlos was billed an investigation fee"
        ],
        "correct": 0
      },
      {
        "question": "To which city was the new security-chipped card express mailed within 48 hours?",
        "options": [
          "Austin",
          "Dallas",
          "Houston",
          "San Antonio"
        ],
        "correct": 0
      }
    ]
  },
  {
    "id": "st8",
    "title": "The Broken Espresso Machine",
    "difficulty": "medium",
    "text": "Emma bought a high-end espresso coffee machine from a department store in Seattle for her new caf\u00e9. On its very first morning, water began leaking from the bottom base during brewing. Frustrated because opening day was only two days away, Emma called the manufacturer's helpline. A technical support specialist named Kevin asked her to check the serial number under the drip tray. Kevin realized an internal pressure seal had dislodged during shipping. Rather than making Emma wait for repairs, Kevin dispatched a brand-new replacement unit with same-day priority courier and included two free bags of Italian roast coffee beans. The new machine arrived at five in the evening, allowing Emma to open on schedule.",
    "questions": [
      {
        "question": "In which city was Emma preparing to open her new caf\u00e9?",
        "options": [
          "Seattle",
          "Portland",
          "Chicago",
          "San Francisco"
        ],
        "correct": 0
      },
      {
        "question": "From what kind of establishment did Emma purchase the espresso machine?",
        "options": [
          "A department store",
          "An online auction website",
          "A local secondhand flea market",
          "A direct wholesale importer"
        ],
        "correct": 0
      },
      {
        "question": "What malfunction did the machine experience on its first morning?",
        "options": [
          "Water leaked from the bottom base during brewing",
          "The electrical heating element burned out",
          "The coffee grinder was jammed",
          "The steam wand exploded"
        ],
        "correct": 0
      },
      {
        "question": "How many days away was the caf\u00e9's official grand opening date?",
        "options": [
          "Two days away",
          "One week away",
          "The very next morning",
          "Ten days away"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the manufacturer's technical specialist who helped Emma?",
        "options": [
          "Kevin",
          "Carlos",
          "Oliver",
          "Marcus"
        ],
        "correct": 0
      },
      {
        "question": "Where did Kevin instruct Emma to check for the serial number?",
        "options": [
          "Under the drip tray",
          "On the water reservoir lid",
          "Behind the power cable plug",
          "Underneath the steam gauge"
        ],
        "correct": 0
      },
      {
        "question": "What mechanical issue was determined to have caused the leak?",
        "options": [
          "An internal pressure seal dislodged during shipping",
          "A cracked water boiler tank",
          "A defective power pump",
          "Loose pipe screws"
        ],
        "correct": 0
      },
      {
        "question": "How did Kevin resolve the issue without delaying the caf\u00e9 opening?",
        "options": [
          "Dispatched a brand-new unit via same-day priority courier",
          "Instructed Emma how to weld the pipe",
          "Scheduled a repairman for next month",
          "Refunded her money and canceled the order"
        ],
        "correct": 0
      },
      {
        "question": "What complimentary promotional item was included with the replacement machine?",
        "options": [
          "Two free bags of Italian roast coffee beans",
          "Four ceramic coffee mugs",
          "A professional barista apron",
          "A fifty dollar gift card"
        ],
        "correct": 0
      },
      {
        "question": "At what time in the evening was the replacement machine delivered?",
        "options": [
          "At five in the evening",
          "At eight in the morning",
          "At noon",
          "At nine at night"
        ],
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
        "options": [
          "Seventy years old",
          "Sixty-five years old",
          "Eighty years old",
          "Fifty-five years old"
        ],
        "correct": 0
      },
      {
        "question": "What vital health condition was Arthur's medication treating?",
        "options": [
          "Heart condition",
          "Diabetes",
          "High cholesterol",
          "Arthritis"
        ],
        "correct": 0
      },
      {
        "question": "Exactly how many tablets did Arthur have remaining on Friday evening?",
        "options": [
          "Only two tablets",
          "Ten tablets",
          "Five tablets",
          "A full week supply"
        ],
        "correct": 0
      },
      {
        "question": "In which city was Arthur's home located?",
        "options": [
          "Denver",
          "Boston",
          "Detroit",
          "Minneapolis"
        ],
        "correct": 0
      },
      {
        "question": "What weather event prevented home courier medication delivery?",
        "options": [
          "A severe snowstorm",
          "A tornado warning",
          "Flooding from heavy rain",
          "An ice storm"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the online pharmacy care coordinator who took the call?",
        "options": [
          "Sarah",
          "Jessica",
          "Elena",
          "Chloe"
        ],
        "correct": 0
      },
      {
        "question": "How many days of refill had Arthur's doctor already approved earlier that week?",
        "options": [
          "Sixty-day refill",
          "Thirty-day refill",
          "Ninety-day refill",
          "Fourteen-day refill"
        ],
        "correct": 0
      },
      {
        "question": "How far was the partner 24-hour pharmacy from Arthur's house?",
        "options": [
          "Three miles away",
          "Ten miles away",
          "One block away",
          "Five miles away"
        ],
        "correct": 0
      },
      {
        "question": "Who picked up the emergency medication from the pharmacy?",
        "options": [
          "Arthur's daughter",
          "Arthur himself",
          "A neighbor",
          "A visiting nurse"
        ],
        "correct": 0
      },
      {
        "question": "How quickly was the emergency prescription retrieved?",
        "options": [
          "Within an hour",
          "The next morning",
          "In three hours",
          "Within twenty minutes"
        ],
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
        "options": [
          "Four VIP tickets",
          "Two VIP tickets",
          "Six VIP tickets",
          "Eight VIP tickets"
        ],
        "correct": 0
      },
      {
        "question": "In which city was the outdoor music festival taking place?",
        "options": [
          "Austin, Texas",
          "Nashville, Tennessee",
          "Miami, Florida",
          "Los Angeles, California"
        ],
        "correct": 0
      },
      {
        "question": "What milestone was Liam celebrating with his brother?",
        "options": [
          "His brother's graduation",
          "A milestone birthday",
          "A promotion at work",
          "A wedding celebration"
        ],
        "correct": 0
      },
      {
        "question": "How many days before the concert did Liam receive the cancellation notice?",
        "options": [
          "Two days before",
          "One week before",
          "On the morning of the show",
          "Five days before"
        ],
        "correct": 0
      },
      {
        "question": "What reason was provided for the automatic cancellation of the tickets?",
        "options": [
          "A payment verification mismatch",
          "The concert was sold out",
          "The venue changed locations",
          "The band canceled the show"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the ticketing support agent who resolved Liam's issue?",
        "options": [
          "Chloe",
          "Sarah",
          "Brenda",
          "Priya"
        ],
        "correct": 0
      },
      {
        "question": "What did Liam provide over the phone to confirm his identity?",
        "options": [
          "His billing address and identity code",
          "His passport photograph",
          "His driver's license number",
          "His college student ID"
        ],
        "correct": 0
      },
      {
        "question": "In which seating section were the four VIP tickets restored?",
        "options": [
          "Section B",
          "Section A",
          "Section VIP-1",
          "Front row general admission"
        ],
        "correct": 0
      },
      {
        "question": "What complimentary perk did Chloe attach to the restored tickets?",
        "options": [
          "Backstage pass lanyards",
          "Free parking voucher",
          "Food and beverage vouchers",
          "Festival commemorative t-shirts"
        ],
        "correct": 0
      },
      {
        "question": "What was the final outcome for Liam and his brother?",
        "options": [
          "They enjoyed a memorable concert together",
          "They arrived late and missed the headliner",
          "They refunded the tickets and stayed home",
          "They were denied entry at the gates"
        ],
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
        "options": [
          "Tuesday morning",
          "Friday evening",
          "Sunday afternoon",
          "Thursday morning"
        ],
        "correct": 0
      },
      {
        "question": "Along which famous roadway in Chicago was Nina driving?",
        "options": [
          "Lake Shore Drive",
          "Michigan Avenue",
          "Wacker Drive",
          "State Street"
        ],
        "correct": 0
      },
      {
        "question": "How did Nina initiate contact with emergency roadside services?",
        "options": [
          "The dashboard emergency roadside button",
          "A smartphone app",
          "Flagged down a passing driver",
          "Called 911 on her phone"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the emergency dispatcher who coordinated the rescue?",
        "options": [
          "Daniel",
          "Marcus",
          "Carlos",
          "Kevin"
        ],
        "correct": 0
      },
      {
        "question": "How long was the estimated arrival time of the assistance service truck?",
        "options": [
          "Ten minutes away",
          "Thirty minutes away",
          "An hour away",
          "Five minutes away"
        ],
        "correct": 0
      },
      {
        "question": "What vehicle lights did Nina keep activated while waiting on the road?",
        "options": [
          "Emergency hazard lights",
          "High beam headlights",
          "Interior dome lights",
          "Fog lights only"
        ],
        "correct": 0
      },
      {
        "question": "How did Daniel support Nina while she waited for the truck to arrive?",
        "options": [
          "Stayed on the line to monitor safety and share heat tips",
          "Transferred her to an automated hotline",
          "Told her to seek shelter in a nearby store",
          "Called her family members"
        ],
        "correct": 0
      },
      {
        "question": "How long did the technician take to perform the mobile battery boost?",
        "options": [
          "Ten minutes",
          "Thirty minutes",
          "One hour",
          "Five minutes"
        ],
        "correct": 0
      },
      {
        "question": "What hot beverage was offered to Nina by the technician?",
        "options": [
          "A travel thermos of tea",
          "Hot coffee",
          "Hot chocolate",
          "Warm soup"
        ],
        "correct": 0
      },
      {
        "question": "What warming item did the mobile technician provide Nina upon arrival?",
        "options": [
          "A thermal blanket",
          "A pair of winter gloves",
          "A heated vest",
          "A winter scarf"
        ],
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
        "options": [
          "Boston",
          "Chicago",
          "Philadelphia",
          "Washington"
        ],
        "correct": 0
      },
      {
        "question": "What academic field was Maya's master's degree in?",
        "options": [
          "Biomedical program",
          "Business administration",
          "Civil engineering",
          "Computer science"
        ],
        "correct": 0
      },
      {
        "question": "What color was the incorrect hood Maya found inside her package?",
        "options": [
          "Green",
          "Crimson",
          "Navy Blue",
          "Gold"
        ],
        "correct": 0
      },
      {
        "question": "What color was the required academic hood for Maya's ceremony?",
        "options": [
          "Crimson",
          "Green",
          "White",
          "Silver"
        ],
        "correct": 0
      },
      {
        "question": "How many days before the graduation ceremony did Maya discover the error?",
        "options": [
          "Three days before",
          "One day before",
          "A week before",
          "On the morning of the event"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the student support representative who helped Maya?",
        "options": [
          "Henry",
          "James",
          "Oliver",
          "Marcus"
        ],
        "correct": 0
      },
      {
        "question": "What was the operational cause of the mistaken hood delivery?",
        "options": [
          "Bookstore packaging team swapped adjacent bins",
          "The supplier ran out of crimson fabric",
          "Maya entered the wrong degree code",
          "The order was labeled with the wrong name"
        ],
        "correct": 0
      },
      {
        "question": "Where was the replacement crimson hood delivered for Maya?",
        "options": [
          "Directly to Maya's dormitory",
          "To the bookstore pickup counter",
          "To the stage backstage holding area",
          "To her parents' house"
        ],
        "correct": 0
      },
      {
        "question": "By what time the following day did the replacement hood arrive?",
        "options": [
          "By noon the next day",
          "By five in the evening",
          "At eight in the morning",
          "At three in the afternoon"
        ],
        "correct": 0
      },
      {
        "question": "What fee did Henry waive to compensate Maya for the stress?",
        "options": [
          "The eighty-dollar cap and gown rental fee",
          "Her graduation diploma filing fee",
          "Her semester parking permit fee",
          "Her graduation dinner ticket"
        ],
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
        "options": [
          "His sister's wedding",
          "His mother's retirement",
          "His parents' anniversary",
          "A housewarming celebration"
        ],
        "correct": 0
      },
      {
        "question": "From what type of business did Lucas purchase the handcrafted vase?",
        "options": [
          "An art gallery in San Francisco",
          "An online import website",
          "A local antique shop",
          "A home decor department store"
        ],
        "correct": 0
      },
      {
        "question": "In which city was Lucas's apartment located where the crate arrived?",
        "options": [
          "Portland",
          "Seattle",
          "San Francisco",
          "Salt Lake City"
        ],
        "correct": 0
      },
      {
        "question": "What specific damage did Lucas find when he opened the wooden crate?",
        "options": [
          "The ceramic handle was snapped into three pieces",
          "The vase base was completely shattered",
          "The exterior glaze was scratched",
          "The rim had a hairline crack"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the senior customer support specialist at the gallery?",
        "options": [
          "Sophia",
          "Jessica",
          "Elena",
          "Sarah"
        ],
        "correct": 0
      },
      {
        "question": "How quickly did Sophia call Lucas after he uploaded the damage photos?",
        "options": [
          "Within twenty minutes",
          "Within two hours",
          "The next morning",
          "Within twenty-four hours"
        ],
        "correct": 0
      },
      {
        "question": "Who agreed to create an identical replacement vase on rush order?",
        "options": [
          "The master ceramic artisan in California",
          "A factory production line in Oregon",
          "A local restoration technician",
          "A backup apprentice potter"
        ],
        "correct": 0
      },
      {
        "question": "What delivery upgrade did Sophia provide for the replacement shipment?",
        "options": [
          "White-glove courier delivery at no extra charge",
          "Overnight cargo air freight",
          "Same-day drone delivery",
          "Insured postal delivery"
        ],
        "correct": 0
      },
      {
        "question": "How was the damaged broken vase handled?",
        "options": [
          "Sophia arranged free return pickup",
          "Lucas was told to throw it in the trash",
          "Lucas had to mail it at his own cost",
          "The artisan asked to keep it"
        ],
        "correct": 0
      },
      {
        "question": "How many days before the wedding did the new replacement vase arrive?",
        "options": [
          "Four days before the wedding",
          "On the morning of the wedding",
          "Two weeks before the wedding",
          "The day after the wedding"
        ],
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
        "options": [
          "New York to Paris",
          "Boston to London",
          "Chicago to Frankfurt",
          "Los Angeles to Tokyo"
        ],
        "correct": 0
      },
      {
        "question": "What was the total flight duration of Sophie's trip?",
        "options": [
          "Ten hours",
          "Six hours",
          "Fourteen hours",
          "Eight hours"
        ],
        "correct": 0
      },
      {
        "question": "What severe medical condition did Sophie report prior to travel?",
        "options": [
          "A severe peanut allergy",
          "Gluten intolerance",
          "Lactose allergy",
          "A seafood allergy"
        ],
        "correct": 0
      },
      {
        "question": "How far in advance had Sophie requested her certified allergen-free meal?",
        "options": [
          "Three weeks in advance",
          "One week in advance",
          "At check-in at the airport",
          "Forty-eight hours before"
        ],
        "correct": 0
      },
      {
        "question": "Where did the flight attendant discover that Sophie's meal was missing?",
        "options": [
          "From the galley manifest",
          "From the cargo baggage hold",
          "From the passenger seat list",
          "From the airport catering truck"
        ],
        "correct": 0
      },
      {
        "question": "What was the name and title of the lead purser who resolved the problem?",
        "options": [
          "Antoine",
          "Oliver",
          "Marcus",
          "Daniel"
        ],
        "correct": 0
      },
      {
        "question": "How did Antoine and the head chef assemble a safe meal for Sophie?",
        "options": [
          "Inspected sealed fruit and kosher vegetable trays to prepare from scratch",
          "Offered her pre-packaged dry snacks from crew luggage",
          "Asked passengers in nearby rows for packaged food",
          "Gave her bread rolls and butter"
        ],
        "correct": 0
      },
      {
        "question": "How many frequent flyer bonus miles did Antoine deposit into Sophie's account?",
        "options": [
          "Fifty thousand bonus miles",
          "Ten thousand miles",
          "Twenty-five thousand miles",
          "One hundred thousand miles"
        ],
        "correct": 0
      },
      {
        "question": "Which airport lounge did Sophie receive a complimentary voucher for?",
        "options": [
          "Charles de Gaulle Airport business lounge",
          "JFK International Terminal 4 lounge",
          "Heathrow Terminal 5 lounge",
          "Orly Airport arrival lounge"
        ],
        "correct": 0
      },
      {
        "question": "How did Sophie feel about the service she received during the flight?",
        "options": [
          "Safe and valued throughout the journey",
          "Upset and anxious the whole time",
          "Hungry and disappointed with the food",
          "Frustrated by the crew's slow response"
        ],
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
        "options": [
          "Atlanta",
          "Chicago",
          "Miami",
          "Dallas"
        ],
        "correct": 0
      },
      {
        "question": "What crucial financial transaction was Samuel attempting to execute?",
        "options": [
          "A deposit payment for his new apartment",
          "A credit card payment",
          "An international wire to an investment broker",
          "A student loan payoff"
        ],
        "correct": 0
      },
      {
        "question": "On which day of the week was Samuel making the payment?",
        "options": [
          "Thursday afternoon",
          "Monday morning",
          "Friday evening",
          "Saturday morning"
        ],
        "correct": 0
      },
      {
        "question": "Why did the online banking portal freeze and lock Samuel's profile?",
        "options": [
          "Suspicious login attempts from an unknown device",
          "His checking account had insufficient funds",
          "He entered an expired credit card number",
          "The entire bank network suffered a power failure"
        ],
        "correct": 0
      },
      {
        "question": "What was the landlord's strict deadline for receiving the wire transfer?",
        "options": [
          "Five o'clock on Thursday afternoon",
          "Noon on Friday",
          "Midnight that evening",
          "Nine in the morning on Friday"
        ],
        "correct": 0
      },
      {
        "question": "What was the name of the fraud investigator who assisted Samuel?",
        "options": [
          "Brenda",
          "Elena",
          "Sophia",
          "Chloe"
        ],
        "correct": 0
      },
      {
        "question": "How did Brenda securely verify Samuel's identity during the call?",
        "options": [
          "Secure multi-factor video identity verification",
          "Sent a postal mail code",
          "Asked for his mother's maiden name only",
          "Required an in-person branch appointment"
        ],
        "correct": 0
      },
      {
        "question": "From where did the unauthorized login attempts originate according to the logs?",
        "options": [
          "An overseas IP address",
          "A local internet caf\u00e9",
          "A mobile network in Atlanta",
          "A public airport Wi-Fi hotspot"
        ],
        "correct": 0
      },
      {
        "question": "How did Brenda ensure the landlord received the rent deposit on time?",
        "options": [
          "Personally authorized and executed the wire transfer over the phone",
          "Told Samuel to withdraw cash from an ATM",
          "Wrote a physical cashier's check",
          "Asked the landlord to grant a two-day extension"
        ],
        "correct": 0
      },
      {
        "question": "What fee did Brenda waive for Samuel to alleviate the stress of the incident?",
        "options": [
          "The forty-dollar domestic wire fee",
          "His annual checking maintenance fee",
          "A hundred dollar account unlocking fee",
          "His wire tracking surcharge"
        ],
        "correct": 0
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
  },
{
    "id": "ret16",
    "category": "data-interpretation",
    "type": "shl-dual-pie",
    "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
    "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
    "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
    "question": "What is the ratio of the total number of posters distributed by Company B to the total number of danglers distributed by Company B?",
    "options": [
      "25 : 18",
      "15 : 18",
      "12 : 7",
      "5 : 3"
    ],
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
    "options": [
      "Company A",
      "Company C",
      "Company G",
      "Company H"
    ],
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
    "options": [
      "1,800",
      "2,000",
      "2,200",
      "2,400"
    ],
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
    "options": [
      "33.33%",
      "40%",
      "50%",
      "66.67%"
    ],
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
    "options": [
      "2,100",
      "2,333",
      "2,500",
      "2,800"
    ],
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
    "options": [
      "1,500",
      "1,800",
      "2,100",
      "2,400"
    ],
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
    "question": "If each poster costs \u20b950 to print and distribute, how much total money was spent on printing posters for Company D?",
    "options": [
      "\u20b9150,000",
      "\u20b9180,000",
      "\u20b9200,000",
      "\u20b9250,000"
    ],
    "correct": 2,
    "explanation": "Company D posters = 20% of 20,000 = 4,000 posters. Total cost = 4,000 * \u20b950 = \u20b9200,000."
  },
  {
    "id": "ret23",
    "category": "data-interpretation",
    "type": "shl-dual-pie",
    "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
    "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
    "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
    "question": "What percentage of the grand total retail merchandise (32,000 items) is represented by Company D's combined merchandise?",
    "options": [
      "15.25%",
      "18.125%",
      "20.5%",
      "22.0%"
    ],
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
    "options": [
      "1 : 2",
      "2 : 3",
      "3 : 4",
      "1 : 3"
    ],
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
    "options": [
      "2,700",
      "2,850",
      "3,000",
      "3,200"
    ],
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
    "options": [
      "60\u00b0",
      "72\u00b0",
      "80\u00b0",
      "90\u00b0"
    ],
    "correct": 1,
    "explanation": "Company D percentage in Poster Distribution = 20%. Central angle = 20% of 360\u00b0 = (20 / 100) * 360 = 72\u00b0."
  },
  {
    "id": "ret27",
    "category": "data-interpretation",
    "type": "shl-dual-pie",
    "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
    "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
    "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
    "question": "What is the central angle (in degrees) occupied by Company B in the Dangler Distribution pie chart?",
    "options": [
      "54.8\u00b0",
      "64.8\u00b0",
      "70.2\u00b0",
      "75.6\u00b0"
    ],
    "correct": 1,
    "explanation": "Company B percentage in Dangler Distribution = 18%. Central angle = 18% of 360\u00b0 = (18 / 100) * 360 = 64.8\u00b0."
  },
  {
    "id": "ret28",
    "category": "data-interpretation",
    "type": "shl-dual-pie",
    "passageTitle": "Figure 1: Shows the distribution of merchandise by different companies - A, B, C, D, E, F, G and H, at various retail stores in Delhi.",
    "passageText": "Study Figure 1 containing Poster Distribution and Dangler Distribution across retail stores in Delhi before answering the question.",
    "chartImage": "/images/aptitude/shl_delhi_retail_merchandise.svg",
    "question": "Which two companies distributed an equal count of danglers?",
    "options": [
      "Company A and Company E",
      "Company C and Company H",
      "Company B and Company F",
      "Company D and Company G"
    ],
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
    "options": [
      "2 companies",
      "3 companies",
      "4 companies",
      "5 companies"
    ],
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
    "options": [
      "45%",
      "48%",
      "53%",
      "56%"
    ],
    "correct": 2,
    "explanation": "Top three poster distributors: Company D (20%), Company F (18%), and Company B (15%). Combined share = 20% + 18% + 15% = 53%."
  },
  {
    "id": "shl21",
    "category": "image-reasoning",
    "type": "shl-ppe-match",
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety item for high-decibel machinery calibration.",
    "tableData": {
      "title": "Industrial Safety & Equipment Table",
      "headers": [
        "Department / Hazard Zone",
        "Primary Exposure",
        "Mandatory Safeguard Item"
      ],
      "rows": [
        [
          "Acoustics & Turbine Testing",
          "Sustained noise > 90 dB",
          "Padded Ear Muffs (Hearing Protection)"
        ],
        [
          "Electronics Assembly Line",
          "Electrostatic Discharge (ESD)",
          "Anti-Static Grounding Wristband"
        ],
        [
          "High-Altitude Antenna Rigging",
          "Fall hazards above 4 meters",
          "Full-Body Fall Arrest Safety Harness"
        ],
        [
          "Chemical Decanting Lab",
          "Corrosive aerosol mists",
          "Chemical Splash Goggles with Seal"
        ],
        [
          "Warehouse Heavy Logistics",
          "Falling pallets and crushing risks",
          "Steel-Toe Puncture-Proof Safety Boots"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety item for handling electrostatic sensitive microchips.",
    "tableData": {
      "title": "Industrial Safety & Equipment Table",
      "headers": [
        "Department / Hazard Zone",
        "Primary Exposure",
        "Mandatory Safeguard Item"
      ],
      "rows": [
        [
          "Acoustics & Turbine Testing",
          "Sustained noise > 90 dB",
          "Padded Ear Muffs (Hearing Protection)"
        ],
        [
          "Electronics Assembly Line",
          "Electrostatic Discharge (ESD)",
          "Anti-Static Grounding Wristband"
        ],
        [
          "High-Altitude Antenna Rigging",
          "Fall hazards above 4 meters",
          "Full-Body Fall Arrest Safety Harness"
        ],
        [
          "Chemical Decanting Lab",
          "Corrosive aerosol mists",
          "Chemical Splash Goggles with Seal"
        ],
        [
          "Warehouse Heavy Logistics",
          "Falling pallets and crushing risks",
          "Steel-Toe Puncture-Proof Safety Boots"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety item for working on rooftop satellite antennas.",
    "tableData": {
      "title": "Industrial Safety & Equipment Table",
      "headers": [
        "Department / Hazard Zone",
        "Primary Exposure",
        "Mandatory Safeguard Item"
      ],
      "rows": [
        [
          "Acoustics & Turbine Testing",
          "Sustained noise > 90 dB",
          "Padded Ear Muffs (Hearing Protection)"
        ],
        [
          "Electronics Assembly Line",
          "Electrostatic Discharge (ESD)",
          "Anti-Static Grounding Wristband"
        ],
        [
          "High-Altitude Antenna Rigging",
          "Fall hazards above 4 meters",
          "Full-Body Fall Arrest Safety Harness"
        ],
        [
          "Chemical Decanting Lab",
          "Corrosive aerosol mists",
          "Chemical Splash Goggles with Seal"
        ],
        [
          "Warehouse Heavy Logistics",
          "Falling pallets and crushing risks",
          "Steel-Toe Puncture-Proof Safety Boots"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety item for heavy warehouse pallet operations.",
    "tableData": {
      "title": "Industrial Safety & Equipment Table",
      "headers": [
        "Department / Hazard Zone",
        "Primary Exposure",
        "Mandatory Safeguard Item"
      ],
      "rows": [
        [
          "Acoustics & Turbine Testing",
          "Sustained noise > 90 dB",
          "Padded Ear Muffs (Hearing Protection)"
        ],
        [
          "Electronics Assembly Line",
          "Electrostatic Discharge (ESD)",
          "Anti-Static Grounding Wristband"
        ],
        [
          "High-Altitude Antenna Rigging",
          "Fall hazards above 4 meters",
          "Full-Body Fall Arrest Safety Harness"
        ],
        [
          "Chemical Decanting Lab",
          "Corrosive aerosol mists",
          "Chemical Splash Goggles with Seal"
        ],
        [
          "Warehouse Heavy Logistics",
          "Falling pallets and crushing risks",
          "Steel-Toe Puncture-Proof Safety Boots"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Identify the safety item for high-visibility traffic coordination.",
    "tableData": {
      "title": "Facility Safety Protocol Table",
      "headers": [
        "Station",
        "Operational Environment",
        "Required Standard Item"
      ],
      "rows": [
        [
          "Loading Dock Marshalling",
          "Moving delivery trucks and poor lighting",
          "High-Visibility Reflective Safety Vest"
        ],
        [
          "Overhead Crane Maintenance",
          "Falling tools and debris",
          "Hard Hat Safety Helmet"
        ],
        [
          "Bio-hazard Waste Sorting",
          "Needle stick and droplet risks",
          "Heavy Nitrile Protective Gloves"
        ],
        [
          "Thermal Pipe Welding",
          "Extreme heat and weld splatter",
          "Full Face Shield & Leather Apron"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Identify the safety item for overhead maintenance work.",
    "tableData": {
      "title": "Facility Safety Protocol Table",
      "headers": [
        "Station",
        "Operational Environment",
        "Required Standard Item"
      ],
      "rows": [
        [
          "Loading Dock Marshalling",
          "Moving delivery trucks and poor lighting",
          "High-Visibility Reflective Safety Vest"
        ],
        [
          "Overhead Crane Maintenance",
          "Falling tools and debris",
          "Hard Hat Safety Helmet"
        ],
        [
          "Bio-hazard Waste Sorting",
          "Needle stick and droplet risks",
          "Heavy Nitrile Protective Gloves"
        ],
        [
          "Thermal Pipe Welding",
          "Extreme heat and weld splatter",
          "Full Face Shield & Leather Apron"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety tool for verifying live AC circuit voltages.",
    "tableData": {
      "title": "Electrical Maintenance Equipment Standards",
      "headers": [
        "Task Description",
        "Hazard Profile",
        "Designated Diagnostic / Safety Tool"
      ],
      "rows": [
        [
          "Main Breaker Voltage Verification",
          "Electrocution / Arc flash risk",
          "Digital Multimeter with Insulated Probes"
        ],
        [
          "Ethernet Terminal Termination",
          "Uncut conductor shorts",
          "Modular RJ45 Ratchet Crimper"
        ],
        [
          "Server Component Soldering",
          "Lead fumes and hot solder splatter",
          "Temperature-Controlled Soldering Station"
        ],
        [
          "Substation Enclosure Fastening",
          "Live terminal contact",
          "Insulated VDE Screwdriver Set"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the tool required for network patch cabling termination.",
    "tableData": {
      "title": "Electrical Maintenance Equipment Standards",
      "headers": [
        "Task Description",
        "Hazard Profile",
        "Designated Diagnostic / Safety Tool"
      ],
      "rows": [
        [
          "Main Breaker Voltage Verification",
          "Electrocution / Arc flash risk",
          "Digital Multimeter with Insulated Probes"
        ],
        [
          "Ethernet Terminal Termination",
          "Uncut conductor shorts",
          "Modular RJ45 Ratchet Crimper"
        ],
        [
          "Server Component Soldering",
          "Lead fumes and hot solder splatter",
          "Temperature-Controlled Soldering Station"
        ],
        [
          "Substation Enclosure Fastening",
          "Live terminal contact",
          "Insulated VDE Screwdriver Set"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety containment for contaminated disposable needles.",
    "tableData": {
      "title": "Hazardous Waste Handling Guidelines",
      "headers": [
        "Hazardous Stream",
        "Contamination Risk",
        "Mandatory Disposal Container"
      ],
      "rows": [
        [
          "Used Syringes and Scalpels",
          "Blood-borne pathogen transmission",
          "Puncture-Resistant Biohazard Sharps Container"
        ],
        [
          "Organic Chemical Solvents",
          "Vapor flammability and ignition",
          "Flammable Liquid Safety Can with Flame Arrestor"
        ],
        [
          "Heavy Smoldering Metal Slag",
          "Combustion rekindling",
          "Class D Dry Powder Metal Fire Extinguisher"
        ],
        [
          "Laser Calibration Beam Refraction",
          "Retinal photocoagulation",
          "Optical Density (OD 7+) Laser Safety Eyewear"
        ]
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
    "passageTitle": "Concentrix SHL Assessment \u00b7 Aspiring Minds (AMCAT)",
    "passageText": "Refer to the workplace safety table. Match the required safety item for optical alignment with class 4 laser transmitters.",
    "tableData": {
      "title": "Hazardous Waste Handling Guidelines",
      "headers": [
        "Hazardous Stream",
        "Contamination Risk",
        "Mandatory Disposal Container"
      ],
      "rows": [
        [
          "Used Syringes and Scalpels",
          "Blood-borne pathogen transmission",
          "Puncture-Resistant Biohazard Sharps Container"
        ],
        [
          "Organic Chemical Solvents",
          "Vapor flammability and ignition",
          "Flammable Liquid Safety Can with Flame Arrestor"
        ],
        [
          "Heavy Smoldering Metal Slag",
          "Combustion rekindling",
          "Class D Dry Powder Metal Fire Extinguisher"
        ],
        [
          "Laser Calibration Beam Refraction",
          "Retinal photocoagulation",
          "Optical Density (OD 7+) Laser Safety Eyewear"
        ]
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
  },
  {
    "id": "odd21",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that is unlike the others in the set.",
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
    "explanation": "In Images A, B, and D, the inner rectangular frame is centered with equal margins on all four sides. In Image C, the inner rectangle is offset downwards, touching the bottom border."
  },
  {
    "id": "odd22",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the card that violates the geometric pattern.",
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
    "correct": 1,
    "explanation": "In Images A, C, and D, the diagonal orientation slopes upwards from bottom-left to top-right. In Image B, the diagonal slope is inverted from top-left to bottom-right."
  },
  {
    "id": "odd23",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the image that does not conform to the pattern.",
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
    "correct": 3,
    "explanation": "In Cards A, B, and C, the internal dividing line intersects the vertical midpoint. In Card D, the line intersects off-center near the upper perimeter."
  },
  {
    "id": "odd24",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the figure that is unlike the others.",
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
    "correct": 0,
    "explanation": "Cards B, C, and D exhibit rotational symmetry under a 90-degree clockwise step, whereas Card A has an inverted internal anchor."
  },
  {
    "id": "odd25",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the odd card in this nested quadrilateral arrangement.",
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
    "explanation": "In figures A, B, and D, each concentric inner quadrilateral has rounded vertices matching the parent card. In figure C, the inner polygon has sharp right-angled vertices."
  },
  {
    "id": "odd26",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Which card does not follow the symmetry rule?",
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
    "correct": 1,
    "explanation": "Figures A, C, and D contain exactly two concentric concentric boundary loops. Figure B contains three concentric loops."
  },
  {
    "id": "odd27",
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
    "correct": 3,
    "explanation": "In images A, B, and C, the internal marker is aligned along the primary diagonal axis. In image D, the marker is rotated 45 degrees along the horizontal axis."
  },
  {
    "id": "odd28",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Select the odd-one-out shape from the set.",
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
    "correct": 0,
    "explanation": "Images B, C, and D possess bilateral horizontal symmetry. Image A lacks horizontal symmetry because the inner shape is skewed towards the top-left."
  },
  {
    "id": "odd29",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the figure with differing spatial orientation.",
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
    "explanation": "In Cards A, B, and D, the outer rectangle has an aspect ratio of 4:3 (landscape). In Card C, the card's inner framing is rotated into a 3:4 portrait aspect ratio."
  },
  {
    "id": "odd30",
    "category": "non-verbal-reasoning",
    "type": "shl-odd-one-out",
    "question": "Choose the correct option. Identify the card that violates the concentric pattern.",
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
    "correct": 1,
    "explanation": "In Cards A, C, and D, the distance between the inner and outer rectangular boundaries is uniform along all edges. In Card B, the right margin is double the left margin."
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
