import React, { useEffect, useState } from 'react'
import { Home } from '../Home'
import { Grid } from '@mui/material';
import axios from 'axios';

import { Card } from '../../components/Card/Card';


const URL = 'http://localhost:5000/table';
export const SurveyPage = () => {

    const [surveys, setSurveys] = useState([]);

    
  
    useEffect(() => {
        axios.get(URL)
        .then(function (response) {
        // handle success
        setSurveys(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    },[])

  return (
    <div>
        <Home />
        <div>
        <Grid container spacing={2}>
           
            {surveys.map(
                (survey,index) => (
                    <Grid item xs={4} key={index}>
                        <Card survey={survey} />
                    </Grid>
                )
            )}
        </Grid>
        </div>
    </div>
  )
}
