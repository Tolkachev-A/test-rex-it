import React from 'react';

import './cracker-constructor.scss';

import { Box, Grid } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import cornImg from 'assets/img/corn.svg';
import crackerIcon from 'assets/img/Cracker.svg';
import cracker from 'assets/img/crakerImg.png';
import pakImg from 'assets/img/pack.svg';
import sesameImg from 'assets/img/sesame.svg';
import soybeanImg from 'assets/img/soybean.svg';
import wheatImg from 'assets/img/wheat.svg';
import { CustomSlider, CustomSelect, CustomButton } from 'components/common';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setDataBasket, setIngredient, setPack } from 'store/actions';
import { selectIngredients, selectPack } from 'store/selectors';

export const CrackerConstructor = () => {
  const dispatch = useAppDispatch();

  const ingredients = useAppSelector(selectIngredients);
  const { sesame, corn, wheat, soybean } = ingredients;
  const pack = useAppSelector(selectPack);
  const onSliderChange = (e: any) => {
    dispatch(setIngredient(e.target));
  };

  const onSelectChange = (e: SelectChangeEvent) => {
    dispatch(setPack(e.target.value));
  };

  const onAddClick = () => {
    dispatch(setDataBasket({ ingredients, pack }));
  };

  return (
    <Box className="cracker__fon">
      <Box className="cracker">
        <Box>
          <Grid container className="cracker__about">
            <Grid item md={5}>
              <img src={cracker} alt="cracker" width={380} height={380} />
            </Grid>
            <Grid item md={7}>
              <Box className="cracker__header">ABOUT CRACKER</Box>
            </Grid>
          </Grid>
          <Grid container className="about__before">
            <Grid className="about container" container>
              <Grid item md={2} />
              <Grid item md={10}>
                <Box component="p" className="about__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit.
                  <img src={crackerIcon} alt="cracker_icon" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className="cracker__constructor container">
          <Box className="cracker__header" sx={{ textAlign: 'center' }}>
            cracker constructor
          </Box>
          <Box className="cracker__value">Current Value: 143€</Box>
          <CustomSlider
            callback={onSliderChange}
            name="soybean"
            value={soybean}
            srcImg={soybeanImg}
          />
          <CustomSlider
            callback={onSliderChange}
            name="sesame"
            value={sesame}
            srcImg={sesameImg}
          />
          <CustomSlider
            callback={onSliderChange}
            name="wheat"
            value={wheat}
            srcImg={wheatImg}
          />
          <CustomSlider
            callback={onSliderChange}
            name="corn"
            value={corn}
            srcImg={cornImg}
          />

          <Grid container>
            <Grid item md={1}>
              <img src={pakImg} alt="pakImg" />
            </Grid>
            <Grid item md={8} sx={{ paddingLeft: 2.5 }}>
              <CustomSelect value={pack} callback={onSelectChange} />
            </Grid>
            <Grid item md={3} sx={{ display: 'flex', justifyContent: 'end' }}>
              <CustomButton callback={onAddClick} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
