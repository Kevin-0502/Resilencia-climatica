import React, {useEffect,useState} from 'react'
import { Card, Title, Subtitle } from "@tremor/react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function last_data (data) {
  return data[data.length - 1];
}

const Chart = () => {

  const [overallchartdata,setOverallchartdata]=useState([])

    var url_data='http://localhost:3000/api/list'
    useEffect(()=>{
      fetch(url_data).then(response=>response.json()).then(resjson=>setOverallchartdata(resjson))
      
    },[])

    return(
      

      <Card className="mt-6">
        <Title style={{fontWeight: 'bold'}}>Gráfica general de variables capturadas (Actualmente)</Title>
        <Subtitle>A continuación se muestran los valores de las variables capturadas.</Subtitle>
        <ResponsiveContainer className="mt-6" width="100%" height={300}>
        <BarChart
          width={100}
          height={300}
          data={[last_data(overallchartdata)]}
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
          <Bar dataKey="temperatura" fill="red" />
          <Bar dataKey="humedad_relativa" fill="#3498DB" />
          <Bar dataKey="CO2" fill='grey'/>
          <Bar dataKey="VOC" fill='green'/>
          <Bar dataKey="intensidad_luminosa" fill="#F1C40F" />
        </BarChart>
        </ResponsiveContainer>
        
      </Card>
    )
}

export default Chart