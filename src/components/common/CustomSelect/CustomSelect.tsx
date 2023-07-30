import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

interface CustomSelectI {
  value: string;
  callback: (event: any) => void;
}

const StyledSelect = styled(Select)({
  color: '#FF4200',
  borderRadius: 90,
  outline: 'none',
  border: '2px solid #FF4200',
  '& .MuiSelect-root:focus': {
    borderRadius: 90,
    border: '2px solid #FF4200',
  },
  '& .MuiSelect-icon': {
    color: '#FF4200', // Set the desired color for the arrow icon
  },
  '& .MuiSelect-menu': {
    backgroundColor: 'transparent', // Make the background transparent
    boxShadow: 'none', // Remove the box-shadow
    zIndex: 9999, // Set a high z-index to display the menu above other elements
  },
  '& .MuiSelect-select': {
    height: 56,
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CustomSelect = ({ value, callback }: CustomSelectI) => {
  return (
    <Box sx={{ maxWidth: 250 }}>
      <FormControl fullWidth variant="outlined">
        <StyledSelect
          sx={{ textAlign: 'center', height: 56 }} // Set the height of the select box to 56 pixels
          id="demo-simple-select"
          value={value}
          onChange={callback}
          displayEmpty
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            PaperProps: {
              style: {
                color: '#FF4200',
                borderRadius: 24,
                background: '#FFF',
                boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.20)',
                fontSize: 14,
              },
            },
          }}
        >
          <MenuItem
            value={0.5}
            sx={{
              justifyContent: 'center',
              borderBottom: '1px solid red',
              position: 'relative',
              textAlign: 'center', // Align the text to the center
              height: 56, // Set the height of the menu item to 56 pixels
            }}
          >
            <Box sx={{ padding: '12px 0px' }}>SMALL PACK</Box>
          </MenuItem>
          <MenuItem
            value={1}
            sx={{
              justifyContent: 'center',
              borderBottom: '1px solid red',
              position: 'relative',
              textAlign: 'center', // Align the text to the center
              height: 56, // Set the height of the menu item to 56 pixels
            }}
          >
            <Box sx={{ padding: '12px 0px' }}>MEDIUM PACK</Box>
          </MenuItem>
          <MenuItem
            value={1.5}
            sx={{
              justifyContent: 'center',
              textAlign: 'center', // Align the text to the center
              height: 56, // Set the height of the menu item to 56 pixels
            }}
          >
            <Box sx={{ padding: '12px 0px' }}>LARGE PACK</Box>
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
