import React from 'react';

import { Grid, Slider } from '@mui/material';
import './custom-slider.scss';

interface CustomSliderI {
  callback: (e: any, value: number | number[]) => void;
  name: string;
  value: number;
  srcImg: string;
}

export const CustomSlider = ({ callback, name, value, srcImg }: CustomSliderI) => {
  let color: string;

  switch (name) {
    case 'soybean':
      color = '#00A651';
      break;
    case 'sesame':
      color = '#49743F';
      break;
    case 'wheat':
      color = '#ABA000';
      break;
    default:
      color = '#939393';
  }

  return (
    <Grid container className="slider">
      <Grid item md={1}>
        <img src={srcImg} alt="name" />
      </Grid>
      <Grid sx={{ padding: '0 20px', display: 'flex' }} item md={10}>
        <Slider
          defaultValue={50}
          valueLabelDisplay="auto"
          onChange={callback}
          name={name}
          value={value}
          sx={{
            '& .MuiSlider-rail': {
              color,
              opacity: 1,
            },
            '& .MuiSlider-thumb': {
              color: '#fff', // Change the color of the slider thumb (handle) to your desired color
              width: 36, // Change the width of the slider thumb
              height: 36, // Change the height of the slider thumb
              borderRadius: '50%', // Make the slider thumb circular
              boxShadow: 'none', // Remove the shadow from the slider thumb
              border: `2px solid ${color}  `, // Add a border to the slider thumb with the desired color
            },
            '& .MuiSlider-track': {
              color, // Change the color of the remaining track (progress track) to your desired color
              // You can also use gradient or background-color here
              // background: `linear-gradient(90deg, ${color} ${value}%, ${theme.palette.grey[300]} ${value}%)`,
              // or
              // background: `linear-gradient(90deg, ${color} ${value}%, ${color} ${100 - value}%)`,
            },
          }}
        />
      </Grid>
      <Grid item md={1} className="slider__value">
        {value}%
      </Grid>
    </Grid>
  );
};
