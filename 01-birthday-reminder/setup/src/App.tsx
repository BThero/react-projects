import React from 'react';
import logo from './logo.svg';
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
          <form>
            <div className="input-wrapper">
              <label htmlFor="firstname">
                First name:
              </label>
              <input type="text" id="firstname" required>

              </input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">
                Last name:
              </label>
              <input type="text" id="lastname" required>

              </input>
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">
                Birthday:
              </label>
              <input type="date" id="birthday" required>

              </input>
            </div>
            <button>
              Add
            </button>
          </form>
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
