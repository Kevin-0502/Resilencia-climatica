import { TabGroup, TabList, Tab, TabPanel, TabPanels, Flex } from "@tremor/react";
import React, { useState } from "react";
import OverallChart from "./OverallChart";
import logo from "../logo_UDB.png";
import logo_IIIE from "../IIIE.png";
import CardBase from "./CardBase";
import Charts from "./Charts";
import Contact from "./Contact";

const Dasboard = () => {

const [selectedView, setSelectedView] = useState(1)

    return(
<main className="bg-slate-200 p-6 sm-:p-10">
    

    <TabGroup>
        <TabList defaultValue={selectedView} handleSelect={ value => setSelectedView(value)} style={{ backgroundColor: '#545454'}}>
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
           <CardBase /> {/*Componente CardBase */}
<OverallChart /> {/*Componente de la grafica*/}
            </TabPanel>
            <TabPanel> {/*Pestaña 2*/}
           <Charts />
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