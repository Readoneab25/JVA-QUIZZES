const QUESTIONS = [
  {
    "subject": "Foundations",
    "q": "A lecturer examines the arrangement of structures within a dissected shoulder. Which field best describes the work?",
    "c": [
      "Histology",
      "Embryology",
      "Gross anatomy",
      "Comparative anatomy"
    ],
    "a": 2
  },
  {
    "subject": "Foundations",
    "q": "Which investigation is primarily concerned with tissues seen through a microscope?",
    "c": [
      "Surface anatomy",
      "Comparative anatomy",
      "Histology",
      "Regional anatomy"
    ],
    "a": 2
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
      "Systemic anatomy",
      "Surface anatomy",
      "Comparative anatomy",
      "Regional anatomy"
    ],
    "a": 0
  },
  {
    "subject": "Foundations",
    "q": "A study of every major structure within the thorax is organized by which approach?",
    "c": [
      "Regional anatomy",
      "Comparative anatomy",
      "Microscopic anatomy",
      "Systemic anatomy"
    ],
    "a": 0
  },
  {
    "subject": "Foundations",
    "q": "Locating an artery by feeling its pulse through the skin is an example of which approach?",
    "c": [
      "Comparative anatomy",
      "Histology",
      "Embryology",
      "Surface anatomy"
    ],
    "a": 3
  },
  {
    "subject": "Foundations",
    "q": "Comparing a human forelimb with a mammal's forelimb is an example of which field?",
    "c": [
      "Surface anatomy",
      "Comparative anatomy",
      "Histology",
      "Radiological anatomy"
    ],
    "a": 1
  },
  {
    "subject": "Foundations",
    "q": "Identifying internal structures on a medical scan relies most directly on which branch?",
    "c": [
      "Radiological anatomy",
      "Surface anatomy",
      "Comparative anatomy",
      "Embryology"
    ],
    "a": 0
  },
  {
    "subject": "Foundations",
    "q": "Which set is made up entirely of subdivisions of regional anatomy?",
    "c": [
      "Histology, embryology, imaging",
      "Chemical, cellular, tissue",
      "Head and neck, thorax, abdomen and pelvis",
      "Endocrine, nervous, respiratory"
    ],
    "a": 2
  },
  {
    "subject": "Foundations",
    "q": "A student studies the nervous system across the entire body rather than by body region. What framework is being used?",
    "c": [
      "Systemic",
      "Surface",
      "Comparative",
      "Topographical"
    ],
    "a": 0
  },
  {
    "subject": "Organization",
    "q": "Which sequence moves from simpler to more complex structural organization?",
    "c": [
      "System → tissue → atom → organ",
      "Cell → tissue → organ → organ system",
      "Organ → cell → tissue → system",
      "Tissue → molecule → organ → cell"
    ],
    "a": 1
  },
  {
    "subject": "Organization",
    "q": "Which example belongs at the chemical level rather than the cellular level?",
    "c": [
      "A kidney",
      "A neuron",
      "A sheet of epithelium",
      "A DNA molecule"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "What distinguishes a molecule from a single atom?",
    "c": [
      "It is always visible without magnification",
      "It is necessarily a whole tissue",
      "It must contain living cells",
      "It consists of two or more bonded atoms"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "Which pair consists of macromolecules?",
    "c": [
      "Bone and blood",
      "Heart and kidney",
      "Cells and tissues",
      "DNA and proteins"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "At which level does an individual living unit perform the fundamental functions of life?",
    "c": [
      "Organ-system",
      "Cellular",
      "Organismal",
      "Organ"
    ],
    "a": 1
  },
  {
    "subject": "Organization",
    "q": "A structure contains several kinds of tissue working together for a shared task. What level is it?",
    "c": [
      "Organ",
      "Organism",
      "Molecule",
      "Cell"
    ],
    "a": 0
  },
  {
    "subject": "Organization",
    "q": "A collection of organs coordinating digestion is classified at which level?",
    "c": [
      "Tissue",
      "Chemical",
      "Cellular",
      "Organ system"
    ],
    "a": 3
  },
  {
    "subject": "Organization",
    "q": "Which represents the highest level of organization in one complete human being?",
    "c": [
      "Organ",
      "Tissue",
      "Cell",
      "Organism"
    ],
    "a": 3
  },
  {
    "subject": "Tissues",
    "q": "A lining that covers a body surface is most likely composed predominantly of which tissue class?",
    "c": [
      "Cartilage",
      "Epithelial",
      "Nervous",
      "Muscle"
    ],
    "a": 1
  },
  {
    "subject": "Tissues",
    "q": "A tissue primarily involved in producing movement through contraction is which type?",
    "c": [
      "Nervous",
      "Muscle",
      "Connective",
      "Epithelial"
    ],
    "a": 1
  },
  {
    "subject": "Tissues",
    "q": "Which tissue type specializes in electrical signalling?",
    "c": [
      "Cartilage",
      "Bone",
      "Nervous",
      "Epithelial"
    ],
    "a": 2
  },
  {
    "subject": "Tissues",
    "q": "Blood is classified as which broad category of tissue?",
    "c": [
      "Muscle",
      "Nervous",
      "Connective",
      "Epithelial"
    ],
    "a": 2
  },
  {
    "subject": "Tissues",
    "q": "Which pair are both connective tissues despite their different physical consistencies?",
    "c": [
      "Skin epithelium and neuron",
      "Smooth muscle and epidermis",
      "Bone and blood",
      "Cardiac muscle and neuron"
    ],
    "a": 2
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
      "Skeletal muscle",
      "Epithelial tissue",
      "Smooth muscle",
      "Cardiac muscle"
    ],
    "a": 0
  },
  {
    "subject": "Tissues",
    "q": "Which muscle type forms the contractile wall of the heart?",
    "c": [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Dense connective tissue"
    ],
    "a": 2
  },
  {
    "subject": "Tissues",
    "q": "Which muscle type is typically found in the wall of the intestine?",
    "c": [
      "Skeletal muscle",
      "Smooth muscle",
      "Nervous tissue",
      "Cardiac muscle"
    ],
    "a": 1
  },
  {
    "subject": "Systems",
    "q": "Which organ system includes the skin and its associated structures?",
    "c": [
      "Urinary",
      "Lymphatic",
      "Endocrine",
      "Integumentary"
    ],
    "a": 3
  },
  {
    "subject": "Systems",
    "q": "Which pair consists of two distinct organ systems rather than individual tissues?",
    "c": [
      "Urinary and reproductive",
      "Atom and molecule",
      "Blood and cartilage",
      "Epithelium and muscle"
    ],
    "a": 0
  },
  {
    "subject": "Systems",
    "q": "A coordinating system uses hormones to influence other organs. Which system is it?",
    "c": [
      "Digestive",
      "Integumentary",
      "Skeletal",
      "Endocrine"
    ],
    "a": 3
  }
];
