import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [takagi, setTakagi] = useState('');
  useEffect(() => {
    fetch('http://localhost:8080/api/')
      .then((res) => res.json())
      .then((data) => setTakagi(data.takagi));
  }, []);

  console.log('ahan');
  console.log({ takagi });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{takagi}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
