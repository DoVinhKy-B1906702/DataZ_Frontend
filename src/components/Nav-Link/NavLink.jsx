import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Box } from '@mui/material';

import useStyles from './styles';


export const NavLink = () => {

  const classes = useStyles();

  return (
    <Typography  sx={{
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      color: '#fff',
      padding: '20px 0',
      fontSize: '1.6rem',
      
    }}
      component={'span'}
      variant={'body2'}
    >
      <Box  className={classes.boxLink}>
          <Link className={classes.navLink} to="/">Home</Link>
      </Box>
      <Box className={classes.boxLink}>
          <Link className={classes.navLink} to="/table">Table</Link>
      </Box>
      <Box className={classes.boxLink}>
          <Link className={classes.navLink} to="/form">Form</Link>
      </Box>
      <Box className={classes.boxLink}>
          <Link className={classes.navLink} to="/survey">Danh sách khảo sát</Link>
      </Box>
    </Typography>
  )
}
