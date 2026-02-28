import React from 'react';

import Home from './home/Home'
import About from './about/About'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

function ScrollableSinglePage(props: any) {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default ScrollableSinglePage;
