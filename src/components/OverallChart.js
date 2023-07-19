import React from "react";
import { Card, Title, BarChart, Subtitle, Flex } from "@tremor/react";
import overallchartdata  from "./OverallChartData";

const dataFormatter = (number) => {
  return Intl.NumberFormat("us").format(parseFloat(number)).toString();
};

const Chart = () => {
    return(
      <Card className="mt-6">
        <Title style={{fontWeight: 'bold'}}>Gráfica general de variables capturadas (Actualmente)</Title>
      <Subtitle style={{color: 'black'}}>A continuación se muestran los valores de las variables capturadas.</Subtitle>
      <BarChart
        className="mt-6"
        data={overallchartdata}
        index="topic"
        categories={["temperatura", "humedad_relativa", "CO2", "VOC", "intensidad_luminosa"]}
        colors={["red", "sky", "stone", "emerald", "yellow"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
    )
}

export default Chart