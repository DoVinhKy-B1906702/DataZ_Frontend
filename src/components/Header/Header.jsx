import React from 'react'
import {Typography} from '@mui/material';



export const Header = () => {
  return (
    <div>
        <Typography 
          variant='h5' 
          align='center' 
          component="h2"
          sx={{
            color: '#f1c40f',
            padding: '20px 0',
            fontSize: '2rem'
          }}
        >
          Project DataZ
        </Typography>
        
    </div>
  )
}
