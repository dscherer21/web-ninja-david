import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { act, renderHook } from 'react-dom/test-utils';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


//Configuring Enzyme
configure({ adapter: new Adapter() });

test('Sample Test', () =>{
  expect(true).toBeTruthy();
});

test('renders Welcome in the document', () => {
  const { getByText } = render(App);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
