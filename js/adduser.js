



const userrole=sessionStorage.getItem("userrole")
const token=sessionStorage.getItem("token");

//check are u admin
//if no go to login page
if(userrole!=="Admin"){

alert("Your role is not Admin")
window.location.href="Login.html"


}
//get the course for dropdown list
  axios.get(`http://localhost:3000/Course`)      
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
    //value is show in courseid
      var dropdown=`<select id="courseid">`;
      for (let i = 0; i < data.result.length; i++) {
      dropdown+=`  <option value="${data.result[i].courseid}">${data.result[i].coursecode} ${data.result[i].coursename}</option>`

      }
      dropdown+=`</select>`
      document.getElementById("courseid").innerHTML=dropdown
  })







window.addEventListener("DOMContentLoaded", function () {





  //create new user by get all information
    var createuser=document.getElementById("adduser");

    createuser.addEventListener("submit", function(event) {
        event.preventDefault();
        let a= document.getElementById("username").value;
        let b= document.getElementById("email").value;
        let c= document.getElementById("password").value;
        let d= document.getElementById("contact").value;
        let e= document.getElementById("address").value;
        let f= document.getElementById("courseid").value;
        let g= document.getElementById("role").value;
        let h= document.getElementById("semestername").value;

        const data={
            username:a,
            userpassword:c,
             useremail:b,
             useraddress:e,
             usercontactnumber:d,
             userrole:g,
             courseid:f,
             semestername:h,
          }
//Authorization is add in
          axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: data,
            headers: {  "Authorization": "Bearer " + token}
          })      
                  .then((res) => {
                    if (res.status === 201) {
                        console.log("Success!");
                        alert("success");
                        window.location.href="../view/AdminIndex.html";
                        
                    } else {
                    alert("error");
                    }
                  })
          
                 
                  .catch((error) => alert(error.message))


    })




})