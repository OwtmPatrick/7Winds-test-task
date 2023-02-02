import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css';

import './App.style.scss';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Project from './components/Project';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <main className="main">
        <Sidebar />

        <Project />
      </main>
    </Provider>
  );
}

export default App;
