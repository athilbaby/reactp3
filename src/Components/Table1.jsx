import { Table,TableBody,TableCell,TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {
  const [students,setStudents] =useState([
    {name:"Athil",rollNo:"18",address:"xyz",class:"12"},
    {name:"Jebin",rollNo:"33",address:"abc",class:"12"},
    ]);
  return (
    <div style={{paddingTop:'100px'}}>
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                 <TableCell>Si no:</TableCell>
                 <TableCell align="right">Name</TableCell>
                 <TableCell align="right">Roll no:&nbsp;</TableCell>
                 <TableCell align="right">address&nbsp;</TableCell>
                 <TableCell align="right">class&nbsp;</TableCell>   
                  </TableRow>
               </TableHead>
            <TableBody>
              {students.map((student,index)=>{
                return(
                  <TableRow key={index}>
                    
                    <TableCell>{index + 1}</TableCell> 
                    <TableCell align="right" >{student.name}</TableCell>
                    <TableCell align="right">{student.rollNo}</TableCell>
                    <TableCell align="right">{student.address}</TableCell>
                    <TableCell align="right">{student.class}</TableCell>
                   
                   
                   </TableRow>
                    )

                })}
              
              
            </TableBody>
        </Table>
        </TableContainer> 
    </div>
  )
}

export default Table1