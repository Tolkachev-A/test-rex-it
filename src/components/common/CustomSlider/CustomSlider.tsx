import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface CustomSliderI {
  clb: (e: any) => void;
  nameSlider: string;
}
export const CustomSlider = ({ clb, nameSlider }: CustomSliderI) => {
  return (
    <Box width={300}>
      <Slider
        defaultValue={50}
        valueLabelDisplay="auto"
        onChange={clb}
        name={nameSlider}
      />
    </Box>
  );
};
