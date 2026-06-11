const performanceCtx =
document.getElementById("performanceChart");

new Chart(performanceCtx, {
type: "line",
data: {
labels: [
"Jan","Feb","Mar","Apr",
"May","Jun","Jul","Aug"
],
datasets: [{
data: [20,45,30,60,42,70,62,90],
borderWidth: 3,
tension: 0.4
}]
},
options: {
plugins:{
legend:{
display:false
}
}
}
});

const domainCtx =
document.getElementById("domainChart");

new Chart(domainCtx,{
type:"doughnut",
data:{
labels:[
"Sports",
"Business",
"Decision"
],
datasets:[{
data:[40,35,25]
}]
}
});
