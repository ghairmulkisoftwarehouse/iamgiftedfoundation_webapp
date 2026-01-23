'use client'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const ImpactChart = () => {
  const data = {
    labels: ['', '', '', '', ''], // Matching the 4 grid sections in image
    datasets: [
      {
        label: 'Purple Line',
        data: [78, 25, 88, 70],
        borderColor: 'rgba(123, 104, 238, 0.8)', // Soft purple
        backgroundColor: 'transparent',
        tension: 0.5, // High tension for smooth spline
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        // The "Glow" effect
        segment: {
          borderCapStyle: 'round',
        },
        shadowBlur: 10,
        shadowColor: 'rgba(123, 104, 238, 0.3)',
      },
      {
        label: 'Red Line',
        data: [25, 72, 85, 95],
        borderColor: 'rgba(255, 99, 132, 0.8)', // Soft coral/red
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        shadowBlur: 10,
        shadowColor: 'rgba(255, 99, 132, 0.3)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        border: { display: false },
        ticks: {
          stepSize: 50,
          color: '#888',
          font: { size: 14 }
        },
        grid: {
          color: '#E0E0E0',
          // Creates the horizontal dashed lines
          borderDash: [5, 5],
          drawTicks: false,
        },
      },
      x: {
        border: { display: true, color: '#CCC' }, // The solid bottom line
        grid: {
          color: '#E0E0E0',
          // Creates the vertical dashed lines
          borderDash: [5, 5],
          drawTicks: false,
        },
        ticks: { display: false } // Image shows no x-axis labels
      },
    },
  };

  // Custom plugin to handle the line shadows (Glow effect)
  const shadowPlugin = {
    id: 'shadowPlugin',
    beforeDatasetDraw(chart, args) {
      const { ctx } = chart;
      ctx.save();
      const ds = args.meta.dataset;
      ctx.shadowColor = ds.options.shadowColor;
      ctx.shadowBlur = ds.options.shadowBlur;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 8; // Drop the shadow slightly below the line
    },
    afterDatasetDraw(chart) {
      chart.ctx.restore();
    },
  };

  return (
  <div style={{ background: 'transparent', width: '100%' }}>
  <div style={{ height: '150px' }}>
    <Line data={data} options={options} plugins={[shadowPlugin]} />
  </div>
</div>
  );
};

export default ImpactChart;