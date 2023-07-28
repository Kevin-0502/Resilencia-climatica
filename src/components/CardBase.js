import React, {useEffect, useState} from "react";
import { Grid, Col, Card, Text, Metric, Title, Flex, Badge, Legend, CategoryBar, ProgressBar } from "@tremor/react";
import temperature from "../assests/img/thermometer.png";
import humidity from "../assests/img/Humity.png";
import co2 from "../assests/img/co2.png";
import planet from "../assests/img/planet-earth.png";
import ligh_bulb from "../assests/img/light-bulb.png";
import {
    StatusOnlineIcon
  } from "@heroicons/react/outline";
import OverallChartData from "./OverallChartData";
 

const CardBase = () =>{

        {/*Almacenamiento de lo valores de temperatura */}
            const [temperaturaCelsius, setTemperaturaCelsius] = useState(OverallChartData[0].temperatura);
            const [temperaturaFahrenheit, setTemperaturaFahrenheit] = useState(null);
          
            {/*Funcion que ayuda a convertir Celsius-Fahrenheit */}
            useEffect(() => {
                const celsius = OverallChartData[0].temperatura;
              const fahrenheit = ((celsius * 1.8)  + 32).toFixed(2);
              setTemperaturaCelsius(celsius);
              setTemperaturaFahrenheit(fahrenheit);
            }, [OverallChartData]);

    return(
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">

{/*Card temperature */}
{
    OverallChartData.map((item) => (
        <Col numColSpan={1} numColSpanLg={2}>
        <Card decoration="top" decorationColor="red">
        <Flex justifyContent="center">
        <Title>Temperatura actual</Title>
        </Flex>
        <Flex className="mt-6">
          <div>
              <img 
              alt="Temperatura"
              src={temperature}
              style={{
                  height: 60,
                  widows: 60
              }}
              />
          </div>
          <Metric>{temperaturaCelsius}°C / {temperaturaFahrenheit}°F</Metric>
          <Badge icon={StatusOnlineIcon}>LIVE</Badge>
      </Flex>
      <Flex className="mt-6">
          <Text>Medidor de temperatura (°C)</Text>
          <Text>{item.temperatura}°C</Text>
      </Flex>
      <CategoryBar 
      values={[20, 10, 70]}
    colors={["sky", "orange","rose"]}
    markerValue={item.temperatura}
    className="mt-3"
      />
       <Flex className="mt-6">
          <Text >Medidor de temperatura (°F)</Text>
          <Text >{temperaturaFahrenheit}°F</Text>
      </Flex>
      <CategoryBar 
      values={[68, 18, 14]}
      colors={["sky", "orange", "rose"]}
      markerValue={temperaturaFahrenheit}
      className="mt-3"
      />
          <Legend 
     className="mt-3"
categories={["Frío", "Cálido", "Caliente"]}
colors={["blue", "orange", "red"]}
/>
        </Card>
      </Col>
    ))
}
     
{/*Card Humidity */}
{
    OverallChartData.map((element) => (

<Card decoration="top" decorationColor="sky">
<Flex justifyContent="center">
<Title>Humedad actual</Title>
</Flex>
<Flex className="mt-6">
            <div>
        <img 
        alt="Humedad"
        src={humidity}
        style={{
            height: 60,
            widows: 60
        }}
        />
    </div>
    <Metric>{element.humedad_relativa}%</Metric>
    <Badge icon={StatusOnlineIcon}>LIVE</Badge>
</Flex>
<Flex className="mt-6">
                <Text className="mt-6">Medidor de humedad</Text>
                <Text className="mt-6">{element.humedad_relativa}%</Text>
</Flex>
<ProgressBar value={element.humedad_relativa} color="blue" className="mt-3" />
            <Legend 
            className="mt-3"
            categories={["Nivel de húmedad"]}
            colors={["blue"]}
            />
</Card>
    ))
}

  {/*Card CO2 */}
{
OverallChartData.map((items) => (
    <Col>
    <Card decoration="top" decorationColor="stone">
    <Flex justifyContent="center">
                  <Title>CO2 registrado</Title>
              </Flex>
              <Flex className="mt-6">
                  <div>
                      <img 
                      alt="CO2"
                      src={co2}
                      style={{
                          height: 60,
                          windows: 60
                      }}
                      />
                  </div>
                  <Metric>{items.CO2} PPM</Metric>
                  <Badge icon={StatusOnlineIcon}>LIVE</Badge>
              </Flex>
    </Card>
  </Col>
))
}
      
        {/*Card VOC */}
        {
            OverallChartData.map((temp) =>(
                <Card decoration="top" decorationColor="emerald">
                <Flex justifyContent="center">
        <Title>VOC registrado</Title>
        </Flex>
        <Flex className="mt-6">
<div>
    <img 
    alt="planet"
    src={planet}
    style={{
        height: 60,
        widows: 60
    }}
    />
</div>
<Metric>{temp.VOC} mg/m3</Metric>
<Badge icon={StatusOnlineIcon}>LIVE</Badge>
        </Flex>
              </Card>
            ))
        }
      
        {/*Card luminosidad */}
        {
OverallChartData.map((intensidad) =>(
    <Card decoration="top" decorationColor="yellow">
    <Flex justifyContent="center">
    <Title>Intensidad luminosa</Title>
    </Flex>
    <Flex className="mt-6">
<div>
<img 
alt="lightbulb"
src={ligh_bulb}
style={{
    height: 60,
    widows: 60
}}
/>
</div>
<Metric>{intensidad.intensidad_luminosa} LUX</Metric>
<Badge icon={StatusOnlineIcon}>LIVE</Badge>
    </Flex>
    </Card>
))
        }
      </Grid>
    )
}


export default CardBase