import React from 'react';

import { CustomSlider } from '../common';

export const CrackerConstructor = () => {
  const onChangeSliderHandle = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <CustomSlider clb={onChangeSliderHandle} nameSlider="c" />
    </div>
  );
};
