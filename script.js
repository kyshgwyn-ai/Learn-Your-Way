const modules = {
1: {
title:"Internet & Digital Systems",
read:`<h3>Understanding ICT</h3>
<p>Information and Communication Technology (ICT) refers to technologies used for communication, networking, and data processing...</p>
<p>When you open a website, your device sends packets through routers to your ISP...</p>
<p>IP Address identifies your device. DNS translates domains...</p>
<p>This system enables global communication and digital learning.</p>`,
practice:`<h3>Arrange the Flow</h3>
<p>Device → Router → ISP → Server</p>`
},
2:{
title:"Programming Fundamentals",
read:`<h3>Programming Basics</h3>
<p>Programming is giving step-by-step instructions to computers...</p>
<p>Key concepts include variables, data types, conditionals, loops...</p>
<p>Logic allows systems to make decisions.</p>`,
practice:`<h3>Identify Data Type</h3>
<p>Is "Hello" a string or integer?</p>`
},
3:{
title:"Cybersecurity",
read:`<h3>Online Protection</h3>
<p>Cybersecurity protects systems from phishing, malware, hacking...</p>
<p>Strong passwords and 2FA increase safety.</p>`,
practice:`<p>Create a strong password example.</p>`
},
4:{
title:"Cloud Computing",
read:`<h3>Cloud Systems</h3>
<p>Cloud computing provides services over the internet.</p>
<p>SaaS, PaaS, IaaS are major models.</p>`,
practice:`<p>Give 2 cloud storage examples.</p>`
},
5:{
title:"Web Development (HTML)",
read:`<h3>HTML Structure</h3>
<p>HTML builds web pages using tags.</p>
<pre>&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Hello&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>`,
practice:`<p>Write a simple heading tag.</p>`
}
};

let currentModule = 1;

document.getElementById("welcome").innerText =
"Welcome, " + localStorage.getItem("studentName");

document.getElementById("streak").innerText =
localStorage.getItem("streak") + " days";

function showModule(num){
currentModule = num;
document.getElementById("moduleTitle").innerText =
modules[num].title;

document.getElementById("read").innerHTML =
modules[num].read;

document.getElementById("practiceContent").innerHTML =
modules[num].practice;

generateImages();
showFormat("read");
}

function showFormat(format){
document.querySelectorAll(".format-section")
.forEach(sec=>sec.classList.add("hidden"));

document.getElementById(format).classList.remove("hidden");

trackPreference(format);
}

function generateImages(){
const container = document.getElementById("visual");
container.innerHTML="";
for(let i=1;i<=8;i++){
const img = document.createElement("img");
img.src = `https://via.placeholder.com/400x250?text=Module+${currentModule}+Image+${i}`;
container.appendChild(img);
}
}

function trackPreference(format){
let counts = JSON.parse(localStorage.getItem("formatCounts"))||{};
counts[format]=(counts[format]||0)+1;
localStorage.setItem("formatCounts",JSON.stringify(counts));
}

showModule(1);
