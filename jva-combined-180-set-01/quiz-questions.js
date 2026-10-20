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
  },
  {
    "subject": "Biology",
    "q": "In mosses, root-like structures are called...",
    "c": [
      "root hairs",
      "rootlets",
      "hyphae",
      "rhizoids"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Which is NOT true of Spirogyra?",
    "c": [
      "conjugation",
      "fragmentation",
      "branched filaments",
      "unbranched filaments"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "The diploid multicellular stage in alternation of generations is the...",
    "c": [
      "gametophyte",
      "spermatophyte",
      "holophyte",
      "sporophyte"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Bryophytes differ from flowering plants by their...",
    "c": [
      "true stems",
      "asexual reproduction",
      "lack of vascular tissues",
      "moist habitats"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Fern sporangia are commonly grouped into...",
    "c": [
      "indusia",
      "fronds",
      "prothalli",
      "sori"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Water is needed for moss fertilisation because...",
    "c": [
      "they are aquatic",
      "they lack spores",
      "male gametes swim to eggs",
      "they produce spores"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "The traditional group Thallophyta included...",
    "c": [
      "ferns and mosses",
      "algae and fungi",
      "mosses and liverworts",
      "fungi and ferns"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "A fern prothallus corresponds to the moss gametophyte because it...",
    "c": [
      "is inconspicuous",
      "has rhizoids",
      "bears sexual organs",
      "is large"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Algae, bryophytes and ferns typically share a need for...",
    "c": [
      "seawater",
      "absence of vascular tissue",
      "water during fertilisation",
      "microscopic size"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Fern spores are commonly dispersed by...",
    "c": [
      "wind",
      "insects",
      "mammals",
      "roots"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "The vascular cambium in a dicot stem produces...",
    "c": [
      "only cork",
      "secondary xylem and phloem",
      "root hairs",
      "leaf cuticle"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "Cork cambium primarily produces...",
    "c": [
      "pollen",
      "cork cells outward",
      "xylem vessels",
      "stomata"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "Guard cells differ from most epidermal cells because they...",
    "c": [
      "lack nuclei",
      "lack walls",
      "lack vacuoles",
      "contain chloroplasts"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Herbs generally differ from shrubs because herbs...",
    "c": [
      "never fruit",
      "are always annual",
      "have non-woody stems",
      "are always perennial"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which is NOT generally characteristic of monocots?",
    "c": [
      "typical secondary thickening",
      "parallel veins",
      "scattered vascular bundles",
      "floral parts in threes"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "Which is NOT true of the root piliferous layer?",
    "c": [
      "it may bear root hairs",
      "it is part of the cortex",
      "it is the outer epidermal layer",
      "it may break down with age"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "Which of these bears seeds?",
    "c": [
      "moss",
      "whistling pine (Casuarina)",
      "algal filament",
      "fern"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "In a typical angiosperm leaf vascular bundle, xylem lies...",
    "c": [
      "beside phloem at same level",
      "surrounded by phloem",
      "above phloem",
      "outside epidermis"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which vascular plant tissue transports water and dissolved minerals?",
    "c": [
      "phloem",
      "epidermis",
      "xylem",
      "cork"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which pair is fully adapted to terrestrial reproduction without free water for fertilisation?",
    "c": [
      "ferns and algae",
      "ferns and mosses",
      "bryophytes and flowers",
      "flowering plants and conifers"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Cold-blooded animals are termed...",
    "c": [
      "poikilothermic",
      "homeothermic",
      "polythermic",
      "homeostatic"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "Which lacks pentadactyl limbs?",
    "c": [
      "bat",
      "fish",
      "frog",
      "pigeon"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "Which feature most clearly distinguishes typical bony fish from cartilaginous fish?",
    "c": [
      "presence of gills",
      "presence of fins",
      "skeleton primarily made of bone",
      "living in water"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which shape helps a bony fish move efficiently through water?",
    "c": [
      "flattened like a leaf",
      "streamlined body",
      "perfectly spherical body",
      "rectangular body"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "Which vertebrate can use its skin for gas exchange?",
    "c": [
      "rat",
      "lizard",
      "pigeon",
      "frog"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Which group generally lays yolk-rich shelled eggs?",
    "c": [
      "placental mammals",
      "amphibians",
      "most bony fishes",
      "reptiles"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Gill structures that filter particles are called...",
    "c": [
      "arches",
      "filaments",
      "rakers",
      "lamellae"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Scales, shelled eggs and bony skulls are shared by...",
    "c": [
      "birds and reptiles",
      "fish and birds",
      "reptiles and fish",
      "birds and molluscs"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "A major adaptation allowing amphibians to breathe air on land is...",
    "c": [
      "lungs replacing larval gills",
      "webbed toes",
      "long hind limbs",
      "tympanum"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "Which paired fins help fish steer and balance?",
    "c": [
      "dorsal and anal",
      "pectoral and pelvic",
      "caudal and dorsal",
      "anal and caudal"
    ],
    "a": 1
  },
  {
    "subject": "Biology",
    "q": "The main classes of organic food substances are...",
    "c": [
      "carbohydrates proteins salts",
      "salts fats proteins",
      "fats carbohydrates proteins",
      "salts fats carbohydrates"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which element is essential in haemoglobin?",
    "c": [
      "sodium",
      "potassium",
      "calcium",
      "iron"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "Severe vitamin C deficiency causes...",
    "c": [
      "kwashiorkor",
      "beriberi",
      "pellagra",
      "scurvy"
    ],
    "a": 3
  },
  {
    "subject": "Biology",
    "q": "A role of body fat is...",
    "c": [
      "producing enzymes",
      "carrying oxygen",
      "thermal insulation",
      "making starch"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Biuret reagent turns violet in the presence of...",
    "c": [
      "fats",
      "starch",
      "protein",
      "reducing sugar"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Mineral-culture bottles are darkened to...",
    "c": [
      "prevent algal growth",
      "increase root light",
      "destroy salts",
      "heat the roots"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "Which vitamin is needed to form visual pigments?",
    "c": [
      "vitamin A",
      "vitamin B12",
      "vitamin C",
      "vitamin D"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "Sodium hydrogencarbonate in aquatic photosynthesis experiments supplies...",
    "c": [
      "oxygen",
      "nitrogen",
      "carbon dioxide",
      "chlorine"
    ],
    "a": 2
  },
  {
    "subject": "Biology",
    "q": "Which set lists elements commonly found in proteins?",
    "c": [
      "carbon hydrogen oxygen nitrogen",
      "sodium chlorine calcium magnesium",
      "iron zinc copper iodine",
      "helium neon argon krypton"
    ],
    "a": 0
  },
  {
    "subject": "Biology",
    "q": "At a plant's light-compensation point...",
    "c": [
      "photosynthetic CO₂ uptake equals respiratory CO₂ release",
      "respiration stops",
      "photosynthesis stops permanently",
      "oxygen release increases indefinitely"
    ],
    "a": 0
  },
  {
    "subject": "Chemistry",
    "q": "In electrolysis of CuSO₄ with platinum electrodes, litmus near anode turns...",
    "c": [
      "blue without gas",
      "blue with oxygen",
      "blue with hydrogen",
      "red with oxygen"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "During electrolysis of NaOH solution with platinum electrodes, which is correct?",
    "c": [
      "Na metal forms",
      "hydrogen evolves at anode",
      "NaOH decreases at cathode",
      "alkalinity increases at cathode"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Electrolysis of dilute H₂SO₄ using platinum gives which gases at anode and cathode?",
    "c": [
      "sulphur and hydrogen",
      "hydrogen and oxygen",
      "oxygen and hydrogen",
      "oxygen and sulphur"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "0.1 faraday through CuSO₄ deposits how much Cu? Cu=64",
    "c": [
      "64 g",
      "32 g",
      "6.4 g",
      "3.2 g"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "At the anode of an electrolytic cell occurs...",
    "c": [
      "oxidation",
      "hydrolysis",
      "dissociation",
      "reduction"
    ],
    "a": 0
  },
  {
    "subject": "Chemistry",
    "q": "Electrolysing cold NaCl solution with stirring produces a solution containing chiefly...",
    "c": [
      "pure NaOH",
      "chlorine water",
      "pure water",
      "sodium hypochlorite"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Which is a strong electrolyte?",
    "c": [
      "ethyl acetate",
      "ethanol",
      "glucose",
      "sodium methanoate"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "During electrolysis, anions at the anode...",
    "c": [
      "gain electrons",
      "become cations",
      "gain protons",
      "lose electrons"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "If 48000 C deposits 0.5 mol sodium, charge to deposit 2 mol lead from PbCl₂?",
    "c": [
      "48000 C",
      "96000 C",
      "192000 C",
      "384000 C"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "In electrolysis of aqueous caustic soda, which is correct?",
    "c": [
      "oxygen at cathode",
      "hydrogen at anode",
      "sodium at anode",
      "alkalinity increases at cathode"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "When sodium metal is added to water...",
    "c": [
      "reaction is endothermic",
      "oxygen is evolved",
      "sodium remains unchanged",
      "heat is released"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "A reaction that absorbs heat is...",
    "c": [
      "thermodynamic",
      "exothermic",
      "isothermal",
      "endothermic"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "For 3C + 2Fe₂O₃ → 4Fe + 3CO₂, ΔH=+46 kJ. Reaction is...",
    "c": [
      "adiabatic",
      "isobaric",
      "endothermic",
      "exothermic"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "An endothermic reaction has...",
    "c": [
      "heat liberated and negative ΔH",
      "heat liberated and positive ΔH",
      "heat absorbed and negative ΔH",
      "heat absorbed and positive ΔH"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "If dissolution has positive ΔH, it is...",
    "c": [
      "catalysed",
      "complete",
      "exothermic",
      "endothermic"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "0.16 g methane heats 100 g water by 40°C, c=4.2 J/g°C. Enthalpy of combustion per mole?",
    "c": [
      "−1160 kJ/mol",
      "−1180 kJ/mol",
      "−1560 kJ/mol",
      "−1680 kJ/mol"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Reaction I releases 286 kJ and reaction II releases 406 kJ. Which is true?",
    "c": [
      "I absorbs more",
      "II absorbs heat",
      "I evolves less heat",
      "II must be faster"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "Dissolving NaNO₂ with positive ΔH is...",
    "c": [
      "exothermic",
      "endothermic",
      "isothermal",
      "isomeric"
    ],
    "a": 1
  },
  {
    "subject": "Chemistry",
    "q": "If neutralising 1 mol NaOH with HCl releases 57.3 kJ, 2 mol NaOH with H₂SO₄ releases...",
    "c": [
      "+28.65 kJ",
      "−28.65 kJ",
      "+57.3 kJ",
      "−114.6 kJ"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Given ΔHf(CO₂)=−393 and ΔHf(CO)=−110.4 kJ/mol, ΔH for CO+½O₂→CO₂ is...",
    "c": [
      "−503.7 kJ",
      "+503.7 kJ",
      "−282.6 kJ",
      "+282.6 kJ"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "Which gas is already fully oxidised and cannot burn further in oxygen under ordinary conditions?",
    "c": [
      "carbon monoxide",
      "hydrogen",
      "sulphur dioxide",
      "carbon dioxide"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "An unknown liquid reacts with Na₂CO₃ producing CO₂ that turns limewater milky. It is...",
    "c": [
      "Na₂SO₄ solution",
      "KI solution",
      "alkali",
      "acid"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Which statement is false?",
    "c": [
      "Lead is heavier atomically than copper",
      "Sodium reacts with water to release oxygen",
      "CO₂ dissolves in water",
      "CO can act as a reducing agent"
    ],
    "a": 1
  },
  {
    "subject": "Chemistry",
    "q": "Limewater is a dilute aqueous solution of...",
    "c": [
      "Ca(OH)₂",
      "CaCO₃",
      "CaSO₄",
      "Na₂CO₃"
    ],
    "a": 0
  },
  {
    "subject": "Chemistry",
    "q": "Which statement about CO is NOT true?",
    "c": [
      "it is poisonous",
      "it readily oxidises in air at room temperature",
      "it can reduce metal oxides",
      "it burns when ignited"
    ],
    "a": 1
  },
  {
    "subject": "Chemistry",
    "q": "Zinc oxide reacts with both acidic and basic reagents. It is...",
    "c": [
      "neutral",
      "basic only",
      "acidic only",
      "amphoteric"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Which is a neutral oxide?",
    "c": [
      "Al₂O₃",
      "NO₂",
      "CO₂",
      "CO"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "To remove oxygen from an oxygen-nitrogen mixture without consuming nitrogen, pass it over heated...",
    "c": [
      "KOH",
      "gold",
      "magnesium",
      "phosphorus"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "A shell reacts with dilute HCl to release CO₂. It contains...",
    "c": [
      "NaCl",
      "NH₄NO₃",
      "CaCO₃",
      "CaCl₂"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "Which conducts electricity?",
    "c": [
      "sulphur",
      "graphite",
      "diamond",
      "red phosphorus"
    ],
    "a": 1
  },
  {
    "subject": "Chemistry",
    "q": "Which carbonate is stable to heat under ordinary laboratory heating?",
    "c": [
      "ammonium carbonate",
      "calcium carbonate",
      "magnesium carbonate",
      "potassium carbonate"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Which compound normally gives nitrous oxide and water rather than oxygen when gently heated?",
    "c": [
      "manganese dioxide",
      "hydrogen peroxide",
      "sodium nitrate",
      "ammonium nitrate"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "The bubbles from an opened fizzy drink are mainly...",
    "c": [
      "hydrogen",
      "carbon monoxide",
      "carbon dioxide",
      "chlorine"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "A gas extinguishes a glowing splint and makes Ba(OH)₂ solution cloudy. It is...",
    "c": [
      "methane",
      "hydrogen chloride",
      "hydrogen",
      "carbon dioxide"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Concentrated sulphuric acid used to prepare CO from ethanedioic acid acts as...",
    "c": [
      "oxidising agent",
      "reducing agent",
      "dehydrating agent",
      "base"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "An amphoteric oxide behaves as...",
    "c": [
      "metal only",
      "nonmetal only",
      "insoluble oxide only",
      "both acid and base"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Destructive distillation of coal yields...",
    "c": [
      "ethanoic acid",
      "carbonic acid",
      "producer gas only",
      "coke and ammonia liquor"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "A metallic oxide reacts with both HCl and NaOH to form salt and water. It is...",
    "c": [
      "acidic",
      "basic",
      "neutral",
      "amphoteric"
    ],
    "a": 3
  },
  {
    "subject": "Chemistry",
    "q": "Coal fires in poorly ventilated rooms are dangerous because of...",
    "c": [
      "harmless CO₂",
      "excessive heat only",
      "poisonous CO accumulation",
      "loss of nitrogen"
    ],
    "a": 2
  },
  {
    "subject": "Chemistry",
    "q": "Which carbonate can be melted without decomposing under ordinary conditions?",
    "c": [
      "Na₂CO₃",
      "CaCO₃",
      "MgCO₃",
      "ZnCO₃"
    ],
    "a": 0
  }
];
