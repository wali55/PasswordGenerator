import {View, Text} from 'react-native';
import React from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

const App = () => {
  return (
    <>
      <CurrencyConverter />
    </>
  );
};

export default App;
