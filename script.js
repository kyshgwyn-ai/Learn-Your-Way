// MODULES CONTENT
const modules = {
1: {
title:"Internet & Digital Systems",
read:`<h2>Module 1: Internet & Digital Systems</h2>
<p>Information and Communication Technology (ICT) integrates computers, networking, and software...</p>
<p>When you open a website, your device sends a request through your router to your ISP and finally to the server...</p>
<p><strong>Key Concepts:</strong> IP Address, DNS, Server, Packet Switching</p>`,
video:"https://www.youtube.com/embed/7_LPdttKXPc",
audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
visualImages:8,
practice:`<p>Arrange the Internet flow: Device → Router → ISP → Server</p>`
},

2: {
title:"Programming Fundamentals",
read:`<h2>Module 2: Programming Fundamentals</h2>
<p>Programming is giving step-by-step instructions to computers...</p>
<p>Key concepts: Algorithms, Variables, Data Types, Conditionals, Loops...</p>`,
video:"https://www.youtube.com/embed/7_LPdttKXPc",
audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
visualImages:8,
practice:`<p>Write a simple if-else condition. Identify data types.</p>`
},

3: {
title:"Cybersecurity",
read:`<h2>Module 3: Cybersecurity</h2>
<p>Cybersecurity protects systems from phishing, malware, and hacking...</p>
<p>Use strong passwords and 2FA to stay safe online.</p>`,
video:"https://www.youtube.com/embed/7_LPdttKXPc",
audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
visualImages:8,
practice:`<p>Create a strong password. Identify phishing examples.</p>`
},

4: {
title:"Cloud Computing",
read:`<h2>Module 4: Cloud Computing</h2>
<p>Cloud computing delivers computing services over the internet.</p>
<p>Models: SaaS, PaaS, IaaS</p>`,
video:"https://www.youtube.com/embed/7_LPdttKXPc",
audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
visualImages:8,
practice:`<p>Give two examples of cloud services.</p>`
},

5: {
title:"Web Development (HTML)",
read:`<h2>Module 5: Web Development</h2>
<p>HTML structures web pages using tags.</p>
<pre>&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>`,
video:"https://www.youtube.com/embed/7_LPdttKXPc",
audio:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
visualImages:8,
practice:`<p>Write a basic HTML page structure.</p>`
}
};

let currentModule = 1;

// INITIALIZATION
document.getElementById("streak").innerText = (localStorage.getItem("streak") || 0) + " days";
showModule(currentModule);

// FUNCTIONS
function showModule(num){
currentModule = num;
const module = modules[num];
document.getElementById("moduleTitle").innerText = module.title;
document.getElementById("read").innerHTML = module.read;
document.getElementById("practiceContent").innerHTML = module.practice;

// Set video & audio
document.getElementById("videoPlayer").src = module.video;
document.getElementById("audioPlayer").src = module.audio;

// Generate visuals
const container = document.getElementById("visual");
container.innerHTML = "";
for(let i=1;i<=module.visualImages;i++){
let img = document.createElement("img");
img.src = `https://via.placeholder.com/400x250?text=Module+${num}+Image+${i}`;
container.appendChild(img);
}

showFormat('read');
}

function showFormat(format){
document.querySelectorAll(".format-section").forEach(f=>f.classList.add("hidden"));
document.getElementById(format).classList.remove("hidden");

// Track format usage
let counts = JSON.parse(localStorage.getItem("formatCounts"))||{};
counts[format] = (counts[format]||0)+1;
localStorage.setItem("formatCounts", JSON.stringify(counts));
}
