// ============================================================
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

export const LISTEN_SENTENCES: SentenceItem[] = [
  {
    "id": "ls1",
    "text": "Please keep the documents on the table.",
    "difficulty": "easy"
  },
  {
    "id": "ls2",
    "text": "The meeting starts at nine in the morning.",
    "difficulty": "easy"
  },
  {
    "id": "ls3",
    "text": "Could you please send me the report by Friday?",
    "difficulty": "easy"
  },
  {
    "id": "ls4",
    "text": "The package arrived this morning without any damage.",
    "difficulty": "easy"
  },
  {
    "id": "ls5",
    "text": "Please fill in the form and return it to the front desk.",
    "difficulty": "easy"
  },
  {
    "id": "ls6",
    "text": "Your appointment has been confirmed for three o'clock.",
    "difficulty": "easy"
  },
  {
    "id": "ls7",
    "text": "The office will be closed on the national holiday.",
    "difficulty": "easy"
  },
  {
    "id": "ls8",
    "text": "Please sign here before you leave the counter.",
    "difficulty": "easy"
  },
  {
    "id": "ls9",
    "text": "The supervisor will call you back within thirty minutes.",
    "difficulty": "easy"
  },
  {
    "id": "ls10",
    "text": "Your order will be delivered within three to five working days.",
    "difficulty": "easy"
  },
  {
    "id": "ls11",
    "text": "We appreciate your patience and understanding.",
    "difficulty": "easy"
  },
  {
    "id": "ls12",
    "text": "The helpdesk is available from Monday to Saturday.",
    "difficulty": "easy"
  },
  {
    "id": "ls13",
    "text": "Please have your account number ready before calling.",
    "difficulty": "easy"
  },
  {
    "id": "ls14",
    "text": "The technician will arrive at your location by noon.",
    "difficulty": "easy"
  },
  {
    "id": "ls15",
    "text": "You may track your shipment using the reference number provided.",
    "difficulty": "easy"
  },
  {
    "id": "ls16",
    "text": "The customer requested an update regarding the delayed delivery.",
    "difficulty": "medium"
  },
  {
    "id": "ls17",
    "text": "Please ensure that all required fields are completed before submitting the application.",
    "difficulty": "medium"
  },
  {
    "id": "ls18",
    "text": "The manager reviewed the complaint and offered a full refund to the customer.",
    "difficulty": "medium"
  },
  {
    "id": "ls19",
    "text": "Our technical team is currently investigating the issue and will provide an update shortly.",
    "difficulty": "medium"
  },
  {
    "id": "ls20",
    "text": "The representative apologized for the inconvenience and escalated the matter immediately.",
    "difficulty": "medium"
  },
  {
    "id": "ls21",
    "text": "The new policy will take effect starting from the first of next month.",
    "difficulty": "medium"
  },
  {
    "id": "ls22",
    "text": "All employees are required to complete the mandatory training by the end of the quarter.",
    "difficulty": "medium"
  },
  {
    "id": "ls23",
    "text": "The client confirmed that the invoice was received but payment has not yet been processed.",
    "difficulty": "medium"
  },
  {
    "id": "ls24",
    "text": "Could you please verify the billing address associated with your account?",
    "difficulty": "medium"
  },
  {
    "id": "ls25",
    "text": "The team successfully resolved the network outage within two hours of the initial report.",
    "difficulty": "medium"
  },
  {
    "id": "ls26",
    "text": "The warranty covers all manufacturing defects but excludes physical damage caused by misuse.",
    "difficulty": "medium"
  },
  {
    "id": "ls27",
    "text": "Please allow up to ten business days for the refund to appear in your account.",
    "difficulty": "medium"
  },
  {
    "id": "ls28",
    "text": "The supervisor will review your feedback and respond within forty-eight hours.",
    "difficulty": "medium"
  },
  {
    "id": "ls29",
    "text": "Your account has been temporarily suspended due to unusual activity detected on our system.",
    "difficulty": "medium"
  },
  {
    "id": "ls30",
    "text": "All documents must be certified and notarized before they can be accepted for processing.",
    "difficulty": "medium"
  },
  {
    "id": "ls31",
    "text": "We recommend restarting your device after the installation process is finalized.",
    "difficulty": "medium"
  },
  {
    "id": "ls32",
    "text": "The payment confirmation was dispatched automatically to your registered email address.",
    "difficulty": "medium"
  },
  {
    "id": "ls33",
    "text": "Please make sure your internet connection remains stable during the assessment.",
    "difficulty": "medium"
  },
  {
    "id": "ls34",
    "text": "The customer support helpline operates twenty-four hours a day throughout the week.",
    "difficulty": "medium"
  },
  {
    "id": "ls35",
    "text": "Kindly verify your identity by providing the one-time passcode sent to your mobile phone.",
    "difficulty": "medium"
  },
  {
    "id": "ls36",
    "text": "Although the meeting was postponed, the team completed all assigned responsibilities before the revised deadline.",
    "difficulty": "hard"
  },
  {
    "id": "ls37",
    "text": "The compliance department has identified several discrepancies in the financial records that require immediate attention.",
    "difficulty": "hard"
  },
  {
    "id": "ls38",
    "text": "Despite multiple attempts to resolve the issue remotely, the technician concluded that an on-site visit would be necessary.",
    "difficulty": "hard"
  },
  {
    "id": "ls39",
    "text": "The customer expressed dissatisfaction with the service quality and requested that the case be escalated to a senior manager.",
    "difficulty": "hard"
  },
  {
    "id": "ls40",
    "text": "According to our records, the subscription was renewed automatically on the fifteenth of last month without prior notification.",
    "difficulty": "hard"
  },
  {
    "id": "ls41",
    "text": "The proposed changes to the service agreement will be presented to the board during next week's executive meeting.",
    "difficulty": "hard"
  },
  {
    "id": "ls42",
    "text": "Our investigation revealed that the unauthorized transaction originated from an unrecognized device in a different geographical location.",
    "difficulty": "hard"
  },
  {
    "id": "ls43",
    "text": "The candidate demonstrated exceptional communication skills and a thorough understanding of customer relationship management during the interview.",
    "difficulty": "hard"
  },
  {
    "id": "ls44",
    "text": "Pursuant to the terms and conditions of the agreement, early termination of the contract may result in applicable penalties and fees.",
    "difficulty": "hard"
  },
  {
    "id": "ls45",
    "text": "The operations team implemented a series of corrective measures to prevent recurrence of the system failure that occurred last Thursday.",
    "difficulty": "hard"
  },
  {
    "id": "ls46",
    "text": "All correspondence relating to this matter should be directed to the legal department for review prior to any external communication.",
    "difficulty": "hard"
  },
  {
    "id": "ls47",
    "text": "The regional director emphasized the importance of maintaining consistent service standards across all branches during the quarterly performance review.",
    "difficulty": "hard"
  },
  {
    "id": "ls48",
    "text": "Following a thorough assessment of the situation, the management team decided to extend the product warranty by an additional six months.",
    "difficulty": "hard"
  },
  {
    "id": "ls49",
    "text": "The integration of the new software platform is expected to significantly improve operational efficiency and reduce processing time by forty percent.",
    "difficulty": "hard"
  },
  {
    "id": "ls50",
    "text": "In accordance with data protection regulations, all personal information collected from customers must be stored securely and accessed only by authorized personnel.",
    "difficulty": "hard"
  }
];

export const PICTURE_QUESTIONS: PictureQuestion[] = [
  {
    "id": "pq1",
    "question": "Which image shows a person working on a laptop computer?",
    "options": [
      {
        "label": "A person working on a laptop",
        "image": "/images/pictures/pq1_opt0.svg",
        "correct": true
      },
      {
        "label": "A person cooking in a kitchen",
        "image": "/images/pictures/pq1_opt1.svg",
        "correct": false
      },
      {
        "label": "A person riding a bicycle",
        "image": "/images/pictures/pq1_opt2.svg",
        "correct": false
      },
      {
        "label": "A person reading a paper book",
        "image": "/images/pictures/pq1_opt3.svg",
        "correct": false
      },
      {
        "label": "A person swimming in an outdoor pool",
        "image": "/images/pictures/pq1_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq2",
    "question": "Which image shows an office meeting room with colleagues gathered around a table?",
    "options": [
      {
        "label": "People dining at a restaurant",
        "image": "/images/pictures/pq2_opt0.svg",
        "correct": false
      },
      {
        "label": "An office team meeting around a conference table",
        "image": "/images/pictures/pq2_opt1.svg",
        "correct": true
      },
      {
        "label": "Students sitting in a lecture classroom",
        "image": "/images/pictures/pq2_opt2.svg",
        "correct": false
      },
      {
        "label": "Friends having an outdoor barbecue picnic",
        "image": "/images/pictures/pq2_opt3.svg",
        "correct": false
      },
      {
        "label": "A quiet library interior with bookshelves",
        "image": "/images/pictures/pq2_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq3",
    "question": "Which image shows fresh fruits and vegetables arranged in market crates?",
    "options": [
      {
        "label": "A hardware and tools store",
        "image": "/images/pictures/pq3_opt0.svg",
        "correct": false
      },
      {
        "label": "A boutique clothing store",
        "image": "/images/pictures/pq3_opt1.svg",
        "correct": false
      },
      {
        "label": "Fresh fruits and vegetables in display stalls",
        "image": "/images/pictures/pq3_opt2.svg",
        "correct": true
      },
      {
        "label": "A burger and fast food counter",
        "image": "/images/pictures/pq3_opt3.svg",
        "correct": false
      },
      {
        "label": "An electronic gadgets showcase",
        "image": "/images/pictures/pq3_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq4",
    "question": "Which image shows a customer service agent wearing a headset and smiling at a computer?",
    "options": [
      {
        "label": "A surgeon in hospital scrubs",
        "image": "/images/pictures/pq4_opt0.svg",
        "correct": false
      },
      {
        "label": "A chef preparing dough in a bakery",
        "image": "/images/pictures/pq4_opt1.svg",
        "correct": false
      },
      {
        "label": "A customer support representative wearing a headset",
        "image": "/images/pictures/pq4_opt2.svg",
        "correct": true
      },
      {
        "label": "A courier delivery driver carrying packages",
        "image": "/images/pictures/pq4_opt3.svg",
        "correct": false
      },
      {
        "label": "A retail cashier scanning items at checkout",
        "image": "/images/pictures/pq4_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq5",
    "question": "Which image shows a commercial passenger airplane flying through clouds?",
    "options": [
      {
        "label": "A yacht sailing in open coastal waters",
        "image": "/images/pictures/pq5_opt0.svg",
        "correct": false
      },
      {
        "label": "A commuter train arriving at a railway platform",
        "image": "/images/pictures/pq5_opt1.svg",
        "correct": false
      },
      {
        "label": "An automobile driving along an interstate highway",
        "image": "/images/pictures/pq5_opt2.svg",
        "correct": false
      },
      {
        "label": "A road bicycle leaning against a stone wall",
        "image": "/images/pictures/pq5_opt3.svg",
        "correct": false
      },
      {
        "label": "A commercial airplane ascending in the sky",
        "image": "/images/pictures/pq5_opt4.svg",
        "correct": true
      }
    ]
  },
  {
    "id": "pq6",
    "question": "Which image shows a physician consulting with a patient in an examination room?",
    "options": [
      {
        "label": "A doctor with stethoscope examining a patient",
        "image": "/images/pictures/pq6_opt0.svg",
        "correct": true
      },
      {
        "label": "A teacher tutoring a child at a blackboard",
        "image": "/images/pictures/pq6_opt1.svg",
        "correct": false
      },
      {
        "label": "A pastry cook frosting a cake",
        "image": "/images/pictures/pq6_opt2.svg",
        "correct": false
      },
      {
        "label": "A law enforcement patrol officer",
        "image": "/images/pictures/pq6_opt3.svg",
        "correct": false
      },
      {
        "label": "A rescue worker holding safety ropes",
        "image": "/images/pictures/pq6_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq7",
    "question": "Which image shows a tropical sandy beach with turquoise ocean water and palm trees?",
    "options": [
      {
        "label": "A snow-covered alpine peak",
        "image": "/images/pictures/pq7_opt0.svg",
        "correct": false
      },
      {
        "label": "A misty evergreen pine forest",
        "image": "/images/pictures/pq7_opt1.svg",
        "correct": false
      },
      {
        "label": "Sand dunes stretching across an arid desert",
        "image": "/images/pictures/pq7_opt2.svg",
        "correct": false
      },
      {
        "label": "A pristine tropical beach with crystal-clear water",
        "image": "/images/pictures/pq7_opt3.svg",
        "correct": true
      },
      {
        "label": "A crowded downtown street in a metropolis",
        "image": "/images/pictures/pq7_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq8",
    "question": "Which image shows a hot ceramic cup of coffee with latte art on a wooden caf\u00e9 table?",
    "options": [
      {
        "label": "A tall glass of chilled orange juice",
        "image": "/images/pictures/pq8_opt0.svg",
        "correct": false
      },
      {
        "label": "A ceramic cup of freshly brewed coffee with latte art",
        "image": "/images/pictures/pq8_opt1.svg",
        "correct": true
      },
      {
        "label": "A clear bottle of mineral spring water",
        "image": "/images/pictures/pq8_opt2.svg",
        "correct": false
      },
      {
        "label": "A bowl of steaming vegetable soup",
        "image": "/images/pictures/pq8_opt3.svg",
        "correct": false
      },
      {
        "label": "A fresh garden salad with greens and tomatoes",
        "image": "/images/pictures/pq8_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq9",
    "question": "Which image shows a golden retriever dog catching a flying disc outdoors in a park?",
    "options": [
      {
        "label": "A tabby cat napping on a living room sofa",
        "image": "/images/pictures/pq9_opt0.svg",
        "correct": false
      },
      {
        "label": "A colorful wild bird resting on a tree branch",
        "image": "/images/pictures/pq9_opt1.svg",
        "correct": false
      },
      {
        "label": "Exotic tropical fish swimming in an aquarium",
        "image": "/images/pictures/pq9_opt2.svg",
        "correct": false
      },
      {
        "label": "A white rabbit chewing leaves in a garden",
        "image": "/images/pictures/pq9_opt3.svg",
        "correct": false
      },
      {
        "label": "An energetic golden retriever dog playing in a park",
        "image": "/images/pictures/pq9_opt4.svg",
        "correct": true
      }
    ]
  },
  {
    "id": "pq10",
    "question": "Which image shows an illuminated city skyline with skyscrapers reflecting in water at night?",
    "options": [
      {
        "label": "A brightly lit city skyline with illuminated skyscrapers",
        "image": "/images/pictures/pq10_opt0.svg",
        "correct": true
      },
      {
        "label": "A rural farmhouse amidst green fields",
        "image": "/images/pictures/pq10_opt1.svg",
        "correct": false
      },
      {
        "label": "Sun setting over ocean horizon",
        "image": "/images/pictures/pq10_opt2.svg",
        "correct": false
      },
      {
        "label": "A serene mountain lake at daybreak",
        "image": "/images/pictures/pq10_opt3.svg",
        "correct": false
      },
      {
        "label": "An empty professional football arena",
        "image": "/images/pictures/pq10_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq11",
    "question": "Which image shows a professional speaker presenting charts on a stage screen?",
    "options": [
      {
        "label": "A business speaker giving a keynote on stage",
        "image": "/images/pictures/pq11_opt0.svg",
        "correct": true
      },
      {
        "label": "An employee sitting alone in a cubicle",
        "image": "/images/pictures/pq11_opt1.svg",
        "correct": false
      },
      {
        "label": "Guests chatting at a birthday celebration",
        "image": "/images/pictures/pq11_opt2.svg",
        "correct": false
      },
      {
        "label": "Students reading textbooks quietly",
        "image": "/images/pictures/pq11_opt3.svg",
        "correct": false
      },
      {
        "label": "A live outdoor music concert festival",
        "image": "/images/pictures/pq11_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq12",
    "question": "Which image shows a customer pushing a supermarket shopping cart loaded with groceries?",
    "options": [
      {
        "label": "An empty outdoor parking lot",
        "image": "/images/pictures/pq12_opt0.svg",
        "correct": false
      },
      {
        "label": "A metal shopping cart filled with fresh groceries",
        "image": "/images/pictures/pq12_opt1.svg",
        "correct": true
      },
      {
        "label": "Designer shirts hanging on a store rack",
        "image": "/images/pictures/pq12_opt2.svg",
        "correct": false
      },
      {
        "label": "Hardcover books neatly stacked on wooden shelves",
        "image": "/images/pictures/pq12_opt3.svg",
        "correct": false
      },
      {
        "label": "Modern smartphones displayed on glass tables",
        "image": "/images/pictures/pq12_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq13",
    "question": "Which image shows two professionals performing a firm business handshake after an agreement?",
    "options": [
      {
        "label": "Two colleagues greeting with an informal hug",
        "image": "/images/pictures/pq13_opt0.svg",
        "correct": false
      },
      {
        "label": "Two business executives shaking hands in an office",
        "image": "/images/pictures/pq13_opt1.svg",
        "correct": true
      },
      {
        "label": "People waving hand gestures at a train station",
        "image": "/images/pictures/pq13_opt2.svg",
        "correct": false
      },
      {
        "label": "A group dining around a banquet table",
        "image": "/images/pictures/pq13_opt3.svg",
        "correct": false
      },
      {
        "label": "An employee receiving a glass trophy award",
        "image": "/images/pictures/pq13_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq14",
    "question": "Which image shows an open umbrella protecting a pedestrian from heavy rainfall on a sidewalk?",
    "options": [
      {
        "label": "A traveler wearing sunglasses under bright sunshine",
        "image": "/images/pictures/pq14_opt0.svg",
        "correct": false
      },
      {
        "label": "A mountaineer hiking through heavy snowfall",
        "image": "/images/pictures/pq14_opt1.svg",
        "correct": false
      },
      {
        "label": "A person holding an open umbrella in pouring rain",
        "image": "/images/pictures/pq14_opt2.svg",
        "correct": true
      },
      {
        "label": "People flying kites in strong sea wind",
        "image": "/images/pictures/pq14_opt3.svg",
        "correct": false
      },
      {
        "label": "A quiet forest road covered in thick morning fog",
        "image": "/images/pictures/pq14_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq15",
    "question": "Which image shows a commuter stepping onto a public city transit bus at a bus stop?",
    "options": [
      {
        "label": "A passenger boarding a red public transit bus",
        "image": "/images/pictures/pq15_opt0.svg",
        "correct": true
      },
      {
        "label": "A person raising their arm to hail a taxi cab",
        "image": "/images/pictures/pq15_opt1.svg",
        "correct": false
      },
      {
        "label": "Air travelers waiting in line at airport luggage drop",
        "image": "/images/pictures/pq15_opt2.svg",
        "correct": false
      },
      {
        "label": "A customer signing rental paperwork at car rental",
        "image": "/images/pictures/pq15_opt3.svg",
        "correct": false
      },
      {
        "label": "A cyclist wearing a helmet pedaling down a bike path",
        "image": "/images/pictures/pq15_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq16",
    "question": "Which image shows a person riding an electric bicycle through a city street?",
    "options": [
      {
        "label": "An electric bicycle rider on a city street",
        "image": "/images/pictures/pq16_opt0.svg",
        "correct": true
      },
      {
        "label": "A person driving a pickup truck",
        "image": "/images/pictures/pq16_opt1.svg",
        "correct": false
      },
      {
        "label": "A person riding a horse in a field",
        "image": "/images/pictures/pq16_opt2.svg",
        "correct": false
      },
      {
        "label": "A person running on a treadmill",
        "image": "/images/pictures/pq16_opt3.svg",
        "correct": false
      },
      {
        "label": "A person paddling a kayak on a river",
        "image": "/images/pictures/pq16_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq17",
    "question": "Which image shows a warehouse worker using a barcode scanner to scan storage cartons?",
    "options": [
      {
        "label": "A warehouse employee scanning boxes with handheld scanner",
        "image": "/images/pictures/pq17_opt0.svg",
        "correct": true
      },
      {
        "label": "An office accountant sorting paper folders",
        "image": "/images/pictures/pq17_opt1.svg",
        "correct": false
      },
      {
        "label": "A pharmacist organizing pill bottles on shelves",
        "image": "/images/pictures/pq17_opt2.svg",
        "correct": false
      },
      {
        "label": "A supermarket customer checking price tags",
        "image": "/images/pictures/pq17_opt3.svg",
        "correct": false
      },
      {
        "label": "A library clerk arranging returned books",
        "image": "/images/pictures/pq17_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq18",
    "question": "Which image shows a computer screen showing a remote multi-person video conference?",
    "options": [
      {
        "label": "A laptop screen displaying a grid of video meeting participants",
        "image": "/images/pictures/pq18_opt0.svg",
        "correct": true
      },
      {
        "label": "A television playing a broadcast soccer match",
        "image": "/images/pictures/pq18_opt1.svg",
        "correct": false
      },
      {
        "label": "A gaming computer displaying a 3D racing game",
        "image": "/images/pictures/pq18_opt2.svg",
        "correct": false
      },
      {
        "label": "A tablet displaying an animated children cartoon",
        "image": "/images/pictures/pq18_opt3.svg",
        "correct": false
      },
      {
        "label": "A smartphone playing music video playlist",
        "image": "/images/pictures/pq18_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq19",
    "question": "Which image shows a chef in a white uniform plating food inside a busy restaurant kitchen?",
    "options": [
      {
        "label": "A professional chef garnishing dishes in a commercial kitchen",
        "image": "/images/pictures/pq19_opt0.svg",
        "correct": true
      },
      {
        "label": "A barista pulling an espresso shot at coffee counter",
        "image": "/images/pictures/pq19_opt1.svg",
        "correct": false
      },
      {
        "label": "A waiter carrying multiple drink glasses on a tray",
        "image": "/images/pictures/pq19_opt2.svg",
        "correct": false
      },
      {
        "label": "A baker pulling hot loaves of bread from an oven",
        "image": "/images/pictures/pq19_opt3.svg",
        "correct": false
      },
      {
        "label": "A dishwasher scrubbing cooking pots in a stainless sink",
        "image": "/images/pictures/pq19_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq20",
    "question": "Which image shows a woman doing a yoga tree pose on a mat in a bright studio?",
    "options": [
      {
        "label": "A practitioner balancing in a yoga pose on a mat",
        "image": "/images/pictures/pq20_opt0.svg",
        "correct": true
      },
      {
        "label": "An athlete performing heavy barbell squats",
        "image": "/images/pictures/pq20_opt1.svg",
        "correct": false
      },
      {
        "label": "A swimmer preparing to dive from a starting block",
        "image": "/images/pictures/pq20_opt2.svg",
        "correct": false
      },
      {
        "label": "A tennis player hitting a forehand stroke",
        "image": "/images/pictures/pq20_opt3.svg",
        "correct": false
      },
      {
        "label": "A marathon runner crossing a finish line ribbon",
        "image": "/images/pictures/pq20_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq21",
    "question": "Which image shows a modern high-speed bullet train stationed at a clean passenger terminal?",
    "options": [
      {
        "label": "A streamlined bullet train stopped along a modern platform",
        "image": "/images/pictures/pq21_opt0.svg",
        "correct": true
      },
      {
        "label": "A cargo freight train carrying shipping containers",
        "image": "/images/pictures/pq21_opt1.svg",
        "correct": false
      },
      {
        "label": "A vintage steam locomotive releasing white steam",
        "image": "/images/pictures/pq21_opt2.svg",
        "correct": false
      },
      {
        "label": "An underground subway car packed with commuters",
        "image": "/images/pictures/pq21_opt3.svg",
        "correct": false
      },
      {
        "label": "A scenic tourist mountain tram ascending a hill",
        "image": "/images/pictures/pq21_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq22",
    "question": "Which image shows a construction worker wearing a yellow hard hat and high-visibility vest?",
    "options": [
      {
        "label": "A site worker wearing safety hardhat and reflective vest",
        "image": "/images/pictures/pq22_opt0.svg",
        "correct": true
      },
      {
        "label": "A firefighter in protective turnout gear with firehose",
        "image": "/images/pictures/pq22_opt1.svg",
        "correct": false
      },
      {
        "label": "A police officer conducting roadside vehicle inspection",
        "image": "/images/pictures/pq22_opt2.svg",
        "correct": false
      },
      {
        "label": "A utility lineman repairing electrical poles",
        "image": "/images/pictures/pq22_opt3.svg",
        "correct": false
      },
      {
        "label": "A factory assembly worker wearing safety glasses",
        "image": "/images/pictures/pq22_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq23",
    "question": "Which image shows a student studying with highlighters and notebooks in a quiet library?",
    "options": [
      {
        "label": "A student taking detailed notes with textbooks in a library",
        "image": "/images/pictures/pq23_opt0.svg",
        "correct": true
      },
      {
        "label": "Students chatting noisily in a school cafeteria",
        "image": "/images/pictures/pq23_opt1.svg",
        "correct": false
      },
      {
        "label": "Children playing games in a playground sandbox",
        "image": "/images/pictures/pq23_opt2.svg",
        "correct": false
      },
      {
        "label": "A tutor giving instructions at a white chalkboard",
        "image": "/images/pictures/pq23_opt3.svg",
        "correct": false
      },
      {
        "label": "A graduate receiving their university diploma onstage",
        "image": "/images/pictures/pq23_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq24",
    "question": "Which image shows a delivery person in uniform handing a cardboard package to a homeowner?",
    "options": [
      {
        "label": "A courier handing a delivered parcel at a front doorstep",
        "image": "/images/pictures/pq24_opt0.svg",
        "correct": true
      },
      {
        "label": "A mail carrier placing letter envelopes in a mailbox",
        "image": "/images/pictures/pq24_opt1.svg",
        "correct": false
      },
      {
        "label": "A moving company mover lifting a heavy wooden sofa",
        "image": "/images/pictures/pq24_opt2.svg",
        "correct": false
      },
      {
        "label": "A food delivery rider handing over brown takeout bags",
        "image": "/images/pictures/pq24_opt3.svg",
        "correct": false
      },
      {
        "label": "A retail store associate packing clothes in paper bags",
        "image": "/images/pictures/pq24_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq25",
    "question": "Which image shows a technician repairing internal hardware components of a desktop PC?",
    "options": [
      {
        "label": "A technician fixing computer motherboard circuits with tools",
        "image": "/images/pictures/pq25_opt0.svg",
        "correct": true
      },
      {
        "label": "An electrician wiring an electrical distribution box",
        "image": "/images/pictures/pq25_opt1.svg",
        "correct": false
      },
      {
        "label": "An auto mechanic inspecting an automobile engine",
        "image": "/images/pictures/pq25_opt2.svg",
        "correct": false
      },
      {
        "label": "A mobile technician replacing a phone battery",
        "image": "/images/pictures/pq25_opt3.svg",
        "correct": false
      },
      {
        "label": "A network engineer patching blue ethernet cables",
        "image": "/images/pictures/pq25_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq26",
    "question": "Which image shows a vibrant farmers market stall displaying jars of organic honey and jams?",
    "options": [
      {
        "label": "Market table stacked with artisanal honey jars and preserves",
        "image": "/images/pictures/pq26_opt0.svg",
        "correct": true
      },
      {
        "label": "A butcher display case filled with fresh meat cuts",
        "image": "/images/pictures/pq26_opt1.svg",
        "correct": false
      },
      {
        "label": "A bakery display filled with croissants and pastries",
        "image": "/images/pictures/pq26_opt2.svg",
        "correct": false
      },
      {
        "label": "A flower stall overflowing with fresh bouquets and blooms",
        "image": "/images/pictures/pq26_opt3.svg",
        "correct": false
      },
      {
        "label": "A seafood counter featuring crushed ice and fresh fish",
        "image": "/images/pictures/pq26_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq27",
    "question": "Which image shows a dental hygienist inspecting a patient's teeth using dental instruments?",
    "options": [
      {
        "label": "A dentist examining a patient seated in a dental chair",
        "image": "/images/pictures/pq27_opt0.svg",
        "correct": true
      },
      {
        "label": "An optometrist conducting an eye refraction test",
        "image": "/images/pictures/pq27_opt1.svg",
        "correct": false
      },
      {
        "label": "A physical therapist guiding shoulder exercises",
        "image": "/images/pictures/pq27_opt2.svg",
        "correct": false
      },
      {
        "label": "A radiologist examining black and white chest X-rays",
        "image": "/images/pictures/pq27_opt3.svg",
        "correct": false
      },
      {
        "label": "A laboratory chemist testing fluids in glass vials",
        "image": "/images/pictures/pq27_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq28",
    "question": "Which image shows a family assembling a tent together at a wooded campsite near a lake?",
    "options": [
      {
        "label": "Campers pitching a blue nylon tent in a forested clearing",
        "image": "/images/pictures/pq28_opt0.svg",
        "correct": true
      },
      {
        "label": "Hikers resting with heavy trekking backpacks on a trail",
        "image": "/images/pictures/pq28_opt1.svg",
        "correct": false
      },
      {
        "label": "Kayakers paddling across calm mountain lake water",
        "image": "/images/pictures/pq28_opt2.svg",
        "correct": false
      },
      {
        "label": "People roasting marshmallows over a wood campfire",
        "image": "/images/pictures/pq28_opt3.svg",
        "correct": false
      },
      {
        "label": "A camper fishing from a wooden lake dock at sunrise",
        "image": "/images/pictures/pq28_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq29",
    "question": "Which image shows an empty boardroom featuring a long mahogany table and leather executive chairs?",
    "options": [
      {
        "label": "A vacant formal corporate boardroom with conference seating",
        "image": "/images/pictures/pq29_opt0.svg",
        "correct": true
      },
      {
        "label": "An open-plan coworking space with colorful beanbags",
        "image": "/images/pictures/pq29_opt1.svg",
        "correct": false
      },
      {
        "label": "A school computer lab with desktop terminals",
        "image": "/images/pictures/pq29_opt2.svg",
        "correct": false
      },
      {
        "label": "A hotel lobby with marble pillars and chandeliers",
        "image": "/images/pictures/pq29_opt3.svg",
        "correct": false
      },
      {
        "label": "An executive private corner office with city views",
        "image": "/images/pictures/pq29_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq30",
    "question": "Which image shows a barista steaming milk foam using a commercial espresso machine?",
    "options": [
      {
        "label": "A barista frothing milk wand on an espresso machine",
        "image": "/images/pictures/pq30_opt0.svg",
        "correct": true
      },
      {
        "label": "A bartender shaking cocktails behind a bar counter",
        "image": "/images/pictures/pq30_opt1.svg",
        "correct": false
      },
      {
        "label": "A smoothie vendor blending fresh fruit smoothies",
        "image": "/images/pictures/pq30_opt2.svg",
        "correct": false
      },
      {
        "label": "A sommelier pouring red wine into crystal glasses",
        "image": "/images/pictures/pq30_opt3.svg",
        "correct": false
      },
      {
        "label": "A tea master pouring hot green tea from a teapot",
        "image": "/images/pictures/pq30_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq31",
    "question": "Which image shows a passenger looking out of an airplane window at cloud formations below?",
    "options": [
      {
        "label": "A traveler viewing fluffy white clouds from a jet window",
        "image": "/images/pictures/pq31_opt0.svg",
        "correct": true
      },
      {
        "label": "A driver looking into a vehicle rearview side mirror",
        "image": "/images/pictures/pq31_opt1.svg",
        "correct": false
      },
      {
        "label": "A ship captain viewing ocean horizon through binoculars",
        "image": "/images/pictures/pq31_opt2.svg",
        "correct": false
      },
      {
        "label": "A passenger gazing out of a high-speed train window",
        "image": "/images/pictures/pq31_opt3.svg",
        "correct": false
      },
      {
        "label": "A tourist peering through an observation tower telescope",
        "image": "/images/pictures/pq31_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq32",
    "question": "Which image shows a group of people planting young tree saplings in an ecological restoration park?",
    "options": [
      {
        "label": "Volunteers planting tree saplings into fertile soil",
        "image": "/images/pictures/pq32_opt0.svg",
        "correct": true
      },
      {
        "label": "A gardener mowing green grass with a rotary mower",
        "image": "/images/pictures/pq32_opt1.svg",
        "correct": false
      },
      {
        "label": "A farmer harvesting wheat using a large combine harvester",
        "image": "/images/pictures/pq32_opt2.svg",
        "correct": false
      },
      {
        "label": "A landscaper trimming tall hedges with electric shears",
        "image": "/images/pictures/pq32_opt3.svg",
        "correct": false
      },
      {
        "label": "A greenhouse worker watering potted indoor succulents",
        "image": "/images/pictures/pq32_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq33",
    "question": "Which image shows an artist using paintbrushes to paint an oil landscape on an easel canvas?",
    "options": [
      {
        "label": "An oil painter working with palette and brush on an easel",
        "image": "/images/pictures/pq33_opt0.svg",
        "correct": true
      },
      {
        "label": "A sculptor shaping clay on a rotating pottery wheel",
        "image": "/images/pictures/pq33_opt1.svg",
        "correct": false
      },
      {
        "label": "A graphic designer creating digital vector art on a tablet",
        "image": "/images/pictures/pq33_opt2.svg",
        "correct": false
      },
      {
        "label": "A photographer adjusting camera tripod in an art studio",
        "image": "/images/pictures/pq33_opt3.svg",
        "correct": false
      },
      {
        "label": "A calligrapher writing ornate letters with fountain pen",
        "image": "/images/pictures/pq33_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq34",
    "question": "Which image shows an airport baggage carousel with suitcases circulating on conveyor belts?",
    "options": [
      {
        "label": "Luggage bags revolving on an airport luggage carousel",
        "image": "/images/pictures/pq34_opt0.svg",
        "correct": true
      },
      {
        "label": "A traveler pulling a wheeled trolley suitcase down corridor",
        "image": "/images/pictures/pq34_opt1.svg",
        "correct": false
      },
      {
        "label": "A security scanner conveyor scanning passenger carry-on bags",
        "image": "/images/pictures/pq34_opt2.svg",
        "correct": false
      },
      {
        "label": "A baggage handler loading luggage onto an aircraft cargo bay",
        "image": "/images/pictures/pq34_opt3.svg",
        "correct": false
      },
      {
        "label": "A lost luggage help counter with customer inquiry forms",
        "image": "/images/pictures/pq34_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq35",
    "question": "Which image shows a person examining a paper map while standing at a historic European plaza?",
    "options": [
      {
        "label": "A lost tourist checking an unfolded street map at a monument",
        "image": "/images/pictures/pq35_opt0.svg",
        "correct": true
      },
      {
        "label": "A pedestrian following turn-by-turn navigation on phone",
        "image": "/images/pictures/pq35_opt1.svg",
        "correct": false
      },
      {
        "label": "A tour guide holding up a colored flag for a travel group",
        "image": "/images/pictures/pq35_opt2.svg",
        "correct": false
      },
      {
        "label": "A tourist taking photos of an ancient cathedral facade",
        "image": "/images/pictures/pq35_opt3.svg",
        "correct": false
      },
      {
        "label": "A traveler waiting at an outdoor foreign currency exchange",
        "image": "/images/pictures/pq35_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq36",
    "question": "Which image shows a server placing a hot pizza with melting mozzarella on a table?",
    "options": [
      {
        "label": "A waiter serving a freshly baked wood-fired pizza",
        "image": "/images/pictures/pq36_opt0.svg",
        "correct": true
      },
      {
        "label": "A cook flipping burger patties on an iron flat-top grill",
        "image": "/images/pictures/pq36_opt1.svg",
        "correct": false
      },
      {
        "label": "A dining guest twirling pasta onto a fork from a plate",
        "image": "/images/pictures/pq36_opt2.svg",
        "correct": false
      },
      {
        "label": "A cashier handing a box of fried chicken across counter",
        "image": "/images/pictures/pq36_opt3.svg",
        "correct": false
      },
      {
        "label": "A sushi chef slicing fresh salmon sashimi on a board",
        "image": "/images/pictures/pq36_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq37",
    "question": "Which image shows a server room with rows of computer server racks glowing with blue LED lights?",
    "options": [
      {
        "label": "A high-tech datacenter corridor with glowing server racks",
        "image": "/images/pictures/pq37_opt0.svg",
        "correct": true
      },
      {
        "label": "A computer assembly workbench with exposed circuit boards",
        "image": "/images/pictures/pq37_opt1.svg",
        "correct": false
      },
      {
        "label": "A telecom cell tower surrounded by radio transmission dishes",
        "image": "/images/pictures/pq37_opt2.svg",
        "correct": false
      },
      {
        "label": "A company electrical panel with circuit breaker switches",
        "image": "/images/pictures/pq37_opt3.svg",
        "correct": false
      },
      {
        "label": "A network cables organizer with colored patch cords",
        "image": "/images/pictures/pq37_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq38",
    "question": "Which image shows a tailor measuring jacket sleeve length with a soft measuring tape?",
    "options": [
      {
        "label": "A bespoke tailor measuring suit fabric on a client",
        "image": "/images/pictures/pq38_opt0.svg",
        "correct": true
      },
      {
        "label": "A seamstress operating a mechanical sewing machine",
        "image": "/images/pictures/pq38_opt1.svg",
        "correct": false
      },
      {
        "label": "A fashion designer sketching apparel designs on tracing paper",
        "image": "/images/pictures/pq38_opt2.svg",
        "correct": false
      },
      {
        "label": "A clothing store clerk folding polo shirts on a table",
        "image": "/images/pictures/pq38_opt3.svg",
        "correct": false
      },
      {
        "label": "A model walking down an illuminated fashion runway",
        "image": "/images/pictures/pq38_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq39",
    "question": "Which image shows a child receiving a vaccination injection in the arm from a clinic nurse?",
    "options": [
      {
        "label": "A pediatric nurse administering an immunization shot to a child",
        "image": "/images/pictures/pq39_opt0.svg",
        "correct": true
      },
      {
        "label": "A doctor listening to a patient's breathing with a stethoscope",
        "image": "/images/pictures/pq39_opt1.svg",
        "correct": false
      },
      {
        "label": "A pharmacist explaining dosage instructions on medicine bottle",
        "image": "/images/pictures/pq39_opt2.svg",
        "correct": false
      },
      {
        "label": "A paramedic bandaging an injured arm in an ambulance",
        "image": "/images/pictures/pq39_opt3.svg",
        "correct": false
      },
      {
        "label": "A medical assistant measuring patient blood pressure cuff",
        "image": "/images/pictures/pq39_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq40",
    "question": "Which image shows a mechanic working underneath an elevated automobile on a hydraulic lift?",
    "options": [
      {
        "label": "An auto mechanic inspecting vehicle chassis under a car lift",
        "image": "/images/pictures/pq40_opt0.svg",
        "correct": true
      },
      {
        "label": "A technician changing a flat vehicle tire on a roadside",
        "image": "/images/pictures/pq40_opt1.svg",
        "correct": false
      },
      {
        "label": "A driver washing their vehicle windshield at a gas station",
        "image": "/images/pictures/pq40_opt2.svg",
        "correct": false
      },
      {
        "label": "An auto body painter spraying glossy lacquer on a car door",
        "image": "/images/pictures/pq40_opt3.svg",
        "correct": false
      },
      {
        "label": "A driver checking vehicle engine oil level with a dipstick",
        "image": "/images/pictures/pq40_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq41",
    "question": "Which image shows a cashier handing a paper receipt and shopping bag to a retail customer?",
    "options": [
      {
        "label": "A store cashier completing a transaction at a cash register",
        "image": "/images/pictures/pq41_opt0.svg",
        "correct": true
      },
      {
        "label": "A customer tapping a contactless credit card on payment terminal",
        "image": "/images/pictures/pq41_opt1.svg",
        "correct": false
      },
      {
        "label": "A store associate restocking canned goods on retail shelves",
        "image": "/images/pictures/pq41_opt2.svg",
        "correct": false
      },
      {
        "label": "A customer returning an item at a department store counter",
        "image": "/images/pictures/pq41_opt3.svg",
        "correct": false
      },
      {
        "label": "A store greeter welcoming shoppers near automatic glass doors",
        "image": "/images/pictures/pq41_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq42",
    "question": "Which image shows a veterinarian examining a small domestic cat on a clean clinic table?",
    "options": [
      {
        "label": "A vet gently palpating a cat during an examination",
        "image": "/images/pictures/pq42_opt0.svg",
        "correct": true
      },
      {
        "label": "A pet groomer washing a fluffy poodle in a grooming tub",
        "image": "/images/pictures/pq42_opt1.svg",
        "correct": false
      },
      {
        "label": "A dog walker exercising multiple leashed dogs in a park",
        "image": "/images/pictures/pq42_opt2.svg",
        "correct": false
      },
      {
        "label": "An animal shelter volunteer feeding rescue puppies in a kennel",
        "image": "/images/pictures/pq42_opt3.svg",
        "correct": false
      },
      {
        "label": "A pet owner purchasing kibble at an animal supply shop",
        "image": "/images/pictures/pq42_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq43",
    "question": "Which image shows a photographer adjusting lens aperture on a DSLR camera mounted on a tripod?",
    "options": [
      {
        "label": "A photographer framing a scenic shot with camera on a tripod",
        "image": "/images/pictures/pq43_opt0.svg",
        "correct": true
      },
      {
        "label": "A tourist taking a selfie with a smartphone selfie stick",
        "image": "/images/pictures/pq43_opt1.svg",
        "correct": false
      },
      {
        "label": "A cameraman operating a large television broadcast studio camera",
        "image": "/images/pictures/pq43_opt2.svg",
        "correct": false
      },
      {
        "label": "An editor reviewing digital photograph proofs on dual monitors",
        "image": "/images/pictures/pq43_opt3.svg",
        "correct": false
      },
      {
        "label": "A model posing under softbox studio strobe lights",
        "image": "/images/pictures/pq43_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq44",
    "question": "Which image shows an architect inspecting printed blueprint drawings on a drafting table?",
    "options": [
      {
        "label": "An architect examining architectural blueprints and building schematics",
        "image": "/images/pictures/pq44_opt0.svg",
        "correct": true
      },
      {
        "label": "A civil engineer surveying topography with a laser theodolite",
        "image": "/images/pictures/pq44_opt1.svg",
        "correct": false
      },
      {
        "label": "A carpenter driving screws into drywall framing",
        "image": "/images/pictures/pq44_opt2.svg",
        "correct": false
      },
      {
        "label": "A building inspector taking safety notes on a digital clipboard",
        "image": "/images/pictures/pq44_opt3.svg",
        "correct": false
      },
      {
        "label": "A real estate developer pointing at a miniature scale model",
        "image": "/images/pictures/pq44_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq45",
    "question": "Which image shows a person watering flowering potted plants on an apartment balcony?",
    "options": [
      {
        "label": "A resident tending and watering balcony flower planters",
        "image": "/images/pictures/pq45_opt0.svg",
        "correct": true
      },
      {
        "label": "A gardener raking autumn leaves in a spacious backyard",
        "image": "/images/pictures/pq45_opt1.svg",
        "correct": false
      },
      {
        "label": "A florist arranging cut roses in a decorative glass vase",
        "image": "/images/pictures/pq45_opt2.svg",
        "correct": false
      },
      {
        "label": "A homeowner pruning overgrown tree branches with hedge shears",
        "image": "/images/pictures/pq45_opt3.svg",
        "correct": false
      },
      {
        "label": "A greenhouse horticulturist inspecting tomato vines",
        "image": "/images/pictures/pq45_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq46",
    "question": "Which image shows a soccer goalkeeper diving horizontally to block a ball near the goal post?",
    "options": [
      {
        "label": "A soccer goalkeeper making a diving save at the goalmouth",
        "image": "/images/pictures/pq46_opt0.svg",
        "correct": true
      },
      {
        "label": "A striker kicking a penalty ball toward the goal net",
        "image": "/images/pictures/pq46_opt1.svg",
        "correct": false
      },
      {
        "label": "A referee showing a yellow penalty card to a soccer player",
        "image": "/images/pictures/pq46_opt2.svg",
        "correct": false
      },
      {
        "label": "Players celebrating a winning goal near the corner flag",
        "image": "/images/pictures/pq46_opt3.svg",
        "correct": false
      },
      {
        "label": "A coach explaining match tactics on a tactical chalkboard",
        "image": "/images/pictures/pq46_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq47",
    "question": "Which image shows a musician playing a grand piano on a spotlighted concert hall stage?",
    "options": [
      {
        "label": "A concert pianist performing at a grand piano under spotlights",
        "image": "/images/pictures/pq47_opt0.svg",
        "correct": true
      },
      {
        "label": "An acoustic guitarist strumming chords on an outdoor bench",
        "image": "/images/pictures/pq47_opt1.svg",
        "correct": false
      },
      {
        "label": "A violinist playing classical music in an orchestra section",
        "image": "/images/pictures/pq47_opt2.svg",
        "correct": false
      },
      {
        "label": "A drummer playing a complete drum kit in a rehearsal studio",
        "image": "/images/pictures/pq47_opt3.svg",
        "correct": false
      },
      {
        "label": "A sound engineer adjusting mixing faders at an audio console",
        "image": "/images/pictures/pq47_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq48",
    "question": "Which image shows a person sipping iced tea while reading an e-reader tablet under a sun umbrella?",
    "options": [
      {
        "label": "A person relaxing on a sun lounger reading an e-book reader",
        "image": "/images/pictures/pq48_opt0.svg",
        "correct": true
      },
      {
        "label": "A commuter reading paper newspaper on an underground train",
        "image": "/images/pictures/pq48_opt1.svg",
        "correct": false
      },
      {
        "label": "A student reading course material on a laptop in a cafe",
        "image": "/images/pictures/pq48_opt2.svg",
        "correct": false
      },
      {
        "label": "A child listening to an audiobook with over-ear headphones",
        "image": "/images/pictures/pq48_opt3.svg",
        "correct": false
      },
      {
        "label": "A librarian sorting returned paperbacks onto a book cart",
        "image": "/images/pictures/pq48_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq49",
    "question": "Which image shows a mountain climber reaching a snowy ridge summit holding trekking poles?",
    "options": [
      {
        "label": "An alpine climber standing on a snowy mountain ridge summit",
        "image": "/images/pictures/pq49_opt0.svg",
        "correct": true
      },
      {
        "label": "A skier carving turns down a steep snow powder slope",
        "image": "/images/pictures/pq49_opt1.svg",
        "correct": false
      },
      {
        "label": "A snowboarder performing an aerial jump in a terrain park",
        "image": "/images/pictures/pq49_opt2.svg",
        "correct": false
      },
      {
        "label": "A cross-country skier gliding along a forest trail",
        "image": "/images/pictures/pq49_opt3.svg",
        "correct": false
      },
      {
        "label": "A rescue snowmobile traversing a snowy mountain valley",
        "image": "/images/pictures/pq49_opt4.svg",
        "correct": false
      }
    ]
  },
  {
    "id": "pq50",
    "question": "Which image shows a barista creating intricate latte art while pouring steamed milk into coffee?",
    "options": [
      {
        "label": "A barista skillfully pouring milk into coffee to form a rosetta pattern",
        "image": "/images/pictures/pq50_opt0.svg",
        "correct": true
      },
      {
        "label": "A customer stirring sugar cubes into a cup of black coffee",
        "image": "/images/pictures/pq50_opt1.svg",
        "correct": false
      },
      {
        "label": "A coffee roaster inspecting roasted brown coffee beans in a cooling tray",
        "image": "/images/pictures/pq50_opt2.svg",
        "correct": false
      },
      {
        "label": "A server bringing a tray of iced cold brew drinks to a booth",
        "image": "/images/pictures/pq50_opt3.svg",
        "correct": false
      },
      {
        "label": "A caf\u00e9 patron typing on a keyboard next to an empty espresso cup",
        "image": "/images/pictures/pq50_opt4.svg",
        "correct": false
      }
    ]
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

export const MODERATION_SCENARIOS: ModerationScenario[] = [
  {
    "id": "mod1",
    "description": "A photograph of a ripe watermelon cut in half on a kitchen counter, showing the red interior.",
    "context": "Posted on a food blog with caption 'Perfect summer snack!'",
    "emoji": "\ud83c\udf49",
    "bgColor": "from-green-800 to-green-950",
    "image": "/images/moderation/mod1.svg",
    "correct": 13,
    "explanation": "Ordinary food photo with no policy violations. Context is a food blog. Classification: Safe / No Violation."
  },
  {
    "id": "mod2",
    "description": "A scenic mountain landscape photograph showing snow-capped peaks and clear blue sky.",
    "context": "Posted to a travel photography community.",
    "emoji": "\ud83c\udfd4\ufe0f",
    "bgColor": "from-blue-800 to-blue-950",
    "image": "/images/moderation/mod2.svg",
    "correct": 13,
    "explanation": "Nature landscape photo with no violations. Classification: Safe / No Violation."
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
    "explanation": "A kitchen knife in an educational culinary tutorial is standard cooking equipment. Context confirms: Safe / No Violation."
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
    "explanation": "Legitimate journalistic reporting on public events without gratuitous graphic violence is Safe / No Violation."
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
    "explanation": "Lawful target shooting in a controlled sporting facility with hearing protection is Safe / No Violation."
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
    "explanation": "Normal family recreational gathering outdoors with no policy infringements is Safe / No Violation."
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
    "explanation": "Displaying wine in culinary dining contexts on compliant pages is Safe / No Violation."
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
    "explanation": "Normal family celebration is completely Safe / No Violation."
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
    "explanation": "Educational historical archival photographs shared in documentary context are Safe / No Violation."
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
    "explanation": "Breastfeeding imagery shared in maternal healthcare and parenting context is recognized as Safe / No Violation."
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
    "explanation": "Regulated professional combat sports with professional referee oversight are Safe / No Violation."
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
    "explanation": "Classical fine art and historic sculptures displayed in cultural contexts are Safe / No Violation."
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
    "explanation": "Standard professional veterinary healthcare procedure is Safe / No Violation."
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
    "explanation": "First responder emergency operations depicted in public interest context are Safe / No Violation."
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
    "explanation": "Traditional culinary cultural food presentation is Safe / No Violation."
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
  }
];
