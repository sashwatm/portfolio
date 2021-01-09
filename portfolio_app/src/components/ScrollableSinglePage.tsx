import React from 'react';

import Home from './home/Home'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

function ScrollableSinglePage(props: any) {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default ScrollableSinglePage;
