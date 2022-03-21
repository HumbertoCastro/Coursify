import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
      <Header />
      <main className='main-page'>
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage;