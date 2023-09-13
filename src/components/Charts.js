import React from "react";
import { Grid, Col } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";

const ChartsData = ({data}) => {
  
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">

        {/*Card temperatura */}
    <Col numColSpan={1} numColSpanLg={2}>
     <TemperatureChart data={data}/> {/*componente graficas temperaturas */}
    </Col>

    {/*Card humedad */}
    <HumidityChart data={data}/> 
    {/*Card CO2*/}
    <Col>
      <CO2Chart data={data}/>
    </Col>
    <VOCChart data={data}/>
    <IntensityChart data={data}/>
  </Grid>
  )
}

export default ChartsData