const QUESTIONS = [
  {
    "subject": "Movement",
    "q": "Moving the sole of the foot toward the body's midline is which movement?",
    "c": [
      "Eversion",
      "Extension",
      "Inversion",
      "Supination"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Turning the sole outward away from the body's midline is which movement?",
    "c": [
      "Inversion",
      "Adduction",
      "Eversion",
      "Pronation"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Moving the wrist toward the thumb side is which deviation?",
    "c": [
      "Radial deviation",
      "Plantar flexion",
      "Inversion",
      "Ulnar deviation"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Moving the wrist toward the little-finger side is which deviation?",
    "c": [
      "Radial deviation",
      "Ulnar deviation",
      "Dorsiflexion",
      "Eversion"
    ],
    "a": 1
  },
  {
    "subject": "Body divisions",
    "q": "Which combination belongs entirely to the axial part of the body?",
    "c": [
      "Shoulder and hip appendages",
      "Hands, feet and arms",
      "Upper and lower limbs",
      "Head, neck and trunk"
    ],
    "a": 3
  },
  {
    "subject": "Body divisions",
    "q": "The upper limb belongs to which major division of the human body?",
    "c": [
      "Appendicular",
      "Visceral",
      "Axial",
      "Cranial"
    ],
    "a": 0
  },
  {
    "subject": "Body cavities",
    "q": "Which pair of cavities lies in the posterior body cavity?",
    "c": [
      "Oral and nasal",
      "Cranial and vertebral",
      "Thoracic and pelvic",
      "Abdominal and orbital"
    ],
    "a": 1
  },
  {
    "subject": "Body cavities",
    "q": "The spinal cord is primarily contained within which cavity?",
    "c": [
      "Pelvic cavity",
      "Peritoneal cavity",
      "Vertebral cavity",
      "Thoracic cavity"
    ],
    "a": 2
  },
  {
    "subject": "Body cavities",
    "q": "The brain is housed within which major cavity?",
    "c": [
      "Synovial cavity",
      "Cranial cavity",
      "Thoracic cavity",
      "Abdominal cavity"
    ],
    "a": 1
  },
  {
    "subject": "Body cavities",
    "q": "Which group belongs to the anterior body cavity?",
    "c": [
      "Cranial and vertebral cavities",
      "Thoracic, abdominal and pelvic cavities",
      "Vertebral and cranial cavities",
      "Orbital and middle-ear cavities"
    ],
    "a": 1
  },
  {
    "subject": "Body cavities",
    "q": "Why are the abdominal and pelvic cavities commonly considered together?",
    "c": [
      "Both lie inside the skull",
      "There is no complete structural partition between them",
      "They contain only one organ",
      "They are divided by a rigid bony wall"
    ],
    "a": 1
  },
  {
    "subject": "Body cavities",
    "q": "The lungs are located primarily in which major body cavity?",
    "c": [
      "Thoracic cavity",
      "Vertebral cavity",
      "Pelvic cavity",
      "Cranial cavity"
    ],
    "a": 0
  },
  {
    "subject": "Serous membranes",
    "q": "A membrane directly covering the outer surface of an organ is which layer?",
    "c": [
      "Epidermal",
      "Parietal",
      "Visceral",
      "Subcutaneous"
    ],
    "a": 2
  },
  {
    "subject": "Serous membranes",
    "q": "A serous membrane attached to the inner body wall is which layer?",
    "c": [
      "Synovial",
      "Cutaneous",
      "Visceral",
      "Parietal"
    ],
    "a": 3
  },
  {
    "subject": "Serous membranes",
    "q": "What is the principal mechanical benefit of the thin liquid film between serous layers?",
    "c": [
      "Transmission of nerve impulses",
      "Production of red blood cells",
      "Reduced friction as organs move",
      "Formation of bones"
    ],
    "a": 2
  },
  {
    "subject": "Serous membranes",
    "q": "The space between the two layers of a serous membrane normally contains what?",
    "c": [
      "Air at atmospheric pressure",
      "A thin film of serous fluid",
      "Cartilage",
      "A large volume of blood"
    ],
    "a": 1
  },
  {
    "subject": "Thorax",
    "q": "Which thoracic region lies centrally between the lungs?",
    "c": [
      "Pelvic inlet",
      "Vertebral canal",
      "Mediastinum",
      "Pleural recess"
    ],
    "a": 2
  },
  {
    "subject": "Thorax",
    "q": "A structure runs down through the centre of the chest behind the windpipe. Which is most likely?",
    "c": [
      "Kidney",
      "Urinary bladder",
      "Oesophagus",
      "Femur"
    ],
    "a": 2
  },
  {
    "subject": "Thorax",
    "q": "Which group consists of structures found in the mediastinum?",
    "c": [
      "Heart, trachea and oesophagus",
      "Femur, tibia and fibula",
      "Kidneys, ureters and bladder",
      "Liver, spleen and stomach"
    ],
    "a": 0
  },
  {
    "subject": "Thorax",
    "q": "Which membrane forms the sac immediately around the heart?",
    "c": [
      "Pleura",
      "Periosteum",
      "Peritoneum",
      "Pericardium"
    ],
    "a": 3
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Which membrane lines the abdominal cavity and covers many of its organs?",
    "c": [
      "Pericardium",
      "Dura mater",
      "Periosteum",
      "Peritoneum"
    ],
    "a": 3
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Pain just above the navel in the central upper portion of the nine-region scheme is located in what region?",
    "c": [
      "Right iliac",
      "Epigastric",
      "Left lumbar",
      "Hypogastric"
    ],
    "a": 1
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Which named region surrounds the navel in the nine-region scheme?",
    "c": [
      "Epigastric",
      "Left hypochondriac",
      "Right iliac",
      "Umbilical"
    ],
    "a": 3
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Which region occupies the central lower area in the nine-region scheme?",
    "c": [
      "Epigastric",
      "Umbilical",
      "Hypogastric",
      "Right lumbar"
    ],
    "a": 2
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "A point lies in the upper-right area beneath the costal margin in the nine-region scheme. Which is it?",
    "c": [
      "Right iliac",
      "Left lumbar",
      "Hypogastric",
      "Right hypochondriac"
    ],
    "a": 3
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "A point lies on the left side of the central row in the nine-region scheme. Which region is it?",
    "c": [
      "Left lumbar",
      "Right hypochondriac",
      "Epigastric",
      "Right iliac"
    ],
    "a": 0
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "A clinician divides the abdomen into four areas using vertical and horizontal lines. Which area contains the upper part on the patient's left?",
    "c": [
      "Left upper quadrant",
      "Right upper quadrant",
      "Right lower quadrant",
      "Left lower quadrant"
    ],
    "a": 0
  },
  {
    "subject": "Other cavities",
    "q": "A bony socket protecting the eyeball is which cavity?",
    "c": [
      "Synovial",
      "Nasal",
      "Middle ear",
      "Orbital"
    ],
    "a": 3
  },
  {
    "subject": "Other cavities",
    "q": "The movable cavity surrounding the joint surfaces of the knee is which type?",
    "c": [
      "Orbital",
      "Mediastinal",
      "Cranial",
      "Synovial"
    ],
    "a": 3
  },
  {
    "subject": "Immune anatomy",
    "q": "An organ located behind the sternum and in front of the heart contributes to the maturation of immune cells. Which is it?",
    "c": [
      "Kidney",
      "Thyroid",
      "Thymus",
      "Spleen"
    ],
    "a": 2
  }
];
