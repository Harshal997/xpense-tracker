import React, { useEffect, useRef, useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { WalletContext } from "../App";

ChartJS.register(ArcElement, Tooltip, Legend);

const summarizeData = (data) => {
  return data.reduce((acc, item) => {
    const category = item.category;
    const price = parseFloat(item.price) || 0;
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});
};

const PieChart = ({ data }) => {
  const { transactions } = useContext(WalletContext);
  const chartRef = useRef(null);

  const summary = summarizeData(transactions);
  const labels = Object.keys(summary);
  const values = Object.values(summary);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#FDE006", "#A000FF", "#FF9304"],
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h2>Category Summary</h2>
      <Pie
        data={chartData}
        ref={chartRef}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            tooltip: { enabled: true },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
