import { useCallback, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Contact from './Contact';

import './App.css';

const App = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  const toggleArrow = useCallback(() => {
    window.scrollY + window.innerHeight > window.innerHeight
      ? setIsArrowVisible(true)
      : setIsArrowVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleArrow);
  }, [toggleArrow]);

  return (
    <div className='App'>
      <div id='scrollTarget'></div>
      <Navbar />
      <Main />
      <About />
      <Contact />
      {isArrowVisible && (
        <ScrollLink
          activeClass='active'
          to='scrollTarget'
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
        >
          <div className='arrow'>V</div>
        </ScrollLink>
      )}
    </div>
  );
};

export default App;
