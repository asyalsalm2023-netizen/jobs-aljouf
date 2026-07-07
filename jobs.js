let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

const container=document.getElementById("jobs");
const search=document.getElementById("search");

function showJobs(list){

container.innerHTML="";

if(list.length===0){

container.innerHTML="<h2>لا توجد وظائف حالياً</h2>";

return;

}

list.forEach(job=>{

container.innerHTML+=`

<div class="card">

<h2>${job.title}</h2>

<p>📍 ${job.city}</p>

<p>🎓 ${job.education}</p>

<p>💰 ${job.salary}</p>

<button onclick='openJob(${JSON.stringify(job)})'>
عرض التفاصيل
</button>

</div>

`;

});

}

showJobs(jobs);

search.addEventListener("keyup",()=>{

const word=search.value.toLowerCase();

const result=jobs.filter(job=>

job.title.toLowerCase().includes(word) ||

job.city.toLowerCase().includes(word) ||

job.education.toLowerCase().includes(word)

);

showJobs(result);

});
function openJob(job){

localStorage.setItem("selectedJob",JSON.stringify(job));

location.href="job.html";

}
function filterJobs(type){

if(type==="الكل"){
showJobs(jobs);
return;
}

const result=jobs.filter(job=>job.category===type);

showJobs(result);

}