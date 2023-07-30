import React from 'react';

import { CrackerConstructor } from '../components/CrackerConstructor';
import { CustomModal } from '../components/CustomModal';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div>
      <Hero />
      <CrackerConstructor />
      <CustomModal />
      <Footer />
    </div>
  );
};
