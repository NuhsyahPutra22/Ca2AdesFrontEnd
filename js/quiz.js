const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;


function submit() {
  // variables declaration
  var points = 0;
  // var q1 = document.quiz.q1.value;
  // var q2 = document.quiz.q2.value;
  // var q3 = document.quiz.q3.value;
  // var q4 = document.quiz.q4.value;
  // var q5 = document.quiz.q5.value;
  // var q6 = document.quiz.q6.value;
  // var q7 = document.quiz.q7.value;
  var answer = document.getElementById("");
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  var button = document.getElementById("button");

  for (let i=0; i > i.length; i++) {
    
  }

  // if else conditions here
  // Question 1
  if (q1 == "yes") {
    points += 2;
  } else if (q1 == "neutral") {
    points++;
  } else {
    points = points;
  }

  //Question 2
  if (q2 == "Java") {
    points += 2;
  } else if (q2 == "C#") {
    points++;
  } else {
    points = points;
  }

    //Question 3
    if (q3 == "Programming") {
      points += 2;
    } else if (q3 == "Gaming") {
      points++;
    } else {
      points = points;
    }

    //Question 4
    if (q4 == "SD") {
      points += 2;
    } else if (q4 == "IS") {
      points++;
    } else {
      points = points;
    }

    //Question 5
    if (q5 == "yes") {
      points += 2;
    } else if (q5 == "ok") {
      points++;
    } else {
      points = points;
    }

    //Question 6
    if (q6 == "kinesthetic") {
      points += 2;
    } else if (q6 == "Auditory") {
      points++;
    } else {
      points = points;
    }

    //Question 7
    if (q7 == "SD") {
      points += 2;
    } else if (q7 == "IS") {
      points++;
    } else {
      points = points;
    }

    quiz.style.display = "none";
    button.style.display = "none";

    // points results
    if (points > 10) {
      // result.textContext = `Your result s ${result}/20. Software Development`;
      result.innerHTML = `Your result is ${points}/14. Software Development`;
    } else if (points > 6) {
      // result.textContext = `Your result s ${result}/20. Immersive Simulation`;
      result.innerHTML = `Your result is ${points}/14. Immersive Simulation`;
    } else {
      // result.textContext = `Your result s ${result}/20. User Experience`;
      result.innerHTML = `Your result is ${points}/14. User Experience`;
    }
  
}

function refresh() {
  location.reload();
}