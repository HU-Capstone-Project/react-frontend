import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function utcToDateTime(utcDt){
  
  const utcDt_conv = new Date(utcDt * 1000);

  if (utcDt_conv.getMonth() < 3 && utcDt_conv.getFullYear() < 2021){
    return utcDt;
  }
  else {
    return utcDt_conv.toLocaleString(); 
  }
    
}

export const LineChart = (props) => {
  console.log(props.data);
  return (
    <div className="chart-bar-all">
      <Line
        data={{
          labels: props.labels.map(x => utcToDateTime(x)),
          datasets: [
            { // received
              label: props.heading,
              data: props.data,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            y : {
              min: props.ymin,
              max: props.ymax,
              },
            x : {
              ticks: {
                maxRotation: 0,
                minRotation: 0
              }
            }
          },
          ticks: {
            maxTicksLimit: 4.5,
            
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};
