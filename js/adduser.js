


window.addEventListener("DOMContentLoaded", function () {

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

        const data={
            username:a,
            userpassword:c,
             useremail:b,
             useraddress:e,
             usercontactnumber:d,
             userrole:g,
             courseid:f
          }

          axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: data,
            headers: { 'Content-Type': 'application/json' }
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