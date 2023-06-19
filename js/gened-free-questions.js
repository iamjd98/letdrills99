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
    question: "Which volcano is the largest in the Philippines?",
    choices: ["Mount Apo", "Mount Pinatubo", "Mayon Volcano", "Taal Volcano"],
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
    "<h3 class='text-success mb-3'>You scored " + score + " out of " + quiz.length + " questions." + "</h3>" +
    "</br>" +
    "<button class='btn btn-md btn-success' type='button' data-bs-toggle='modal' data-bs-target='#showAnswerKeyUpgradeModal'> Show Answer Key </button>";



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


function goToMainMenu() {
  // Redirect to index.html
  window.location.href = "index.html";
}

function refreshPage() {
  // Redirect to index.html
  window.location.href = "gened-free-questions.html";
}


