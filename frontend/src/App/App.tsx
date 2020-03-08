import React from 'react';
import './App.css';
import Result from '../Result/Result';
import { CardEntity } from '../Entities/CardEntity';

// Implementation code where T is the returned data shape
function api(url: string): Promise<CardEntity[]> {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export default class App extends React.Component<{}, { results: CardEntity[]; from: string; to: string }> {
  nameInput: any;
  readonly state = {
    results: [],
    from: 'Svenska',
    to: 'Nederländska',
  };

  constructor() {
    super({});

    // Consumer
    const url = `http://localhost:3001?word=ränna&l=sv`;
    api(url)
      .then(response => {
        console.log(response);
        this.setResult(response);
      })
      .catch(error => {
        /* show error message */
      });
  }

  setResult(results: CardEntity[]) {
    this.setState(state => {
      return { from: state.from, to: state.to, results: results };
    });
  }

  componentDidMount() {
    if (this.nameInput) {
      this.nameInput.focus();
    }
  }

  handleClick() {
    console.log('this');
    const thatState = { ...this.state };
    thatState.from = this.state.to;
    thatState.to = this.state.from;
    this.setState(thatState);
    this.render();
    // this.from = 'Nederländska';
  }

  public render() {
    console.log('test');
    return (
      <div className="App">
        <h1>Ordbok Lagom</h1>
        <div>
          {this.state.from} <button onClick={() => this.handleClick()}> till </button> {this.state.to}
        </div>
        <input autoFocus name="phrase" />
        <Result results={this.state.results} />
      </div>
    );
  }
}
