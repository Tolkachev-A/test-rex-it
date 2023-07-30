import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { IconButton, Typography, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';

const RedIconButton = styled(IconButton)(() => ({
  color: 'white',
  backgroundColor: '#FF0000',
  '&:hover': {
    backgroundColor: '#FF0000',
    borderRadius: 90,
  },
}));

interface CustomButtonI {
  callback: (e: any) => void;
}

export const CustomButton = ({ callback }: CustomButtonI) => {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const paddingButton = hover ? '14px 24px 14px 32px' : '16px';

  return (
    <RedIconButton
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      size="medium"
      onClick={callback}
      sx={{ padding: paddingButton, height: '56px' }}
    >
      <Grow in={hover}>
        <Typography component="span" sx={{ fontSize: '20px' }}>
          {hover && 'Add to cart'}
        </Typography>
      </Grow>
      <AddIcon sx={{ fontSize: '24px' }} />
    </RedIconButton>
  );
};
