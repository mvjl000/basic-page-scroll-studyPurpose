import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <ScrollLink
            activeClass='active'
            to='main'
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            Main
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
