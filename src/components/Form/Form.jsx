import React, { useState } from 'react'

import { FormControl, TextField, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { FormInput } from './FormInput/FormInput';


import useStyles from './styles';

export const Form = () => {

    const [sizeField, setSizeField] = useState([]);
    
    const handleAddField = () => {
        setSizeField( (prev) => [...prev, ''] );
    }




    const classes = useStyles();
  return (
    <div className={classes.formControl}>
    <FormControl className={classes.marginBot} sx={{
        background:'#fff',
        // borderRadius: '6px',
        // padding: '20px'
    }}>
        <TextField id="outlined-basic" label="Tiêu đề" variant="outlined" />
    </FormControl>
    {sizeField.map((field,index) =>  <FormInput key={index} />  )}
    <Button onClick={handleAddField}  variant="contained" size="small" className={`${classes.colorBg} ${classes.buttonAdd}`}>
        <AddCircleOutlineIcon />
    </Button>
    </div>
  )
}
