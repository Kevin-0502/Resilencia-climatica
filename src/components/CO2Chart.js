import React, {useState, useEffect} from "react";
import { Card, Title, Flex,Badge } from "@tremor/react";
import img_co2 from "../assests/img/co2.png";
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
import {
  StatusOnlineIcon
} from "@heroicons/react/outline";

const dataFormatterCO2 = (number) => `${Intl.NumberFormat("us").format(number).toString()}PPM`

const CO2Chart = () => {

  const [CO2ChartData,setCO2ChartData]=useState([])

  function fetch_data() {
    fetch(url_data).then(response=>response.json()).then(resjson=>setCO2ChartData(resjson))
  }

  useEffect(()=>{
    fetch_data()
  },[]);

   // Encuentra los valores máximos y mínimos de CO2 en los datos 
 const CO2 = CO2ChartData.map(data => parseInt(data.CO2));
 const maxco2 = Math.max(...CO2)+10;
 const minco2 = 0;

  return(
<Card decoration="top" decorationColor="stone">
  <Flex>
  <Title>Gráfica CO2 registrado (PPM)</Title>
    <Badge icon={StatusOnlineIcon} onClick={fetch_data()}>LIVE</Badge>
    <img 
    alt="co2"
    src={img_co2}
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
      data={CO2ChartData}
      margin={{
        top: 5,
        right: 10,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="createdAt" />
      <YAxis domain={[minco2, maxco2]}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="CO2"
        stroke="grey"
        activeDot={{ r: 8 }}
        formatter={dataFormatterCO2}
      />
    </LineChart>
        </ResponsiveContainer>
  </Card>
    );
}

export default CO2Chart