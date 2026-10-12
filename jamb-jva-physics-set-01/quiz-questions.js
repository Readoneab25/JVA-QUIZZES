const QUESTIONS = [
  {
    "q": "A gun of mass 2.0 kg fires a bullet of mass 1.6 × 10⁻² kg due east. If the bullet leaves the nozzle at 150 m/s, what is the recoil velocity of the gun?",
    "c": [
      "150 m/s due west",
      "1.2 × 10⁻¹ m/s due west",
      "1.2 m/s due west",
      "1.2 m/s due east",
      "150 m/s due east"
    ],
    "a": 2,
    "source": "1984: Q36"
  },
  {
    "q": "Which of the following correctly explains the inertia of a body?",
    "c": [
      "Ability to overcome Earth's gravity",
      "Reluctance to stop moving only",
      "Readiness to start moving",
      "Reluctance to start moving but readiness to stop once moving",
      "Reluctance to start moving and reluctance to stop once moving"
    ],
    "a": 4
  },
  {
    "q": "Which of the following is NOT a force?",
    "c": [
      "Friction",
      "Tension",
      "Upthrust",
      "Weight",
      "Impulse"
    ],
    "a": 4
  },
  {
    "q": "A 0.05 kg bullet travelling horizontally at 500 m/s strikes a thick vertical wall and stops after penetrating 0.25 m. What is the magnitude of the average force exerted by the wall on the bullet?",
    "c": [
      "25 N",
      "50 N",
      "250 N",
      "5,000 N",
      "25,000 N"
    ],
    "a": 4
  },
  {
    "q": "A constant force F acts on a 0.04 kg object initially at rest. Its speed is 500 m/s after moving 50 m. What is F?",
    "c": [
      "0.4 N",
      "100 N",
      "250 N",
      "1,000 N"
    ],
    "a": 1
  },
  {
    "q": "A 1,000 kg elevator descends with an acceleration of 1.0 m/s². If g = 10.0 m/s², what is the tension in its cable?",
    "c": [
      "1 N",
      "10 N",
      "9,000 N",
      "11,000 N"
    ],
    "a": 2
  },
  {
    "q": "A jet engine develops a thrust of 270 N when exhaust gases leave at 300 m/s relative to the engine. What mass of gas is ejected per second?",
    "c": [
      "81.0 kg/s",
      "9.0 kg/s",
      "0.90 kg/s",
      "0.09 kg/s"
    ],
    "a": 2
  },
  {
    "q": "An elevator of mass 4,800 kg is supported by a cable that can safely withstand a maximum tension of 60,000 N. What is its maximum upward acceleration? (g = 10 m/s²)",
    "c": [
      "2.5 m/s²",
      "5.0 m/s²",
      "7.5 m/s²",
      "10.0 m/s²"
    ],
    "a": 0
  },
  {
    "q": "A footballer applies a force of 30.0 N to a stationary ball for 0.05 s. If the ball has a mass of 0.075 kg, what speed does it move off with?",
    "c": [
      "4.50 m/s",
      "11.25 m/s",
      "20.00 m/s",
      "45.00 m/s"
    ],
    "a": 2
  },
  {
    "q": "A particle of mass M initially at rest splits into two particles. One has mass m and velocity v. Taking that particle's direction as positive, what is the velocity of the second particle of mass (M − m)?",
    "c": [
      "mv/M",
      "Mv/(M − m)",
      "mv/(M + m)",
      "−mv/(M − m)"
    ],
    "a": 3
  },
  {
    "q": "A 100 g body moving at 10.0 m/s collides with a wall and then moves at 2.0 m/s in the opposite direction. What is the magnitude of its change in momentum?",
    "c": [
      "0.8 N·s",
      "1.2 N·s",
      "12.0 N·s",
      "80.0 N·s"
    ],
    "a": 1
  },
  {
    "q": "A rocket burns fuel at 10 kg/s and ejects it at 5 × 10³ m/s relative to the rocket. What thrust does the exhaust produce?",
    "c": [
      "2.5 × 10⁷ N",
      "5.0 × 10⁴ N",
      "5.0 × 10² N",
      "2.0 × 10⁻³ N"
    ],
    "a": 1
  },
  {
    "q": "A container holds 540 cm³ of water and drains completely in 5.0 hours. What is the average mass flow rate? (Density of water = 1,000 kg/m³)",
    "c": [
      "32.5 × 10⁻⁶ kg/s",
      "31.5 × 10⁻⁶ kg/s",
      "30.8 × 10⁻⁶ kg/s",
      "30.0 × 10⁻⁶ kg/s"
    ],
    "a": 3
  },
  {
    "q": "A lift and its passenger are in free fall. Why does the passenger experience apparent weightlessness?",
    "c": [
      "The floor exerts no normal reaction on the passenger",
      "There is no gravitational pull on the passenger",
      "The lift is airtight",
      "The lift is necessarily in a vacuum"
    ],
    "a": 0
  },
  {
    "q": "A man of mass 70 kg is in an elevator accelerating downward at 1.5 m/s². What is his apparent weight loss? (g = 10 m/s²)",
    "c": [
      "686 N",
      "595 N",
      "581 N",
      "105 N"
    ],
    "a": 3
  },
  {
    "q": "What upward force must be exerted on a 60 kg mass to give it an upward acceleration of 10 m/s²? (g = 10 m/s²)",
    "c": [
      "600 N",
      "1,200 N",
      "400 N",
      "300 N"
    ],
    "a": 1
  },
  {
    "q": "When an X-ray photon collides elastically with a free electron, which quantities are conserved for the complete system?",
    "c": [
      "Neither momentum nor energy",
      "Both momentum and energy",
      "Energy but not momentum",
      "Momentum but not energy"
    ],
    "a": 1
  },
  {
    "q": "The tendency of a body to remain at rest when a force is applied to it is called",
    "c": [
      "Impulse",
      "Momentum",
      "Inertia",
      "Friction"
    ],
    "a": 2
  },
  {
    "q": "A 5.0 kg ball strikes a smooth vertical wall normally at 2 m/s and rebounds at the same speed. What is the magnitude of the impulse on the ball?",
    "c": [
      "20.0 kg·m/s",
      "10.0 kg·m/s",
      "5.0 kg·m/s",
      "2.5 kg·m/s"
    ],
    "a": 0
  },
  {
    "q": "A 0.20 kg ball moving at 4.0 m/s is brought to rest. What is the magnitude of its change in momentum?",
    "c": [
      "0.20 N·s",
      "0.80 N·s",
      "1.20 N·s",
      "4.00 N·s"
    ],
    "a": 1
  }
];
