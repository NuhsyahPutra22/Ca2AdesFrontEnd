const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://keyval-store.herokuapp.com`;


// document.getElementById("")

window.addEventListener("DOMContentLoaded", function () {

        //login account
        var loginuser = document.getElementById("loginform");
        loginuser.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("email").value;
            var userpassword = document.getElementById("password").value;

            fetch(`http://localhost:3000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username,userpassword}),
              })
              .then((res) => {
            
                // console.log(response.json())
                if (res.status === 200) {
                    console.log("Success!");
                    // console.log(token)
                    // sessionStorage.setItem("jwt", response.data.jwtToken);
                    res.json()
                    console.log(res)
                    window.location.href = "../view/Module.html";
                } else {
                  res.json().then((error) => { throw error });
                }
              })
              .catch((error) => alert(error.message))
             


        })
})