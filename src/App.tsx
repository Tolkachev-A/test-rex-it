import React, { ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { CustomAppBar } from './components/CustomAppBar';
import { Home, NotFound } from './pages';

import { Patch } from 'enums';

const App = (): ReactElement => {
  return (
    <>
      <CustomAppBar />

      <Routes>
        <Route path={Patch.HOME} element={<Home />} />
        <Route path={Patch.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
