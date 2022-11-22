import React from 'react';

import MyCard from './components/Summary';
import About from './components/LittleAbout';
import Portfolio from './components/Portfolio';

import './assets/styles/reset.scss';
import './assets/styles/common.scss';
import './App.scss';
import Top from './components/Top';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Top />
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
