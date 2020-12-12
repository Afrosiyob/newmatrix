import React from "react";
import { Line } from "react-chartjs-2";
function StatisticChart() {
  const chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: true,
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      yAxes: [
        {
          gridLines: false,
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  };

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 99, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default StatisticChart;
