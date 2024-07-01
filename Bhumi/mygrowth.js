document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const labels = ['1st semester', '2nd semester'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My Academic Growth',
            data: [3.36, 3.09],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
            ],
            borderWidth: 1,
            barThickness: 60 // Adjust the bar thickness here
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 4.00 // Ensure the highest point on the y-axis is 4.00
                }
            }
        }
    };

    new Chart(ctx, config);
});

