var xValues = ['Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Ag',
'Sep',
'Oct',
'Nov',
'Dec'];
var yValues = [25000,50000,75000,100000];

new Chart("myChart", {
  type: "line",
  data: {
    
    labels: xValues,
    datasets: [{
      label: null,
      lineTension: 0,
      backgroundColor: "#e23b3b",
      borderColor: "rgba(0,0,255,0.1)",
      data: [10000, 14260, 35478, 21244, 84741, 28130, 71458,67894,49857,57489,94458,36214],
      lineTension: 0.2
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
    responsive: true,
    maintainAspectRatio: false,
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    },
  }
});

const ctx = document.getElementById('myChart2');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: '# Volume',
            data: [32, 19, 44, 35, 12, 53],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      legend: {
        display: false
    },
      responsive: true,
      aspectRatio: 1,
      
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var xValues = ["Bitcoin", "ETH", "Tether", "CRO", "BNB"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#FFD700",
  "#1414F2",
  "#32FA00",
  "#6D6E9C",
  "#FFAC03"
];

new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    aspectRatio: 1,
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
