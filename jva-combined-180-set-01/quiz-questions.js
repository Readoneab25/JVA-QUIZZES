const QUESTIONS = [
  {
    "subject": "English",
    "q": "The town looked deserted but we moved in with some trepidation.",
    "c": [
      "confidence",
      "surprise",
      "hesitation",
      "fear"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "They show no finesse in dealing with strangers.",
    "c": [
      "boldness",
      "kindness",
      "tact",
      "love"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The manager will be with you presently. What does presently mean?",
    "c": [
      "immediately",
      "soon",
      "never",
      "yesterday"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The governor's wife, in characteristically simple attire, entered unnoticed.",
    "c": [
      "eccentrically",
      "typically",
      "randomly",
      "intrinsically"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "Much to her chagrin, the bridegroom did not turn up.",
    "c": [
      "wonder",
      "surprise",
      "disappointment",
      "excitement"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "He might be compelled to make a momentous decision.",
    "c": [
      "voluntary",
      "spontaneous",
      "important",
      "involuntary"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "Classified advertisements in newspapers are advertisements that are...",
    "c": [
      "secret",
      "arranged by category",
      "expensive",
      "unpublished"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The doctor insisted on giving prophylactic drugs.",
    "c": [
      "curative",
      "preventive",
      "routine",
      "special"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The delegates mooted a proposal to transfer funding.",
    "c": [
      "said",
      "agreed",
      "proposed",
      "legislated"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "Our local paper is noted for its incisive editorials.",
    "c": [
      "sarcastic",
      "penetrating",
      "decisive",
      "destructive"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "Many Nigerians have inured themselves to hardship.",
    "c": [
      "subjected",
      "submitted",
      "accustomed",
      "endeared"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "There are many venal judges in our law courts.",
    "c": [
      "qualified",
      "professional",
      "corrupt",
      "honest"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "He will expose himself by his nefarious activities.",
    "c": [
      "kind",
      "reputable",
      "despicable",
      "nocturnal"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The minister's anger was aggravated by the news.",
    "c": [
      "abated",
      "diminished",
      "intensified",
      "impeded"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The lawyer gave evasive answers.",
    "c": [
      "unintelligent",
      "effective",
      "reliable",
      "equivocal"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The island becomes more enchanting at night.",
    "c": [
      "attractive",
      "unpleasant",
      "accommodating",
      "ordinary"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The book is presented within an eclectic framework.",
    "c": [
      "simple",
      "drawn from varied sources",
      "restricted",
      "clumsy"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "Ohiokhen had a brainwave about the problem.",
    "c": [
      "imagination",
      "desire",
      "headache",
      "idea"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The lady had a good gait.",
    "c": [
      "stature",
      "figure",
      "elegance",
      "carriage"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The young man was promptly repudiated.",
    "c": [
      "disowned",
      "arrested",
      "warned",
      "killed"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The accident victims were bleeding profusely.",
    "c": [
      "slowly",
      "excessively",
      "quietly",
      "clearly"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The prosecutor was accused of obstructing justice.",
    "c": [
      "hindering",
      "supporting",
      "improving",
      "encouraging"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The man preaches egalitarianism.",
    "c": [
      "salvation",
      "dedication",
      "kindness",
      "equality"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The salary structure was approved as an incentive.",
    "c": [
      "reward",
      "encouragement",
      "package",
      "advance"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "Amina married a doting husband.",
    "c": [
      "loving",
      "fun-loving",
      "uncaring",
      "nagging"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The professor carried out a feasibility study.",
    "c": [
      "thoroughness",
      "perfection",
      "completion",
      "practicability"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The officer requested my credentials.",
    "c": [
      "papers",
      "qualifications",
      "clothing",
      "identities"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The atmosphere on campus is restive.",
    "c": [
      "quiet",
      "peaceful",
      "restless",
      "serene"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "Mr Dzokoto plays the piano with dexterity.",
    "c": [
      "wisdom",
      "power",
      "force",
      "skill"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "They tried to circumvent the restriction.",
    "c": [
      "bypass",
      "confront",
      "oppose",
      "challenge"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The boxer's punch proved fatal.",
    "c": [
      "effective",
      "belated",
      "hard",
      "deadly"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The boy needed several more pints of blood. Several means...",
    "c": [
      "none",
      "exactly one",
      "a number of",
      "all"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "David's condition is serious.",
    "c": [
      "grave",
      "funny",
      "trivial",
      "ordinary"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The essay topic is nebulous.",
    "c": [
      "clear",
      "incorrect",
      "vague",
      "distinct"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "My mother is an impassioned woman.",
    "c": [
      "impartial",
      "emotional",
      "impassive",
      "indifferent"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The gathering was in euphoria.",
    "c": [
      "pleasure",
      "confusion",
      "sadness",
      "excitement"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "Their actions alienated them from those sympathetic to their cause.",
    "c": [
      "endeared; hostile",
      "separated; opposed",
      "estranged; well-disposed",
      "confronted; ill-disposed"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The principal told the teacher to stop browbeating the children.",
    "c": [
      "pampering",
      "praising",
      "bullying",
      "deceiving"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The coalescence of the groups created problems.",
    "c": [
      "fighting",
      "proscription",
      "union",
      "disbandment"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The player kept on gamely.",
    "c": [
      "skilfully",
      "stubbornly",
      "amateurishly",
      "courageously"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The rebels met with a serious reverse.",
    "c": [
      "army",
      "victory",
      "defeat",
      "enemy"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "Why serve in that moribund administration?",
    "c": [
      "purposeless",
      "crumbling",
      "prodigal",
      "oppressive"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The girl wore sumptuous clothes.",
    "c": [
      "expensive",
      "loose-fitting",
      "faded-looking",
      "cheap"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "The principal went to buy some ... for the physics laboratory.",
    "c": [
      "equipment",
      "equipments",
      "pieces of equipments",
      "items of equipments"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "People struggled to catch a ... of him.",
    "c": [
      "look",
      "view",
      "glimpse",
      "portrait"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The market women, ... profits range from thirty to fifty percent, make life difficult for ordinary people.",
    "c": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "After we have taken our share, we shall give ... to them.",
    "c": [
      "their",
      "their's",
      "theirs",
      "there"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "I gave the book to the attendant ... I think works in the evenings.",
    "c": [
      "whom",
      "whose",
      "which",
      "who"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The politicians are responsible for the ... that events have taken.",
    "c": [
      "course",
      "curse",
      "coarse",
      "cause"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "I do not want ... from such a friend.",
    "c": [
      "any more advices",
      "no more advice",
      "any advices",
      "any advice"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "The driver was ordered to pay for the ... to my car.",
    "c": [
      "damages",
      "heavy damages",
      "destruction",
      "damage"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "Journalists collect and publish ...",
    "c": [
      "informations",
      "an information",
      "some informations",
      "information"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "I received Peter's and John's scripts. What about ...?",
    "c": [
      "Ngozi",
      "Ngozis",
      "Ngozis'",
      "Ngozi's"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "Jibril reported the burglary to the police as a ...",
    "c": [
      "breakout",
      "breakthrough",
      "breakdown",
      "break-in"
    ],
    "a": 3
  },
  {
    "subject": "English",
    "q": "I cannot give you any oranges; I have ... left.",
    "c": [
      "few",
      "little",
      "only a little",
      "much"
    ],
    "a": 0
  },
  {
    "subject": "English",
    "q": "... yet about the principal?",
    "c": [
      "Are there any news",
      "Are there some news",
      "Is there any news",
      "Is their any news"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "Their high ... was an advantage.",
    "c": [
      "moral",
      "morality",
      "morale",
      "morals"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "He waited for the bus because he had ...",
    "c": [
      "too many luggage",
      "many luggages",
      "a lot of luggage",
      "plenty luggages"
    ],
    "a": 2
  },
  {
    "subject": "English",
    "q": "The boy enjoyed bullying his sister; he could be a ...",
    "c": [
      "pacifist",
      "sadist",
      "pugilist",
      "scholar"
    ],
    "a": 1
  },
  {
    "subject": "English",
    "q": "The man insisted on giving unsolicited ...",
    "c": [
      "advice",
      "advices",
      "advise",
      "advises"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "A particle moves in a circle of radius 0.02 m at 0.88 m/s. Find frequency (π=22/7).",
    "c": [
      "2 Hz",
      "7 Hz",
      "8.8 Hz",
      "14 Hz"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A pendulum has period 2.0 s. What is its period if its length is doubled?",
    "c": [
      "1.00 s",
      "1.41 s",
      "0.35 s",
      "2.83 s"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "Which assumption is made for a simple pendulum?",
    "c": [
      "The string is inextensible",
      "The bob has large size",
      "The bob has no mass",
      "The angle is large"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "A ball moves anticlockwise in a circle. When its string breaks, it moves...",
    "c": [
      "toward the centre",
      "radially outward",
      "along the tangent in its direction of motion",
      "in a smaller circle"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "An object moves at uniform speed in a circle. Its acceleration has...",
    "c": [
      "constant magnitude and direction",
      "constant magnitude and changing direction",
      "changing magnitude and constant direction",
      "changing magnitude and direction"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "Times for 30 pendulum oscillations are 70, 72 and 67 s. Mean period?",
    "c": [
      "0.14 s",
      "0.43 s",
      "2.32 s",
      "6.97 s"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "Which affect a simple pendulum's period? I mass II length III gravitational acceleration",
    "c": [
      "I II III",
      "II and III",
      "I and III",
      "I and II"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "For a particle in uniform circular motion...",
    "c": [
      "kinetic energy is constant but linear momentum changes",
      "momentum constant but energy changes",
      "both are constant",
      "linear velocity constant"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "A pendulum bob crosses its lowest point twice per second. Find length if g=10 m/s².",
    "c": [
      "0.25 m",
      "0.45 m",
      "0.58 m",
      "1.00 m"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "Which are in phase in simple harmonic motion?",
    "c": [
      "displacement and velocity",
      "displacement and restoring force",
      "velocity and acceleration",
      "restoring force and acceleration"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "For an ideal inclined plane, mechanical advantage depends on...",
    "c": [
      "length alone",
      "height alone",
      "product of length and height",
      "ratio of length to height"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "A 20-toothed gear drives a 60-toothed gear at 120 revolutions/s. Speed of driven gear?",
    "c": [
      "3 rev/s",
      "40 rev/s",
      "360 rev/s",
      "2400 rev/s"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A block and tackle lifts 20 N by 10 cm at 40% efficiency. Work against friction?",
    "c": [
      "0.8 J",
      "1.2 J",
      "3 J",
      "5 J"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "An inclined plane at 30° has velocity ratio...",
    "c": [
      "2",
      "1",
      "0.866",
      "0.5"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "Wheel and axle radii are 80 cm and 10 cm; efficiency 85%; effort 1200 N. Load?",
    "c": [
      "8 N",
      "6.8 N",
      "8160 N",
      "9600 N"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "Pull 20 kg up a 30° plane of 75% efficiency. Effort? g=10 m/s²",
    "c": [
      "13.3 N",
      "73.5 N",
      "133.3 N",
      "533.2 N"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "A machine receives 1000 J and raises 500 N by 1.5 m. Efficiency?",
    "c": [
      "80%",
      "75%",
      "50%",
      "33%"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "Screw jack pitch 0.3 cm and tommy-bar radius 21 cm. Velocity ratio?",
    "c": [
      "1/(140π)",
      "14π",
      "70π",
      "140π"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "A 1.5 kW pump raises 200 kg of water by 6 m in 10 s. Efficiency? g=10",
    "c": [
      "90%",
      "85%",
      "80%",
      "65%"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "Wheel and axle diameters 40 cm and 8 cm, efficiency 80%. Effort for 100 N load?",
    "c": [
      "20 N",
      "25 N",
      "50 N",
      "80 N"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A spring is 25 cm under 5 N and 30 cm under 10 N. Length under 3 N?",
    "c": [
      "15 cm",
      "17 cm",
      "20 cm",
      "23 cm"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "Tensile stress in a wire depends on...",
    "c": [
      "load and extension",
      "load and radius",
      "radius and extension",
      "extension and original length"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A spring extends 5 cm under 150 N. Energy stored?",
    "c": [
      "3750 J",
      "2500 J",
      "3.75 J",
      "2.50 J"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "A 15 N force makes a spring 30 cm; an extra 10 N adds 5 cm. Natural length?",
    "c": [
      "25 cm",
      "22.5 cm",
      "20 cm",
      "15 cm"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "Energy stored in a wire stretched 0.02 m by 500 N?",
    "c": [
      "5 J",
      "10 J",
      "100 J",
      "10000 J"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "A 20 N load extends a 3 m wire by 10⁻⁴ m; area 8×10⁻⁷ m². Young's modulus?",
    "c": [
      "7.0×10¹⁰ Pa",
      "7.5×10¹¹ Pa",
      "8.5×10¹⁰ Pa",
      "9.0×10¹¹ Pa"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A 0.01 m tendon extends by 2×10⁻⁵ m. Strain?",
    "c": [
      "5×10⁶",
      "5×10²",
      "2×10⁻³",
      "2×10⁻⁷"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "Stress 10⁷ Pa extends wire from 10.00 cm to 10.05 cm. Young's modulus?",
    "c": [
      "5×10⁴ Pa",
      "5×10⁵ Pa",
      "2×10⁸ Pa",
      "2×10⁹ Pa"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "A 0.5 kg stone is projected at 40 m/s by a catapult extended 0.2 m. Force at maximum extension?",
    "c": [
      "4×10⁴ N",
      "4×10³ N",
      "2×10³ N",
      "4×10² N"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A 500 N/m spring compressed 0.02 m projects a 0.005 kg mass. Maximum height? g=10",
    "c": [
      "8 m",
      "4 m",
      "2 m",
      "1 m"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "Density of a solid is...",
    "c": [
      "mass relative to equal water volume",
      "water displaced per unit mass",
      "weight per unit volume",
      "mass per unit volume"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "A submerged solid is lifted and its supporting string breaks as it emerges because...",
    "c": [
      "tension decreases",
      "mass increases",
      "upthrust decreases and apparent weight increases",
      "gravity increases"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "400 cm³ oil of density 0.9 g/cm³ changes to density 0.6 g/cm³ with unchanged mass. Volume?",
    "c": [
      "360 cm³",
      "600 cm³",
      "240 cm³",
      "800 cm³"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "An object of mass m and volume V is immersed in liquid of density ρ and suspended from above. Tension?",
    "c": [
      "mg",
      "(m+ρV)g",
      "(m−ρV)g",
      "ρVg"
    ],
    "a": 2
  },
  {
    "subject": "Physics",
    "q": "A solid weighs 4.8 units in air, 2.8 in water and 3.2 in kerosene. Density of solid divided by kerosene density?",
    "c": [
      "12",
      "3",
      "2",
      "1.5"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "Relative density of a granular solid is measured accurately using a balance and...",
    "c": [
      "pipette",
      "burette",
      "measuring cylinder",
      "density bottle"
    ],
    "a": 3
  },
  {
    "subject": "Physics",
    "q": "Why does cork float in water?",
    "c": [
      "no upthrust acts",
      "fully submerged upthrust exceeds its weight",
      "fully submerged upthrust is less than weight",
      "its density exceeds water"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A hydrometer measures...",
    "c": [
      "water depth",
      "relative density of liquid by flotation",
      "relative density by apparent weight",
      "relative humidity"
    ],
    "a": 1
  },
  {
    "subject": "Physics",
    "q": "A metal has relative density 19 and volume 20 cm³. What is its actual mass when immersed in water?",
    "c": [
      "380 g",
      "400 g",
      "360 g",
      "39 g"
    ],
    "a": 0
  },
  {
    "subject": "Physics",
    "q": "A 2 kg body moves at 6 m/s in a circle of radius 4 m. Centripetal force?",
    "c": [
      "9 N",
      "12 N",
      "18 N",
      "36 N"
    ],
    "a": 2
  }
];
