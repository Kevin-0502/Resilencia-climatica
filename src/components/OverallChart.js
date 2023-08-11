import React, {useEffect,useState} from 'react'
import { Card, Title, Subtitle,Badge } from "@tremor/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import url_data from "./Data"
import {
  StatusOnlineIcon
} from "@heroicons/react/outline";

const Chart = () => {

  const [overallchartdata,setOverallchartdata]=useState([])

  function fetch_last_data(){
    fetch(url_data).then(response=>response.json()).then(resjson=>setOverallchartdata(resjson[resjson.length-1]))
  }

  useEffect(()=>{
    fetch_last_data()
  },[]);

    return(
    <Card className="mt-6">
        <Title style={{fontWeight: 'bold'}}>
          Gráfica general de variables capturadas (Actualmente)
          <Badge style={{position: 'absolute', right: 30}} icon={StatusOnlineIcon} onClick={fetch_last_data()}>LIVE</Badge>
        </Title>
        <Subtitle>A continuación se muestran los valores de las variables capturadas.</Subtitle>
        <ResponsiveContainer className="mt-6" width="100%" height={300}>
        <BarChart
          width={100}
          height={300}
          data={[(overallchartdata)]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="updatedAt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temperatura" fill="red" formatter={(value) => `${value} °C`}/> {/* formato de cada data */}
          <Bar dataKey="humedad_relativa" fill="#3498DB" formatter={(value) => `${value} %`}/>
          <Bar dataKey="CO2" fill='grey' formatter={(value) => `${value} PPM`}/>
          <Bar dataKey="VOC" fill='green' formatter={(value) => `${value} mg/m3`}/>
          <Bar dataKey="intensidad_luminosa" fill="#F1C40F" formatter={(value) => `${value} LUX`}/>
        </BarChart>
        </ResponsiveContainer>
    </Card>
    );
}

export default Chart