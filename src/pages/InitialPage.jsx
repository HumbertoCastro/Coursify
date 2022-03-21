import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function InitialPage() {
  console.log('sda');
  const navigate = useNavigate();
  setTimeout(() => {navigate('/home')}, 4000);
  return(
    <div className='initial-page'>
      <img src={ logo } alt='initial-page'/>
    </div>
  )
}

export default InitialPage;