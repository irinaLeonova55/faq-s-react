import { useState } from 'react';

import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <h1>FAQs</h1>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
