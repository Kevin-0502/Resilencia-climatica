import React, {useEffect,useState} from "react";
import { Card, Title, AreaChart, TabGroup, TabList, Tab, TabPanels, TabPanel, Flex } from "@tremor/react"

import img_temp from "../assests/img/thermometer.png";

const dataFormatterTemperatureC= (number) => `${Intl.NumberFormat("us").format(number).toString()}°C`
const dataFormatterTemperatureF= (number) => `${Intl.NumberFormat("us").format(number).toString()}°F`



function Fahrenheit (celsius) {
  const temperaturaFahrenheit = [];
  celsius.forEach((item,i) => 
  {
    temperaturaFahrenheit.push(
      {
        temperatura:((item.temperatura * 1.8) + 32).toFixed(2),
        updatedAt:item.updatedAt
      }
    )
  });
  return temperaturaFahrenheit;
}


const TemperatureChart = () => {

  const [overallchartdata,setOverallchartdata]=useState([])
  
  



    var url_data='http://localhost:3000/api/list'
    useEffect(() => {
      fetch(url_data).then(response=>response.json()).then(resjson=>setOverallchartdata(resjson))
      Fahrenheit(overallchartdata)
      //setTemperaturaFahrenheit(overallchartdata)
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
      data={overallchartdata}
      index="updatedAt"
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
      data={Fahrenheit(overallchartdata)}
      index="updatedAt"
      categories={["temperatura"]}
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