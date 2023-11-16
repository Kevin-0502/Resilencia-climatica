import React, { useEffect, useState } from "react";
import { Grid, Col, DateRangePicker, Card, Button, Flex, DateRangePickerValue } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";
import url from "./Data";

const ChartsData = () => {

  var url_data = url + '/date'
  const [data, setData] = useState([])
  const [dataInitial, setDataInitial] = useState(false);
  const [fechaInit, setFechaInit] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());


  async function fetch_data(options) {
    await fetch(url_data, configRequesOptions(options)).then(response => (response).json()).then(resjson => {
      console.log(resjson);
      try {
        if ((resjson.data).length > 0) {
          setData(resjson.data)
          setDataInitial(true)
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  function configRequesOptions(data) {
    return {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
  };

  useEffect(() => {
    var date1 = new Date('11/11/2023');
    var date2 = new Date();
    var dates = {
      initial_date: date1,
      final_date: date2
    }
    fetch_data(dates);
  }, []);

  return (
    <>
      <Card><Flex justifyContent="around" >
        <DateRangePicker enableSelect={false} value={fechaInit} onValueChange={fecha1 => setFechaInit(fecha1)} />
        <DateRangePicker enableSelect={false} value={fechaFinal} onValueChange={fecha2 => setFechaFinal(fecha2)} />
        <Button color="sky" onClick={() => {
          alert("boton click");
          var dates = {
            initial_date: fechaInit.from,
            final_date: fechaFinal.from
          };
          fetch_data(dates);
        }}>Filtrar</Button>
      </Flex></Card>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        {/*Card temperatura */}
        <Col numColSpan={1} numColSpanLg={2}>
          <TemperatureChart data={data} /> {/*componente graficas temperaturas */}
        </Col>

        {/*Card humedad */}
        <HumidityChart data={data} />
        {/*Card CO2*/}
        <Col>
          <CO2Chart data={data} />
        </Col>
        <VOCChart data={data} />
        <IntensityChart data={data} />
      </Grid>
    </>
  )
}

export default ChartsData