import { Badge, Card, CategoryBar, Flex, Grid, Metric, ProgressBar, Text, Title, Legend, Divider } from "@tremor/react";
import React, {useEffect, useState} from "react";
import temperature from "../assests/img/temperature.png";
import humity from "../assests/img/Humity.png";
import co2 from "../assests/img/co2.png";
import planet from "../assests/img/planet-earth.png";
import {
    StatusOnlineIcon
  } from "@heroicons/react/outline";
import { Col } from "reactstrap";

  {/*Data para la temperatura*/}
const data_temperatura = [ 
{
    temperatura: "36"
}
];


const data_humedad = [
    {
        humedad_relativa: "75"
    }
];

const CO2 = [
{
    CO2: "567"
}
];

const VOC = [
    {
VOC: "4.34"
    }
];

const CardGrid = () =>{
{/*Almacenamiento de lo valores de temperatura */}
    const [temperaturaCelsius, setTemperaturaCelsius] = useState(data_temperatura[0].temperatura);
    const [temperaturaFahrenheit, setTemperaturaFahrenheit] = useState(null);
  
    {/*Funcion que ayuda a convertir Celsius-Fahrenheit */}
    useEffect(() => {
        const celsius = data_temperatura[0].temperatura;
      const fahrenheit = ((celsius * 1.8)  + 32).toFixed(2);
      setTemperaturaCelsius(celsius);
      setTemperaturaFahrenheit(fahrenheit);
    }, [data_temperatura]);

    return(

        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="mt-6 gap-x-6 gap-y-6"> {/* Recorriendo los datos del arreglo*/}
            {
 data_temperatura.map((item) => ( 

    <Card key={item.title} decoration="top" decorationColor="red">

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
            <Text color="black">Medidor de temperatura (°C)</Text>
            <Text color="black">{item.temperatura}°C</Text>
        </Flex>
        <CategoryBar 
        values={[20, 10, 70]}
      colors={["sky", "orange","rose"]}
      markerValue={item.temperatura}
      className="mt-3"
        />
        <Flex className="mt-6">
            <Text color="black">Medidor de temperatura (°F)</Text>
            <Text color="black">{temperaturaFahrenheit}°F</Text>
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
))
            }

{/*Mapeo para humedad */}

           {
            data_humedad.map((element) => (
<Col>
                <Card key={element.title} decoration="top" decorationColor="sky">

                    <Flex justifyContent="center">
                        <Title>Humedad actual</Title>
                    </Flex>
                    <Flex className="mt-6">
                    <div>
                <img 
                alt="Humedad"
                src={humity}
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
                        <Text color="black">Medidor de humedad</Text>
                        <Text color="black">{element.humedad_relativa}%</Text>
                    </Flex>
                    <ProgressBar value={element.humedad_relativa} color="blue" className="mt-3" />
                    <Legend 
                    className="mt-3"
                    categories={["Nivel de húmedad"]}
                    colors={["blue"]}
                    />
                </Card>
                </Col>
            ))
           }

           {/*Mapeo para CO2 */}
           
           {
            CO2.map((items) => (
     
                <Card key={items.title} decoration="top" decorationColor="green">
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

                    {/*mapeo voc */}
                    {
VOC.map((temp) => (
    <Divider>
        <Flex justifyContent="center">
<Title className="mt-6">VOC registrado</Title>
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
    </Divider>
))
                    }
                    
                </Card>
            ))
           }
        
        </Grid>
       
    )
}

export default CardGrid