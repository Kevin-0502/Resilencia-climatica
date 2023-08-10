import React, {useEffect, useState} from "react";
import { Grid, Col, Card, Text, Metric, Title, Flex, Badge, Legend, CategoryBar, ProgressBar } from "@tremor/react";
import thermometer from "../assests/img/thermometer.png";
import humidity_img from "../assests/img/Humity.png";
import co2 from "../assests/img/co2.png";
import planet from "../assests/img/planet-earth.png";
import ligh_bulb from "../assests/img/light-bulb.png";
import {
    StatusOnlineIcon
  } from "@heroicons/react/outline";
import url_data from "./Data"

const CardBase = () =>{

    const [temperature, setTemperature] = useState(null);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [CO2, setCO2] = useState(null);
    const [VOC, setVOC] = useState(null);
    const [Intensity, setIntensity] = useState(null);
  
  //temperature
    useEffect(() => {
      fetch(url_data)
        .then(response => response.json())
        .then(resjson => {
          if (Array.isArray(resjson) && resjson.length > 0) {
            // Ordenar los objetos en orden descendente basado en la propiedad "createdAt"
            resjson.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            // Extraer la temperatura del último objeto y establecerla en el estado
            const celsius = parseFloat(resjson[0].temperatura);
            setTemperature(celsius);
            const fahrenheit = (celsius * 9/5) + 32;
            setTemperatureFahrenheit(fahrenheit.toFixed(2));
          } else {
           //no pasa nada
          }
        })
        .catch(error => {
        });
    }, []);
//humidity
    useEffect(() => {
        fetch(url_data)
          .then(response => response.json())
          .then(resjson => {
            if (Array.isArray(resjson) && resjson.length > 0) {
              // Ordenar los objetos en orden descendente basado en la propiedad "createdAt"
              resjson.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              // Extraer la humedad del último objeto y establecerla en el estado
              const humidity = parseFloat(resjson[0].humedad_relativa);
              setHumidity(humidity);
            } else {
             //no pasa nada
            }
          })
          .catch(error => {
           
          });
      }, []);
//CO2
      useEffect(() => {
        fetch(url_data)
          .then(response => response.json())
          .then(resjson => {
            if (Array.isArray(resjson) && resjson.length > 0) {
              // Ordenar los objetos en orden descendente basado en la propiedad "createdAt"
              resjson.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              // Extraer CO2 del último objeto y establecerla en el estado
              const CO2 = parseFloat(resjson[0].CO2);
              setCO2(CO2);
            } else {
             //no pasa nada
            }
          })
          .catch(error => {
           
          });
      }, []);
//VOC
      useEffect(() => {
        fetch(url_data)
          .then(response => response.json())
          .then(resjson => {
            if (Array.isArray(resjson) && resjson.length > 0) {
              // Ordenar los objetos en orden descendente basado en la propiedad "createdAt"
              resjson.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              // Extraer VOC del último objeto y establecerla en el estado
              const VOC = parseFloat(resjson[0].VOC);
              setVOC(VOC);
            } else {
             //no pasa nada
            }
          })
          .catch(error => {
           
          });
      }, []);
//intensity
      useEffect(() => {
        fetch(url_data)
          .then(response => response.json())
          .then(resjson => {
            if (Array.isArray(resjson) && resjson.length > 0) {
              // Ordenar los objetos en orden descendente basado en la propiedad "createdAt"
              resjson.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              // Extraer intensidad del último objeto y establecerla en el estado
              const intensidad = parseFloat(resjson[0].intensidad_luminosa);
              setIntensity(intensidad);
            } else {
             //no pasa nada
            }
          })
          .catch(error => {
           
          });
      }, []);

    return(
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">

{/*Card temperature */}
{
        <Col numColSpan={1} numColSpanLg={2}>
        <Card decoration="top" decorationColor="red">
        <Flex justifyContent="center">
        <Title>Temperatura actual</Title>
        </Flex>
        <Flex className="mt-6">
          <div>
              <img 
              alt="Temperatura"
              src={thermometer}
              style={{
                  height: 60,
                  widows: 60
              }}
              />
          </div>
          <Metric>{temperature}°C / {temperatureFahrenheit}°F</Metric>
          <Badge icon={StatusOnlineIcon}>LIVE</Badge>
      </Flex>
      <Flex className="mt-6">
          <Text>Medidor de temperatura (°C)</Text>

          <Text>{temperature}°C</Text>

      </Flex>
      <CategoryBar 
      values={[20, 10, 70]}
    colors={["sky", "orange","rose"]}
    markerValue={temperature}
    className="mt-3"
      />
       <Flex className="mt-6">

          <Text>Medidor de temperatura (°F)</Text>
          <Text>{temperatureFahrenheit}°F</Text>

      </Flex>
      <CategoryBar 
      values={[68, 18, 14]}
      colors={["sky", "orange", "rose"]}
      markerValue={temperatureFahrenheit}
      className="mt-3"
      />
          <Legend 
     className="mt-3"
categories={["Frío", "Cálido", "Caliente"]}
colors={["blue", "orange", "red"]}
/>
        </Card>
      </Col>
}
     
{/*Card Humidity */}
{

<Card decoration="top" decorationColor="sky">
<Flex justifyContent="center">
<Title>Humedad actual</Title>
</Flex>
<Flex className="mt-6">
            <div>
        <img 
        alt="Humedad"
        src={humidity_img}
        style={{
            height: 60,
            widows: 60
        }}
        />
    </div>
    <Metric>{humidity}%</Metric>
    <Badge icon={StatusOnlineIcon}>LIVE</Badge>
</Flex>
<Flex className="mt-6">
                <Text className="mt-6">Medidor de humedad</Text>

                <Text className="mt-6">{humidity}%</Text>

               
</Flex>
<ProgressBar value={humidity} color="blue" className="mt-3" />
            <Legend 
            className="mt-3"
            categories={["Nivel de húmedad"]}
            colors={["blue"]}
            />
</Card>
   
}

  {/*Card CO2 */}
{
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
                  <Metric>{CO2} PPM</Metric>
                  <Badge icon={StatusOnlineIcon}>LIVE</Badge>
              </Flex>
    </Card>
  </Col>

}
      
        {/*Card VOC */}
        {
          
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
<Metric>{VOC} mg/m3</Metric>
<Badge icon={StatusOnlineIcon}>LIVE</Badge>
        </Flex>
              </Card>
            
        }
      
        {/*Card luminosidad */}
        {
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
<Metric>{Intensity} LUX</Metric>
<Badge icon={StatusOnlineIcon}>LIVE</Badge>
    </Flex>
    </Card>
        }
      </Grid>
    )
}


export default CardBase