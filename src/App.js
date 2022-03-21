import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import InitialPage from './pages/InitialPage';
import PostInternal from './pages/PostInternal';

function App() {
  console.log("d")
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={ <HomePage /> } />
        <Route exact path="/" element={ <InitialPage /> } />
        <Route exact path="/home/post/:id" element={ <PostInternal /> } />
      </Routes>
    </div>
  );
}

export default App;
