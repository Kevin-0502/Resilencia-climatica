import { TabGroup, TabList, Tab, TabPanel, TabPanels, Flex } from "@tremor/react";
import React, { useState, useEffect } from "react";
import OverallChart from "./OverallChart";
import logo from "../logo_UDB.png";
import logo_IIIE from "../IIIE.png";
import CardBase from "./CardBase";
import Charts from "./Charts";
import Contact from "./Contact";
import url_data from "./Data";


const Dasboard = () => {

    const [selectedView, setSelectedView] = useState(1)
    const [overallchartdata, setOverallchartdata] = useState([])
    const [data, setData] = useState([])
    const [dataInitial, setDataInitial] = useState(false);
    var timerselected = 300000

    async function fetch_last_data() {
        await fetch(url_data).then(response => response.json()).then(resjson => setOverallchartdata(resjson[resjson.length - 1]));
    }
    async function fetch_data() {
        fetch(url_data).then(response => response.json()).then(resjson => {
            setData(resjson);
            setDataInitial(true);
        });
    };

    useEffect(() => {
        fetch_last_data()
        fetch_data()
        const interval = setInterval(() => {
            fetch_last_data()
            fetch_data()
            console.log('Se volvio a hacer la peticion de datos')
        }, timerselected);
        return () => clearInterval(interval);
    }, []);


    return (
        <main className="bg-slate-200 p-6 sm-:p-10" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <TabGroup>
                <TabList defaultValue={selectedView} handleSelect={value => setSelectedView(value)} style={{ backgroundColor: '#545454', paddingLeft: 10, paddingRight: 10, borderRadius: 10 }}>
                    <Flex alignItems="center" justifyContent="start">
                        <Tab value={1} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}>Home</Tab>
                        <Tab value={2} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}>Gráficas</Tab>
                        <Tab value={3} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}>Contacto</Tab>
                    </Flex>
                    <img justifyContent="end"
                        alt="logo_UDB"
                        src={logo}
                        style={{
                            height: 80,
                            width: 80
                        }}
                    />
                    <img
                        alt="logo_IIIE"
                        src={logo_IIIE}
                        style={{
                            height: 70,
                            width: 70
                        }}
                    />
                </TabList>
                <TabPanels>
                    <TabPanel> {/*Pestaña 1*/}
                        {
                            dataInitial ?
                                <>
                                    <CardBase last_data={overallchartdata} /> {/*Componente CardBase */}
                                    <OverallChart overallchartdata={overallchartdata} /> {/*Componente de la grafica*/}
                                </>
                                :
                                <p style={{color: "white"}}>Cargando datos...</p>
                        }
                    </TabPanel>
                    <TabPanel> {/*Pestaña 2*/}
                    {
                        dataInitial ?
                        <Charts data={data} />
                        :
                        <p style={{color: "white"}}>Cargando datos...</p>
                    }
                    </TabPanel>
                    <TabPanel> {/*Pestaña 3 */}
                        <Contact />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </main>
    )
}

export default Dasboard