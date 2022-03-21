import React from 'react';
import logo from '../images/logo-coursify-w.png';

function Footer() {
  return(
    <footer className='footer-page'>
      <img src={ logo } alt='coursify-logo' />
      <p>
        O Coursify.me é uma plataforma de ensino a distância,
        onde qualquer pessoa ou empresa pode construir seu 
        EAD e vender cursos pela internet.
      </p>
      <a href='https://coursify.me/' className='footer-btn'>Quero conhecer a plataforma!</a>
    </footer>
  )
}

export default Footer;