
axios.get(`http://localhost:3000/user`)      
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

tbody+=`  <th scope="col" class="col-2" >${data.result[i].username}</th>`
tbody+=`<th scope="col" class="col-3" >${data.result[i].useremail}</th>`
tbody+= `<th scope="col" class="col-3" >${data.result[i].coursename}</th>`
tbody+= `<th scope="col" class="col-3" >${data.result[i].semestername}</th>`
tbody+= `<th scope="col" class="col-3" ><button onclick="deleteuser(${data.result[i].userid})">delete</button></th>`
}
tbody+=`</table>`


document.getElementById("courselist").innerHTML=tbody


})
.catch((error) => alert(error.message))




