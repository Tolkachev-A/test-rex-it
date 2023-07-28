import React, { ReactElement, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home, NotFound } from './pages';

import { ErrorMessage } from 'components/common/ErrorMessage';
import { Patch } from 'enums';

const App = (): ReactElement => {
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getInitializedApp({ page, count }));
  }, []);

  // if (isInitializedApp === null) {
  //   return <Preloader />;
  // }
  // if (!isInitializedApp && error) {
  //   return <ErrorMessage title={error} />;
  // }

  return (
    <>
      <Routes>
        <Route path={Patch.HOME} element={<Home />} />
        <Route path={Patch.NOT_FOUND} element={<NotFound />} />
      </Routes>
      {'error' && <ErrorMessage title="error" />}
    </>
  );
};

export default App;
