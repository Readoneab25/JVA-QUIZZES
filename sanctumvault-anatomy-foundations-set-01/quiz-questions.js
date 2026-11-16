const QUESTIONS = [
  {
    "subject": "Foundations",
    "q": "A lecturer examines the arrangement of structures within a dissected shoulder. Which field best describes the work?",
    "c": [
      "Histology",
      "Gross anatomy",
      "Embryology",
      "Comparative anatomy"
    ],
    "a": 1
  },
  {
    "subject": "Foundations",
    "q": "Which investigation is primarily concerned with tissues seen through a microscope?",
    "c": [
      "Histology",
      "Regional anatomy",
      "Surface anatomy",
      "Comparative anatomy"
    ],
    "a": 0
  },
  {
    "subject": "Foundations",
    "q": "Studying how the heart develops before birth is principally an example of which branch?",
    "c": [
      "Surface anatomy",
      "Systemic anatomy",
      "Radiological anatomy",
      "Developmental anatomy"
    ],
    "a": 3
  },
  {
    "subject": "Foundations",
    "q": "Which approach studies all parts of the digestive system together, even when they occupy different regions?",
    "c": [
      "Regional anatomy",
      "Comparative anatomy",
      "Systemic anatomy",
      "Surface anatomy"
    ],
    "a": 2
  },
  {
    "subject": "Foundations",
    "q": "A study of every major structure within the thorax is organized by which approach?",
    "c": [
      "Systemic anatomy",
      "Regional anatomy",
      "Microscopic anatomy",
      "Comparative anatomy"
    ],
    "a": 1
  },
  {
    "subject": "Foundations",
    "q": "Locating an artery by feeling its pulse through the skin is an example of which approach?",
    "c": [
      "Surface anatomy",
      "Embryology",
      "Comparative anatomy",
      "Histology"
    ],
    "a": 0
  },
  {
    "subject": "Foundations",
    "q": "Comparing a human forelimb with a mammal's forelimb is an example of which field?",
    "c": [
      "Radiological anatomy",
      "Histology",
      "Surface anatomy",
      "Comparative anatomy"
    ],
    "a": 3
  },
  {
    "subject": "Foundations",
    "q": "Identifying internal structures on a medical scan relies most directly on which branch?",
    "c": [
      "Comparative anatomy",
      "Embryology",
      "Radiological anatomy",
      "Surface anatomy"
    ],
    "a": 2
  },
  {
    "subject": "Foundations",
    "q": "Which set is made up entirely of subdivisions of regional anatomy?",
    "c": [
      "Endocrine, nervous, respiratory",
      "Head and neck, thorax, abdomen and pelvis",
      "Histology, embryology, imaging",
      "Chemical, cellular, tissue"
    ],
    "a": 1
  },
  {
    "subject": "Foundations",
    "q": "A student studies the nervous system across the entire body rather than by body region. What framework is being used?",
    "c": [
      "Systemic",
      "Topographical",
      "Comparative",
      "Surface"
    ],
    "a": 0
  },
  {
    "subject": "Organization",
    "q": "Which sequence moves from simpler to more complex structural organization?",
    "c": [
      "Organ → cell → tissue → system",
      "Tissue → molecule → organ → cell",
      "System → tissue → atom → organ",
      "Cell → tissue → organ → organ system"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "Which example belongs at the chemical level rather than the cellular level?",
    "c": [
      "A neuron",
      "A sheet of epithelium",
      "A DNA molecule",
      "A kidney"
    ],
    "a": 2
  },
  {
    "subject": "Organization",
    "q": "What distinguishes a molecule from a single atom?",
    "c": [
      "It is always visible without magnification",
      "It consists of two or more bonded atoms",
      "It must contain living cells",
      "It is necessarily a whole tissue"
    ],
    "a": 1
  },
  {
    "subject": "Organization",
    "q": "Which pair consists of macromolecules?",
    "c": [
      "DNA and proteins",
      "Bone and blood",
      "Cells and tissues",
      "Heart and kidney"
    ],
    "a": 0
  },
  {
    "subject": "Organization",
    "q": "At which level does an individual living unit perform the fundamental functions of life?",
    "c": [
      "Organ",
      "Organ-system",
      "Organismal",
      "Cellular"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "A structure contains several kinds of tissue working together for a shared task. What level is it?",
    "c": [
      "Molecule",
      "Cell",
      "Organ",
      "Organism"
    ],
    "a": 2
  },
  {
    "subject": "Organization",
    "q": "A collection of organs coordinating digestion is classified at which level?",
    "c": [
      "Tissue",
      "Organ system",
      "Cellular",
      "Chemical"
    ],
    "a": 1
  },
  {
    "subject": "Organization",
    "q": "Which represents the highest level of organization in one complete human being?",
    "c": [
      "Organism",
      "Organ",
      "Tissue",
      "Cell"
    ],
    "a": 0
  },
  {
    "subject": "Tissues",
    "q": "A lining that covers a body surface is most likely composed predominantly of which tissue class?",
    "c": [
      "Muscle",
      "Nervous",
      "Cartilage",
      "Epithelial"
    ],
    "a": 3
  },
  {
    "subject": "Tissues",
    "q": "A tissue primarily involved in producing movement through contraction is which type?",
    "c": [
      "Epithelial",
      "Nervous",
      "Muscle",
      "Connective"
    ],
    "a": 2
  },
  {
    "subject": "Tissues",
    "q": "Which tissue type specializes in electrical signalling?",
    "c": [
      "Epithelial",
      "Nervous",
      "Cartilage",
      "Bone"
    ],
    "a": 1
  },
  {
    "subject": "Tissues",
    "q": "Blood is classified as which broad category of tissue?",
    "c": [
      "Connective",
      "Epithelial",
      "Muscle",
      "Nervous"
    ],
    "a": 0
  },
  {
    "subject": "Tissues",
    "q": "Which pair are both connective tissues despite their different physical consistencies?",
    "c": [
      "Skin epithelium and neuron",
      "Cardiac muscle and neuron",
      "Smooth muscle and epidermis",
      "Bone and blood"
    ],
    "a": 3
  },
  {
    "subject": "Tissues",
    "q": "Which tissue provides a flexible supportive matrix in joints?",
    "c": [
      "Cardiac muscle",
      "Nervous tissue",
      "Cartilage",
      "Epithelial lining"
    ],
    "a": 2
  },
  {
    "subject": "Tissues",
    "q": "What muscle type primarily moves the skeleton voluntarily?",
    "c": [
      "Cardiac muscle",
      "Skeletal muscle",
      "Smooth muscle",
      "Epithelial tissue"
    ],
    "a": 1
  },
  {
    "subject": "Tissues",
    "q": "Which muscle type forms the contractile wall of the heart?",
    "c": [
      "Cardiac muscle",
      "Smooth muscle",
      "Skeletal muscle",
      "Dense connective tissue"
    ],
    "a": 0
  },
  {
    "subject": "Tissues",
    "q": "Which muscle type is typically found in the wall of the intestine?",
    "c": [
      "Skeletal muscle",
      "Cardiac muscle",
      "Nervous tissue",
      "Smooth muscle"
    ],
    "a": 3
  },
  {
    "subject": "Systems",
    "q": "Which organ system includes the skin and its associated structures?",
    "c": [
      "Lymphatic",
      "Endocrine",
      "Integumentary",
      "Urinary"
    ],
    "a": 2
  },
  {
    "subject": "Systems",
    "q": "Which pair consists of two distinct organ systems rather than individual tissues?",
    "c": [
      "Blood and cartilage",
      "Urinary and reproductive",
      "Epithelium and muscle",
      "Atom and molecule"
    ],
    "a": 1
  },
  {
    "subject": "Systems",
    "q": "A coordinating system uses hormones to influence other organs. Which system is it?",
    "c": [
      "Endocrine",
      "Skeletal",
      "Digestive",
      "Integumentary"
    ],
    "a": 0
  }
];
