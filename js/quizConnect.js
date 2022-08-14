const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;

var b = sessionStorage.getItem("userid")
var token=sessionStorage.getItem("token")


if (token === null || isNaN(b)) {
  // show sign in link
   const html=`
   <li class="nav-item" >
   <a class="nav-link" href="Login.html">Login</a>
 </li>
   `
   document.getElementById("loginlogout").innerHTML=html
} else {
  // show log out link

  const html=`
  <li class="nav-item" >
  <a class="nav-link" href="Login.html">Log Out</a>
</li>
  `
  document.getElementById("loginlogout").innerHTML=html
  document.getElementById("loginlogout").click(function () {
    window.sessionStorage.clear();
    window.location.href="../view/Login.html"
    window.alert("Successfully Log Out");
})
 
}


// get all result
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
  tbody+=`<th scope="col" class="col-1" >${data.result[i].userid}</th>`
  tbody+=`<th scope="col" class="col-1" ><button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
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

// create quiz
function createAttempt(){

var a = document.getElementById("q1-input").value;
var b = document.getElementById("q2-input").value;
var c = document.getElementById("q3-input").value;
var d = document.getElementById("q4-input").value;
var e = document.getElementById("q5-input").value;
var f = document.getElementById("q6-input").value;
var g = document.getElementById("q7-input").value;
var userid = document.getElementById("user-input").value;
    const data={
        q1:a,
        q2:b,
        q3:c,
        q4:d,
        q5:e,
        q6:f,
        q7:g,
        userid:userid
    }
    axios({
      method: 'post',
      url: 'http://localhost:3000/Quiz',
      data: data,
    //   headers: {  "Authorization": "Bearer " + token}
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


        // show results
        function showAttempt() {
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
      
              .then((data) => {
                  var tbody = `<table>`
                  for (let i = 0; i < data.result.length; i++) {
                      console.log(data.result[0].quizid)
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].quizid}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q1}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q2}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q3}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q4}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q5}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q6}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].q7}</th>`
                      tbody+=`<th scope="col" class="col-1" >${data.result[i].userid}</th>`
                      tbody+=`<th scope="col" class="col-1" ><button onclick="deleteQuizbtn(${data.result[i].quizid})">DELETE</button></th>`
                  }
                  tbody += `</table>`
      
      
                  document.getElementById("quizlist").innerHTML = tbody
      
      
              })
              .catch((error) => alert(error.message));
      
      }
