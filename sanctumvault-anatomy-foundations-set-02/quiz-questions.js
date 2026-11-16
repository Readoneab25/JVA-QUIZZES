const QUESTIONS = [
  {
    "subject": "Anatomical position",
    "q": "A person is upright with the arms at the sides. How must the palms face to match standard anatomical position?",
    "c": [
      "Toward each other",
      "Backward",
      "Toward the thighs",
      "Forward"
    ],
    "a": 3
  },
  {
    "subject": "Anatomical position",
    "q": "In standard anatomical position, the thumbs normally point in which direction?",
    "c": [
      "Toward the midline",
      "Backward",
      "Downward",
      "Away from the body"
    ],
    "a": 3
  },
  {
    "subject": "Anatomical position",
    "q": "Which description of the head and eyes fits anatomical position?",
    "c": [
      "Head bent and gaze downward",
      "Chin raised and gaze upward",
      "Head turned right",
      "Head level and gaze forward"
    ],
    "a": 3
  },
  {
    "subject": "Planes",
    "q": "A section separates front structures from back structures. Which plane was used?",
    "c": [
      "Transverse",
      "Oblique",
      "Coronal",
      "Midsagittal"
    ],
    "a": 2
  },
  {
    "subject": "Planes",
    "q": "A radiologist views a section that separates upper and lower parts of the body. What plane is it?",
    "c": [
      "Parasagittal",
      "Transverse",
      "Midsagittal",
      "Frontal"
    ],
    "a": 1
  },
  {
    "subject": "Planes",
    "q": "Which plane divides the body into equal left and right portions?",
    "c": [
      "Midsagittal",
      "Oblique",
      "Coronal",
      "Transverse"
    ],
    "a": 0
  },
  {
    "subject": "Planes",
    "q": "A vertical slice runs parallel to the midline but does not pass through it. Which is it?",
    "c": [
      "Midsagittal",
      "Coronal",
      "Transverse",
      "Parasagittal"
    ],
    "a": 3
  },
  {
    "subject": "Planes",
    "q": "A slice crosses the trunk diagonally rather than in a standard major plane. Which plane is it?",
    "c": [
      "Horizontal",
      "Oblique",
      "Median",
      "Coronal"
    ],
    "a": 1
  },
  {
    "subject": "Planes",
    "q": "A surgeon needs a section showing structures at the same height around the abdomen. Which orientation is most suitable?",
    "c": [
      "Parasagittal",
      "Median",
      "Frontal",
      "Horizontal"
    ],
    "a": 3
  },
  {
    "subject": "Directions",
    "q": "The sternum lies on which side of the vertebral column?",
    "c": [
      "Anterior",
      "Distal",
      "Caudal",
      "Posterior"
    ],
    "a": 0
  },
  {
    "subject": "Directions",
    "q": "The spine lies in which direction relative to the sternum?",
    "c": [
      "Ventral",
      "Dorsal",
      "Proximal",
      "Cranial"
    ],
    "a": 1
  },
  {
    "subject": "Directions",
    "q": "The head is in which direction relative to the pelvis?",
    "c": [
      "Caudal",
      "Posterior",
      "Cranial",
      "Distal"
    ],
    "a": 2
  },
  {
    "subject": "Directions",
    "q": "The pelvis is in which direction relative to the head?",
    "c": [
      "Cranial",
      "Caudal",
      "Proximal",
      "Anterior"
    ],
    "a": 1
  },
  {
    "subject": "Directions",
    "q": "The elbow is located where relative to the wrist?",
    "c": [
      "Medial",
      "Distal",
      "Proximal",
      "Anterior"
    ],
    "a": 2
  },
  {
    "subject": "Directions",
    "q": "The fingertips are positioned where relative to the shoulder?",
    "c": [
      "Distal",
      "Dorsal",
      "Proximal",
      "Cranial"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Bending the elbow so the angle between upper arm and forearm decreases is called what?",
    "c": [
      "Abduction",
      "Retraction",
      "Flexion",
      "Extension"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Straightening a flexed knee is which movement?",
    "c": [
      "Extension",
      "Circumduction",
      "Flexion",
      "Adduction"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Moving an arm sideways away from the trunk is an example of what?",
    "c": [
      "Adduction",
      "Depression",
      "Abduction",
      "Pronation"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Returning a raised arm toward the side of the body is which action?",
    "c": [
      "Adduction",
      "Abduction",
      "Elevation",
      "Opposition"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Moving the lower jaw forward without primarily opening it is called what?",
    "c": [
      "Rotation",
      "Protrusion",
      "Depression",
      "Retrusion"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "Sliding the lower jaw backward is which movement?",
    "c": [
      "Retrusion",
      "Elevation",
      "Protrusion",
      "Abduction"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Shrugging the shoulders involves which movement of the shoulder girdle?",
    "c": [
      "Pronation",
      "Elevation",
      "Depression",
      "Inversion"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "Lowering previously raised shoulders is which movement?",
    "c": [
      "Elevation",
      "Circumduction",
      "Supination",
      "Depression"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Turning the anterior surface of the thigh toward the midline is which rotation?",
    "c": [
      "Supination",
      "Medial rotation",
      "Lateral rotation",
      "Pronation"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "Turning the anterior surface of the thigh away from the midline is which rotation?",
    "c": [
      "Lateral rotation",
      "Flexion",
      "Medial rotation",
      "Adduction"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "With the elbow bent, rotating the forearm so the palm faces down is called what?",
    "c": [
      "Opposition",
      "Inversion",
      "Pronation",
      "Supination"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "With the elbow bent, rotating the forearm so the palm faces up is called what?",
    "c": [
      "Supination",
      "Eversion",
      "Retrusion",
      "Pronation"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Drawing a large circle with the extended arm at the shoulder is which combined movement?",
    "c": [
      "Pronation",
      "Reposition",
      "Depression",
      "Circumduction"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Touching the pad of the thumb to the pad of the little finger is an example of what?",
    "c": [
      "Reposition",
      "Adduction",
      "Opposition",
      "Pronation"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Moving the thumb back from contact with a finger to its ordinary position is called what?",
    "c": [
      "Supination",
      "Reposition",
      "Opposition",
      "Flexion"
    ],
    "a": 1
  }
];
