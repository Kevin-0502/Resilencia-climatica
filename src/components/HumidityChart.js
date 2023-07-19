import React from "react";
import { Card, Title, LineChart, Flex } from "@tremor/react"
import data_humidity from "./HumidityChartData";
import img_humidity from "../assests/img/Humity.png";

const dataFormatterHumidity = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

const HumidityChart = () => {
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
    <LineChart
      className="mt-6"
      data={data_humidity}
      index="day"
      categories={["Humedad"]}
      colors={["sky"]}
      valueFormatter={dataFormatterHumidity}
      yAxisWidth={40}
    />
  </Card>
  );

}

export default HumidityChart
