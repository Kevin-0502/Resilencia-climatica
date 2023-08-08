import React from "react";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";

const ChartsData = () => {
  
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">

        {/*Card temperatura */}
    <Col numColSpan={1} numColSpanLg={2}>
     <TemperatureChart /> {/*componente graficas temperaturas */}
    </Col>

    {/*Card humedad */}
    <HumidityChart /> 
  {/*Card CO2*/}
    <Col>
      <CO2Chart />
    </Col>
    <VOCChart />
    <IntensityChart />
  </Grid>
  )
}

export default ChartsData