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
  var q7Arr = q7.split(',');
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
    for (i=0; i< q7Arr.length; i++) {
      let x = q7Arr[i];
    
    switch (x) {
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
  }

    quiz.style.display = "none";
    button.style.display = "none";

    // points results
    if (points > 14) {
      // result.textContext = `Your result s ${result}/20. Software Development`;
      result.innerHTML = `Your result is ${points}. Software Development`;
    } else if (points > 9) {
      // result.textContext = `Your result s ${result}/20. Immersive Simulation`;
      result.innerHTML = `Your result is ${points}. Immersive Simulation`;
    } else {
      // result.textContext = `Your result s ${result}/20. User Experience`;
      result.innerHTML = `Your result is ${points}. User Experience`;
    }
  
    //connect
    // var a = document.getElementById("q1-input").value;
    // var b = document.getElementById("q2-input").value;
    // var c = document.getElementById("q3-input").value;
    // var d = document.getElementById("q4-input").value;
    // var e = document.getElementById("q5-input").value;
    // var f = document.getElementById("q6-input").value;
    // var g = document.getElementById("q7-input").value;

    const data={
      q1:q1,
      q2:q2,
      q3:q3,
      q4:q4,
      q5:q5,
      q6:q6,
      q7:q7,
      total_score:total_score
    }
    axios({
      method: 'post',
      url: 'http://localhost:3000/Quiz',
      data: data,
      headers: { 'Content-Type': 'application/json' }
      })      
            .then((res) => {
              if (res.status === 201) {
                  console.log("Success!");
                  alert("success");
                  location.reload();
              
              } else {
              alert("error");
              }
            })

       
            .catch((error) => alert(error.message))
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
  tbody+=`<th scope="col" class="col-1" >${data.result[i].total_score}</th>`
  tbody+=`<th scope="col" class="col-1" > <button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
}
tbody+=`</table>`


document.getElementById("quizlist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))
              function deleteQuizbtn(quizid){
                console.log(quizid);
                axios.delete("http://localhost:3000/Quiz/"+quizid, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(function (response) {
                    if (response.status === 200) {
                        alert('Delete successfull!');
                        location.reload();
                    } else {
                        alert('Failed to delete!')
                        console.log(response);
                    }
                })
                    .catch((error) => {
                        console.log(error);
                    })
            }


// function createAttempt(){

// var a = document.getElementById("q1-input").value;
// var b = document.getElementById("q2-input").value;
// var c = document.getElementById("q3-input").value;
// var d = document.getElementById("q4-input").value;
// var e = document.getElementById("q5-input").value;
// var f = document.getElementById("q6-input").value;
// var g = document.getElementById("q7-input").value;

// const data={
//   q1:a,
//   q2:b,
//   q3:c,
//   q4:d,
//   q5:e,
//   q6:f,
//   q7:g
// }
// axios({
//   method: 'post',
//   url: 'http://localhost:3000/Quiz',
//   data: data,
//   headers: { 'Content-Type': 'application/json' }
// })      
//         .then((res) => {
//           if (res.status === 201) {
//               console.log("Success!");
//               alert("success");
//               location.reload();
              
//           } else {
//           alert("error");
//           }
//         })

       
//         .catch((error) => alert(error.message))
// }