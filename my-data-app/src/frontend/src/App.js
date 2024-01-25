import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the Flask API endpoint
        fetch('/api/data')
            .then(response => response.json())
            .then(result => {
                // Update the state with the fetched data
                setData(result);

                // Your code to process the data and update the chart goes here
                // For example, you can use Chart.js to create a bar chart

                // Extracting data for chart
                const ageCategories = data.map(entry => entry.AgeCategory);
                const bmiValues = data.map(entry => entry.BMI);

                // Chart.js code
                const ctx = document.getElementById('myChart').getContext('2d');
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ageCategories,
                        datasets: [{
                            label: 'BMI Data',
                            data: bmiValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [data]); // Dependency array includes 'data' to trigger the effect when data changes

    return (
        <div className="App">
            <canvas id="myChart"></canvas>
        </div>
    );
}

export default App;



