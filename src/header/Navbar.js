import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import classes from './Navbar.module.css'
import { useSelector } from 'react-redux';

const Navbar = (props) => {
  const currCount = useSelector((state) => (state.counter.value));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appb}>
        <Toolbar>
          <Typography className={classes.typo} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Counter
          </Typography>
          <Typography className={classes.typo} variant="h5" component="div">
            Current Count : &nbsp;
          </Typography>
          <Button color="inherit" sx={{
            '&:hover' : {
                border : 'solid white 1px'
            }
            
          }} > <Typography className={classes.typo} variant='h6'>{currCount}</Typography> </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;