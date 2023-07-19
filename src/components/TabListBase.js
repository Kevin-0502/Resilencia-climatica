import { Tab, TabGroup, TabList, TabPanel, TabPanels, Card, Title, AreaChart } from "@tremor/react";
import React, { useState } from "react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const TabListBase = () => {
    const [selectedView, setSelectedView] = useState(1)
    return(
  <TabGroup>
 <TabList>
            <Tab>Pestaña 1</Tab>
            <Tab>Pestaña 2</Tab>
            <Tab>Pestaña 3</Tab>
            <Tab>Pestaña 4</Tab>
            <Tab>Pestaña 5</Tab>
  </TabList>
  <TabPanels>
    {/*pestaña 1 */}
    <TabPanel>

    <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis"]}
      colors={["indigo"]}
      valueFormatter={dataFormatter}
    />
  </Card>

    </TabPanel>
    {/*pestaña 2 */}
    <TabPanel>
  <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["The Pragmatic Engineer"]}
      colors={["cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
    </TabPanel>
    </TabPanels>   
  </TabGroup>
       
      
    )
}

export default TabListBase