var admin = sessionStorage.getItem("userrole")
var b = sessionStorage.getItem("userid")
var token=sessionStorage.getItem("token")

//admin feature
// admin can use admin mode or student mode
if (admin == "Admin") {
  const html = `
    <select  id="modes">
    <option value="Admin">Admin mode</option>
    <option value="Student">Student Mode</option>
    
  </select>
  <button type="submit" onclick="gopage()">go</button>
  `


  document.getElementById("changemode").innerHTML = html;

  function gopage() {

    if (document.getElementById("modes").value == "Admin") {

      window.location.href = "../view/AdminIndex.html"

    }
    else if (document.getElementById("modes").value == "Student") {

      window.location.href = "../view/Index.html"

    }




  }
}



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







//get user info
axios.get(`http://localhost:3000/user/` + b)
  .then((res) => {
    if (res.status === 200) {
      console.log("Success!");
      console.log(res)
      return res.data
    } else {
      this.alert("error")
    }
  })

  .then((data) => {


    for (let i = 0; i < data.result.length; i++) {
      const courseid = data.result[i].courseid;
      sessionStorage.setItem("courseid", courseid)
      //get what course user study now
      const posthtml = `
      <h5>${data.result[i].coursecode} ${data.result[i].coursename}</h5>
      
      `
      //get personal info
      const html = `
      <div>
              <h2>About Me</h2>
              <p>USERID: ${data.result[i].username}</p>
              <p>USEREMAIL: ${data.result[i].useremail}</p>
              <p>semester: ${data.result[i].semestername}</p>
              <p>CONTACT NUMBER:  ${data.result[i].usercontactnumber}</p>
              <p>ADDRESS:  ${data.result[i].useraddress}</p>
              </div>
              `


      document.getElementById("course").innerHTML = posthtml
      document.getElementById("personalinfo").innerHTML = html
    }

  }





  )
  .catch((error) => alert(error.message))










