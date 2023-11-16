import React, {useEffect, useState} from "react";
import { Grid, Col , DateRangePicker,Card,Button,Flex,DateRangePickerValue } from "@tremor/react";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import CO2Chart from "./CO2Chart";
import VOCChart from "./VOCChart";
import IntensityChart from "./IntensityChart";
import url from "./Data";

const ChartsData = () => {

  var url_data =url+'/date'
  const [data, setData] = useState([])
  const [dataInitial, setDataInitial] = useState(false);
  const [value, setValue] = useState(new Date())


    
    async function fetch_data(options) {
        fetch(url_data,configRequesOptions(options)).then(response => (response).json()).then(resjson => {
          console.log(resjson.data);
            if((resjson.data).length>0){
                setData(resjson.data)
                setDataInitial(true)
            }
        });
    };

    function configRequesOptions(data){
      return{
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(data)
        }
    }

  useEffect(() => {
    var date1=new Date('06/01/2023');
    var date2=new Date('11/28/2023')
    var dates={
        initial_date:date1,
        final_date:date2  
    }
    fetch_data(dates);
}, []);

  return (
    <>
    <Card><Flex justifyContent="around" >
      <DateRangePicker enableSelect={false} value={value} onValueChange={value=>setValue(value)}/>
      <Button color="sky" onClick={()=>{console.log(value)}}>Filtrar</Button>
    </Flex></Card>
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
  </>
  )
}

export default ChartsData