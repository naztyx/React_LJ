import React from 'react';
import './App.css';

import Devs from './Devs'; //import the dev component here

class App extends React.Component{
  
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <Devs Name='Yila' Age='75' skill='Developer'/> {/*nesting the new component*/}
        <Devs Name='Amal' Age='75' skill='Baker'/>
      </div>
    );
  }
}

export default App;
