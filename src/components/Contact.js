import React from 'react';
import img from "../assests/img/profile.png";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Flex
  } from "@tremor/react";

  const data = [
    {
      position: "1",
      fisrtName: "Kevin",
      lastName: "Jiménez",
      email: "kmjh140217@gmail.com"
      },{
        position: "2",
        fisrtName: "Oscar",
        lastName: "Alas",
        email: "oa3973392@gmail.com"
        },
  ];

const Contact = () => {
    return(
        <Card decoration="top" decorationColor="purple">
        <Flex>
        <Title>Contactame!</Title>
        <img 
        alt="User"
        src={img}
        style={{
            height: 60,
            widows: 60
        }}
        />
        </Flex>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Primer Nombre</TableHeaderCell>
              <TableHeaderCell>Apellido</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item,i) => (
              <TableRow key={i}>
                <TableCell>{item.position}</TableCell>
                <TableCell>
                  <Text>{item.fisrtName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.lastName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.email}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
}

export default Contact