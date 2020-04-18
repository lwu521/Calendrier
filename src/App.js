import React, {Component} from 'react';
import TabsWrappedLabel from './components/Calendrier';
import Seances from './components/Seances';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="page-container">
        <TabsWrappedLabel/>
        <Seances/>
      </div> 
    );
  }
}


export default App;