//rafce
import React from 'react'
import {Button, TextField, Typography } from '@mui/material';
const First = () => {
  return (
    <div style={{paddingTop:'100px'}}>
    <h1>athil</h1>
  <input placeholder='name'/>
  <br/>
  <input type='password'placeholder='password'/>
  <br/>
  <button>submit</button>
  <br/>
  <Typography variant="h1">hello</Typography>
  <br/>
  <TextField variant='outlined' label='Name'/>
  <br/>
  <Button variant='contained'>Submit </Button>

     
  </div>
  )
}

export default First