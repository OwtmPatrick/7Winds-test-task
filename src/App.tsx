import React from 'react';
import 'normalize.css';

import './App.style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Project from './components/Project';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Sidebar />

        <Project />
      </main>
    </>
  );
}

export default App;
