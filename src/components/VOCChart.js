import React from 'react';
import VOCChartData from "./VOCChartData";
import { Card, Title, BarChart, Subtitle, Flex } from "@tremor/react";
import img_voc from "../assests/img/planet-earth.png";

const dataFormatterVOC = (number) => `${Intl.NumberFormat("us").format(number).toString()}mg/m3`

const VOCChart = () => {
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
    <BarChart
      className="mt-6"
      data={VOCChartData}
      index="name"
      categories={["VOC"]}
      colors={["emerald"]}
      valueFormatter={dataFormatterVOC}
      yAxisWidth={65}
    />
  </Card>
    );
}
export default VOCChart