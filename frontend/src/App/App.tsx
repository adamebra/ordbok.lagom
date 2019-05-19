import React from 'react';
import './App.css';
import Form from '../Form'

class App extends React.Component{

  public render(){
    return(
      <div className="App">
        <Form text="Hello" age={5} />
      </div>

    )
  }
}


export default App;
