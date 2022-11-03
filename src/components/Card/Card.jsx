import React from 'react'


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import useStyles from './styles';




export const Card = ({survey}) => {

    
   
    

    const classes = useStyles();
  return (
    <div className={classes.content}>
    <CardContent>
      <Typography className={classes.title} gutterBottom>
        {survey.name}
      </Typography>
      
        {survey.content.map(content => (
        <Typography key={content._id} variant="h5" component="div">
            <Box >
                {content.key}
            </Box>
            <Box >
                {content.value.map((valueInput, index) => 
                  <div key={index}>
                    <input type={content.input} name={content.input} /> {valueInput}
                   
                  </div>

                    )}
            </Box>
        </Typography>
        ))}
    
      
    </CardContent>
    <CardActions>
      <Button size="small">Xem Biểu đồ data</Button>
    </CardActions>
    </div>
  )
}
