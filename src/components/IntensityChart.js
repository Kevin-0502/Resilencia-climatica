import React from 'react'
import { DonutChart, Card, Title, Subtitle, Flex } from "@tremor/react";
import IntensityChartData from "./IntensityChartData";
import { Col } from 'reactstrap';
import img_light from "../assests/img/light-bulb.png";

const dataFormatterluminosidad = (number) => `${Intl.NumberFormat("us").format(number).toString()} LUX`

const IntensityChart = () => {
    return(
      <Col>
         <Card className="max-w-lg" decoration="top" decorationColor="yellow">
          <Flex>
          <Title>Intensidad luminosa (LUX)</Title>
          <img 
          alt="light"
          src={img_light}
          style={{
            height: 60,
            widows: 60
          }}
          />
          </Flex>
      
        <Subtitle>Intensidad luminosa registrada (actualmente)</Subtitle>
        <DonutChart
          className="mt-6"
          data={IntensityChartData}
          category="intensidad_luminosa"
          index="name"
          valueFormatter={dataFormatterluminosidad}
          colors={["yellow"]}
        />
      </Card>
      </Col>
     
    );
}

export default IntensityChart