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

const labelMap = {
  "Gx": "Gyroscope value in X dimension for IMU 1",
  "Gx2": "Gyroscope value in X dimension for IMU 2",
  "Gy": "Gyroscope value in Y dimension for IMU 1",
  "Gy2": "Gyroscope value in Y dimension for IMU 2",
  "Gz": "Gyroscope value in Z dimension for IMU 1",
  "Gz2": "Gyroscope value in Z dimension for IMU 2",
  "Ax": "Accelerometer value in X dimension for IMU 1",
  "Ax2": "Accelerometer value in X dimension for IMU 2",
  "Ay": "Accelerometer value in Y dimension for IMU 1",
  "Ay2": "Accelerometer value in Y dimension for IMU 2",
  "Az": "Accelerometer value in Z dimension for IMU 1",
  "Az2": "Accelerometer value in Z dimension for IMU 2",
  "Mx": "Magnetometer value in X dimension for IMU 1",
  "Mx2": "Magnetometer value in X dimension for IMU 2",
  "My": "Magnetometer value in Y dimension for IMU 1",
  "My2": "Magnetometer value in Y dimension for IMU 2",
  "Mz": "Magnetometer value in Z dimension for IMU 1",
  "Mz2": "Magnetometer value in Z dimension for IMU 2",
  "air": "Air Quality Index",
  "temperature": "Temperature °C",
  "humidity": "Humidity %",
  "pressure": "Pressure hPa",
  "iri1": "Instantaneous IRI value for IMU 1",
  "iri2": "Instantaneous IRI value for IMU 2",
};

export const LineChart = (props) => {
  const label = labelMap[props.heading] || props.heading;
  return (
    <div className="chart-bar-all">
      <Line
        data={{
          labels: props.labels.map(x => utcToDateTime(x)),
          datasets: [
            { // received
              label: label,
              data: props.data,
              backgroundColor: ["#36B9CC33"],
              borderColor: ["#36B9CC"],
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
              title: {
                display: true,
                text: 'Time',
              },
              ticks: {
                maxRotation: 0,
                minRotation: 0,
                padding: 10,
                fontSize: 14,
              },
              grid: {
                display: false,
              },
            }
          },
        }}
      />
    </div>
  );
};
