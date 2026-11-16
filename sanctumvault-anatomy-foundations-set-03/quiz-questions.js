const QUESTIONS = [
  {
    "subject": "Movement",
    "q": "Moving the sole of the foot toward the body's midline is which movement?",
    "c": [
      "Eversion",
      "Supination",
      "Extension",
      "Inversion"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Turning the sole outward away from the body's midline is which movement?",
    "c": [
      "Inversion",
      "Pronation",
      "Eversion",
      "Adduction"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Moving the wrist toward the thumb side is which deviation?",
    "c": [
      "Ulnar deviation",
      "Radial deviation",
      "Plantar flexion",
      "Inversion"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "Moving the wrist toward the little-finger side is which deviation?",
    "c": [
      "Ulnar deviation",
      "Radial deviation",
      "Eversion",
      "Dorsiflexion"
    ],
    "a": 0
  },
  {
    "subject": "Body divisions",
    "q": "Which combination belongs entirely to the axial part of the body?",
    "c": [
      "Upper and lower limbs",
      "Hands, feet and arms",
      "Shoulder and hip appendages",
      "Head, neck and trunk"
    ],
    "a": 3
  },
  {
    "subject": "Body divisions",
    "q": "The upper limb belongs to which major division of the human body?",
    "c": [
      "Axial",
      "Cranial",
      "Appendicular",
      "Visceral"
    ],
    "a": 2
  },
  {
    "subject": "Body cavities",
    "q": "Which pair of cavities lies in the posterior body cavity?",
    "c": [
      "Thoracic and pelvic",
      "Cranial and vertebral",
      "Oral and nasal",
      "Abdominal and orbital"
    ],
    "a": 1
  },
  {
    "subject": "Body cavities",
    "q": "The spinal cord is primarily contained within which cavity?",
    "c": [
      "Vertebral cavity",
      "Thoracic cavity",
      "Pelvic cavity",
      "Peritoneal cavity"
    ],
    "a": 0
  },
  {
    "subject": "Body cavities",
    "q": "The brain is housed within which major cavity?",
    "c": [
      "Thoracic cavity",
      "Abdominal cavity",
      "Synovial cavity",
      "Cranial cavity"
    ],
    "a": 3
  },
  {
    "subject": "Body cavities",
    "q": "Which group belongs to the anterior body cavity?",
    "c": [
      "Cranial and vertebral cavities",
      "Orbital and middle-ear cavities",
      "Thoracic, abdominal and pelvic cavities",
      "Vertebral and cranial cavities"
    ],
    "a": 2
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
      "Cranial cavity",
      "Pelvic cavity",
      "Vertebral cavity"
    ],
    "a": 0
  },
  {
    "subject": "Serous membranes",
    "q": "A membrane directly covering the outer surface of an organ is which layer?",
    "c": [
      "Parietal",
      "Epidermal",
      "Subcutaneous",
      "Visceral"
    ],
    "a": 3
  },
  {
    "subject": "Serous membranes",
    "q": "A serous membrane attached to the inner body wall is which layer?",
    "c": [
      "Visceral",
      "Synovial",
      "Parietal",
      "Cutaneous"
    ],
    "a": 2
  },
  {
    "subject": "Serous membranes",
    "q": "What is the principal mechanical benefit of the thin liquid film between serous layers?",
    "c": [
      "Production of red blood cells",
      "Reduced friction as organs move",
      "Formation of bones",
      "Transmission of nerve impulses"
    ],
    "a": 1
  },
  {
    "subject": "Serous membranes",
    "q": "The space between the two layers of a serous membrane normally contains what?",
    "c": [
      "A thin film of serous fluid",
      "Air at atmospheric pressure",
      "A large volume of blood",
      "Cartilage"
    ],
    "a": 0
  },
  {
    "subject": "Thorax",
    "q": "Which thoracic region lies centrally between the lungs?",
    "c": [
      "Pleural recess",
      "Pelvic inlet",
      "Vertebral canal",
      "Mediastinum"
    ],
    "a": 3
  },
  {
    "subject": "Thorax",
    "q": "A structure runs down through the centre of the chest behind the windpipe. Which is most likely?",
    "c": [
      "Femur",
      "Kidney",
      "Oesophagus",
      "Urinary bladder"
    ],
    "a": 2
  },
  {
    "subject": "Thorax",
    "q": "Which group consists of structures found in the mediastinum?",
    "c": [
      "Liver, spleen and stomach",
      "Heart, trachea and oesophagus",
      "Kidneys, ureters and bladder",
      "Femur, tibia and fibula"
    ],
    "a": 1
  },
  {
    "subject": "Thorax",
    "q": "Which membrane forms the sac immediately around the heart?",
    "c": [
      "Pericardium",
      "Peritoneum",
      "Pleura",
      "Periosteum"
    ],
    "a": 0
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
      "Hypogastric",
      "Right iliac",
      "Epigastric",
      "Left lumbar"
    ],
    "a": 2
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Which named region surrounds the navel in the nine-region scheme?",
    "c": [
      "Epigastric",
      "Umbilical",
      "Left hypochondriac",
      "Right iliac"
    ],
    "a": 1
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "Which region occupies the central lower area in the nine-region scheme?",
    "c": [
      "Hypogastric",
      "Umbilical",
      "Epigastric",
      "Right lumbar"
    ],
    "a": 0
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
      "Right iliac",
      "Epigastric",
      "Left lumbar",
      "Right hypochondriac"
    ],
    "a": 2
  },
  {
    "subject": "Abdominopelvic anatomy",
    "q": "A clinician divides the abdomen into four areas using vertical and horizontal lines. Which area contains the upper part on the patient's left?",
    "c": [
      "Right upper quadrant",
      "Left upper quadrant",
      "Left lower quadrant",
      "Right lower quadrant"
    ],
    "a": 1
  },
  {
    "subject": "Other cavities",
    "q": "A bony socket protecting the eyeball is which cavity?",
    "c": [
      "Orbital",
      "Middle ear",
      "Synovial",
      "Nasal"
    ],
    "a": 0
  },
  {
    "subject": "Other cavities",
    "q": "The movable cavity surrounding the joint surfaces of the knee is which type?",
    "c": [
      "Orbital",
      "Cranial",
      "Mediastinal",
      "Synovial"
    ],
    "a": 3
  },
  {
    "subject": "Immune anatomy",
    "q": "An organ located behind the sternum and in front of the heart contributes to the maturation of immune cells. Which is it?",
    "c": [
      "Spleen",
      "Kidney",
      "Thymus",
      "Thyroid"
    ],
    "a": 2
  }
];
