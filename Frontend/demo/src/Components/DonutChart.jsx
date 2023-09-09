import React, { useRef, useEffect } from 'react';
 import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DonutChart = ({ counts }) => {
  const chartRef = useRef();
  let chartInstance = null; // Store the chart instance reference

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    const data = {
      labels: counts.map(entry => entry.title),
      datasets: [{
        data: counts.map(entry => entry.count),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FDCB9E', '#5A9E6F', '#F76D57', '#7A6563'
        ],
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Destroy the previous chart instance, if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create the new chart instance
    chartInstance = new Chart(chartCanvas, {
      type: 'doughnut',
      data: data,
      options: options
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [counts]);

  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default DonutChart;
