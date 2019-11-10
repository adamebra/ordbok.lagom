import React from 'react';
import './App.css';
import Result from '../Result/Result';

export default class App extends React.Component {
  nameInput: any;

  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  public render() {
    return (
      <div className="App">
        <h1>Ordbok Lagom</h1>
        <div>
          Svenska <button> &gt </button> Nederländska
        </div>
        <input autoFocus name="phrase" />
        <Result />
      </div>
    );
  }
}
