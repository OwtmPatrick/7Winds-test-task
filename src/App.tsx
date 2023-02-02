import React from 'react';
import 'normalize.css';

import './App.style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Sidebar />

        <div>table</div>
      </main>
    </>
  );
}

export default App;
