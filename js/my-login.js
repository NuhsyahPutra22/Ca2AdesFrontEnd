const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;


const notificationtext = document.getElementById("loginform")


window.addEventListener("DOMContentLoaded", function () {

  //login account
  var loginuser = document.getElementById("loginform");
  loginuser.addEventListener("submit", function (event) {
    event.preventDefault();
    const requestBody = getvalue()

    if (requestBody.username === '') {
      text += 'Username';
      loginuser.innerHTML = text;
      if (requestBody.userpassword === '') {
        text += '&Password';
        loginuser.innerHTML = text
      }
    }

    else if (requestBody.userpassword === '') {
      text += 'Password';
      loginuser.innerHTML = text
    }

    else {
      text = '';
      loginuser.innerHTML = text


      //login 
      axios.post(`http://localhost:3000/login`, requestBody)
        .then((res) => {
          if (res.status === 200) {
            //success will go to index.html
            console.log("Success!");
            console.log(res)
            window.location.href = "./index.html";
            return res.data
          } else {
            res.json().then((error) => { throw error });
          }
        })

        .then((data) => {
          //store all data in sessionstorage
          sessionStorage.setItem("token", data.token)
          sessionStorage.setItem("username", data.username)
          sessionStorage.setItem("userrole", data.userrole)
          sessionStorage.setItem("userid", data.userid)
        })
        .catch((error) => alert(error.message))

    }

  })
})


function getvalue() {
  const username = document.getElementById("email").value;
  const userpassword = document.getElementById("password").value;
  const requestBody = {
    username: username,
    userpassword: userpassword
  }
  return requestBody
}









