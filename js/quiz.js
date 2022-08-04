const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;


function submit() {
  // variables declaration
  var points = 0;
  // var q = JSON.stringify(document.quiz.q.value);
  var q1 = document.getElementById("q1-input").value;
  var q2 = document.getElementById("q2-input").value;
  var q3 = document.getElementById("q3-input").value;
  var q4 = document.getElementById("q4-input").value;
  var q5 = document.getElementById("q5-input").value;
  var q6 = document.getElementById("q6-input").value;
  var q7 = document.getElementById("q7-input").value;
  var a = q7.split(',');
  // var answer = document.getElementById("");
  var result = document.getElementById("result");
  var quiz = document.getElementById("quiz");
  var button = document.getElementById("button");

  // if else conditions here
  // Question 1
  if (q1 == "1") {
    points += 2;
  } else if (q1 == "2") {
    points++;
  } else {
    points = points;
  }

  //Question 2
  if (q2 == "1") {
    points += 2;
  } else if (q2 == "2") {
    points++;
  } else {
    points = points;
  }

    //Question 3
    if (q3 == "1") {
      points += 2;
    } else if (q3 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 4
    if (q4 == "1") {
      points += 2;
    } else if (q4 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 5
    if (q5 == "1") {
      points += 2;
    } else if (q5 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 6
    if (q6 == "1") {
      points += 2;
    } else if (q6 == "2") {
      points++;
    } else {
      points = points;
    }

    //Question 7
    switch (a) {
      case "HTML":
        points++;
        break;
      case "CSS":
        points++;
        break;
      case "Java":
        points++;
        break;
      case "JavScript":
        points++;
        break;
      case "Python":
        points++;
        break;
      case "C#":
        points++;
        break;
      case "C++":
        points++;
        break;
      case "C":
        points++;
        break;
      case "Swift":
        points++;
        break;
      case "Ruby":
        points++;
        break;
      case "R":
        points++;
        break;
      case "Golang":
        points++;
        break;
      case "PHP":
        points++;
        break;
      case "Objective-C":
        points++;
        break;
      default:
        points = points;
    }

    quiz.style.display = "none";
    button.style.display = "none";

    // points results
    if (points > 15) {
      // result.textContext = `Your result s ${result}/20. Software Development`;
      result.innerHTML = `Your result is ${points}. Software Development`;
    } else if (points > 10) {
      // result.textContext = `Your result s ${result}/20. Immersive Simulation`;
      result.innerHTML = `Your result is ${points}. Immersive Simulation`;
    } else {
      // result.textContext = `Your result s ${result}/20. User Experience`;
      result.innerHTML = `Your result is ${points}. User Experience`;
    }
  
}

function refresh() {
  location.reload();
}

// connect
axios.get(`http://localhost:3000/Quiz`)      
              .then((res) => {
                if (res.status === 200) {
                    console.log("Success!");
                    console.log(res)
                    return res.data
                } else {
                  res.json().then((error) => { throw error });
                }
              })

              .then((data)=>{
                var tbody=`<table>`
                for (let i = 0; i < data.result.length; i++) {
                  tbody+=`<tbody>`

  tbody+=`<th scope="col" class="col-1" >${data.result[i].quizid}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q1}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q2}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q3}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q4}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q5}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q6}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q7}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q8}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q9}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].q10}</th>`
  tbody+=`<th scope="col" class="col-1" >${data.result[i].total_score}</th>`
}
tbody+=`</table>`


document.getElementById("quizlist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))