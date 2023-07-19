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
lastName: "Huezo",
UserName: "Alberto"
}
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
              <TableHeaderCell>UserName</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.position}</TableCell>
                <TableCell>
                  <Text>{item.fisrtName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.lastName}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.UserName}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
}

export default Contact