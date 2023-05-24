import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("Athil");
    var[val,setVal]=useState()

    const inputHandler = (e)=>{
        setVal(e.target.value);
        console.log(val)

    }
    const changeName = ()=>{
        setPname(val)
        setVal("")
    }
  return (
    <div style={{paddingTop:'100px'}}>
        <Typography variant='h4'>hello {pname}</Typography>
        <TextField variant='outlined' label='Name'onChange={inputHandler}/><br/><br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics