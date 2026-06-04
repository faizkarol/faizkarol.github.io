// ======================
// THEME TOGGLE
// ======================

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeToggle.textContent =
document.body.classList.contains("light")
? "☀️"
: "🌙";

});

}

// ======================
// HERO LINE CHART
// ======================

const heroLineChart =
document.getElementById("heroLineChart");

if(heroLineChart){

new Chart(heroLineChart,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"
],

datasets:[{

label:"Analytics Activity",

data:[
12,
19,
15,
28,
35,
40,
55
],

borderColor:"#4f8cff",

backgroundColor:
"rgba(79,140,255,.15)",

fill:true,

tension:.4

}]

},

options:{

plugins:{
legend:{
display:false
}
},

scales:{
x:{
display:false
},
y:{
display:false
}
}

}

});

}

// ======================
// HERO DONUT
// ======================

const heroDonutChart =
document.getElementById("heroDonutChart");

if(heroDonutChart){

new Chart(heroDonutChart,{

type:"doughnut",

data:{

labels:[
"Sports",
"Business",
"Data",
"Decision"
],

datasets:[{

data:[
40,
35,
15,
10
],

backgroundColor:[
"#4f8cff",
"#6ea8ff",
"#8fc0ff",
"#bfd8ff"
],

borderWidth:0

}]

},

options:{

plugins:{
legend:{
display:false
}
},

cutout:"70%"

}

});

}

// ======================
// ACTIVITY BAR CHART
// ======================

const activityChart =
document.getElementById("activityChart");

if(activityChart){

new Chart(activityChart,{

type:"bar",

data:{

labels:[
"Projects",
"Research",
"Analytics",
"Visualization"
],

datasets:[{

data:[
90,
80,
95,
85
],

backgroundColor:[
"#4f8cff",
"#6ea8ff",
"#89bbff",
"#bfd8ff"
]

}]

},

options:{

plugins:{
legend:{
display:false
}
},

scales:{
y:{
display:false
},
x:{
ticks:{
color:"#9fbfff"
}
}
}

}

});

}

// ======================
// PORTFOLIO CHART
// ======================

const portfolioChart =
document.getElementById("domainChart");

if(portfolioChart){

new Chart(portfolioChart,{

type:"doughnut",

data:{

labels:[
"Sports Analytics",
"Business Analytics",
"Data Analysis",
"Decision Intelligence"
],

datasets:[{

data:[
40,
35,
15,
10
],

backgroundColor:[
"#4f8cff",
"#6ea8ff",
"#8fc0ff",
"#bfd8ff"
],

borderWidth:0

}]

},

options:{

responsive:true,

plugins:{

legend:{
position:"bottom",

labels:{
color:"#ffffff",
padding:20
}
}

},

cutout:"70%"

}

});

}

// ======================
// SCROLL ANIMATION
// ======================

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

document.querySelectorAll(
".analytics-card,.project-card,.timeline-item,.flow-item,.expertise-card,.contact-card"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ======================
// CARD HOVER EFFECT
// ======================

document.querySelectorAll(
".analytics-card,.project-card,.expertise-card"
).forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
(y / rect.height - .5) * -8;

const rotateY =
(x / rect.width - .5) * 8;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-4px)`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

}
);

});
