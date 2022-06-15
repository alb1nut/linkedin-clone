import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
         < SideBar  />
         < Feed />
          {/* Widgets */}

      </div>
    </div>
  );
}

export default App;
