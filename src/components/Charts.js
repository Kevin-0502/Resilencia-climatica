import React, { useEffect, useState } from "react";
import { Grid, Col, DateRangePicker, DateRangePickerItem, Card, Button, Flex, Title } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";
import url_data from "./Data";
import DataToExcel from "./DataToExcel";
import { subDays } from "date-fns";
import "bootstrap-icons/font/bootstrap-icons.css";

const ChartsData = () => {

  var url = url_data + '/date'
  var url_initial = url_data + '/top25'
  const [data, setData] = useState([])
  const [dataInitial, setDataInitial] = useState(false);
  const [fecha, setFechaInit] = useState();

  async function fetch_data(options) {
    await fetch(url, configRequesOptions(options)).then(response => (response).json()).then(resjson => {
      try {
        if ((resjson.data).length > 0) {
          setData(resjson.data)
          setDataInitial(true)
        }
        else {
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
  async function fetch_data_initial() {
    await fetch(url_initial).then(response => (response).json()).then(resjson => {
      try {
        if ((resjson.data).length > 0) {
          setData((resjson.data).reverse())
          setDataInitial(true)
        }
        else {
          setDataInitial(false);
        }
      } catch (error) {
        console.log(error);
        setDataInitial(false);
      }
    });
  }
  /*function getLastWeeksDate() {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 1,
    );
  }*/

  useEffect(() => {
    fetch_data_initial();
  }, []);

  return (
    <>
      <Card>
        <Flex justifyContent="space-between" alignItems="center">
          <DateRangePicker
            selectPlaceholder="Select range"
            value={fecha}
            onValueChange={fecha => setFechaInit(fecha)}>
            <DateRangePickerItem
              key="oneDay"
              value="oneDay"
              from={subDays(new Date(), 1)}
              to={subDays(new Date(), -1)}>
              1 día
            </DateRangePickerItem>
            <DateRangePickerItem
              key="ThreeDays"
              value="ThreeDays"
              from={subDays(new Date(), 3)}
              to={subDays(new Date(), -1)}
            >
              3 días
            </DateRangePickerItem>
            <DateRangePickerItem
              key="OneWeek"
              value="OneWeek"
              from={subDays(new Date(), 7)}
              to={subDays(new Date(), -1)}
            >
              1 semana
            </DateRangePickerItem>
          </DateRangePicker>

          <Flex justifyContent="space-between" alignItems="center" style={{ marginLeft: "10px" }}>
            <Button color="sky" onClick={() => {
              var dates = {
                initial_date: fecha.from,
                final_date: fecha.to
              };
              fetch_data(dates);
              console.log(fecha);
            }}><i className="bi bi-funnel-fill"></i> Filtrar</Button>
            {/* Exportando la data a excel */}
            <DataToExcel data={data} filename="Datos.xlsx" sheetName="Hoja de datos" />
          </Flex>
        </Flex>
      </Card>
      {dataInitial ? <>
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