const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const STORAGE_API_HOST = isLocalhost ? `http://localhost:3000` : `https://adesschoolmanagementsystemca2.herokuapp.com/ `;

//button form selector
const InsertButton = document.querySelector('#insert-btn');
const tableBody = document.querySelector('#courselist');

window.onload = function loadScreen() {
    GetCoursename()
    showModule()
    
}
function GetCoursename() {
    let Dropdown="";
    fetch(`${STORAGE_API_HOST}/GetCourseName`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
    })
        .then((response) => response.json())
        .then((data) => {
         for (let i=0; i<data.length; i++) {
            let coursename=data[i].coursename
            console.log(data[i]);
            console.log(coursename);
            Dropdown+=  "<option>"+coursename+"</option>"
            document.getElementById("Acourseid").innerHTML=Dropdown
         }  
        }) 
    }
           

function AddModule() {
    const modulecode=document.getElementById("Amodule-code").value;
    const modulename=document.getElementById("Amodule-name").value;
    const moduledetail=document.getElementById("Amodule-details").value;
    const semestername=document.getElementById("Asemestername").value;
    const coursename=document.getElementById("Acourseid").value;
    fetch(`${STORAGE_API_HOST}/GetCourseid/${coursename}`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
            .then((response) => response.json())
            .then((data) => { 
                const courseid=data.courseid;
                fetch(`${STORAGE_API_HOST}/Module`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({modulecode,modulename,moduledetail,courseid,semestername}),
            })
                .then((response) => {
                response.json() 
                console.log("successfully Added Module")
                showModule();
                }
                )
                }
            )}
            
            
    function showModule() {
        let html = ``;
        fetch(`${STORAGE_API_HOST}/Module`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                console.log(Object.keys(data).length)
                console.log("working")
                const length=Object.keys(data).length
                for (let i = 0; i < length; i++) {
                    let module = data.result[i];
                    let courseid = data.result[i].courseid;
                   console.log(courseid);
                fetch(`${STORAGE_API_HOST}/CourseName/${courseid}`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.json())
                .then(data => {
                    console.log(data)
                    let coursename=data[0].coursename;
                console.log(module);
                console.log(coursename);
              const row =`
              <tr>
               <td>${module["modulecode"]}</td>
                 <td>${module["modulename"]}</td>
                 <td>${module["moduledetail"]}</td>
                 <td>${coursename}</td>
                 <td>${module["semestername"]}</td>
             </tr>
           `;
                html += row;
              const tableBody = document.getElementById("courselist");  
              tableBody.innerHTML = html;
            })
        }
    })
    
            .catch((error) => alert(error.message))
    
      }



    function updateModule() {

    }



    function DeleteModule() {

    }
            
          


