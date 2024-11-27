//This is just to retun a footer with the name of the author and the year of the project.
import React from 'react';

function Footer() {

    const year = new Date().getFullYear();
return (
    <footer>
         
        <p>&copy; {year} Shopping Cart. All rights reserved.</p>
          
        <a href="https://github.com/SenorManiac" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
);
}

export default Footer;