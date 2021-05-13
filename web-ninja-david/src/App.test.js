import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { act, renderHook } from 'react-dom/test-utils';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import AboutDavid from './components/aboutDavid';


//Configuring Enzyme
configure({ adapter: new Adapter() });

test('Sample Test', () =>{
  expect(true).toBeTruthy();
});

describe('App functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });

});

describe('aboutDavid functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<AboutDavid />);
    expect(wrapper).not.toBeNull();
  });

});
