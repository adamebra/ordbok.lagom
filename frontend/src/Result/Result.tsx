import React from 'react';
import { ResultEntity } from '../Entities/ResultEntity';

export default class Result extends React.Component<{}> {
  results: Array<ResultEntity>;

  constructor() {
    super({});
    this.results = [
      { Swedish: 'Testar', Dutch: 'Test' },
      { Swedish: 'Test2', Dutch: 'Test2' },
    ];
  }

  createList() {
    return this.results.map((item, index) => (
      <div key={index}>
        <h1>{item.Swedish}</h1>
        <p>{item.Dutch}</p>
      </div>
    ));
  }

  public render() {
    return <div>{this.createList()}</div>;
  }
}
