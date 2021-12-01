import React, { useState } from 'react';
import BirthdayForm from './components/BirthdayForm'
import { BirthdayFormType } from './components/types'
import './App.css';

interface ListItem {
  id: number,
  x: BirthdayFormType,
  y: boolean
}

function App() {
  const [list, setList] = useState<ListItem[]>([])
  const [id, setId] = useState<number>(0)

  function parseDate(date : Date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }

  function filterList() {
    let new_list = list.filter((item) => {
      return item.y === false;
    })

    setList(new_list)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Never forget about birthdays!
        </h1>
      </header>
      <main>
        <section className="new-birthday">
          <BirthdayForm handleClick={(val: BirthdayFormType) => {
            setList(list.concat({id: id, x: val, y: false}))
            setId(id + 1)
          }}/>  
        </section>
        <section className="birthdays-list">
          <h2>List of all birthdays:</h2>
          <ul>
            {
              list.map((li : ListItem) => 
                <li key={li.id}>
                  <span>{li.x.firstname} {li.x.lastname}, {parseDate(li.x.date)}</span>
                  <input type="checkbox" onClick={(event) => {
                    li.y = !li.y
                  }}></input>
                </li>
              )
            }
          </ul>
          <button onClick={(event) => filterList()}>
            Delete selected
          </button>
        </section>
      </main>
      <footer>
        <span>Made by Temirlan Baibolov</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  )
}

export default App
