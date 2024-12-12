import React, { useEffect, useRef, useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { WalletContext } from "../App";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const summarizeData = (data) => {
  return data.reduce((acc, item) => {
    const category = item.category;
    const price = parseFloat(item.price) || 0;
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});
};

export const PieChart = () => {
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

export const BarChart = () => {
    const { transactions } = useContext(WalletContext);
    const chartRef = useRef(null);
  
    const summary = summarizeData(transactions);
    const labels = Object.keys(summary);
    const values = Object.values(summary);
  
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Spending by Category',
          data: values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          borderColor: ['#FF4364', '#1480C9', '#FFD42A', '#38B2A0'],
          borderWidth: 1,
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
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>Trending Spends by Category - Bar Chart</h2>
        <Bar
          data={chartData}
          ref={chartRef}
          options={{
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: { display: true, position: 'top' },
              tooltip: { enabled: true },
            },
            scales: {
              x: { title: { display: true, text: 'Categories' } },
              y: {
                title: { display: true, text: 'Spends ($)' },
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    );
  };