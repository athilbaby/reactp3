import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navigation = () => {
    var [pname,setPname] = useState("")
    const changeHome = ()=>{
        setPname("Welcome to home")
    };
    const changeGallery = ()=>{
        setPname("Welcome to Gallery")
    };
    const changeContacts = ()=>{
        setPname("Welcome to contacts")
    };

  return (
    <div style={{paddingTop:'100px'}}>
       
       
        <Button variant='contained' color='primary'onClick={changeHome}>Home</Button>&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='secondary'onClick={changeGallery}>Gallery</Button>&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='success'onClick={changeContacts}>Contacts</Button>&nbsp;&nbsp;&nbsp;
        <hr />
        <Typography variant ='h3'>{pname}</Typography>
        
    </div>
    
  )
}

export default Navigation