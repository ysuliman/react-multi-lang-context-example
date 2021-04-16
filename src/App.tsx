import React, { useContext } from 'react';
import HomePage from './HomePage';
import { LanguageProvider } from './LanguageProvider';
import { LanguageSelector } from './LanguageSelector';

function App() {

  return (
    <LanguageProvider>
      <LanguageSelector />
      <HomePage />
    </LanguageProvider>
  );
}

export default App;


