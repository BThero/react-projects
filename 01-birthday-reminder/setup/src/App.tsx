import React from 'react';
import BirthdayForm from './components/BirthdayForm'
import { BirthdayFormType } from './components/types'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Never forget about birthdays!
        </h1>
      </header>
      <main>
        <section className="new-birthday">
          <BirthdayForm handleClick={(state: BirthdayFormType) => {
            console.log(state.firstname)
            console.log(state.lastname)
            console.log(state.date.toString())
          }}/>  
        </section>
        <section>
          <p>List of all birthdays:</p>
          
        </section>
      </main>
      <footer>
        <span>Made by Temirlan Baibolov</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}

export default App;
