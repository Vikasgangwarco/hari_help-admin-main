import React from "react";
import { Line } from "react-chartjs-2"; // Chart.js line chart import
import { LineChart } from '@mui/x-charts/LineChart'; // MUI's line chart import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Necessary imports for Chart.js

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  // Data for Chart.js (Left chart)
  const chartJsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Line Chart",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0, // No curve (straight line)
      },
    ],
  };

  const chartJsOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart (Chart.js)",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  // Data for MUI LineChart (Right chart - Area Chart)
  const muiData = {
    xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
    series: [
      {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
        area: true, // This makes the chart an area chart
      },
    ],
  };

  return (
    <div className="chart-container">
      {/* Left Chart - Line Chart (Chart.js) */}
      <div className="chart-box">
        <h3>Line Chart (Chart.js)</h3>
        <Line data={chartJsData} options={chartJsOptions} />
      </div>

      {/* Right Chart - Area Chart (MUI LineChart) */}
      <div className="chart-box">
        <h3>Area Chart (MUI LineChart)</h3>
        <LineChart {...muiData} width={500} height={300} />
      </div>
    </div>
  );
};

export default ChartComponent;
