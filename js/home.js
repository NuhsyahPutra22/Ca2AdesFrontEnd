var a=sessionStorage.getItem("userrole")
var b=sessionStorage.getItem("userid")
// var courseid;

// if (a=="Admin"){
//     const  html=`
//     <select  id="modes">
//     <option value="Admin">Admin mode</option>
//     <option value="Student">Student Mode</option>
    
//   </select>`


// document.getElementById("changemode").innerHTML=html;


// if (document.getElementById("modes").value=="Admin"){
// const posthtml=`     <nav class="navbar navbar-expand-sm">
// <div class="container-fluid">
//   <ul class="navbar-nav">
//     <li class="nav-item">
//       <a class="nav-link" href="/view/AdminIndex.html">Home</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/view/AdminModule.html">Modules</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link active" href="/view/AminCourse.html">Courses</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/view/Gpa-calculator.html">Target Setting</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/view/AdminFeedback.html">Feedback From Student</a>
//     </li>
//   </ul>
// </div>
// </nav>`
// document.getElementById("navbar").innerHTML=posthtml
// }
// }







axios.get(`http://localhost:3000/user/`+b)      
.then((res) => {
  if (res.status === 200) {
      console.log("Success!");
      console.log(res)
      return res.data
  } else {
  this.alert("error")
  }
})

.then((data)=>{


  for (let i = 0; i < data.result.length; i++) {
const     courseid=data.result[i].courseid;
sessionStorage.setItem("courseid",courseid)
      const posthtml=`
      <h5>${data.result[i].coursecode} ${data.result[i].coursename}</h5>
      
      `
      const html=`
      <div>
              <h2>About Me</h2>
              <p>USERID: ${data.result[i].username}</p>
              <p>USEREMAIL: ${data.result[i].useremail}</p>
              <p>semester: ${data.result[i].semestername}</p>
              <p>CONTACT NUMBER:  ${data.result[i].usercontactnumber}</p>
              <p>ADDRESS:  ${data.result[i].useraddress}</p>
              </div>
              `
       
        
          document.getElementById("course").innerHTML=posthtml
          document.getElementById("personalinfo").innerHTML=html
          }
                  
  }





)
.catch((error) => alert(error.message))
const courseid=sessionStorage.getItem("courseid")
axios.get(`http://localhost:3000/ModulebyUser/`+b)      
.then((res) => {
  if (res.status === 200) {
      console.log("Success!");
      console.log(res)
      return res.data
  } else {
  this.alert("error")
  }
})

.then((data)=>{

      var posthtml=`<div>`
      for (let i = 0; i < data.result.length; i++) {
        
        posthtml+=`
        <h5>${data.result[i].modulecode} ${data.result[i].modulename}</h5>
        
        `
         posthtml+=`</div>`
       
        
          document.getElementById("module").innerHTML=posthtml
          }
                  
  }





)
.catch((error) => alert(error.message))









