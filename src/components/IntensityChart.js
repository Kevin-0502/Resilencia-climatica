import React, {useEffect, useState} from 'react'
import { Card, Title, Flex } from "@tremor/react";
import { Col } from 'reactstrap';
import img_light from "../assests/img/light-bulb.png";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataFormatterluminosidad = (number) => `${Intl.NumberFormat("us").format(number).toString()} LUX`

const IntensityChart = () => {

  
  const [IntensityChartData,setIntensityChartData]=useState([])

  const url_data='http://localhost:3000/api/list';

  useEffect(() => {
    fetch(url_data).then(response=>response.json()).then(resjson=>setIntensityChartData(resjson))
}, []);

   // Encuentra los valores máximos y mínimos de intensidad en los datos 
   const Intensity = IntensityChartData.map(data => parseInt(data.intensidad_luminosa));
   const maxintensidad = Math.max(...Intensity);
   const minintensidad = Math.min(...Intensity);

    return(
      <Col>
         <Card className="max-w-lg" decoration="top" decorationColor="yellow">
          <Flex>
          <Title>Gráfica intensidad luminosa (LUX)</Title>
          <img 
          alt="light"
          src={img_light}
          style={{
            height: 60,
            widows: 60
          }}
          />
          </Flex>
        <ResponsiveContainer className="mt-8" width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={IntensityChartData}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis domain={[minintensidad, maxintensidad]}/>
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="intensidad_luminosa" stroke="#F1C40F" fill="#F1C40F" formatter={dataFormatterluminosidad}/>
        </AreaChart>
      </ResponsiveContainer>
      </Card>
      </Col>
     
    );
}

export default IntensityChart