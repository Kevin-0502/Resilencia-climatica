import React, {useState, useEffect} from "react";
import { Card, Title, Flex } from "@tremor/react"
import img_humidity from "../assests/img/Humity.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import url_data from "./Data"

const dataFormatterHumidity = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

const HumidityChart = () => {

  const [HumidityChartData,setHumidityChartData]=useState([])

  useEffect(()=>{
    fetch(url_data).then(response=>response.json()).then(resjson=>setHumidityChartData(resjson))
    
  },[]);

 // Encuentra los valores máximos y mínimos de humedad en los datos 
 const humedad = HumidityChartData.map(data => parseInt(data.humedad_relativa));
 const maxhumedad = Math.max(...humedad);
 const minhumedad = Math.min(...humedad);

  return(
<Card decoration="top" decorationColor="sky">
  <Flex>
  <Title>Gráfica humedades registradas (%)</Title>
  <img 
  alt="humidity"
  src={img_humidity}
  style={{
    height: 60,
    widows: 60
  }}
  />
  </Flex>
  <ResponsiveContainer className="mt-8" width="100%" height={300}>
  <LineChart
      width={500}
      height={300}
      data={HumidityChartData}
      margin={{
        top: 5,
        right: 10,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="createdAt" />
      <YAxis domain={[minhumedad, maxhumedad]}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="humedad_relativa"
        stroke="#3498DB"
        activeDot={{ r: 8 }}
        formatter={dataFormatterHumidity}
      />
    </LineChart>
        </ResponsiveContainer>
  </Card>
  );

}

export default HumidityChart
