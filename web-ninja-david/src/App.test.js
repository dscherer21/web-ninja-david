import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { act, renderHook } from 'react-dom/test-utils';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import AboutDavid from './components/aboutDavid';
import Header from './components/header';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import ProjectsPage from './components/projectsPage';
import ContactPage from './components/contactPage';
import SocialMediaLinks from './components/socialMediaLinks';
import AudioPlayer from './components/audioPlayer';
import EmailForm from './components/emailForm';
import projects from './components/projects';

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

describe('AboutDavid functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<AboutDavid />);
    expect(wrapper).not.toBeNull();
  });

});

describe('Header functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<Header />);
    expect(wrapper).not.toBeNull();
  });

});

describe('LandingPage functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<LandingPage />);
    expect(wrapper).not.toBeNull();
  });

});

describe('Footer functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<Footer />);
    expect(wrapper).not.toBeNull();
  });

});

describe('ProjectsPage functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<ProjectsPage />);
    expect(wrapper).not.toBeNull();
  });

});

describe('ContactPage functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<ContactPage />);
    expect(wrapper).not.toBeNull();
  });

});

describe('SocialMediaLinks functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<SocialMediaLinks />);
    expect(wrapper).not.toBeNull();
  });

});

describe('AudioPlayer functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<AudioPlayer />);
    expect(wrapper).not.toBeNull();
  });

});

describe('EmailForm functionality', () => {

  test('renders without crashing', () => {
    let wrapper = shallow(<EmailForm />);
    expect(wrapper).not.toBeNull();
  });

});

describe('projects array', () => {

  test('project index 0 contains title and id', () =>{
    expect(projects[0].title).toContain("Websmith David");
    expect(projects[0]._id).toBe(1);
  });

  test('project index 0 contains title and id', () =>{
    expect(projects[0].title).toContain("Websmith David");
    expect(projects[0]._id).toBe(1);
  });

});