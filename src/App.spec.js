import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from './App';
import { expect } from 'chai';

describe('App component', () => {

  it('greets with Hello', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<App/>);
    const result = renderer.getRenderOutput();
    expect(result.type).to.equal('div');
    expect(result.props.children[1].props.children).to.equal('Hello.');
  });

});
