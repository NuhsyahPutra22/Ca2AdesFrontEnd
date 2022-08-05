const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com `;



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






axios.get(`http://localhost:3000/Module`)      
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

  tbody+=`  <th scope="col" class="col-2" >${data.result[i].modulecode}</th>`
  tbody+=`<th scope="col" class="col-7" >${data.result[i].modulename}</th>`
  tbody+= `<th scope="col" class="col-3" >${data.result[i].moduledetail}</th>
`
}
tbody+=`</table>`


document.getElementById("modulelist").innerHTML=tbody

           
              })
              .catch((error) => alert(error.message))
           