import React from 'react';

import { CrackerConstructor } from '../components/CrackerConstructor';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div>
      <Hero />
      <CrackerConstructor />
      <Footer />
    </div>
  );
};
