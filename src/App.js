import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoComponent from './components/TodoComponent';

const App = () => {
  return (
    <div className="app bg-light">
      <div className="bg-img light-img" />
      <div className="container">
        <Header />
        <TodoComponent />
      </div>
    </div>
  )
}

export default App

