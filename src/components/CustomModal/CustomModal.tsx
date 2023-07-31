import * as React from 'react';
import { useMemo } from 'react';

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useAppSelector } from '../../hooks';
import { selectBasketData } from '../../store/selectors';
import { ItemModal } from '../common';

import cornImg from 'assets/img/corn.svg';
import sesameImg from 'assets/img/sesame.svg';
import soybeanImg from 'assets/img/soybean.svg';
import wheatImg from 'assets/img/wheat.svg';

const style = {
  width: '572px',
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.20)',
  p: 4,
  top: '58px',
  position: 'absolute',
  right: 0,
};

interface CustomModalI {
  open: boolean;
  callback: () => void;
}
export const CustomModal = ({ open, callback }: CustomModalI) => {
  const { data, id } = useAppSelector(selectBasketData);

  const itemModal = useMemo(() => {
    if (data) {
      return id.map(item => {
        return (
          <ItemModal
            corn={data[item].ingredients.corn}
            pak={data[item].pack}
            sesame={data[item].ingredients.sesame}
            soybean={data[item].ingredients.soybean}
            wheat={data[item].ingredients.wheat}
            key={item}
            id={item}
          />
        );
      });
    }
  }, [data, id]);

  return (
    <div>
      <Modal
        open={open}
        onClose={callback}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0)' },
        }}
        sx={{
          padding: '32px',
          zIndex: 10000,
          backgroundColor: 'initial',
          maxWidth: '900px',
          margin: '0px auto',
        }}
      >
        <Box sx={style}>
          <Grid container>
            <Grid item md={6}>
              <Grid container spacing={2}>
                <Grid item md={2} />
                <Grid item md={10}>
                  <Grid container>
                    <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={soybeanImg} alt="soybeanImg" width={32} height={32} />
                    </Grid>
                    <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={sesameImg} alt="sesameImg" width={32} height={32} />
                    </Grid>
                    <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={wheatImg} alt="wheatImg" width={32} height={32} />
                    </Grid>
                    <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={cornImg} alt="cornImg" width={32} height={32} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} />
          </Grid>
          {itemModal}
        </Box>
      </Modal>
    </div>
  );
};
