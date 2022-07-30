var a=sessionStorage.getItem("userrole")

if (a=="Admin"){
    const  html=`
    <select  id="modes">
    <option value="Admin">Admin mode</option>
    <option value="Student">Student Mode</option>
    
  </select>`


document.getElementById("changemode").innerHTML=html;


if (document.getElementById("modes").value=="Admin"){
const posthtml=`     <nav class="navbar navbar-expand-sm">
<div class="container-fluid">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/view/AdminIndex.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/view/AdminModule.html">Modules</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="/view/AminCourse.html">Courses</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/view/Gpa-calculator.html">Target Setting</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/view/AdminFeedback.html">Feedback From Student</a>
    </li>
  </ul>
</div>
</nav>`
document.getElementById("navbar").innerHTML=posthtml
}




}
