import React from "react";
import CO2ChartData from "./CO2ChartData";
import { Card, Title, LineChart, Flex } from "@tremor/react";
import img_co2 from "../assests/img/co2.png";

const dataFormatterCO2 = (number) => `${Intl.NumberFormat("us").format(number).toString()}PPM`

const CO2Chart = () => {
    return(
<Card decoration="top" decorationColor="stone">
  <Flex>
  <Title>Gráfica CO2 registrado (PPM)</Title>
<img 
alt="co2"
src={img_co2}
style={{
  height: 60,
  widows: 60
}}
/>
  </Flex>
    <LineChart
      className="mt-6"
      data={CO2ChartData}
      index="day"
      categories={["CO2"]}
      colors={["stone"]}
      valueFormatter={dataFormatterCO2}
      yAxisWidth={40}
    />
  </Card>
    );
}

export default CO2Chart