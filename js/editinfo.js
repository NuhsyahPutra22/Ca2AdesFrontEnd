const id=sessionStorage.getItem("userid")
const token=sessionStorage.getItem("token");
const userrole=sessionStorage.getItem("userrole")
if (token === null || isNaN(id)||userrole!=="Admin") {
  console.log("Redirecting to login...");
  if(userrole!=="Admin"){
      alert("you are no admin")
  }
  window.location.href = "../view/login.html";
}
else {
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

//get user info and auto fill in input
axios.get(`http://localhost:3000/user/`+id)      
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
    document.getElementById("email").value=data.result[i].useremail
    document.getElementById("password").value=data.result[i].userpassword
    document.getElementById("address").value=data.result[i].useraddress
    document.getElementById("contact").value=data.result[i].usercontactnumber

          }
                  
  }

)
.catch((error) => alert(error.message))



//button update click 
function updateinfo(){
    let a=    document.getElementById("email").value;
    let b=  document.getElementById("password").value;
    let c=   document.getElementById("address").value;
    let d=   document.getElementById("contact").value;
    console.log(id)
    // console.log(requestConfig)
    const data={
        userpassword:b,
        useremail:a,
         useraddress:c,
         usercontactnumber:d
      }

      //update from frontend to backend 
      axios({
        method: 'put',
        url: 'http://localhost:3000/user/'+id,
        data: data,
     
        headers: {  "Authorization": "Bearer " + token}
      })      
              .then((res) => {
                if (res.status === 201) {
                    console.log("Success!");
                    alert("success");
                    window.location.href = "../view/index.html";
                    
                } else {
                alert("error");
                }
              })
      
             
              .catch((error) => alert(error.message))





}

