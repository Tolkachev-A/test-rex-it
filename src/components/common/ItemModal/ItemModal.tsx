import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import './item-modal.css';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import { useAppDispatch } from '../../../hooks';
import { deleteItemBasket } from '../../../store/actions';

import seed from 'assets/img/seed.svg';

const CloseButton = styled(IconButton)({
  borderRadius: '90px',
  border: '1px solid rgba(77, 77, 77, 0.20)',
  width: '28px',
  height: '28px',
});

interface ItemModalI {
  soybean: number;
  sesame: number;
  wheat: number;
  corn: number;
  id: number;
  pak: string;
}
export const ItemModal = ({ soybean, sesame, wheat, corn, pak, id }: ItemModalI) => {
  const dispatch = useAppDispatch();
  const onCloseClick = () => {
    dispatch(deleteItemBasket(id));
  };

  return (
    <Grid container sx={{ padding: '24px 0' }}>
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img className="text" src={seed} alt="seed" />
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="text">{soybean}%</Box>
              </Grid>
              <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="text">{sesame}%</Box>
              </Grid>
              <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="text">{wheat}%</Box>
              </Grid>
              <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box className="text">{corn}%</Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Grid container>
          <Grid item md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            {pak}kg
          </Grid>
          <Grid item md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            81.50€
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CloseButton onClick={onCloseClick}>
              <CloseIcon />
            </CloseButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
