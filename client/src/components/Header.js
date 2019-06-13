import React from 'react';
import heroImage from '../images/bookshelf.jpg';

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: '100vw',
  height: 'calc(100vw * .2)',
  backgroundSize: 'cover',
  position: 'relative'
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Book Search</h1>
      <p>Search for and Save Books that you would like to read.</p>
    </header>
  );
}

export default Header;
