import logo from './logo.svg';
import Count from './mycount';
import Display from './mydisplay';
import './App.css';
import React from 'react';
import mycount from './mycount';

  class App extends React.Component{

    render(){
      return <div>
        <Count />
        <Display />
      </div>
    }

  }

export default App;
