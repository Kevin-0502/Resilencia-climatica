import { TabGroup, TabList, Tab, TabPanel, TabPanels, Flex } from "@tremor/react";
import React, { useState, useEffect } from "react";
import OverallChart from "./OverallChart";
import logo from "../logo_UDB.png";
import logo_IIIE from "../IIIE.png";
import CardBase from "./CardBase";
import Charts from "./Charts";
import Contact from "./Contact";
import url_data from "./Data";
import "bootstrap-icons/font/bootstrap-icons.css";

const Dasboard = () => {
    const url = url_data + "/last";
    const [selectedView, setSelectedView] = useState(1)
    const [lastdata, setLastdata] = useState([])
    const [dataInitialLast, setDataInitialLast] = useState(false);
    var timerselected = 300000

    async function fetch_last_data() {
        await fetch(url).then(response => response.json()).then(resjson => {
            if ((resjson.data).length > 0) {
                setLastdata(resjson.data[0]);
                setDataInitialLast(true);
            }
        });
    }

    useEffect(() => {
        fetch_last_data();
        const interval = setInterval(() => {
            fetch_last_data()
            console.log('Se volvio a hacer la peticion de datos')
        }, timerselected);
        return () => clearInterval(interval);
    }, []);


    return (
        <main className="bg-slate-200 p-6 sm-:p-10" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <TabGroup>
                <TabList defaultValue={selectedView} handleSelect={value => setSelectedView(value)} style={{ backgroundColor: '#545454', paddingLeft: 10, paddingRight: 10, borderRadius: 10 }}>
                    <Flex alignItems="center" justifyContent="start">
                        <Tab value={1} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}><i className="bi bi-house-door-fill"></i> Home</Tab>
                        <Tab value={2} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}><i className="bi bi-bar-chart-fill"></i> Gráficas</Tab>
                        <Tab value={3} style={{ fontWeight: 'bold', color: '#D5D5D5', fontSize: 15 }}><i className="bi bi-person-circle"></i> Contacto</Tab>
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
                            dataInitialLast ?
                                <>
                                    <CardBase last_data={lastdata} /> {/*Componente CardBase */}
                                    <OverallChart overallchartdata={lastdata} /> {/*Componente de la grafica*/}
                                </>
                                :
                                <>
                                    <p style={{ color: "white" }}>Cargando datos...</p>
                                    <p style={{ color: "white" }}>Puede que no haya datos disponibles...</p>
                                </>
                        }
                    </TabPanel>
                    <TabPanel> {/*Pestaña 2*/}
                        {
                            dataInitialLast ?
                                <Charts />
                                :
                                <>
                                    <p style={{ color: "white" }}>Cargando datos...</p>
                                    <p style={{ color: "white" }}>Puede que no haya datos disponibles...</p>
                                </>
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