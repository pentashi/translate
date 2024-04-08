// App.js
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n configuration
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Home />
        <About/>
      </div>
    </I18nextProvider>
  );
}

export default App;
