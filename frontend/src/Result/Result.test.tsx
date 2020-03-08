import React from 'react';
import Result from './Result';
import { shallow } from 'enzyme';

it('renders shallow without crashing', () => {
  const results = [{ formclass: 'Testar', wordclass: 'Test', words: ['test', 'test'] }];

  shallow(<Result results={results} />);
});
