import React from 'react';
import Courses from './components/Courses';
import Header from './components/Header';
import Info from './components/Info';
import Skills from './components/Skills';
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <Info />
      <Skills/>
      <Courses />
    </>
  );
}

export default App;
