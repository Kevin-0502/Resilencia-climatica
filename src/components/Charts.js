import React, { useEffect, useState } from "react";
import { Grid, Col, DateRangePicker, Card, Button, Flex, Title } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";
import url_data from "./Data";

const ChartsData = () => {

  var  url= url_data + '/date'
  var date1 = getLastWeeksDate();
  var date2 = new Date();
  var dates = {
    initial_date: date1,
    final_date: date2
  }
  const [data, setData] = useState([])
  const [dataInitial, setDataInitial] = useState(false);
  const [fecha, setFechaInit] = useState(new Date());

  async function fetch_data(options) {
    await fetch(url, configRequesOptions(options)).then(response => (response).json()).then(resjson => {
    console.log(resjson);
    try {
        if ((resjson.data).length > 0) {
        setData(resjson.data)
        setDataInitial(true)
        }
        else{
        setDataInitial(false);
        }
    } catch (error) {
        console.log(error);
        setDataInitial(false);
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

function getLastWeeksDate() {
  const now = new Date();
  return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() -5,
  );
}

useEffect(() => {
  fetch_data(dates);
}, []);

  return (
    <>
      <Card>
        <Flex justifyContent="around" >
        <DateRangePicker enableSelect={false} value={fecha} onValueChange={fecha1 => setFechaInit(fecha1)} />
        <Button color="sky" onClick={() => {
          var dates = {
            initial_date: fecha.from,
            final_date: fecha.to
          };
          fetch_data(dates);
        }}>Filtrar</Button>
        </Flex>
      </Card>
      {dataInitial? <>
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
      :
      <Card>
        <Flex>
          <Title>Seleccione un rango de fecha...</Title>
        </Flex>
      </Card>
      }
      </>
  )
}

export default ChartsData