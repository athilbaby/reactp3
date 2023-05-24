import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}align='left'>NewApp</Typography>
                
                <Button variant='contained' ><Link to={'/'}>Home</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained'><Link to={'table'}>Table</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained'><Link to={'navi'}>Navigation</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained'><Link to={'First'}>first</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained'><Link to={'axios'}>ApiGet</Link></Button>&nbsp;&nbsp;&nbsp;
                
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar