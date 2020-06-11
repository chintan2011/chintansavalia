import React, { Component } from 'react';
import Header from './components/header/header';
import Contact from './components/contactus/contactus';
import WorkExperience from './components/workexperience/workexperience';
import Internship from './components/internship/internship';
import Projects from './components/projects/projects'
import Navigation from './components/navigationbar/navigationbar';
import Education from './components/education/education';
import Skills from './components/skills/skills';
import ScrollUpButton from '../node_modules/react-back-to-top-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
		<Navigation />
        <WorkExperience />
		<Internship />
        <Projects />
		<Skills />
		<Education/>
		<Contact />
		<ScrollUpButton/>
      </div>
    );
  }
}
export default App;