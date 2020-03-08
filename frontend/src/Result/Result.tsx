import React from 'react';
// import { ResultEntity } from '../Entities/ResultEntity';
import { CardEntity } from '../Entities/CardEntity';

export default class Result extends React.Component<{ results: Array<CardEntity> }> {
  wordlist(words: Array<string>) {
    return words.map((item, index) => <span key={index}>{item}</span>);
  }
  createList() {
    return this.props.results.map((item, index) => (
      <div key={index}>
        <h1>{item.wordclass}</h1>
        <p>{item.formclass}</p>
        <p>{this.wordlist(item.words)}</p>
      </div>
    ));
  }

  public render() {
    return <div>{this.createList()}</div>;
  }
}
