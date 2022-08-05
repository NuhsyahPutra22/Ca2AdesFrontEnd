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


//get all course
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
                //show in table
                var tbody=`<table>`
                for (let i = 0; i < data.result.length; i++) {
                  console.log(data.result[0].coursecode)
                  tbody+=`<tbody>`

  tbody+=`  <th scope="col" class="col-2" >${data.result[i].coursecode}</th>`
  tbody+=`<th scope="col" class="col-7" >${data.result[i].coursename}</th>`
  tbody+= `<th scope="col" class="col-3" >${data.result[i].courseabbrev}</th>
`
}
tbody+=`</table>`


document.getElementById("courselist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))
           