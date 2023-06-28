// Quiz data
var quiz = [
    {
        question: " Which of the following behaviors contributes positively to a teacher's ability to have a significant impact on the academic success of the younger generations in the country?",
        choices: ["Quality teacher preparation ", "Greatest prestige in the community", "Collaborative teaching approaches", "D. Student-led projects"],
        correctAnswer: 0
    },
    {
        question: " Is Teacher Chris's behavior considered ethical, given that she is actively engaged in community activities and has shown involvement in her uncle's mayoral campaign during an election period, despite being an elementary grades teacher? ",
        choices: ["No, because serving during election is very dangerous to life.  ", "No, because she should be non-partisan.", "No, because it may create a conflict of interest", "No, because it blurs professional boundaries"],
        correctAnswer: 1
    },
    {
        question: " What qualities of a teacher are reflected in their strong command of the subject matter, effective lesson planning, incorporation of engaging activities, and thorough student assessment? ",
        choices: ["Instructional qualities ", "Pedagogical qualities", "Professional qualities", "Personal qualities"],
        correctAnswer: 2
    },
    {
        question: " In what ways are educational institutions motivated to establish higher standards that surpass the minimum requirements for state recognition? ",
        choices: ["External Benchmarking", "Continuous Improvement Initiatives", "Academic Freedom", "Voluntary Accreditation"],
        correctAnswer: 3
    },
    {
        question: " Which statement accurately reflects society's expectations of professional teachers?",
        choices: ["The professional teacher is solely responsible for students' academic success.", "The professional teacher is concerned only with classroom teaching.", "Effective teaching is the primary duty of the professional teacher.", "The professional teacher plays a pivotal role in shaping future generations."],
        correctAnswer: 2
    },
    {
        question: " Is it mandatory for school heads and superintendents to possess a professional teacher's license?",
        choices: ["No, they only need administrative qualifications' academic success.", "Yes, since they are classified as teachers.", "No, since they do administrative functions only ", "Yes, to ensure educational expertise and understanding"],
        correctAnswer: 1
    },
    {
        question: " Based on William Garr's quote, 'People who introduce themselves with the same remark that they are 'just teachers' gives me despair in my heart', what behavior does he expect from teachers who introduce themselves by stating that they are 'just teachers,' and how does it make him feel?",
        choices: ["Avoid discussing their profession openly academic success.", "Downplay the significance of their profession.", "Work for selective admission o candidates to the teaching.", "Look everyone squarely in the eye and say 'I am a teacher'."],
        correctAnswer: 3
    },
    {
        question: " What does the shift in the professional role of teachers from being 'the sage on the stage' to 'guide from the side' indicate?",
        choices: ["Teachers should continue to prioritize being the center of attention", "Teachers stress their role as teachers.", "Teachers must act more as facilitators of learning.", "Teachers should distance themselves from student learning."],
        correctAnswer: 2
    },
    {
        question: " Which elements, similar to teaching, are considered characteristics of a profession? I. Extensive years of professional education II. Ongoing professional development III. Adherence to a professional code of ethicsp IV. Successful completion of a competency-based examination to obtain a diploma from TESDA",
        choices: ["I, III, and IV", "I, II, and IV", "I, II, and III", "I, II, III"],
        correctAnswer: 2
    }, 
    {
        question: " According to official requirements, how many hours should a classroom teacher spend in school if they arrive early in the morning and leave late in the evening?",
        choices: ["8 hours", "6 hours", "5 hours", "7 hours"],
        correctAnswer: 0
    },
    {
        question: " Is it possible for the academic coordinator's teacher certification to be revoked due to his excessive absence caused by his involvement in gambling? ",
        choices: ["No, because personal conduct outside of work is unrelated to teaching abilities", "Yes, because he's incompetent.", "Yes, because habitual gambling is a dishonorable conduct and is against the practice of teaching.", "No, because gambling is a personal matter and does not affect teaching performance."],
        correctAnswer: 2
    },
    {
        question: " What should Mrs. Cruz do when a parent approaches her with a concern about her daughter Mia's grade in comparison to her classmate Stella's grade?",
        choices: ["Refuse to show any record without the written approval of the principal.", "Show only the record of her daughter Mia. ", "Show only the record of Stella, the classmate.", "Refuse to show any record regardless of the situation."],
        correctAnswer: 1
    },
    {
        question: " Which section of the Code of Ethics is being referred to in the given situation where a teacher can report justifiable activities against an associate in writing without infringing upon the rights of the person involved",
        choices: ["Article V - Teacher and the Teaching Community", "Article IV - Teachers and the Profession ", "Article III - Teachers and Students", "Article II - Teachers and State"],
        correctAnswer: 0
    }, 
    {
        question: " Can you obtain a professional teacher's license after 2002 without passing the LET?",
        choices: ["No other way", "Yes, by converting your passing rating from the Professional Board for Teachers (PBET) to a license ", "Yes, by completing a teaching apprenticeship program.", "Yes, by submitting a portfolio of teaching experience and qualifications for evaluation."],
        correctAnswer: 1
    },
    {
        question: " Which of the following options represents the appropriate approach for managing students' records? I. Student records are securely stored in filing cabinets for safekeeping. II. Parents are provided with feedback on their children's performance. III. Teachers are responsible for completing the necessary information in the permanent records. IV. Records are available to anyone interested to promote transparency.",
        choices: ["I and II", "I and III", "II and IV", "III and IV"],
        correctAnswer: 0
    }, 
    {
        question: " Which of the following options describes the best relationship between the school and the community?",
        choices: ["Teacher-centered projects", "Community-led projects", "Partnership", "Student-centered projects"],
        correctAnswer: 2
    },
    {
        question: " Which of the following options guarantees a safe and protected setting for students within the school premises?",
        choices: ["Competitive academic programs and examinations", "Engaging and entertaining classroom activities", "Caring and protective teachers", "Technologically advanced facilities and equipment"],
        correctAnswer: 2
    },
    {
        question: " What is the primary objective of essentialist education, focusing on the conventional teaching of academic subjects?",
        choices: ["Science-based learning", "Thorough learning", "Experiential learning", "Progressive learning"],
        correctAnswer: 1
    },
    {
        question: " Which of the following statements demonstrate unfair stereotyping towards student-learners?",
        choices: [" Students from different cultural backgrounds bring rich perspectives and experiences to the learning environment.", "Students with physical disabilities possess remarkable resilience and can achieve academic success with appropriate support.", "Boys and girls demonstrate equal potential in excelling across various academic subjects.", "All students from peasant communities are dull."],
        correctAnswer: 3
    },
    {
        question: " What aspect should Teacher Julie be cautious of while teaching in a school located in a poverty-stricken slum area?",
        choices: [" Children's socio-economic status", "Children's innate intelligence level", "Children's physical appearances", "Children's ethnic backgrounds"],
        correctAnswer: 0
    },
    {
        question: " What is the underlying philosophy of Philippine schools that aim to foster equal opportunities for all, promote humanistic education, and emphasize lifelong learning?",
        choices: [" Perennialism", "Progressivism", "Existentialism", "Pragmatism"],
        correctAnswer: 1
    },
    {
        question: " What was the primary focus of Spartan education, which dedicated significant attention and time to the art of war and training soldier-citizens? In contrast, Athenian education prioritized individual excellence and aimed to offer:",
        choices: [" Extensive training in artistic disciplines such as music and dance", "Specialized vocational training in trade and craftsmanship", "Moral training and emphasized virtues to develop personality", "Advanced studies in philosophy and intellectual pursuits"],
        correctAnswer: 2
    },{
        question: " What are the rights granted to children in indigenous minorities, excluding one specific right?",
        choices: [" To practice and preserve their traditional cultural beliefs", " To have access to quality healthcare services", "To participate in decision-making processes affecting their communities", "To be exempted from formal education"],
        correctAnswer: 3
    },
    {
        question: " Which educational philosophy upholds the significance of universal values in shaping young minds towards broader ideals such as democracy, freedom, and human rights?",
        choices: [" Existentialism", "Behaviorism", "Constructivism", "Pragmatism"],
        correctAnswer: 0
    },
    {
        question: " Which option demonstrates a teacher's acknowledgment of the importance of human dignity?",
        choices: ["  Ignoring diverse perspectives and opinions", "Working with people of different views", "Discriminating against individuals based on their beliefs", "Promoting one's own views without considering others' opinions"],
        correctAnswer: 1
    },
    {
        question: " How would you describe modern progressive education??",
        choices: [" Rigid and traditional", "Authoritarian and strict", "Science-based", "Exclusively focused on rote memorization"],
        correctAnswer: 2
    },
    {
        question: " Which program does the Department of Education (DepEd) utilize to gather assistance and support from private and non-government sectors for programs aligned with DepEd's selection of aid packages?",
        choices: [" Public-Private Partnership Program", "Educational Sponsorship Initiative", "Non-Government Sector Collaboration Initiative", "Adopt-A-School Program"],
        correctAnswer: 3
    },
    {
        question: " Which Act mandates that professionals must acquire 45 units for the renewal of their licenses? This Act is also known as the Continuing Professional Development Act.",
        choices: [" RA 10912", "RA 7610", "RA 10931", "RA 7836"],
        correctAnswer: 0
    },
    {
        question: "According to Section 2 of RA 7836, also known as the Philippine Teachers Professionalization Act of 1994, the state acknowledges the crucial contribution of teachers to nation building and development through: ",
        choices: [" Technological advancements and innovation", "Responsible and literate citizenry", "Economic growth and prosperity", "RA Environmental sustainability and conservation"],
        correctAnswer: 1
    },
    {
        question: " The requirement for professional teachers to acquire competence in their specialization aligns with which pillar of learning?",
        choices: [" Learning to Do", "Learning to Be", " Learning to Know", "Learning to Live Together"],
        correctAnswer: 2
    },
    {
        question: " The 'Paaralan sa Bawat Barangay' initiative originates from the requirement set by ________ to establish a primary school in each municipality.",
        choices: [" The Education Act of 1982", "The Basic Education Reform Agenda", " The Universal Access to Quality Education Act", "The Education Decree of 1863"],
        correctAnswer: 3
    },
    {
        question: " ___________ refers to the legal provision that penalizes the abuse or mistreatment of a child, regardless of its frequency.",
        choices: [" RA 7610", "RA 7160", "RA 9208", "RA 9851"],
        correctAnswer: 0
    },
    {
        question: " What is the legislative framework that establishes teaching as a recognized profession following the adoption of the 1987 Constitution?",
        choices: [" RA 9173", " RA 7836", " RA 9293", "RA 10533"],
        correctAnswer: 1
    },
    {
        question: " Teacher Anne possesses a teaching license; however, she has been inactive in the teaching profession for a period of five years. Is she eligible to resume teaching?",
        choices: [" No, she must undergo a full reevaluation process to regain her teaching credentials.", " Yes, as long as she submits proof of teaching experience within the last two years.", " Yes, on the condition that she completes a refresher course consisting of 12 units.", "No, she needs to retake the licensing examination before returning to the teaching profession."],
        correctAnswer: 2
    },
    {
        question: " What traits are indicative of a teacher demonstrating empathy towards learners?",
        choices: [" Strict discipline and high expectations", " Indifference and detachment", " Authoritative control and assertiveness", " Caring and love"],
        correctAnswer: 3
    },
    {
        question: " According to the Code of Ethics for Professional Teachers, what criteria are appointments, promotions, and transfers based upon?",
        choices: [" Merit and Need", " Favoritism and nepotism", " Seniority and tenure", "Gender and age"],
        correctAnswer: 0
    },
    {
        question: " One aspect of an objective is that it should be __________ with the desired outcomes.",
        choices: [" Contradictory", " Aligned", " Irrelevant", " Arbitrary"],
        correctAnswer: 1
    },
    {
        question: " To cater to individuals who are unable to attend traditional classroom settings due to various circumstances, which of the following is implemented?",
        choices: [" Conventional Classroom Instruction", " Online Learning Management System", " Alternative Learning Delivery System", " Remedial Education Program"],
        correctAnswer: 2
    },
    {
        question: " What is the term used to describe the process carried out by curriculum developers when they enhance or alter specific elements of a particular program while retaining its core concepts intact?",
        choices: [" Curriculum overhaul", " Curriculum substitution", " Curriculum abandonment", "  Curriculum improvement"],
        correctAnswer: 3
    },
    {
        question: " Which statement about the subject-centered curriculum is false?",
        choices: [" There is a lack of collaborative interaction.", " There is a minimal level of interactive engagement.", " There is a low level of cooperative interaction.", "  There is a significant amount of competitive interaction."],
        correctAnswer: 3
    },
    {
        question: " How would you characterize Teacher Julie's approach in treating everyone in the class equally without showing favoritism? ",
        choices: [" Inclusive", " Biased", " Exclusive", "  Discriminatory"],
        correctAnswer: 0
    },
    {
        question: " How does Teacher Rosie respond when students provide an 'I don't know' answer, despite claiming she cannot accept it? ",
        choices: [" Probing", " Prompting", " Encouraging", "  Discouraging"],
        correctAnswer: 1
    },
    {
        question: " Which type of questioning practice is described as follows: the teacher asks a question, pauses for a while, and then calls on a student? ",
        choices: [" Asking closed-ended questions", "  Asking leading questions", " Asking non-directed question", "  Asking rhetorical questions"],
        correctAnswer: 2
    },
    {
        question: " What is the primary rationale behind teachers stating the objectives before utilizing instructional media? ",
        choices: [" To enhance students' understanding and retention of the lesson material.", " To motivate and engage students with interactive content.", " To create a visually captivating learning experience for students.", "  To determine which media to use best."],
        correctAnswer: 3
    },
    {
        question: " In this particular stage of a child's life, we will witness the initial signs of emotional bonding between the child and their mother. Which term correctly identifies this stage of development where the first indications of emotional attachment become apparent? ",
        choices: [" Infancy", " Toddlerhood", " Early Childhood", "  Late Childhood"],
        correctAnswer: 0
    },
    {
        question: " When referring to difficulties in learning, what term is used to describe a specific learning disorder related to reading? ",
        choices: [" Dyscalculia", " Dyslexia", " Dysgraphia", "  Dyspraxia"],
        correctAnswer: 1
    },
    {
        question: " Research conducted in the field of neuroscience has revealed that the human brain possesses an infinite capacity. What does this suggest? ",
        choices: [" Intelligence is solely determined by genetic factors.", " The brain's capacity is fixed and cannot be improved.", " Every child is a potential genius. ", "  Intellectual abilities are predetermined and cannot be enhanced."],
        correctAnswer: 2
    },
    {
        question: " According to Erikson's theory, what is the unresolved conflict experienced by an adult who struggles to develop a secure and mutually satisfying relationship with a life partner? ",
        choices: [" Generativity vs. Stagnation", " Autonomy vs.Shame and doubt", " Identity vs. Role confusion", "  Intimacy vs. Isolation"],
        correctAnswer: 3
    },
    {
        question: " When young children refer to all animals as 'dogs', which cognitive process, as explained by Piaget's theory of cognitive development, is being illustrated? ",
        choices: [" Object permanence", " Assimilation", " Assimilation", "  Conservation"],
        correctAnswer: 1
    },
    {
        question: " If this stage is not successfully fulfilled, it will lead to engaging in smoking and other vices. Which stage of Freud's Psychosexual theory is being referred to? ",
        choices: [" Oral Stage", " Anal Stage", " Phallic Stage", " Genital Stage"],
        correctAnswer: 0
    },
    {
        question: " Pia experiences feelings of envy and resentment when witnessing her father expressing love and affection towards her mother. According to Freud, this behavior can be attributed to which of the following concepts? ",
        choices: [" Oedipus Complex", " Electra Complex", " Inferiority Complex", " Attachment Complex"],
        correctAnswer: 1
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
    window.location.href = "index.php";
  }
  
  function refreshPage() {
    // Redirect to index.html
    window.location.href = "profed-free-questions.php";
  }
  
  
  