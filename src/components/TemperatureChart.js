import React, {useEffect} from "react";
import { Card, Title, AreaChart, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex } from "@tremor/react"
import TemperatureChartData from "./TemperatureChartData";
import img_temp from "../assests/img/thermometer.png";

const dataFormatterTemperatureC= (number) => `${Intl.NumberFormat("us").format(number).toString()}°C`
const dataFormatterTemperatureF= (number) => `${Intl.NumberFormat("us").format(number).toString()}°F`

const TemperatureChart = () => {

     {/*Funcion que ayuda a convertir Celsius-Fahrenheit */}
 useEffect(() => {
    TemperatureChartData.forEach((item) => {
      const celsius = parseFloat(item["temperatura"]);
      const fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
      item["temperaturaF"] = fahrenheit;
    });
  }, []);

  return(
    <Card decoration="top" decorationColor="red">
    <TabGroup>
        <TabList>
          <Tab style={{ fontWeight: 'bold', color: '#000000', fontSize: 15 }}>Gráfica temperatura (°C)</Tab>
          <Tab style={{ fontWeight: 'bold', color: '#000000', fontSize: 15 }}>Gráfica temperatura (°F)</Tab>
        </TabList>
        <TabPanels>
        {/*Grafica con °C */}
        <TabPanel>
          <Flex>
          <Title className="mt-6">Gráfica temperatura registrada (°C)</Title>
         <img 
         alt="temperatura"
         src={img_temp}
         style={{
          height: 60,
          widows: 60
         }}
         />
          </Flex>
      
    <AreaChart
      className="h-72 mt-4"
      data={TemperatureChartData}
      index="day"
      categories={["temperatura"]}
      colors={["red"]}
      valueFormatter={dataFormatterTemperatureC}
    />
        </TabPanel>
        {/*Grafica con °F */}
        <TabPanel>
          <Flex>
          <Title className="mt-6">Gráfica temperatura registrada (°F)</Title>
          <img 
          alt="temperatura"
          src={img_temp}
          style={{
            height: 60,
            widows: 60
          }}
          />
          </Flex>
   
        <AreaChart
      className="h-72 mt-4"
      data={TemperatureChartData}
      index="day"
      categories={["temperaturaF"]}
      colors={["orange"]}
      valueFormatter={dataFormatterTemperatureF}
    />
        </TabPanel>
      </TabPanels>
      </TabGroup>
  </Card>
  )
}

export default TemperatureChart