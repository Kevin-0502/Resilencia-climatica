import { Table } from "reactstrap";
import { useState,useEffect } from "react";


const Contact = () => {

    const [data,setData]=useState([]);

    var url='https://example-api-messages.onrender.com/api/list'
    useEffect(()=>{
        fetch(url).then(response=>response.json()).then(resjson=>setData(resjson))
    },[])

    return (
        <div>  
            <h1>Contact Me</h1>
            <Table hover>
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Username
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                    </tr>
                </tbody>
                </Table>
                {
                    data.map((item,index)=>(
                        <>
                        <p>{item.content}</p>
                        <p>{item.user}</p>
                        </>
                        
                    ))
                }
        </div>
    );
};

export default Contact;