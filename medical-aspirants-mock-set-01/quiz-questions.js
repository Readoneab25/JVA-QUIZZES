const QUESTIONS = [
  {
    subject: "English",
    q: "She hardly comes late to school, ______?",
    c: [
      "does she",
      "doesn't she",
      "did she",
      "isn't she"
    ],
    a: 0
  },
  {
    subject: "English",
    q: "Let's go to the library, ______?",
    c: [
      "will we",
      "shall we",
      "won't we",
      "aren't we"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "Nobody was absent from the meeting, ______?",
    c: [
      "were they",
      "weren't they",
      "was he",
      "wasn't he"
    ],
    a: 0
  },
  {
    subject: "English",
    q: "You used to live in Lagos, ______?",
    c: [
      "usedn't you",
      "didn't you",
      "don't you",
      "weren't you"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "Don't forget to submit your assignment, ______?",
    c: [
      "do you",
      "will you",
      "won't you",
      "don't you"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "I am the person you were looking for, ______?",
    c: [
      "am I",
      "aren't I",
      "wasn't I",
      "don't I"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "The students have finished their examination, ______?",
    c: [
      "haven't they",
      "didn't they",
      "don't they",
      "aren't they"
    ],
    a: 0
  },
  {
    subject: "English",
    q: "Few students understood the difficult topic, ______?",
    c: [
      "didn't they",
      "did they",
      "weren't they",
      "were they"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "Your brother rarely watches television, ______?",
    c: [
      "doesn't he",
      "does he",
      "isn't he",
      "did he"
    ],
    a: 1
  },
  {
    subject: "English",
    q: "Everyone enjoyed the programme, ______?",
    c: [
      "didn't they",
      "did they",
      "wasn't he",
      "weren't they"
    ],
    a: 0
  },
  {
    subject: "Physics",
    q: "Which of the following best describes a wave?",
    c: [
      "A permanent transfer of particles from one point to another",
      "A disturbance that transfers energy without permanent displacement of the medium",
      "A motion that only occurs in vacuum",
      "A vibration that does not transfer energy"
    ],
    a: 1
  },
  {
    subject: "Physics",
    q: "Wave motion is said to be a combination of which two types of motion?",
    c: [
      "Rotational and Vibratory",
      "Translational and Oscillatory",
      "Linear and Circular",
      "Periodic and Random"
    ],
    a: 1
  },
  {
    subject: "Physics",
    q: "Which of the following is NOT a mechanical wave?",
    c: [
      "Sound wave",
      "Water wave",
      "Light wave",
      "Wave on a string"
    ],
    a: 2
  },
  {
    subject: "Physics",
    q: "The acronym MRIVUXG is used to remember the order of:",
    c: [
      "Mechanical waves",
      "Types of progressive waves",
      "Electromagnetic waves",
      "Stationary wave components"
    ],
    a: 2
  },
  {
    subject: "Physics",
    q: "In a transverse wave, the direction of wave propagation is:",
    c: [
      "Parallel to the vibration of the medium",
      "Perpendicular to the vibration of the medium",
      "Opposite to the vibration of the medium",
      "At 45° to the vibration of the medium"
    ],
    a: 1
  },
  {
    subject: "Physics",
    q: "A stationary wave is formed when:",
    c: [
      "Two progressive waves of different amplitudes travel in opposite directions",
      "Two progressive waves of equal amplitude and frequency superpose",
      "A single progressive wave travels in a vacuum",
      "A longitudinal wave reflects at a boundary"
    ],
    a: 1
  },
  {
    subject: "Physics",
    q: "A wave completes 200 cycles in 5 seconds. What is its frequency?",
    c: [
      "20 Hz",
      "25 Hz",
      "40 Hz",
      "50 Hz"
    ],
    a: 2
  },
  {
    subject: "Physics",
    q: "The distance between two successive crests of a wave is called:",
    c: [
      "Amplitude",
      "Period",
      "Wavelength",
      "Frequency"
    ],
    a: 2
  },
  {
    subject: "Physics",
    q: "If the period of a wave is 0.02 s, what is its frequency?",
    c: [
      "20 Hz",
      "50 Hz",
      "100 Hz",
      "200 Hz"
    ],
    a: 1
  },
  {
    subject: "Physics",
    q: "Which of the following pairs is correctly matched?",
    c: [
      "Amplitude – seconds",
      "Wavelength – hertz",
      "Frequency – metres",
      "Period – seconds"
    ],
    a: 3
  },
  {
    subject: "Chemistry",
    q: "An acid can best be defined as a substance that",
    c: [
      "accepts electrons from another substance",
      "donates a proton to another substance",
      "accepts a proton from another substance",
      "donates electrons to another substance"
    ],
    a: 1
  },
  {
    subject: "Chemistry",
    q: "Acids are referred to as proton donors because they are capable of donating",
    c: [
      "H⁻",
      "OH⁻",
      "H⁺",
      "e⁻"
    ],
    a: 2
  },
  {
    subject: "Chemistry",
    q: "Which of the following is a characteristic property of an acid?",
    c: [
      "It turns red litmus blue",
      "It turns blue litmus red",
      "It turns blue litmus green",
      "It has a bitter taste"
    ],
    a: 1
  },
  {
    subject: "Chemistry",
    q: "The sour taste of lemon is mainly due to the presence of",
    c: [
      "Lactic acid",
      "Citric acid",
      "Tartaric acid",
      "Amino acid"
    ],
    a: 1
  },
  {
    subject: "Chemistry",
    q: "The two major classes of acids taught are",
    c: [
      "Strong and weak acids",
      "Concentrated and dilute acids",
      "Organic and inorganic acids",
      "Natural and artificial acids"
    ],
    a: 0
  },
  {
    subject: "Chemistry",
    q: "Which of the following is an organic acid?",
    c: [
      "Hydrochloric acid",
      "Sulphuric acid",
      "Nitric acid",
      "Citric acid"
    ],
    a: 3
  },
  {
    subject: "Chemistry",
    q: "Organic acids commonly occur naturally in",
    c: [
      "Metals only",
      "Plants and animals",
      "Rocks only",
      "Inorganic minerals only"
    ],
    a: 1
  },
  {
    subject: "Chemistry",
    q: "Compared with inorganic acids, organic acids are generally",
    c: [
      "stronger and more corrosive",
      "weaker and less corrosive",
      "stronger and less corrosive",
      "equally corrosive"
    ],
    a: 1
  },
  {
    subject: "Chemistry",
    q: "Which of the following correctly matches an organic acid with its source?",
    c: [
      "Lactic acid — milk",
      "Citric acid — vinegar",
      "Tartaric acid — oranges",
      "Ascorbic acid — milk"
    ],
    a: 0
  },
  {
    subject: "Chemistry",
    q: "The basicity of an acid refers to the",
    c: [
      "number of hydroxyl ions present in the acid",
      "number of replaceable hydrogen ions present in one molecule of the acid",
      "number of oxygen atoms present in the acid",
      "number of electrons donated by the acid"
    ],
    a: 1
  },
  {
    subject: "Biology",
    q: "The part of the mammalian brain responsible for maintaining balance is the",
    c: [
      "medulla oblongata",
      "olfactory lobe",
      "cerebellum",
      "cerebrum",
      "frontal lobe"
    ],
    a: 2
  },
  {
    subject: "Biology",
    q: "If an animal is very active and has a good muscular control, it is likely to have well developed.",
    c: [
      "olfactory lobes",
      "cerebral hemispheres",
      "optic lobes",
      "cerebellum",
      "spinal cord"
    ],
    a: 3
  },
  {
    subject: "Biology",
    q: "The part of the brain that controls heart beat and breathing is the",
    c: [
      "olfactory lobe",
      "cerebellum",
      "cerebral hemisphere",
      "medullar oblongata"
    ],
    a: 3
  },
  {
    subject: "Biology",
    q: "The part of the brain that regulates most biological cycles is termed as",
    c: [
      "olfactory lobe",
      "optic lobe",
      "medulla oblongata",
      "pineal body"
    ],
    a: 2
  },
  {
    subject: "Biology",
    q: "Which of the following parts of the mammalian brain is involved in taking the decision to run rather than walk?",
    c: [
      "Cerebellum",
      "Medulla oblongata",
      "Cranial nerves",
      "Mid brain",
      "Cerebrum"
    ],
    a: 4
  },
  {
    subject: "Biology",
    q: "The nerves that arise from the brain are known as",
    c: [
      "Spinal nerves",
      "sacral nerves",
      "cranial neurons",
      "optic nerves"
    ],
    a: 2
  },
  {
    subject: "Biology",
    q: "The link between the nervous Coordination and hormones is",
    c: [
      "Olfactory Lobe",
      "Thalamus",
      "Hypothalamus",
      "Cerebrum"
    ],
    a: 2
  },
  {
    subject: "Biology",
    q: "The part of the Brain responsible for taste and touch sensation is",
    c: [
      "Olfactory lobe",
      "Optic nerves",
      "Thalamus",
      "Hypothalamus"
    ],
    a: 2
  },
  {
    subject: "Biology",
    q: "All of the following are found in the Hind Brain except",
    c: [
      "Medulla oblongata",
      "Pons varolli",
      "Cerebellum",
      "Cerebrum"
    ],
    a: 3
  },
  {
    subject: "Biology",
    q: "The part of the brain responsible for smell sensation is",
    c: [
      "Olfactory lobe",
      "Hypothalamus",
      "Pons varolli",
      "Cerebrum"
    ],
    a: 0
  }
];
