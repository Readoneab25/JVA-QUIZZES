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
  }
];
