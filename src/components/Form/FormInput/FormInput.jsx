import React from 'react'
import { FormControl, Select,InputLabel, MenuItem, TextField } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AbcIcon from '@mui/icons-material/Abc';

import { useState } from 'react';
import useStyles from '../styles';

export const FormInput = () => {
    const [type, setType] = useState('radio');


    const handleChangeType = (e) => {
        setType(e.target.value);
        // console.log(e.target.value)
    }

    const classes = useStyles();
  return (
    <div className={classes.inputFormData}>
    <FormControl className={classes.marginBot} sx={{
        background:'#fff',
        // borderRadius: '6px',
        // padding: '20px'
    }}>
        <TextField id="outlined-basic" label="Trường dữ liệu" variant="outlined" />
    </FormControl>
    <FormControl className={classes.marginBot} sx={{
        background:'#fff',
        // borderRadius: '6px',
        // padding: '20px'
    }}>
        <InputLabel id="demo-simple-select-label">Kiểu</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"
            onChange={handleChangeType}
        >
            <MenuItem value='radio'>
                Radio {': '} <RadioButtonCheckedIcon style={{ fill: '#f368e0' }} />
            </MenuItem>
            <MenuItem value='checkbox'>
                Check {': '} <CheckBoxIcon style={{ fill: '#f368e0' }} />
            </MenuItem>
            <MenuItem value='text'>
                Text {': '} <AbcIcon style={{ fill: '#f368e0' }} />
            </MenuItem>
        </Select>
    </FormControl>
    </div>
  )
}
