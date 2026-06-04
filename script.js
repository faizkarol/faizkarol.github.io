// ==========================
// THEME TOGGLE
// ==========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeToggle.textContent = "☀️";
}
else{
themeToggle.textContent = "🌙";
}

});

// ==========================
// PORTFOLIO DOMAIN CHART
// ==========================

const ctx = document.getElementById("domainChart");

if(ctx){

new Chart(ctx, {

type: "doughnut",

data: {

labels: [
"Sports Analytics",
"Business Analytics",
"Data Analysis",
"Decision Intelligence"
],

datasets: [{

data: [40,30,20,10],

backgroundColor: [
"#4f8cff",
"#6ea4ff",
"#89b7ff",
"#b6d2ff"
],

borderWidth: 0

}]

},

options: {

responsive: true,

plugins: {

legend: {
position: "bottom",
labels: {
color: "#ffffff",
padding: 20
}
}

},

cutout: "70%"

}

});

}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".widget,.project-card,.featured-project,.research-card,.expertise-card,.journey-node"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ==========================
// TILT EFFECT
// ==========================

document.querySelectorAll(
".widget,.project-card,.featured-project"
).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 10;
const rotateX = (y / rect.height - 0.5) * -10;

card.style.transform =
`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") === `#${current}`
){

link.classList.add("active");

}

});

});
