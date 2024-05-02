import React, { Component } from 'react';
import LDQVForm1 from './components/TvcForm1';
import LDQVForm2 from './components/TvcForm2';
import LDQVForm3 from './components/TvcForm3';

class App extends Component {


  tvcSubmit = (param)=>{
    console.log("App:",param);
  }
  render() {
    return (
      <div>
        <h1>Controlled Component ReactJs Form</h1>
        <TvcForm1 />
        <TvcForm2 />
        <hr/>
        <TvcForm3 onSubmit={this.tvcSubmit}/>
      </div>
    );
  }
}

export default App;
