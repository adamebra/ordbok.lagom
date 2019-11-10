import React from 'react';
import Result from './Result';
import { shallow } from 'enzyme';

it('renders shallow without crashing', () => {
  shallow(<Result />);
});
