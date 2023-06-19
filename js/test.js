// Quiz data
var quiz = [
    {
      question: "Ano ang pambansang ibon ng Pilipinas?",
      choices: ["Love Birds", "Pigeon", "Maya", "Eagle"],
      correctAnswer: 3 
    },
    {
      question: "The Philippine's national hero is ____.",
      choices: ["Andres Bonifacio", "Apolinario Mabini", "Jose Rizal", "Melchora Aquino"],
      correctAnswer: 2
    },
    {
      question: "____ is the capital city of the Philippines.",
      choices: ["Manila", "Cebu", "Davao", "Quezon City"],
      correctAnswer: 0
    },
    {
      question: "Which is the largest Island of the Philippines?",
      choices: ["Leyte", "Visayas", "Mindanao", "Luzon"],
      correctAnswer: 3
    },
    {
      question: "Who is the artist behind the painting 'Spoliarium'?",
      choices: ["Carlos Botong Francisco", "Fernando Amorsolo", " Juan Luna", "Felix Resurreccion Hidalgo"],
      correctAnswer: 2
    },
    {
      question: "____ is the author of the novel 'Noli Me Tangere'?",
      choices: ["Andres Bonifacio", "Jose Rizal", "F. Sionil Jose", "N.V.M. Gonzalez"],
      correctAnswer: 1
    },
    {
      question: "What language is the national language of the Philippines?",
      choices: ["Pilipino", "Filipino", "Tagalog", "Spanish"],
      correctAnswer: 1
    },
    {
      question: "Which lake is the largest in the Philippines?",
      choices: ["Laguna de Bay", "Lake Lanao", "Taal Lake", "Lake Mainit"],
      correctAnswer: 0
    },
    {
      question: "Which volcano is the largest in the Philippines?",
      choices: ["Mount Apo", "Mount Pinatubo", "Mayon Volcano", "Taal Volcano"],
      correctAnswer: 0
    },
    {
      question: "Who is the author of the novel 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "J. Salinger", "F. Scott Fitzgerald", "Mark Twain"],
      correctAnswer: 0
    },
    {
      question: "What is the chemical formula for water?",
      choices: ["H2O", "CO2", "NaCl", "CH4"],
      correctAnswer: 0
    },
    {
      question: "Who is the current president of the Philippines?",
      choices: ["Rodrigo Duterte", "Benigno Aquino III", "Gloria Macapagal-Arroyo", "Ferdinand Marcos, Jr."],
      correctAnswer: 3
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: 0
    },
    {
      question: "Who is the Greek god of the sea?",
      choices: ["Poseidon", "Zeus", "Apollo", "Hermes"],
      correctAnswer: 0
    },
    {
      question: "Which scientist developed the theory of evolution?",
      choices: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Marie Curie"],
      correctAnswer: 0
    },
    {
      question: "What is the coefficient in the expression 16x^3y^4?",
      choices: ["3", "16", "x", "3y"],
      correctAnswer: 1
    },
    {
      question: "What do you call the young Filipinos, such as Rizal, del Pilar and Jaena, who were sent by their parents to study abroad especially in Europe?",
      choices: ["Principalia", "Peninsulares", "Ilustrados", "Insulares"],
      correctAnswer: 2
    },
    {
      question: "What is the term used to describe locations on Earth that possess exceptional universal significance to humanity?",
      choices: ["World Heritage", " The Great Places", "World's Top Wonders", "7 Wonders of the World"],
      correctAnswer: 1
    },
    {
      question: "It is the holding of power by people selected on the basis of their talent?",
      choices: ["Oligarchy", "Theocracy", "Meritocracy", "Aristocracy"],
      correctAnswer: 2
    },
    {
      question: "Which is more inclusive on the following?",
      choices: ["Segragation", "Domain", "Elitism", "Phylum"],
      correctAnswer: 1
    },
    {
      question: "This is the translation of Rizal's farewell poem written by Andres Bonifacio in Tagalog?",
      choices: ["Pahimakas", "Ang Pilipinas", "Paalam Mahal Ko", "Makamisa"],
      correctAnswer: 0
    },
    {
      question: "What explains why a walking stick floats on the surface of water?",
      choices: ["Anti-gravity effects", "Magnetic forces", "Surface Tension", "Bouyancy"],
      correctAnswer: 2
    },
    {
      question: "What do you call the agreement made by Legaspi and Sikatuna in Bohol?",
      choices: ["Alliance Pact", "Blood Compact", "Treaty of Friendship", "Mutual Understanding Agreement"],
      correctAnswer: 1
    },
    {
      question: "The shape of Vibrio cholerae is:",
      choices: ["Rod", "Round", "Comma", "Spiral"],
      correctAnswer: 2
    },
    {
      question: "Who is Considered as the greatest English writer?",
      choices: ["William Shakespeare", "Charles Dickens", "Ernest Hemingway", "Da Vinci"],
      correctAnswer: 0
    },
    {
      question: "In Noli, this was his final message before his final breath, 'I shall die without seeing the dawn break upon my homeland'?",
      choices: ["Padre Damaso", "Ibarra", "`Rizal`", "Elias"],
      correctAnswer: 3
    },
    {
      question: "Pag-aaral ng mga tuntunin kung paano inaayos ang mga salita sa loob ng pangungusap ay?",
      choices: ["Morphology", "Syntax", "Pragmatics", "Grammar"],
      correctAnswer: 1
    },
    {
      question: "Which of the following musical elements is known as the loudness or softness of sound?",
      choices: ["Tempo", "Dynamics", "Harmony", "Rhythm"],
      correctAnswer: 1
    },
    {
      question: "The intensification of the interconnection of the countries in the world is referred to as?",
      choices: ["International Cooperation", "United Nations", "Global Alliance", "Globalization"],
      correctAnswer: 3
    },
    {
      question: "Prior to succeeding migrants who crossed the seas from across the Southern Philippines, the Negritos were the first settlers of the islands and considered as?",
      choices: ["Prehistoric settlers", "Natives", "Indigenous inhabitants", "Aborigines"],
      correctAnswer: 3
    },
    {
      question: "What refers to the content being sent in a communication?",
      choices: ["Message", "Channel", "Feedback", "Sender"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is included in the communication's environment or setting?",
      choices: ["Message", "Channel", "Mood", "Source"],
      correctAnswer: 2
    },
    {
      question: "Communication usually begins when the message is crafted by whom?",
      choices: ["Message", "Sender", "Mood", "Receiver"],
      correctAnswer: 1
    },
    {
      question: "What can confirm the recipient's understanding of the message in a communication?",
      choices: ["Message", "Feedback", "Context", "Mood"],
      correctAnswer: 1
    },
    {
      question: "What can cause communication to be ineffective?",
      choices: ["Channel", "Feedback", "Mood", "Interference"],
      correctAnswer: 3
    },
    {
      question: "In Rizal’s poem which extolls love of national language, people who don't love their native language are compared to ____?",
      choices: ["Bayani ng bayan", "Isdang malansa", "taong walang respeto sa bayan", "Hayop at malansang isda"],
      correctAnswer: 3
    },
    {
      question: "Who used the pseudonym Samuel Clements?",
      choices: ["William Shakespeare", "Edgar Allan Poe", "John Steinbeck", "Mark Twain"],
      correctAnswer: 3
    },
    {
      question: "A story put together through an exchange of letters is called __________ literature.",
      choices: ["Epistolary", "History", "Novel", "Lettered"],
      correctAnswer: 0
    },
    {
      question: "Arrange the Following events chronologically from the first to the last.\n" +
        "l. Execution of Gomburza\n" +
        "ll. Formal Education in Ateneo and UST\n" +
        "lll. Execution by firing squad in Bagumbayan\n" +
        "lV. Birth in Calamba\n" +
        "V. Completion of Noli and El Fili",
      choices: ["lV, ll, V, l, lll", "ll, lV, l, ll, V", "ll, l, lV, V, l ll", "lV, l, ll, V, lll"],
      correctAnswer: 3
    },
    {
      question: "Which characteristic applies to the kind of government during the Spanish period?",
      choices: ["Democracy", "Anarchy", "Monarchy", "Highly centralized"],
      correctAnswer: 2
    },
    {
      question: "A remora fish attaching itself to a shark to feed on leftover prey. What type of ecological relationship is demonstrated between the remora fish and the shark?",
      choices: ["Mutualism", "Parasitism", "Commensalism", "Predation"],
      correctAnswer: 2
    },
    {
      question: "The right invoked in the “writ of habeas data” is________________.",
      choices: ["The right to freedom of speech.", "The right to freedom of religion.", "The right to information privacy.", "The right to a fair trial."],
      correctAnswer: 2
    },
    {
      question: "The newspaper of the Propaganda movement is called?",
      choices: ["La Solidaridad", "El Eco Filipino", "El Diario de Manila", "La Vanguardia"],
      correctAnswer: 0
    },
    {
      question: "According to him, there is no permanent self?",
      choices: ["David Hume", "Friedrich Nietzsche", "Immanuel Kant", "Shakespeare"],
      correctAnswer: 0
    },
    {
      question: "Which among measures of central tendency is not influenced by outliers?",
      choices: ["Median", "Mode", "Harmonic mean", "Geometric mean"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is an organism that feeds on necrotic and decaying matter?",
      choices: ["Yeast", "Fungus", "Bacteria", "Moss"],
      correctAnswer: 0
    },
    {
      question: "Which religious missionaries first arrived in the Philippines?",
      choices: ["Franciscans", "Benedictines", "Augustinians", "Dominicans"],
      correctAnswer: 2
    },
    {
      question: "Whose philosophy gives prominence to faith in understanding the existence of God?",
      choices: ["St. Paul", "St. Augustine", "St. Joseph", "St. Peter"],
      correctAnswer: 1
    },
    {
      question: "Who is the mother of our national hero, Dr. Jose Rizal?",
      choices: ["Gregoria de Jesus", "Teodora Alonso", "Soledad Rizal", "Marcela Agoncillo"],
      correctAnswer: 1
    },
    {
      question: "Who was the first editor of La Solidaridad, and an orator of the Reform Movement?",
      choices: ["Graciano Lopez Jaena", "Apolinario Mabini", "Jose Rizal", "Emilio Jacinto"],
      correctAnswer: 0
    },
    {
      question: "A student is playing with a yoyo, while another kid is gleefully sliding down on a playground slide. What type of energy is primarily responsible for pulling the yoyo downward as it unwinds and the kid downward as they slide?",
      choices: ["Elastic potential energy", "Electromagnetic energy", "Gravitational-kinetic energy", "Ground Effect"],
      correctAnswer: 2
    },
    {
      question: "The tax required to be paid annually by all adult citizens of the Philippines is the ________?",
      choices: ["Value-added tax (VAT)", "Property tax", "Income tax", "Community tax"],
      correctAnswer: 3
    },
    {
      question: "An electric fan is powered by electricity and is commonly used to create a cooling effect. Which type of energy is primarily produced by an electric fan?",
      choices: ["Chemical energy", "Electromagnetic energy", "Electric energy", "Kinetic Energy"],
      correctAnswer: 3
    },
    {
      question: "Who was the revolutionary leader who refused to surrender to the Americans even after General Malvar’s surrender, and declared himself President and Commander-in-Chief of the Supreme Government of the Tagalog Archipelago?",
      choices: ["Emilio Aguinaldo", "Andrés Bonifacio", "Miguel Malvar", "Macario Sakay"],
      correctAnswer: 3
    },
    {
      question: "Who were the aboriginal settlers in the islands, prior to succeeding migrants who crossed the seas from the Southern Philippines?",
      choices: ["Moros", "Visayans", "Negritos", "Aetas"],
      correctAnswer: 2
    },
    {
      question: "What religious institution is the only living remnant of the Philippine Revolution of 1896 today?",
      choices: ["Philippines Independent Church", "Catholic Church", "Methodist Church", "Iglesia ni Cristo"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is a waste product of photosynthesis?",
      choices: ["Carbon dioxide", "Water", "Glucose", "Oxygen"],
      correctAnswer: 3
    },
    {
      question: "Prokaryotes come in four basic morphologies: spherical, rod-shaped, spiral-shaped, and comma-shape The bacterial etiology of cholera (vibrio cholera) is _____________?",
      choices: ["Cuboidal", "Spherical", "Comma-shaped", "Spiral-shaped "],
      correctAnswer: 2
    },
    {
      question: "Which waste product is primarily released by plants during the nighttime as a result of cellular respiration?",
      choices: ["Oxygen", "Carbon dioxide", "Glucose", "Air"],
      correctAnswer: 1
    },
    {
      question: "The red tide phenomenon causes what particular marine organism to be poisonous for human consumption?",
      choices: ["Crustaceans", "Seaweed", "Starfish", "Mollusks"],
      correctAnswer: 3
    },
      {
        question: "What are the next three terms in the progression 2, 5, 11...?",
        choices: ["18, 25, 34", "14, 22, 32", "8, 14, 22", "17, 28, 41"],
        correctAnswer: 1
      },
    {
      question: "What is the term used to refer to other names or aliases such as 'Laong Laan' used by Jose Rizal; Plaridel for Marcelo H. Del Pilar, and other notable Filipino figures?",
      choices: ["Pseudonyms", "Alias", "Codenames", "Nicknames"],
      correctAnswer: 0
    },
    {
      question: "A tenant was awarded a house and lot package worth P 180,000.00. She has to pay the package for 20 years at 9% per annum. How much will the house and lot cost after 20 years?",
      choices: ["504,000", "300,400", "400,00", "504,400"],
      correctAnswer: 0
    },
    {
      question: "Reason for the student leader's suspension:",
      choices: ["Violation of school regulations", "He felt responsible for his deeds", "He was motivated to rebel", "He listened to the elders"],
      correctAnswer: 0
    },
    {
      question: "What should you do if the situation implies that what you have built over years could be destroyed overnight?",
      choices: ["Give up and start anew", "Panic and make impulsive decisions", "Keep doing good deeds", "Stay calm and assess the situation"],
      correctAnswer: 2
    },
    {
      question: "What is the exponential function represented by Y = f(x)?",
      choices: ["y = 5x^2", "y = 5x^3", "y = 5x", "y = 5"],
      correctAnswer: 0
    },
    {
      question: "A child placed in an orphanage, requesting confidentiality of her parents, later demands the disclosure of her mother's name. What right is being asserted in this case?",
      choices: ["Right to privacy", "Right to legal representation", "Right of individuals to proper identity", "Right to freedom of speech"],
      correctAnswer: 2
    },
    {
      question: "In which field was President Quirino considered when Nobel Prize winners are chosen from different disciplines?",
      choices: ["Economy", "Peace", "Medicine", "Economics"],
      correctAnswer: 3
    },
      {
        question: "According to the Constitution, how should religious instruction in public schools be approached?",
        choices: ["With parent consent", "With community consensus ", "With government approval", "As an optional subject"],
        correctAnswer: 0
      },
    {
      question: "Julio's son is graduating. He sent his son three packages weighing 8 1⁄2 kg, 10 1⁄4 kg, and 2 1⁄2 kg. What is the total weight of the packages sent?",
      choices: ["20 1⁄4 kg", "21 1⁄4 kg", "18 1⁄2 kg", "23 2/2 kg"],
      correctAnswer: 1
    },
      {
        question: "Wild plants and animals that remain deposited for thousands of years are known as a source of:",
        choices: ["Minerals", "Coal", "Geothermal energy", "Oil"],
        correctAnswer: 2
      },
    {
      question: "Which is the correct warning for garbage disposal?",
      choices: ["Use this area for garbage disposal", "No garbage disposal allowed", "Do not dispose of garbage here", "Dispose of garbage properly"],
      correctAnswer: 2
    },
    {
      question: "How do government and company workers pay their income taxes?",
      choices: ["Withholding taxes monthly", "Annual lump-sum payment", "Quarterly installments", "Paying at the end of the fiscal year"],
      correctAnswer: 0
    },
    {
      question: "In the past, what was frequently performed on stage?",
      choices: ["Opera", "Drama", "Kabuki", "Sarswela"],
      correctAnswer: 3
    },
    {
      question: "What is the coverage of deposit reimbursement provided by the PDIC (Philippine Deposit Insurance Corporation)?",
      choices: ["P 100 thousand", "P 10 million", "P 25 thousand", "3 million"],
      correctAnswer: 0
    },
    {
      question: "Why is Gemillina tree considered destructive if allowed to stay for a long time?",
      choices: ["It releases harmful chemicals into the soil.", "It inhibits the growth of other plants.", "The roots absorb a lot of water", "It releases harmful chemicals into the soil."],
      correctAnswer: 2
    },
    {
      question: "What is the method used for propagating a new carabao breed in Central Luzon State University?",
      choices: ["Embryo transfer", "Artificial insemination", "Crossbreeding", "Genetic cloning"],
      correctAnswer: 3
    },
    {
      question: "How should parents maintain the right weight of children aged 0-12, according to doctors?",
      choices: ["Giving balanced diets with accompanying exercise", "Encouraging participation in sports activities", "Limiting screen time and promoting outdoor play", "Monitoring calorie intake and reducing sugar consumption"],
      correctAnswer: 0
    },
    {
      question: "I can’t find ___ pen;may I use___, Aldren?",
      choices: ["your, mine", "my, yours", "our, yours", "my, your"],
      correctAnswer: 2
    },  
    {
      question: "On your vacation in Cebu, please if you have a chance upon Mark, please give __ my warm regards.",
      choices: ["her", "him", "them", "his"],
      correctAnswer: 1
    },  
    {
      question: "My sister and I ran into a friend of ___ in the park.",
      choices: ["my", "us", "theirs", "ours"],
      correctAnswer: 3
    },  
    {
      question: "The cost of a new car is quite expensive for ____ , besides we have more urgent family needs.",
      choices: ["mine", "me", "us", "them"],
      correctAnswer: 1
    },  
    {
      question: "Neither the director nor the members ____ present in the event",
      choices: ["is", "are", "were", "was"],
      correctAnswer: 2
    },  
    {
      question: "After ___ all day, my sister finally found the time to relax.",
      choices: ["working", "work", "works", "worked"],
      correctAnswer: 0
    },  
    {
      question: "The empty cup ____ on the table.",
      choices: ["lefted", "left", "were left", "was left"],
      correctAnswer: 3
    },
    {
      question: "The battle of the bands ____ to be the most interesting event of the night.",
      choices: ["appears", "appeared", "appear", "appearing"],
      correctAnswer: 3
    },
    {
      question: "The proposed projects ____ within the budget of the school.",
      choices: ["appeared", "are", "is", "is appearing"],
      correctAnswer: 1
    },
    {
      question: "It’s now 3 hours past his schedule; the facilitator may not come anymore, but we’ll still be ready in case he _____.",
      choices: ["does", "will come", "coming", "come"],
      correctAnswer: 0
    },
    {
      question: "He was like an owl in the night. What figure of speech is present?",
      choices: ["Simile", "Hyperbole", "Metaphor", "Personification"],
      correctAnswer: 0
    },
    {
      question: "Which poems hold the highest regard as lyrical masterpieces in global literature?",
      choices: ["Shakespearean sonnets", "The Psalms of King David", " Epic poems", "Romantic ballads"],
      correctAnswer: 1
    },
    {
      question: "Who is the Filipino writer living abroad whose fictional narratives portray the Filipino perspective on American culture?",
      choices: ["Jose Rizal", "F. Sionil Jose", " Bienvenido Santos", "Carlos Bulosan"],
      correctAnswer: 2
    },
    {
      question: "In his fictional works, this Filipino writer in English drew inspiration from the rich tapestry of Hispanic-Filipino culture and traditions.",
      choices: ["Nick Joaquin", "F. Sionil Jose", " Bienvenido Santos", "Carlos Bulosan"],
      correctAnswer: 0
    },
    {
      question: "What is a theatrical performance that has its roots in the traditional armed conflict between Christian and Muslim Filipinos?",
      choices: ["Komedya", "Moro-moro", "Sinulog", "Sarswela"],
      correctAnswer: 1
    },
    {
      question: "One well-known form of Japanese poetry is the haiku, which is characterized by its brevity and focus on capturing a single moment or feeling.",
      choices: ["Three lines totaling 17 syllables with nature as topic", "Rhyming couplets with a narrative structure", "Long, complex verses with multiple stanzas", "Free-form expression without any specific rules"],
      correctAnswer: 0
    },
    {
      question: "What is the most common type of listening that students engage in within the classroom setting?",
      choices: ["Critical listening", "Active listening", "Empathic listening", "For information and ideas"],
      correctAnswer: 3
    },
    {
      question: "Which aspect of speech focuses on enhancing and enriching the voice by utilizing natural amplifiers within the human body, such as the nose, windpipe, and chest?",
      choices: ["Articulation", "Pitch modulation", "Resonation", "Breath Control"],
      correctAnswer: 2
    },
    {
      question: "This individual is renowned as the pioneering mythical geographer in the world, known for his vibrant depictions of lands and individuals encountered by the protagonist Ulysses.?",
      choices: ["Plato", "Homer", "Herodotus", "Aristotle"],
      correctAnswer: 1
    },
    {
      question: " The Philippines is located in the ________, which is a region characterized by the presence of active volcanoes.",
      choices: ["Pacific Ring of Fire", "Volcanic Belt Zone", "Volcanic Activity Zone", "Volcanic Ring of Fire"],
      correctAnswer: 0
    },
    {
      question: "What is regarded as the oldest form of writing in the Philippines?",
      choices: ["Runes", "Hieroglyphics", "Baybayin", "alibata"],
      correctAnswer: 3
    },
    {
      question: "What is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen?",
      choices: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
      correctAnswer: 1
    },
    {
      question: "What is the fundamental unit of life?",
      choices: ["Cell", "Atom", "Molecule", "Organ"],
      correctAnswer: 0
    },
    {
      question: "What is the unit of measurement for electric current?",
      choices: ["Ampere", "Volt", "Ohm", "Watt"],
      correctAnswer: 0
    },
    {
      question: "What is the process by which solid ice directly converts into water vapor without melting called?",
      choices: ["Sublimation", " Condensation", "Evaporation", " Freezing"],
      correctAnswer: 0
    },
    {
      question: " Which of the following is an example of a renewable energy source?",
      choices: ["Coal", "Natural gas", "Solar power", "Nuclear power"],
      correctAnswer: 2
    },
    {
      question: " What is the largest organ in the human body?",
      choices: [" Brain", "Liver", "Heart", "Skin"],
      correctAnswer: 3
    },
    {
      question: "What is the process by which an unstable atomic nucleus releases energy in the form of radiation?",
      choices: ["Fusion", "Fission", "Radioactive decay", "Ionization"],
      correctAnswer: 2
    },
    {
      question: "What is the scientific term for the study of the Earth's atmosphere, including weather patterns, climate, and atmospheric conditions?",
      choices: ["Geology", "Meteorology", "Astronomy", "Oceanography"],
      correctAnswer: 1
    },
    {
      question: "What is the phenomenon where light waves change direction and speed as they pass from one medium to another?",
      choices: ["Reflection", " Refraction", " Diffraction", "Interference"],
      correctAnswer: 1
    },
    {
      question: "What is the full name of Jose Rizal?",
      choices: ["Jose Rizal Mercado", "Jose Protacio Rizal Mercado y Alonso Realonda", "Jose Rizal Hernandez", "Jose Manuel Rizal Dela Cruz"],
      correctAnswer: 1
    },
    {
      question: " Where was Jose Rizal born?",
      choices: ["Calamba, Laguna", "Manila, Philippines", "Cebu City, Cebu", "Davao City, Davao"],
      correctAnswer: 0
    },
    {
      question: "What is the title of Jose Rizal's most famous novel?",
      choices: ["Noli Me Tangere", " El Filibusterismo", " La Solidaridad", "Mi Ultimo Adios"],
      correctAnswer: 0
    },  
    {
      question: "What is the Rizal Law?",
      choices: [" A law that mandates the study of Rizal's life and works in schools.", "A law that grants financial assistance to Rizal's descendants", " A law that establishes Rizal-themed parks and museums.", "A law that promotes the preservation of Rizal's historical sites."],
      correctAnswer: 0
    },  
    {
      question: "Who was the first President of the Philippines?",
      choices: ["Emilio Aguinaldo", "Manuel L. Quezon", "Andres Bonifacio", " Ferdinand Marcos"],
      correctAnswer: 0
    },  
    {
      question: "Who was the first Filipino to win the Nobel Prize?",
      choices: [" Jose Rizal", "Benigno Aquino Jr.", "Corazon Aquino", "Lea Salonga"],
      correctAnswer: 0
    },  
    {
      question: "Who was the first Filipino to win the Nobel Prize?",
      choices: [" Leo Oracion", " Romi Garduce", "Carina Dayondon ", "Rhea Villavicencio"],
      correctAnswer: 0
    }, 
    {
      question: "Who was the first female President of the Philippines?",
      choices: [" Gloria Macapagal-Arroyo", "Corazon Aquino", "Imelda Marcos ", "Leni Robredo"],
      correctAnswer: 1
    }, 
    {
      question: "Who was the first Filipino to win an Olympic gold medal?",
      choices: ["Manny Pacquiao", "Hidilyn Diaz", "Paeng Nepomuceno", " Elma Muros-Posadas"],
      correctAnswer: 2
    }, 
    {
      question: "Who was the first Filipino to win the Miss Universe title?",
      choices: ["Pia Wurtzbach", "Margie Moran", "Catriona Gray", " Gloria Diaz"],
      correctAnswer: 3
    }, 
    {
      question: "Who was the first Filipino to win the Pulitzer Prize?",
      choices: ["Carlos P. Romulo", " F. Sionil Jos", " Jose Dalisay Jr.", " Lea Salonga"],
      correctAnswer: 0
    },
    {
      question: "Who was the first Filipino to win an Olympic silver medal in boxing?",
      choices: ["Manny Pacquiao", "Nonito Donaire Jr.", " Onyok Velasco", " Anthony Villanueva"],
      correctAnswer: 2
    },
    {
      question: "Who was the first Filipino to win the Southeast Asian Games overall championship?",
      choices: [" Manny Pacquiao", "Nonito Donaire Jr.", "Hidilyn Diaz", " Anthony Villanueva"],
      correctAnswer: 2
    },
    {
      question: "Ano ang tawag sa salitang ginagamit upang palitan ang pangngalan?",
      choices: ["Panghalip", "Pang-uring pamilang", "Pang-uring pagsusuri", "Pang-aba"],
      correctAnswer: 0
    },
    {
      question: "Saan isinagawa ang unang pambansang kongreso ng Pilipinas noong 1898?",
      choices: ["Kawit, Cavite", "Malolos, Bulacan", "Santa Ana, Manila", "Balintawak, Quezon City"],
      correctAnswer: 1
    },  
    {
      question: "Ano ang pangunahing tema ng tula ni Francisco Balagtas na Florante at Laura?",
      choices: ["Pag-ibig", "Kalayaan", "Kabayanihan", "Katarungan"],
      correctAnswer: 3
    }, 
    {
      question: "Sino ang nagsulat ng Ibong Adarna",
      choices: ["Francisco Balagtas", "Jose Rizal", "Antonio Abad", "Virgilio Almario"],
      correctAnswer: 2
    }, 
    {
      question: "Ano ang tawag sa tulang may walong pantig sa bawat linya?",
      choices: ["Haiku", "Tanaga", "Dalit", "Awit"],
      correctAnswer: 1
    }, 
    {
      question: "Sino ang tinaguriang Ama ng Wikang Pambansa?",
      choices: ["Manuel L. Quezon ", "Apolinario Mabini", " Emilio Aguinaldo", " Sergio Osmena"],
      correctAnswer: 0
    }, 
    {
      question: "Ano ang tawag sa pagkakasunod-sunod ng mga pangyayari sa isang kuwento?",
      choices: ["Simula", "Katauhan", "Banghay", " Wika"],
      correctAnswer: 2
    }, 
    {
      question: "Saan isinagawa ang unang pambansang pagpupulong ng Katipunan noong 1892?",
      choices: ["Balintawak", " Kawit", "Malolos", " Pugad Lawin"],
      correctAnswer: 0
    }, 
    {
      question: "Ano ang tawag sa anyo ng tula na naglalarawan ng kalikasan o mga bagay-bagay sa paligid?",
      choices: ["Haiku", "Soneto", "Oda", "Tanka"],
      correctAnswer: 0
    }, 
    {
      question: "When did the Philippines gain independence from Spanish colonization?",
      choices: ["1898", "1901", " 1946", "1965"],
      correctAnswer: 0
    }, 
    {
      question: "Who led the Katipunan, a secret revolutionary society that fought against Spanish rule?",
      choices: ["Jose Rizal ", " Andres Bonifacio", " Emilio Aguinaldo", "Antonio Luna"],
      correctAnswer: 1
    }, 
    {
      question: "What event marked the beginning of the Philippine Revolution against Spain in 1896?",
      choices: ["Cry of Pugad Lawin ", "Battle of Tirad Pass", "Battle of Mactan", "Execution of Jose Rizal"],
      correctAnswer: 0
    }, 
    {
      question: "What was the name of the first constitution of the Philippines?",
      choices: ["Malolos Constitution", " Quirino Constitution", " Marcos Constitution", "Cory Constitution"],
      correctAnswer: 0
    }, 
    {
      question: "Who led the Philippine forces during the Battle of Mactan against Spanish conquistadors?",
      choices: ["Lapu-Lapu", "Ferdinand Magellan", "  Miguel Lopez de Legazpi", " Rajah Humabon"],
      correctAnswer: 0
    }, 
    {
      question: "Who led the Philippine forces during the Battle of Mactan against Spanish conquistadors?",
      choices: ["Lapu-Lapu", "Ferdinand Magellan", "  Miguel Lopez de Legazpi", " Rajah Humabon"],
      correctAnswer: 0
    }, 
    {
      question: "In what year did the Philippines officially become a republic?",
      choices: ["1898", "1901", "1935", "1046"],
      correctAnswer: 3
    }, 
    {
      question: "What is the value of π (pi) rounded to two decimal places?",
      choices: ["3.14", "3.16", "3.18", "3.20"],
      correctAnswer: 0
    }, 
    {
      question: "Solve the equation: 2x + 5 = 17",
      choices: ["x = 6", "x = 8", "x = 9", "x = 12"],
      correctAnswer: 1
    }, 
    {
      question: "What is the square root of 64?",
      choices: ["4", "6", "8", "10"],
      correctAnswer: 2
    },
    {
      question: "Simplify the expression: 3(4 + 2) - 5",
      choices: ["7", "11", "13", "17"],
      correctAnswer: 1
    },
    {
      question: "Find the area of a rectangle with length 8 cm and width 5 cm.",
      choices: [" 13 cm^2", "30 cm^2", "40 cm^2", "48 cm^2"],
      correctAnswer: 1
    },
    {
      question: "Convert 0.75 into a fraction in simplest form.",
      choices: ["3/4", "3/5", "3/8", "3/10"],
      correctAnswer: 1
    },
    {
      question: "Find the perimeter of a square with side length 5 cm.",
      choices: ["10 cm", "15 cm", "20 cm", "25 cm"],
      correctAnswer: 2
    },
    {
      question: "Solve the equation: 2(x - 3) = 10",
      choices: ["x = 5", " x = 6", "x = 7", " x = 8"],
      correctAnswer: 2
    },
    {
      question: "What is the next number in the sequence: 2, 5, 10, 17, ____",
      choices: [" 22", " 26", "30", "34"],
      correctAnswer: 1
    },
    {
      question: "Which artist painted the famous masterpiece The Last Supper? ",
      choices: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"],
      correctAnswer: 0
    },
    {
      question: "What is the voting age in the Philippines?",
      choices: [" 16 years old", "17 years old", "18 years old", " 21 years old"],
      correctAnswer: 2
    },
    {
      question: "Who has the power to declare martial law in the Philippines?",
      choices: [" President", "Congress", "Supreme Court", "Armed Forces of the Philippines"],
      correctAnswer: 0
    },
    {
      question: "What is the term length for a Philippine Senator?",
      choices: ["4 years", " 6 years", " 8 years", "10 years"],
      correctAnswer: 1
    },
    {
      question: "Which article of the Philippine Constitution discusses the Bill of Rights?",
      choices: ["Article I", " Article II", " Article III", "Article IV"],
      correctAnswer: 2
    },
    {
      question: "Which article of the Philippine Constitution establishes the structure and powers of the executive branch of government?",
      choices: ["Article I", " Article V", " Article VII", "Article IV"],
      correctAnswer: 2
    },
    {
      question: "Which branch of government is responsible for interpreting laws and the Constitution in the Philippines?",
      choices: ["Legislative", "Executive", " Judicial  ", " Administrative"],
      correctAnswer: 2
    },
    {
      question: "What is the composition of the Philippine Congress?",
      choices: ["Senate only", "House of Representatives only", "Senate and House of Representatives", "Supreme Court"],
      correctAnswer: 2
    },
    {
      question: "What is the process for amending or revising the Philippine Constitution?",
      choices: ["Through a national referendum", "Through a majority vote in Congress", "Through a special committee appointed by the President ", "Through a ruling by the Supreme Court"],
      correctAnswer: 0
    },
    {
      question: "What is the minimum age requirement for a person to be elected as President of the Philippines?",
      choices: ["35", "30", "40", "45"],
      correctAnswer: 0
    },
    {
      question: "Which article of the Philippine Constitution guarantees the freedom of speech, expression, and of the press?",
      choices: [" Article I", " Article III", " Article IV", "45 Article V"],
      correctAnswer: 1
    },
    {
      question: "How many justices are there in the Supreme Court of the Philippines?",
      choices: ["3", "7", "5", "9"],
      correctAnswer: 3
    },
    {
      question: "Which article of the Philippine Constitution protects the rights of accused individuals, such as the right to due process and the presumption of innocence?",
      choices: [" Article I", " Article III", " Article IV", "45 Article V"],
      correctAnswer: 2
    },
    {
      question: "Which volcano erupted after a 7.8 magnitude earthquake in 1990.",
      choices: ["Mayon Volcano", "Mt. Apo", "Mt. Pinatubo", "Taal Volcano"],
      correctAnswer: 2
    },
    {
      question: "The idiomatic expression that is used to describe an easy task",
      choices: ["Easy as 123", "break a leg", "Give me some more", "Piece of cake"],
      correctAnswer: 3
    },
    {
      question: "What is a regular solid where length, width, and height are equal?",
      choices: ["cube", "circle", "sqaure", "sphere"],
      correctAnswer: 0
    },
    {
      question: "My grandma who already lost her font tooth could not ___ the apple.",
      choices: ["bitten", "bite", "bait", "bit"],
      correctAnswer: 1
    },
    {
      question: "Find the LCM of 8, 6, 3",
      choices: ["18", "16", "24", "27"],
      correctAnswer: 2
    },
    {
      question: "The epitome of the traditional Filipino woman; meek, submissive, obedient was:",
      choices: ["Donya Victoriana", "Sisa", "Maria Clara", "Tiya Isabel"],
      correctAnswer: 2
    },
    {
      question: "Half of the celestial sphere is called?",
      choices: ["semiglobal", "midcircle", "hemisphere", "biosphere"],
      correctAnswer: 2
    },
    {
      question: "What does it symbolize when someone is bitten on their own right hand after caring for and feeding it?",
      choices: ["Dishonesty in business", "Ingratitude", "Lack of respect for others", "Disrespect for the elderly"],
      correctAnswer: 1
    },
    {
      question: "Why was a new copier machine chosen?",
      choices: ["Its repair was free for six months", "Its guarantee was six months", "Its brand was recommended by the agent", "Its features were ordinary"],
      correctAnswer: 1
    },
    {
      question: "Which aspect of value formation is the most lasting?",
      choices: ["Preaching on values", "Intellectualization", "Modeling the value through a process", "Posting slogans to the effect"],
      correctAnswer: 2
    },
    {
      question: "What led to the change in the phase of Filipino literature?",
      choices: ["Pagdating ng Amerikano sa bansa", "Pag-aabuso ng kastila sa mamamayan", "Pag-alis ng mga tao sa Kawit", "Panggunita kina Padre Gomez, Burgos at Zamora"],
      correctAnswer: 0
    },
    {
      question: "Why did recent bank runs lead to bankruptcy?",
      choices: ["Corruption", "Mismanagement", "Flight of capital", "Loss of capital"],
      correctAnswer: 3
    },
    {
      question: "Where is the best venue for the Philippine Group in the Netherlands to hold peace talks?",
      choices: ["Philippine shores", "Hongkong", "Netherlands", "United States"],
      correctAnswer: 2
    },
    {
      question: "Which pineapple canning factory is located in Cotabato?",
      choices: ["Dole", "Mama Sita", "Del Monte", "Purefoods"],
      correctAnswer: 0
    },
    {
      question: "What is the main cause of big conflagrations in homes and cities?",
      choices: ["Use of electric stoves", "Use of firewood", "Use of sawdust for fuels", "Use of gas stoves"],
      correctAnswer: 1
    },
    {
      question: "Did you understand the instructions? What is the appropriate answer?",
      choices: ["Well and good", "That's OK", "Certainly, we did", "Sorry, we didn't"],
      correctAnswer: 2
    },
    {
      question: "After an excursion, all 400 participants fell ill. The cause was traced to:",
      choices: ["Congestion on the bus", "Food poisoning", "Excitement", "Excessive fat"],
      correctAnswer: 1
    },
    {
      question: "What advice does the statement 'Dangal ang puhunang sa baya’y paman Bago ang sarili ay bayan muna' give?",
      choices: ["Bayan muna bago ang sarili", "Mamamayan muna, bago bayan", "Mahalaga ang bayan at sarili", "Sarili ang dapat unahin upang umunlad"],
      correctAnswer: 0
    },
    {
      question: "After an airplane crash, what do passengers who choose a flight typically say?",
      choices: ["A front seat would be safest.", "I want a reservation on the back seat.", "A middle aisle seat would allow easy escape.", "A seat closest to the cockpit should be given to me."],
      correctAnswer: 3
    },
    {
      question: "In June, what do home economics classes prepare fruits into?",
      choices: ["Preserved fruit juices", "Conserved fruit juices", "Preserved fruit confections", "Preserved fruit products"],
      correctAnswer: 3
    },
    {
      question: "Which statement is true?",
      choices: ["√5 is a rational number", "0 is a positive number", "√3 is a real number", "√4 is an irrational number"],
      correctAnswer: 2
    },
    {
      question: "What do schools and civic groups celebrate every December 10?",
      choices: ["Human Rights Day", "Mother's Day", "Independence Day", "United Nations Day"],
      correctAnswer: 0
    },
    {
      question: "Form a sentence from these words:</br>I. The senator</br>II. As a legislator</br>Although he raised his voice</br>Accepted several amendments",
      choices: ["II, I, IV, III", "IV, III, II, I", "I, II, III, IV", "II, I, III, IV"],
      correctAnswer: 3
    },
    {
      question: "The committee discussed the issue and everyone at the end seemed _____ to the findings.",
      choices: ["Ignorant and civil", "Reluctant to accept", "Negative but open", "Amendable to consider"],
      correctAnswer: 0
    },
    {
      question: "According to bilingual education, why is it beneficial to use Filipino in Social Studies?",
      choices: ["Malimit pag-usapan ng mga mag-aaral ang konsepto kahit sa labas ng paaralan", "Madaling paipaliwanag ang mga konsepto sa Filipino", "Madaling maunawaan ang mga konsepto sa Filipino", "Walang pag-aalinlangan ang pagsagot ng mga mag-aaral sa wikang Filipino"],
      correctAnswer: 1
    },
    {
      question: "What is the sociological concept of home for most Filipinos?",
      choices: ["Families with boarders in addition to the family members", "Family nucleus and extended families", "Families with illegal light and water connections", "Families with pet dogs, cooks, and cats"],
      correctAnswer: 1
    },
    {
      question: "Manila Zoo attracted children during excursions. How should children be briefed about a newly born tiger cub to avoid accidents?",
      choices: ["Use sticks to awaken mother tigers", "Howl at the cub with a microphone", "Watch the mother feeding and just take pictures", "Allow children to feed cubs with their palms"],
      correctAnswer: 2
    },
    {
      question: "If a = 8, b = 16, c = 38, find the value of √",
      choices: ["4", "6", "3", "5"],
      correctAnswer: 1
    },
    {
      question: "The advice on the invitation was foun Who failed to get the message?",
      choices: ["No barong Tagalog please", "Come in coat and tie", "Polo barong with denims are OK", "Denim pants are alright"],
      correctAnswer: 2
    },
    {
      question: "The bank was swarmed with depositors. The bank",
      choices: ["Declared an open house", "Declared dividends", "Declared a holiday", "Declared bankruptcy"],
      correctAnswer: 3
    },
    {
      question: "On is stressed in given situations. Choose the situation called for:",
      choices: ["her visitors are on the way", "her visitors are on the way", "he came on holiday", "it happened on a Tuesday"],
      correctAnswer: 1
    },
    {
      question: "Noong taong 1962 ano ang pagbabago sa paglimbang ng diploma at sertipiko ng pagtatapos?",
      choices: ["Pinahintutukan ang pribadong paaralan na maglimbag sa wikang Ingles", "Nilimbang sa Filipino ang diploma ngunit may Ingles", "Malimbag sa Filipino and diploma", "Nilimbag sa Taglisg ang diploma sa di Tagalog na bayan"],
      correctAnswer: 2
    },
    {
      question: "The areas of Navotas, Valenzuela and Caloocan are always flooded during rainy season. The engineers account this to high tide especially in July and August. But really it is:",
      choices: ["below sea level", "under sea level", "approximately of sea level", "above sea level"],
      correctAnswer: 0
    },
    {
      question: "How many grams of shabu will not allow bonds for culprits?",
      choices: ["2150 grams", "200 grams", "1000 grams", "300 grams"],
      correctAnswer: 1
    },
    {
      question: "A swimming contest is held in a four lane swimming pool of 50 meters long. The contest is for 200 meters. How many times will each swimmer run in this contest?",
      choices: ["4 times", "10 times", "5 times", "16 times"],
      correctAnswer: 0
    },
    {
      question: "Write the ratio in the lowest term two hours to 30 minutes",
      choices: ["2:15", "2:4", "2:30", "4:1"],
      correctAnswer: 3
    },
    {
      question: "Lately, students are exposed to a series of achievement tests. Parents observed that:",
      choices: ["Tests were used for teaching", "Tests are indices of teacher’s competencies", "Children learned through periodic teaching", "Teaching was for tests"],
      correctAnswer: 2
    },
    {
      question: "The virus “Love bug” is a recent technological element spread by:",
      choices: ["Internet", "Radio", "Television", "Computer"],
      correctAnswer: 0
    },
    {
      question: "NAPOCOR is to be privatize This means:",
      choices: ["Every private individual gets a share", "Government has a share", "Everyone owns NAPOCOR", "Some private owners will come in"],
      correctAnswer: 3
    },
    {
      question: "Ang dinanas ng mga babae sa kamay ng Hukbong Hapon ay sinasalaysay ni:",
      choices: ["Maria Clara", "Diwata", "Gabriela", "Orang"],
      correctAnswer: 3
    },
    {
      question: "There is a campaign against choler How can the pupils protect themselves from catching the disease?",
      choices: ["Contact the parents for a meeting", "Teach children to wash their hands before and after meals", "Open up a store in the classroom for children’s recess snack", "Allow children to eat food sold by peddlers"],
      correctAnswer: 1
    },
    {
      question: "Poisoning of farmers during fertilizing fields is attributed to:",
      choices: ["Smoking during and after spraying", "Using bottle drinking", "Failure to use hand gloves", "Spraying fields at high noon"],
      correctAnswer: 2
    },
    {
      question: "Choose the statement that seems right in negotiators:",
      choices: ["He led the group to areas of concerns", "He led the group to clear out differences", "He led the group to a conclusion", "He led the group to an interactive discussion and conclusion"],
      correctAnswer: 1
    },
    {
      question: "Give the value of 'a' if the statement 4ab = 20 and b = 5:",
      choices: ["3", "1", "2", "4"],
      correctAnswer: 1
    },
    {
      question: "Australian experts were asked to explore a better way of generating electricity. This is done through:",
      choices: ["Undersea cable transmission", "Sulphuric reserve actuation", "Waterfall reserve actuation", "Geothermal utilization"],
      correctAnswer: 0
    },
    {
      question: "Cooperatives established by the farmers failed to thrive well because:",
      choices: ["Cooperative activities are poorly managed and implemented", "Members distrust their cooperative officials", "Seed money for cooperative shared by senators and congressmen poorly administered", "Farmers were used to dole outs"],
      correctAnswer: 2
    },
    {
      question: "The box is heavy, so the child cannot ____ it.",
      choices: ["Inkinaya", "Mabuhat – buhat", "Mabuhat", "Buhatin"],
      correctAnswer: 1
    },
    {
      question: "There are many cases of abuse on Filipino contract workers. Where can these workers seek justice and redress?",
      choices: ["Philippine Supreme Court", "Department of Justice and the Foreign Affairs Consulate Office in the foreign seek justice and release?", "International Court of Justice", "Department of Labor and Employment"],
      correctAnswer: 1
    },
    {
      question: "Which of these capitalized words does not belong to the group in terms of sound?",
      choices: ["THAT picture is impressionistic", "This THESIS is original", "THOSE are her new projects", "THESE books are of recent editors"],
      correctAnswer: 1
    },
    {
      question: "DOGS are often affected by rabies, but lately other animals have been identified and they are:",
      choices: ["Birds", "Cats", "Pigs", "Snakes"],
      correctAnswer: 1
    },
    {
      question: "Home is the soldier. Home and free! This tells us",
      choices: ["The soldier died heroically", "The soldier is at peace in death", "The soldier is well armed at home", "The soldier is decorated upon arrival"],
      correctAnswer: 1
    },
    {
      question: "What is the sum of √9 and √4?",
      choices: ["3", "5", "2", "4"],
      correctAnswer: 1
    },
    {
      question: "Which language is the basis of the national language?",
      choices: ["Tagalog", "Hiligaynon", "Bisaya", "Bicol"],
      correctAnswer: 0
    },
    {
      question: "Quality of education, they say, is:",
      choices: ["Every citizen’s accounting task", "Every parent’s and teacher's responsibility task", "Everyone’s responsibility", "Everybody’s concern at times"],
      correctAnswer: 2
    },
    {
      question: "Which placard indicates a wide choice during the grand sale?",
      choices: ["“Pairs Varied Plenty”", "“Single items Limited”", "“No Duplicates Available”", "“Choose Your Wild”"],
      correctAnswer: 0
    },
    {
      question: "How does the Department of Science and Technology (DOST) ensure quality science teaching in secondary schools?",
      choices: ["Carry out a science fair every year", "Open up science high schools in every province", "Share researchers and distribute equipment to schools", "Maintain a scholar's grant for deserving science and mathematics teachers"],
      correctAnswer: 2
    },
    {
      question: "Longfellow mentioned life as light as shadow. What figure of speech is used?",
      choices: ["Personification", "Argumentation", "Simile", "Metaphor"],
      correctAnswer: 2
    },
    {
      question: "The police will warn those crossing. Which is correct?",
      choices: ["Cross now, the light is green", "Hey! The light is red, stop", "Watch the light before crossing", "Arrest those crossing on the wrong light or signal"],
      correctAnswer: 2
    },
    {
      question: "What does the phrase 'Never the Twain shall meet...' imply about the lines?",
      choices: ["Straight", "Perpendicular", "Parallel", "Circular"],
      correctAnswer: 2
    },
    {
      question: "What is the term used for the body where committee members from both houses settle issues before a formal legislation is passed?",
      choices: ["Senate Committee", "Bicameral Committee", "Oversight Committee", "House of Representatives Committee"],
      correctAnswer: 1
    },
    {
      question: "In the statement, 'I want to be loved body and soul,' what does the speaker mean by love?",
      choices: ["Can be carnal and platonic", "Must be sexy to be adored", "Is both mind and body", "Is a process of mental exercise"],
      correctAnswer: 0
    },
    {
      question: "What recent organ transplant discovery has been made in Russia?",
      choices: ["Heart transplant", "Retina eye transplant", "Kidney transplant", "Placenta transplant"],
      correctAnswer: 3
    },
    {
      question: "Under what conditions can a landowner reclaim farmland transferred to a tenant?",
      choices: ["When the tenant re-sells the land to non-recognized transferees", "When the tenant fails to submit the agreed rental of several cavans of rice and corn for three consecutive harvests", "When the tenant fails to pay the agreed rental for five planting seasons", "When the tenant fails to pay land tax"],
      correctAnswer: 3
    },
    {
      question: "Which panel is responsible for resolving the issue on the Spratly island claims?",
      choices: ["United Nations Assembly", "European Countries", "Security Council", "ASEAN Pacific countries laying claims"],
      correctAnswer: 3
    },
    {
      question: "What is the value of N in the equation: 18 2/16 + 26 1/4 = N",
      choices: ["44 3/8", "44 1/2", "44 1/4", "43 4/16"],
      correctAnswer: 0
    },
    {
      question: "What measure has been taken lately to ensure a supply of honey for food and medicine?",
      choices: ["Discourage the use of pesticides in honey farms", "Gather honey from the forest", "Encourage bee farm in chosen areas", "Culture honey bees for propagation"],
      correctAnswer: 3
    },
    {
      question: "Which expression represents the given polynomial?",
      choices: ["x – x + 9 – 3x + 10x", "2x + 4x – 3", "xy – x – 6", "x – 4x + 2x – x + 2"],
      correctAnswer: 2
    },
    {
      question: "She bought her daughter a new dress, which was fashionable. It was:",
      choices: ["A copy from an Italian catalogue", "A remodeled dress", "An imitation from the original", "An original creation of a couturier"],
      correctAnswer: 3
    },
    {
      question: "A package sent by a balikbayan was discovered open. This is a case of:",
      choices: ["Substitution", "Robbery", "Pilferage", "Oppression"],
      correctAnswer: 2
    },
    {
      question: "Ang Gintong panahon ng mga manunulat noong panahon ng Amerikano ay batid sa uring:",
      choices: ["Sanaysay", "Nobela", "Panulaan", "Maikling kwento"],
      correctAnswer: 3
    },
    {
      question: "The majority members in the House of Representatives rejected the measure. This means:",
      choices: ["They defined party commitment", "They favored the leadership", "They joined the minority", "They bottled the majority party"],
      correctAnswer: 0
    },
    {
      question: "Cement factories can only operate if given a permit by the DENR, which guarantees:",
      choices: ["Viability of feasibility study", "Environmental clearance and conditions", "Pollution safety and prevention", "Environmentally friendly practices"],
      correctAnswer: 1
    },
    {
      question: "The Red Cross humanitarian job is to gather and provide needed blood to the needy. Name the universal blood type:",
      choices: ["Type O", "Type B", "Type AB", "Type Bt"],
      correctAnswer: 0
    },
    {
      question: "She was asked to make a census of the place. What is she supposed to do?",
      choices: ["Gather data on each occupant in each household in the area", "Ask residents to reach a consensus", "Identify strangers in the area", "Gather data on people in the area"],
      correctAnswer: 0
    },
    {
      question: "The common saying accepted in values education is:",
      choices: ["Values are individual sets of behavior", "Values are caught, not preached", "Values are dependent on individual and societal standards", "Values are valueless"],
      correctAnswer: 0
    },
    {
      question: "Aling Salita ang nasa talasalitang Filipino na hiram sa Cebuano?",
      choices: ["Asawa", "Balay", "Bahay", "Bana"],
      correctAnswer: 0
    },
    {
      question: "Di dapat bayaran ang lahat ng utang sapagkat:",
      choices: ["May pababarin silang iba", "May iba na siyang pababayaran", "Mayroon na siyang pagbabarang iba", "May pagbabayaran pang iba"],
      correctAnswer: 3
    },
    {
      question: "Mosquitoes have been identified as having caused illness among children bitten in the morning. This fever is",
      choices: ["Asthma", "Malaria", "Dengue", "Diarrhea"],
      correctAnswer: 2
    },
    {
      question: "The people of Montalban in Rizal raised protest on the landfill since.",
      choices: ["Water seepage would pollute water source", "People were disturbed by garbage trucks", "Air pollution could not be controlled", "Garbage could be recycled"],
      correctAnswer: 0
    },
    {
      question: "The weather report recorded a temperature of 29 degrees Celsius in the morning and 33.5 degrees Celsius at two o'clock in the afternoon. How many degrees higher was the afternoon temperature?",
      choices: ["4.5 degrees Celsius", "5.8 degrees Celsius", "6.3 degrees Celsius", "5.5 degrees Celsius"],
      correctAnswer: 0
    },
    {
      question: "Why are Filipino overseas workers considered modern-time heroes?",
      choices: ["They sacrifice their family life and economies just to improve their quality of life", "They become broad-minded, skilled, and economically stable", "They have helped stabilize the Philippine economy", "They come home ready to feast their townmates and friends"],
      correctAnswer: 2
    },
    {
      question: "Choose the statement that seems right in negotiators",
      choices: ["He led the group to areas of concern", "He led the group to clear out differences", "He led the group to a conclusion", "He led the group to an interactive discussion and conclusion"],
      correctAnswer: 3
    },
    {
      question: "NHA homes were sold to recipients payable in the longest term of:",
      choices: ["15 years", "25 years", "10 years", "5 years"],
      correctAnswer: 1
    },
    {
      question: "Values information seminars mandated by the Moral Recovery Program have transformed many government officers",
      choices: ["Workshops on values have made Father Dámasos out of some leaders", "Religious leaders are not fulfilled on their moral ascendancy", "DECS officials conduct workshops on values to be models themselves", "PNP hierarchy are examples of moral strength"],
      correctAnswer: 2
    },
    {
      question: "There have been plants discovered as effective insect repellents. Which of these plants belong to the group?",
      choices: ["Orchids", "Gumamela", "Bougainvillea", "Cosmos"],
      correctAnswer: 3
    },
    {
      question: "Only 682 examinees passed in a Pharmacists Licensure Examination out of 2550 examinees. What is the passing percentage?",
      choices: ["26.5%", "26%", "26.7%", "26.8%"],
      correctAnswer: 2
    },
    {
      question: "A Chinese proverb says, 'The virtue with the shortest memory is gratitude.' This tells of persons who are:",
      choices: ["Greetful", "Grateful", "Careful", "Hospitable"],
      correctAnswer: 1
    },
    {
      question: "Ang kanyang sinsakyan galing Quiapo papuntang Kalookan ay nasa ibabaw. Ito ay ______",
      choices: ["jeep", "trambiya", "bus", "LRT"],
      correctAnswer: 3
    },
    {
      question: "That is the face that caused a thousand ships and men to raise their arms and fight. Who was referred to by the poet?",
      choices: ["Helen of Troy", "Mary Magdalene", "Helen Keller", "Cleopatra of the Nile"],
      correctAnswer: 0
    },
    {
      question: "In the film 'ANAK,' portrayed a daughter whose values were greatly affected by:",
      choices: ["the economics of an overseas mother's value", "the peer groups and society", "the confusion of a mother's role", "the absence of a father image"],
      correctAnswer: 0
    },
    {
      question: "The International Rice Research Institute in UP Los Baños has introduced varieties of rice for all seasons. Name the most popular one that was exported in the 70s.",
      choices: ["Dinorado", "0 - 5 variety", "sampagita", "C - 4 variety"],
      correctAnswer: 3
    },
    {
      question: "Convert this confiscated 8,000 grams of dangerous drugs into kilograms.",
      choices: ["8 kg", "800 kg", "800 kg", "80 kg"],
      correctAnswer: 0
    },
    {
      question: "If April 13 is a Friday, what day does April 21 fall on?",
      choices: ["Monday", "Saturday", "Thursday", "Friday"],
      correctAnswer: 1
    },
    {
      question: "Nearly all countries believe in providing housing for every family. How does the government tackle this issue?",
      choices: ["Developing housing czars", "Creating a cabinet for housing", "Establishing homes for middle-class families", "Driving squatters along the river"],
      correctAnswer: 2
    },
    {
      question: "The number of fake doctors and medical malpractitioners is increasing. How can this be discouraged?",
      choices: ["Ignore the presence of such individuals", "Refuse patronage of said services", "Take patients to professional medical practitioners", "Identify such individuals and report them to authorities"],
      correctAnswer: 1
    },
    {
      question: "A significant number of school children have severely damaged teeth. How does the government address this problem?",
      choices: ["Set up toothbrush factories", "Open dental clinics in the barangay", "Donate toothpaste to every complete elementary school", "Subject first-grade pupils to early dental treatment"],
      correctAnswer: 3
    },
    {
      question: "The volume of a gas is inversely proportional to its pressure. When the pressure is 30 cm of mercury, the volume is 600 cubic cm. Find the pressure when the volume is 250 cubic cm.",
      choices: ["28 cm of mercury", "2.5 cm of mercury", "72 cm of mercury", "65 cm of mercury"],
      correctAnswer: 2
    },
    {
      question: "When are secondary school students asked to go home?",
      choices: ["When typhoon no. 3 is raised", "When typhoon signal no. 1 is raised", "When typhoon signal no. 2 is raised", "When there is a flood caused by high tide"],
      correctAnswer: 2
    },
    {
      question: "A rice field is divided into four sections, each measuring 25 meters by 38 meters. Calculate the perimeter of each section.",
      choices: ["152 m", "126 m", "156 m", "146 m"],
      correctAnswer: 1
    },
    {
      question: "In order to ensure a healthy banking industry, the Bangko Central has promoted",
      choices: ["Selling stocks to interested buyers", "Bank mergers", "Bank closures and declared bankruptcy", "Bank tie-ups with foreign banks"],
      correctAnswer: 1
    },
    {
      question: "Hacienda Rosita was divided among 22 tenants, with each tenant receiving 6 hectares. What was the total area of Hacienda Rosita?",
      choices: ["152 hectares", "132 hectares", "122 hectares", "142 hectares"],
      correctAnswer: 1
    },
    {
      question: "The Department of Agriculture observed that only one-third of the produced palay is utilized effectively. What measure was implemented to reduce harvest wastage?",
      choices: ["Palay drying and storage", "Rice milling process", "Rice transplanting method", "Palay exchange and marketing"],
      correctAnswer: 0
    },
    {
      question: "What is the meaning of the following quote? 'Excuses are for losers... those who take responsibility for their actions are real winners in life.' This quote emphasizes",
      choices: ["Losers who often fail because they find reasons for losing", "A winner can also be a quitter", "Accountability of one's actions as a sign of bravery", "The need for excuses to justify any failure"],
      correctAnswer: 2
    },
    {
      question: "A couple accepted a wedding invitation and expressed their pleasure with the following remarks.",
      choices: ["All guests congratulated the organizers and couple.", "Guests came in and out of the ceremonies", "The ceremonies were very impressive", "I felt uneasy with the priest"],
      correctAnswer: 2
    },
    {
      question: "Factories are raided to assess the presence of working children and women. Why should these raids be conducted?",
      choices: ["To determine the humane treatment of workers", "To assess the condition of the workplace", "To evaluate the rights of children and women in the workplace", "To identify violations of the labor code"],
      correctAnswer: 3
    },
    {
      question: "Sea accidents have been caused by disregarding typhoon signals. When are vessels suspended from lifting anchor?",
      choices: ["Signal #1", "Signal #2", "Signal #3", "Signal #4"],
      correctAnswer: 0
    },
    {
      question: "The Filipino language is similar to languages in Asi Which one is the closest to Filipino?",
      choices: ["Katakana", "Mandarin", "Bahasa", "Malayo"],
      correctAnswer: 3
    },
    {
      question: "A diet rich in animal fat often leads to patients being diagnosed with ____________",
      choices: ["Diabetes", "Kidney malfunction", "Hypertension", "Sclerosis"],
      correctAnswer: 2
    },
    {
      question: "Sea turtles reproduce quickly through",
      choices: ["Egg hatching", "Migration", "Transfusion", "Mutation"],
      correctAnswer: 0
    },
    {
      question: "Clogged blood vessels often cause heart ailments. What procedure do cardiologists use to replace clogged arteries?",
      choices: ["Angioplasty", "Plastic surgery", "Heart bypass", "X-ray"],
      correctAnswer: 2
    },
    {
      question: "The host had only 8 1/4 gallons of ice cream to serve. After serving 3 1/2 gallons upon the arrival of guests, how many gallons are left for latecomers?",
      choices: ["5 1/4 gallons", "4 1/2 gallons", "4 3/4 gallons", "4 1/8 gallons"],
      correctAnswer: 2
    },
    {
      question: "Calculate 1 2/5 x 1 1/4 ÷ 7/18",
      choices: ["3/4", "4 1/2", "1/5", "4/5"],
      correctAnswer: 1
    },
    {
      question: "Ang kimonong suot sa centennial ay patuloy pagkat ____ito nang lahat.",
      choices: ["papamalakihin", "ipagmalaki", "pagmamalaki", "ipinagmamalaki"],
      correctAnswer: 3
    },
    {
      question: "What is the product of (3+20) (4- 30)?",
      choices: [" –598", " 598", " 59.8", " 5.98"],
      correctAnswer: 0
    },
    {
      question: "The first prize of P40,000,000 was shared by 16 winners. How much will each claim?",
      choices: [" P 2,500,000.00", " P 2,800,000.00", " P 3,000,000.00", " P 2,700,000.00"],
      correctAnswer: 0
    },
    {
      question: "To avoid the thinning of the ozone layer, what should be avoided in waste disposal?",
      choices: [" Dumping waste in the river", " Dumping waste into landfills", " Dumping waste into the sea", " Burning garbage in pits"],
      correctAnswer: 3
    },
    {
      question: "Children with smallpox, chickenpox, or measles should be segregated or quarantine When should this be done?",
      choices: [" The set on the fever", " The first days of skin wound healing", " The first week upon skin eruption", " The most infections stage is within 2 days of the fever"],
      correctAnswer: 0
    },
    {
      question: "A couple was just married when the groom is three scores older than the bride. How old is the bride if she is one score younger?",
      choices: [" 20 years", " 50 years", " 30 years", " 40 years"],
      correctAnswer: 3
    },
    {
      question: "Ms. Cruz had her house raided by authorities. She refused to open the door. Was she right? She has the right",
      choices: [" to assert her individually", " to protection against police authorities", " to life, liberty and property", " to do self defense"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is the least stable measure of central tendency?",
      choices: [" median and mode", " mode", " median", " mean"],
      correctAnswer: 1
    },
    {
      question: "Mean is to a central tendency as Standard deviation is to:",
      choices: [" Discrimination", " level of difficulty", " correlation", " variability"],
      correctAnswer: 3
    },
    {
      question: "Natives of ancestral lands have been asserting their ownership of lands. This has been addressed by Congress in what way?",
      choices: [" Laws and administration have identified ancestral lands and report on owner", " Ancestral lands of lumads are government reservation", " Ancestral lands of lumads are government reservation", " The Commission on Human Rights has returned the lands to the lumads"],
      correctAnswer: 2
    },
    {
      question: "What is the meaning of 'tigi-putukan'?",
      choices: [" Peaceful", " Prepared", " Selfish", " Opportunistic"],
      correctAnswer: 0
    },
    {
      question: "What is the meaning of 'tigil-putukan'?",
      choices: [" No one will fight on the designated day", " The rebels surrendered", " No soldiers will go out", " The battle on one side ceased"],
      correctAnswer: 0
    },
    {
      question: "If a Filipino committed a crime in America and returned to the Philippines, can he be asked to return to the State for trial?",
      choices: [" Yes, because he committed the crime", " No, because he is a Filipino", " Yes, if there is an extradition order agreed upon by both countries", " Yes, because he has proven his innocence"],
      correctAnswer: 2
    },
    {
      question: "Who was the liaison from the Department of Foreign Affairs before President Estrada went to Washington ?",
      choices: [" Ambassador Bautista", " Ambassador Maceda", " Ambassador Romero", " Ambassador Brillantes"],
      correctAnswer: 1
    },
    {
      question: "A child insisted on knowing her biological father. What right is involved?",
      choices: [" Right to education", " Right to name and identity", " Right to freedom of choice", " Right to seek the truth"],
      correctAnswer: 1
    },
    {
      question: "Immunization is carried out by health authorities on children aged 2 months to 2 years old to prevent the spread of",
      choices: [" Cholera", " Measles", " Rabies", " Diphtheria"],
      correctAnswer: 3
    },
    {
      question: "The wounded soldiers were visited by the President who honored them with ____ for their ____.",
      choices: [" Medals - bravery", " Recognition - courage", " Appointments - consistency", " Financial aid - sacrifice"],
      correctAnswer: 0
    },
    {
      question: "What is the equivalent of Apolinario Mabini's 'Decalogue' that imparts teachings in Filipino?",
      choices: [" New Society - by President Marcos", " Ten Commandments", " Code of Citizenship - by President Quezon", " Code of Ethics - by Kalantiaw"],
      correctAnswer: 3
    },
    {
      question: "The price of corn is P8.00 per kilogram. The total worth of the entire harvest is P10,000.00. How many kilograms was the corn harvest?",
      choices: [" 1050 kg", " 1250 kg", " 2000 kg", " 2250 kg"],
      correctAnswer: 1
    },
    {
      question: "What is necessary to continuously strengthen a school guidance program?",
      choices: [" Assignment of responsibilities", " Research", " Evaluation", " Program planning"],
      correctAnswer: 1
    },
    {
      question: "Mababasa ang mga kuro-kuro ng patnugot ng pahayagan ng tungkol sa napapanahong isyu sa ____?",
      choices: ["Seksyung Pangangalakal", "Panlibangan", "Pangulong Tudling", "Lathalain"],
      correctAnswer: 2
    },
    {
      question: "What government agency was tasked to nurture Philippine Arts?",
      choices: ["NCAA", "NCCA", "NBI", "DSWD"],
      correctAnswer: 1
    },
    {
      question: "The date of Philippine Independence was changed from July 4 to July 12 by ____.",
      choices: ["Benigno Aquino", "Diosdado Macapagal", "Emilio Aguinaldo", "Manuel Quezon"],
      correctAnswer: 1
    },
    {
      question: "All are american writers EXCEPT ____.",
      choices: ["Mark Twain", "Edgar Allan Poe", "Longfellow", "Christopher Marlowe"],
      correctAnswer: 3
    },
    {
      question: "Political idealists advocate ideals in politics such as justice and faireness. Political realist have a more realist viewpoint of politics, aptly stated by Might is right. Who among the following is more a political realist rather than poltical idealist?",
      choices: ["Ferdinand Marcos", "Julius Caesar", "Mohatma Ghandi", "Martin Luther King"],
      correctAnswer: 1
    },
    {
      question: "Uri ng bantas na ginagamit sa paghihiwalay ng mga sugnay na sunod-sunod ay ___.",
      choices: ["tuldok", "kuwit", "tudok kuwit", "tutuldok"],
      correctAnswer: 2
    },
    
    
  
  
  
    
  
  
  
  
  
  ];
  
  // Variables
  var currentQuestion = 0;
  var score = 0;
  var questionsPerPage = 1;
  
  // DOM Elements
  var questionContainer = document.getElementById("question-container");
  var prevButton = document.getElementById("prev-btn");
  var nextButton = document.getElementById("next-btn");
  var submitButton = document.getElementById("submit-btn");
  var result = document.getElementById("result");
  
  // Function to shuffle an array excluding the element at a specific index
  function shuffleArrayWithExclusion(array, excludeIndex) {
    var shuffledArray = array.slice(); // Create a copy of the array
    var correctAnswer = shuffledArray[excludeIndex]; // Store the correct answer
    shuffledArray.splice(excludeIndex, 1); // Remove the correct answer from the array
    for (var i = shuffledArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    shuffledArray.splice(excludeIndex, 0, correctAnswer); // Insert the correct answer back at its original index
    return shuffledArray;
  }
  
  // Function to display current question
  function displayQuestions() {
    var startIndex = currentQuestion;
    var endIndex = currentQuestion + questionsPerPage;
    var questionsHtml = "";
  
    var choicesLabels = ['A', 'B', 'C', 'D']; // Labels for choices
  
    for (var i = startIndex; i < endIndex; i++) {
      if (i < quiz.length) {
        var q = quiz[i];
        var choices = q.choices;
        var correctAnswerIndex = q.correctAnswer;
  
        // Shuffle the choices while keeping the correct answer in its original place
        var shuffledChoices = shuffleArrayWithExclusion(choices, correctAnswerIndex);
  
        var choicesHtml = "";
  
        for (var j = 0; j < shuffledChoices.length; j++) {
          choicesHtml +=
            '<label><input type="radio" name="choice' +
            i +
            '" value="' +
            (j === correctAnswerIndex ? correctAnswerIndex : j) +
            '"> ' +
            choicesLabels[j] + '. ' + shuffledChoices[j] +
            "</label>";
        }
  
        var questionNumber = i + 1; // Question number (starts from 1)
  
        questionsHtml +=
          '<div class="question">' +
          '<span class="question-number">' +
          questionNumber +
          ". </span>" +
          q.question +
          "</div>" +
          '<div class="choices">' +
          choicesHtml +
          "</div>";
      }
    }
  
    questionContainer.innerHTML = questionsHtml;
  
    if (currentQuestion === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
  
    if (currentQuestion >= quiz.length - questionsPerPage) {
      nextButton.style.display = "none";
      submitButton.style.display = "block";
    } else {
      nextButton.style.display = "block";
      submitButton.style.display = "none";
    }
  
    // Disable Next button if no answer is selected
    var inputs = document.getElementsByName("choice" + currentQuestion);
    var nextDisabled = true;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        var selectedAnswerIndex = parseInt(inputs[i].value);
        if (selectedAnswerIndex === correctAnswerIndex) {
          nextDisabled = false;
        }
        break;
      }
    }
    nextButton.disabled = nextDisabled;
  }
  
  // Event listener for previous button
  prevButton.addEventListener("click", function () {
    var inputs = document.getElementsByName("choice" + currentQuestion);
    saveSelectedAnswer(inputs);
  
    currentQuestion--;
    displayQuestions();
  });
  
  // Event listener for radio buttons
  questionContainer.addEventListener("change", function () {
    var inputs = document.getElementsByName("choice" + currentQuestion);
    var nextDisabled = true;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        nextDisabled = false;
        break;
      }
    }
    nextButton.disabled = nextDisabled;
  });
  
  
  // Event listener for next button
  nextButton.addEventListener("click", function () {
    var inputs = document.getElementsByName("choice" + currentQuestion);
    saveSelectedAnswer(inputs);
  
    currentQuestion++;
    displayQuestions();
  });
  
  // Event listener for submit button
  submitButton.addEventListener("click", function () {
    var inputs = document.getElementsByName("choice" + currentQuestion);
    saveSelectedAnswer(inputs);
  
    // Calculate score
    var selectedAnswers = getSelectedAnswers();
    score = calculateScore(selectedAnswers);
  
    // Display result
    result.innerHTML =
      "<h3 class='text-success mb-3'>You scored " + score + " out of " + quiz.length + " questions." + "</h3>";
  
    // Display answer key
    result.innerHTML += "<h3>Answer Key:</h3>";
    for (var i = 0; i < quiz.length; i++) {
      var questionNumber = i + 1;
      var question = quiz[i].question;
      var correctAnswer = quiz[i].choices[quiz[i].correctAnswer];
      var selectedAnswer = quiz[i].selectedAnswer;
      var isAnswerCorrect = selectedAnswer !== undefined && selectedAnswer === quiz[i].correctAnswer;
  
      result.innerHTML += "<p><strong>Question " +
        questionNumber +
        ":</strong> " +
        question +
        "</p>";
  
      if (isAnswerCorrect) {
        result.innerHTML += "<p class='text-success'><strong>Correct Answer: " + correctAnswer + "</strong></p>";
      } else {
        result.innerHTML += "<p style='color: red'><strong>Your Answer: " + quiz[i].choices[selectedAnswer] + "</strong></p>";
      }
    }
  
    // Hide the questions and buttons
    questionContainer.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
  });
  
  // Function to save the selected answer
  function saveSelectedAnswer(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        quiz[currentQuestion].selectedAnswer = parseInt(inputs[i].value);
        break;
      }
    }
  }
  
  // Function to get the selected answers
  function getSelectedAnswers() {
    var selectedAnswers = [];
    for (var i = 0; i < quiz.length; i++) {
      if (quiz[i].selectedAnswer !== undefined) {
        selectedAnswers.push(quiz[i].selectedAnswer);
      }
    }
    return selectedAnswers;
  }
  
  // Function to calculate the score
  function calculateScore(selectedAnswers) {
    var score = 0;
    for (var i = 0; i < quiz.length; i++) {
      if (selectedAnswers[i] === quiz[i].correctAnswer) {
        score++;
      }
    }
    return score;
  }
  
  // Function to initialize the quiz
  function initializeQuiz() {
    // Shuffle the quiz questions
    shuffleQuiz();
  
    // Display the initial set of questions
    displayQuestions();
  }
  
  // Function to shuffle the quiz questions
  function shuffleQuiz() {
    for (var i = quiz.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = quiz[i];
      quiz[i] = quiz[j];
      quiz[j] = temp;
    }
  }
  
  // Call the initializeQuiz function to start the quiz
  initializeQuiz();
  
  