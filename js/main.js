// Quiz data
var quiz = [
      {
        question: "What is the national bird of the Philippines?",
        choices: ["A. Eagle", "B. Dove", "C. Parrot", "D. Kingfisher"],
        correctAnswer: 0
      },
      {
        question: "Who is the national hero of the Philippines?",
        choices: ["A. Jose Rizal", "B. Emilio Aguinaldo", "C. Andres Bonifacio", "D. Manuel L. Quezon"],
        correctAnswer: 0
      },
      {
        question: "What is the capital city of the Philippines?",
        choices: ["A. Manila", "B. Cebu", "C. Davao", "D. Quezon City"],
        correctAnswer: 0
      },
      {
        question: "What is the largest island in the Philippines?",
        choices: ["A. Luzon", "B. Visayas", "C. Mindanao", "D. Palawan"],
        correctAnswer: 0
      },
      {
        question: "Who painted the 'Spoliarium'?",
        choices: ["A. Juan Luna", "B. Fernando Amorsolo", "C. Carlos Botong Francisco", "D. Felix Resurreccion Hidalgo"],
        correctAnswer: 0
      },
      {
        question: "Who wrote the novel 'Noli Me Tangere'?",
        choices: ["A. Jose Rizal", "B. Nick Joaquin", "C. F. Sionil Jose", "D. N.V.M. Gonzalez"],
        correctAnswer: 0
      },
      {
        question: "What is the national language of the Philippines?",
        choices: ["A. Filipino", "B. English", "C. Tagalog", "D. Spanish"],
        correctAnswer: 0
      },
      {
        question: "What is the largest lake in the Philippines?",
        choices: ["A. Laguna de Bay", "B. Lake Lanao", "C. Taal Lake", "D. Lake Mainit"],
        correctAnswer: 0
      },
      {
        question: "What is the largest volcano in the Philippines?",
        choices: ["A. Mayon Volcano", "B. Mount Pinatubo", "C. Mount Apo", "D. Taal Volcano"],
        correctAnswer: 0
      },
      {
        question: "Who is the author of the novel 'To Kill a Mockingbird'?",
        choices: ["A. Harper Lee", "B. J.D. Salinger", "C. F. Scott Fitzgerald", "D. Mark Twain"],
        correctAnswer: 0
      },
      {
        question: "What is the chemical formula for water?",
        choices: ["A. H2O", "B. CO2", "C. NaCl", "D. CH4"],
        correctAnswer: 0
      },
      {
        question: "Who is the current president of the Philippines?",
        choices: ["A. Rodrigo Duterte", "B. Benigno Aquino III", "C. Gloria Macapagal-Arroyo", "D. Ferdinand Marcos, Jr."],
        correctAnswer: 3
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["A. Mars", "B. Venus", "C. Jupiter", "D. Saturn"],
        correctAnswer: 0
      },
      {
        question: "Who is the Greek god of the sea?",
        choices: ["A. Poseidon", "B. Zeus", "C. Apollo", "D. Hermes"],
        correctAnswer: 0
      },
      {
        question: "Which scientist developed the theory of evolution?",
        choices: ["A. Charles Darwin", "B. Isaac Newton", "C. Albert Einstein", "D. Marie Curie"],
        correctAnswer: 0
      }, 
      {
        question: "What is the coefficient in the expression 13x^2y^2?",
        choices: ["A. 2", "B. 13", "C. x", "D. y"],
        correctAnswer: 1
      }, 
      {
        question: "What do you call the young Filipinos, such as Rizal, del Pilar and Jaena, who were sent by their parents to study abroad especially in Europe?",
        choices: ["A. Principalia", "B. Peninsulares", "C. Ilustrados", "D. Insulares"],
        correctAnswer: 2
      },
      {
        question: "The designation for places on Earth that are of outstanding universal value to humanity is called?",
        choices: ["A. Archealogical Artifact", "B. World Heritage", "C. Guinness Book of World Records", "D. 7 Wonders of the World"],
        correctAnswer: 1
      },
      {
        question: "What do you call the holding of power by people selected on the basis of their talent?",
        choices: ["A. Meritocracy", "B. Monarchy", "C. Anarchy", "D. Ethnocracy"],
        correctAnswer: 0
      },
      {
        question: "Of the following, which is more inclusive?",
        choices: ["A. Kingdom", "B. Domain", "C. Phylum", "D. Genus"],
        correctAnswer: 1
      },
      {
        question: "This is the translation of Rizal's farewell poem written by Andres Bonifacio in Tagalog?",
        choices: ["A. Pahimakas", "B. Pag-ibig sa Tinubuang Lupa", "C. Sa Aking mga Kababata", "D. Makamisa"],
        correctAnswer: 0
      },
      {
        question: "What explains why a walking stick floats on the surface of water?",
        choices: ["A. Density", "B. Gravity", "C. Surface Tension", "D. Buoyancy"],
        correctAnswer: 2
      },
      {
        question: "What do you call the agreement made by Legaspi and Sikatuna in Bohol?",
        choices: ["A. Blood Compact", "B. Bayanihan", "C. Kapatiran", "D. Kasunduan"],
        correctAnswer: 0
      },
      {
        question: "What is the shape of vibrio cholerae?",
        choices: ["A. Rod", "B. Round", "C. Comma", "D. Spiral"],
        correctAnswer: 2
      },
      {
        question: "He is considered as the greatest English writer?",
        choices: ["A. Geoffrey Chaucer", "B. Edgar Allan Poe", "C. William Shakespeare", "D. Homer"],
        correctAnswer: 2
      },
      {
        question: "In Noli, this was his final message before his final breath, 'I shall die without seeing the dawn break upon my homeland'?",
        choices: ["A. Basilio", "B. Ibarra", "C. Crispin", "D. Elias"],
        correctAnswer: 3
      },
      {
        question: "Pag-aaral ng mga tuntunin kung paano inaayos ang mga salita sa loob ng pangungusap ay?",
        choices: ["A. Syntax", "B. Semantika", "C. Phonetics", "D. Phonology"],
        correctAnswer: 0
      },
      {
        question: "Which of the following musical elements is known as the loudness or softness of sound?",
        choices: ["A. Beat", "B. Dynamics", "C. Unity", "D. Rhythym"],
        correctAnswer: 1
      },
      {
        question: "The intensification of the interconnection of the countries in the world is referred to as?",
        choices: ["A. Imperialism", "B. United Nations", "C. Globalization", "D. ASEAN"],
        correctAnswer: 2
      },
      {
        question: "Prior to succeeding migrants who crossed the seas from across the Southern Philippines, the Negritos were the first settlers of the islands and considered as?",
        choices: ["A. Natives", "B. Aborigines", "C. Ancestors", "D. Nomads"],
        correctAnswer: 1
      },
      {
        question: "Who was Jose Rizal’s true love personified as Maria Clara in his novel Noli Me Tangere?",
        choices: ["A. Josephine Bracken", "B. Segunda Katigbak", "C. O-Sei San", "D. Leonor Rivera"],
        correctAnswer: 3
      },
      {
        question: "Rene Descartes said that our mind and thought are true identity and he called it?",
        choices: ["A. Courageous Spirit", "B. Self", "C. Soul", "D. Body"],
        correctAnswer: 2
      },
      {
        question: "A teacher who finds it hard to decide whether to accept the gift given by his student in exchange for higher grades or to reject and be fair in giving grades has a dilemma of which type?",
        choices: ["A. Moral dilemma", "B. False dilemma", "C. Ethical dilemma", "D. Epistemic dilemma"],
        correctAnswer: 1
      },
      {
        question: "What refers to the use of organisms, such as bacteria, in cleaning polluted sites?",
        choices: ["A. Biomagnification", "B. Biotechnology", "C. Bioremediation", "D. Bioengineering"],
        correctAnswer: 2
      },
      {
        question: "The prime factors of 56 are?",
        choices: ["A. 7, 4, 2", "B. 7, 2, 2, 2", "C. 7, 8", "D. 7, 4, 2, 1"],
        correctAnswer: 1
      },
      {
        question: "This was a prize-winning poem of Rizal when he was a student in UST. This poem proved that an Indio was not only equal but also more superior than the Spaniards in poetry writing.",
        choices: ["A. A La Juventud Filipina", "B. Mi Ultimo Adios", "C. La Indolencia de los Filipinos", "D. El Amor Patrio"],
        correctAnswer: 0
      },
      {
        question: "Ang panliligaw ay halimbawa ng anong tungkulin ng wika?",
        choices: ["A. Interaksyonal", "B. Personal", "C. Imahinatibo", "D. Regulatori"],
        correctAnswer: 1
      },
      {
        question: "A 2-dimensional area enclosed by a line that establishes contour is?",
        choices: ["A. Space", "B. Mass", "C. Volume", "D. Shape"],
        correctAnswer: 3
      },
      {
        question: "The newspaper of the Propaganda movement is called?",
        choices: ["A. La Liga Filipina", "B. Manila Bulletin", "C. La Solidaridad", "D. Kalayaan"],
        correctAnswer: 2
      },
      {
        question: "According to him, there is no permanent self?",
        choices: ["A. David Hume", "B. Rene Descartes", "C. John Locke", "D. Immanuel Kant"],
        correctAnswer: 0
      },

      {
        question: "Which among measures of central tendency is not influenced by outliers?",
        choices: ["A. Mode", "B. Weighted mean", "C. Median", "D. Mean"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is an organism that feeds on necrotic and decaying matter?",
        choices: ["A. Yeast", "B. Vulture", "C. Algae", "D. Parakeet"],
        correctAnswer: 0
      },
      {
        question: "Which religious missionaries first arrived in the Philippines?",
        choices: ["A. Dominicans", "B. Jesuits", "C. Franciscan", "D. Augustinians"],
        correctAnswer: 3
      },
      {
        question: "Whose philosophy gives prominence to faith in understanding the existence of God?",
        choices: ["A. St. Benedict", "B. St. Augustine", "C. St. John", "D. St. Peter"],
        correctAnswer: 1
      },
      {
        question: "Who is the mother of our national hero, Dr. Jose Rizal?",
        choices: ["A. Teresa Magbanua", "B. Concepcion Mercado", "C. Teodora Alonso", "D. Segunda Katigbak"],
        correctAnswer: 2
      },
      {
        question: "In Rizal’s poem which extolls love of national language, people who don't love their native language are compared to?",
        choices: ["A. Bayaning lalong tumatapang", "B. Lupain ng ginto at bulaklak", "C. Ibon mang may laying lumipad", "D. Hayop at malansang isda"],
        correctAnswer: 3
      },
      {
        question: "What refers to the content being sent in a communication?",
        choices: ["A. Message", "B. Channel", "C. Feedback", "D. Sender"],
        correctAnswer: 0
      },
      {
        question: "Which of the following is included in the communication's environment or setting?",
        choices: ["A. Message", "B. Channel", "C. Mood", "D. Source"],
        correctAnswer: 2
      },
      {
        question: "Communication usually begins when the message is crafted by whom?",
        choices: ["A. Message", "B. Sender", "C. Mood", "D. Receiver"],
        correctAnswer: 1
      },
      {
        question: "What can confirm the recipient's understanding of the message in a communication?",
        choices: ["A. Message", "B. Feedback", "C. Context", "D. Mood"],
        correctAnswer: 1
      },
      {
        question: "What can cause communication to be ineffective?",
        choices: ["A. Channel", "B. Feedback", "C. Mood", "D. Interference"],
        correctAnswer: 3
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

// Function to display current question
function displayQuestions() {
  var startIndex = currentQuestion;
  var endIndex = currentQuestion + questionsPerPage;
  var questionsHtml = "";

  for (var i = startIndex; i < endIndex; i++) {
    if (i < quiz.length) {
      var q = quiz[i];
      var choicesHtml = "";

      for (var j = 0; j < q.choices.length; j++) {
        choicesHtml +=
          '<label><input type="radio" name="choice' +
          i +
          '" value="' +
          j +
          '"> ' +
          q.choices[j] +
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
}

// Event listener for previous button
prevButton.addEventListener("click", function () {
  var inputs = document.getElementsByName("choice" + currentQuestion);
  saveSelectedAnswer(inputs);

  currentQuestion--;
  displayQuestions();
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
  
      result.innerHTML +=
        "<p><strong>Question " +
        questionNumber +
        ":</strong> " +
        question +
        "</p>" +
        "<p class='text-success'><strong>Correct Answer: " + correctAnswer + "</strong>" + "</p>";
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