import React from 'react';

// import { Nav, Logo, AppProvider } from "../components";
import {Nav} from './Nav';
import {Logo} from './Logo';

function Header({links}) {
  return (
    <section className="Section--Header">
      <header className="Header">
        <Logo />
        <Nav links={links} />
      </header>
    </section>
  );
}

export default Header;
