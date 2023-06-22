import data from './ChartData'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { Table } from 'reactstrap';


const Chart = () => {
    return (
        <div>
            <h1 className='d-flex justify-content-center'>Chart</h1>
            <div className='d-flex justify-content-center'>
            <LineChart
            width={750}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            UV
                        </th>
                        <th>
                            PV
                        </th>
                        <th>
                            AMT
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.uv}</td>
                                <td>{item.pv}</td>
                                <td>{item.amt}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </Table>
        </div>
    );
};

export default Chart;