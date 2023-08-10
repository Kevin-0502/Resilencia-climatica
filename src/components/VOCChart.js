import React, {useEffect, useState} from 'react';
import { Card, Title, Flex } from "@tremor/react";
import img_voc from "../assests/img/planet-earth.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import url_data from "./Data"

const dataFormatterVOC = (number) => `${Intl.NumberFormat("us").format(number).toString()}mg/m3`;

const VOCChart = () => {

  const [VOCChartData,setVOCChartData]=useState([])

  
  useEffect(()=>{
    fetch(url_data).then(response=>response.json()).then(resjson=>setVOCChartData(resjson))
    
  },[]);

   // Encuentra los valores máximos y mínimos de VOC en los datos 
  const VOC = VOCChartData.map(data => parseInt(data.VOC));
  const maxvoc = Math.max(...VOC);
  const minvoc = Math.min(...VOC);

  return(
  <Card decoration="top" decorationColor="emerald">
    <Flex>
    <Title>Gráfica VOC recolectado (mg/m3)</Title>
    <img 
      alt="planet"
      src={img_voc}
      style={{
        height: 60,
        widows: 60
      }}
    />
    </Flex>
    <ResponsiveContainer className="mt-8" width="100%" height={300}>
      <BarChart
          width={500}
          height={300}
          data={VOCChartData}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis domain={[minvoc, maxvoc]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="VOC" fill="#22BC00" formatter={dataFormatterVOC}/>
        </BarChart>
      </ResponsiveContainer>
  </Card>
    );
}
export default VOCChart;