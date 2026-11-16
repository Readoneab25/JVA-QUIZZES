const QUESTIONS = [
  {
    "subject": "Anatomical position",
    "q": "A person is upright with the arms at the sides. How must the palms face to match standard anatomical position?",
    "c": [
      "Backward",
      "Toward the thighs",
      "Forward",
      "Toward each other"
    ],
    "a": 2
  },
  {
    "subject": "Anatomical position",
    "q": "In standard anatomical position, the thumbs normally point in which direction?",
    "c": [
      "Toward the midline",
      "Away from the body",
      "Backward",
      "Downward"
    ],
    "a": 1
  },
  {
    "subject": "Anatomical position",
    "q": "Which description of the head and eyes fits anatomical position?",
    "c": [
      "Head level and gaze forward",
      "Head bent and gaze downward",
      "Head turned right",
      "Chin raised and gaze upward"
    ],
    "a": 0
  },
  {
    "subject": "Planes",
    "q": "A section separates front structures from back structures. Which plane was used?",
    "c": [
      "Transverse",
      "Midsagittal",
      "Oblique",
      "Coronal"
    ],
    "a": 3
  },
  {
    "subject": "Planes",
    "q": "A radiologist views a section that separates upper and lower parts of the body. What plane is it?",
    "c": [
      "Frontal",
      "Parasagittal",
      "Transverse",
      "Midsagittal"
    ],
    "a": 2
  },
  {
    "subject": "Planes",
    "q": "Which plane divides the body into equal left and right portions?",
    "c": [
      "Coronal",
      "Midsagittal",
      "Transverse",
      "Oblique"
    ],
    "a": 1
  },
  {
    "subject": "Planes",
    "q": "A vertical slice runs parallel to the midline but does not pass through it. Which is it?",
    "c": [
      "Parasagittal",
      "Midsagittal",
      "Transverse",
      "Coronal"
    ],
    "a": 0
  },
  {
    "subject": "Planes",
    "q": "A slice crosses the trunk diagonally rather than in a standard major plane. Which plane is it?",
    "c": [
      "Horizontal",
      "Coronal",
      "Median",
      "Oblique"
    ],
    "a": 3
  },
  {
    "subject": "Planes",
    "q": "A surgeon needs a section showing structures at the same height around the abdomen. Which orientation is most suitable?",
    "c": [
      "Median",
      "Frontal",
      "Horizontal",
      "Parasagittal"
    ],
    "a": 2
  },
  {
    "subject": "Directions",
    "q": "The sternum lies on which side of the vertebral column?",
    "c": [
      "Posterior",
      "Anterior",
      "Caudal",
      "Distal"
    ],
    "a": 1
  },
  {
    "subject": "Directions",
    "q": "The spine lies in which direction relative to the sternum?",
    "c": [
      "Dorsal",
      "Ventral",
      "Cranial",
      "Proximal"
    ],
    "a": 0
  },
  {
    "subject": "Directions",
    "q": "The head is in which direction relative to the pelvis?",
    "c": [
      "Caudal",
      "Distal",
      "Posterior",
      "Cranial"
    ],
    "a": 3
  },
  {
    "subject": "Directions",
    "q": "The pelvis is in which direction relative to the head?",
    "c": [
      "Cranial",
      "Anterior",
      "Caudal",
      "Proximal"
    ],
    "a": 2
  },
  {
    "subject": "Directions",
    "q": "The elbow is located where relative to the wrist?",
    "c": [
      "Distal",
      "Proximal",
      "Anterior",
      "Medial"
    ],
    "a": 1
  },
  {
    "subject": "Directions",
    "q": "The fingertips are positioned where relative to the shoulder?",
    "c": [
      "Distal",
      "Proximal",
      "Dorsal",
      "Cranial"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Bending the elbow so the angle between upper arm and forearm decreases is called what?",
    "c": [
      "Extension",
      "Abduction",
      "Retraction",
      "Flexion"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Straightening a flexed knee is which movement?",
    "c": [
      "Flexion",
      "Adduction",
      "Extension",
      "Circumduction"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Moving an arm sideways away from the trunk is an example of what?",
    "c": [
      "Adduction",
      "Abduction",
      "Depression",
      "Pronation"
    ],
    "a": 1
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
      "Retrusion",
      "Depression",
      "Rotation",
      "Protrusion"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Sliding the lower jaw backward is which movement?",
    "c": [
      "Protrusion",
      "Elevation",
      "Retrusion",
      "Abduction"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Shrugging the shoulders involves which movement of the shoulder girdle?",
    "c": [
      "Depression",
      "Elevation",
      "Pronation",
      "Inversion"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "Lowering previously raised shoulders is which movement?",
    "c": [
      "Depression",
      "Elevation",
      "Supination",
      "Circumduction"
    ],
    "a": 0
  },
  {
    "subject": "Movement",
    "q": "Turning the anterior surface of the thigh toward the midline is which rotation?",
    "c": [
      "Lateral rotation",
      "Supination",
      "Pronation",
      "Medial rotation"
    ],
    "a": 3
  },
  {
    "subject": "Movement",
    "q": "Turning the anterior surface of the thigh away from the midline is which rotation?",
    "c": [
      "Medial rotation",
      "Flexion",
      "Lateral rotation",
      "Adduction"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "With the elbow bent, rotating the forearm so the palm faces down is called what?",
    "c": [
      "Supination",
      "Pronation",
      "Opposition",
      "Inversion"
    ],
    "a": 1
  },
  {
    "subject": "Movement",
    "q": "With the elbow bent, rotating the forearm so the palm faces up is called what?",
    "c": [
      "Supination",
      "Pronation",
      "Eversion",
      "Retrusion"
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
      "Pronation",
      "Opposition",
      "Adduction"
    ],
    "a": 2
  },
  {
    "subject": "Movement",
    "q": "Moving the thumb back from contact with a finger to its ordinary position is called what?",
    "c": [
      "Opposition",
      "Reposition",
      "Supination",
      "Flexion"
    ],
    "a": 1
  }
];
