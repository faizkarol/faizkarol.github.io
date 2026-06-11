const skillsCtx = document.getElementById('skillsChart');

new Chart(skillsCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Sports Analytics',
            'Business Analytics',
            'Data Analysis',
            'Decision Intelligence'
        ],
        datasets: [{
            data: [40,35,15,10]
        }]
    }
});

const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx,{
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
            label:'Growth',
            data:[10,20,15,30,40,55]
        }]
    }
});
