const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://keyval-store.herokuapp.com`;


document.getElementById("")

window.addEventListener("DOMContentLoaded", function () {

        //login account
        var loginuser = document.getElementById("loginform");
        loginuser.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("email").value;
            var userpassword = document.getElementById("password").value;

            fetch(`${STORAGE_API_HOST}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username,userpassword}),
              })
              .then((response) => {
                if (response.status === 200) {
                    console.log("Success!");
                    // console.log(token)
                    // sessionStorage.setItem("jwt", response.data.jwtToken);
                    console.log(response)
                    window.location.href = "./Gpa-calculator.html";
                } else {
                  response.json().then((error) => { throw error });
                }
              })
              .catch((error) => alert(error.message))
             


        })
})