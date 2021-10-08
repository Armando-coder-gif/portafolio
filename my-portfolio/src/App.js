import React from 'react';
import Courses from './components/Courses';
import Header from './components/Header';
import Info from './components/Info';
import Skills from './components/Skills';
import Social from './components/Social';

function App() {
  return (
    <>
      <Header/>
      <Info />
      <Skills/>
      <Courses />
      <Social/>
    </>
  );
}

export default App;
