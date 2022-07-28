const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://keyval-store.herokuapp.com`;






// fetch (`http://localhost:3000/Course`,{
//     method:'GET',
//     headers: {
//      'Content-Type': 'application/json',
//     },
// }).then((response)=>{
// response.text()
// console.log(response)
// return response.data
// })
// .then((data)=>{
//  const html= `  <th scope="col" class="col-2" >${data.coursecode}</th>
//     <th scope="col" class="col-7" >${data.coursename}</th>
//     <th scope="col" class="col-3" >${data.courseabbrev}</th>
// `
// document.getElementById("courselist").innerHTML=html

// })
// .catch((error) => alert(error.message))



axios.get(`http://localhost:3000/Course`)      
              .then((res) => {
                if (res.status === 200) {
                    console.log("Success!");
                    
                    console.log(res)
                    // window.location.href = "../view/Module.html";
                    return res.data
                } else {
                  res.json().then((error) => { throw error });
                }
              })

              .then((data)=>{
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
           