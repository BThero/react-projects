import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Dish from './components/Dish'
import { DishProps } from './components/types'

const Title = styled.h1`
  color: #102a42;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  margin-bottom: 0.75rem;
`

const StyledHr = styled.hr`
  width: 5rem;
  height: 0.25rem;
  background: #c59d5f;
  margin: auto;
  border: 0;
  border-radius: 0;
`

const StyledHeader = styled.header`
  margin-bottom: 2rem;
`

const StyledNav = styled.nav`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  border: 0;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
  color: #c59d5f;
  margin: 0 0.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  transition-duration: 0.5s;
  border-radius: 0.25rem;
  line-height: 1.5;
  letter-spacing: 1px;
  text-transform: capitalize;

  &:hover {
    background-color: #c59d5f;
    color: white;
    transition-duration: 0.75s;
  }
`

const StyledMain = styled.main`
  width: 95vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

const StyledApp = styled.div`
  background-color: #f1f5f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`

export default function App() {
  const [filter, setFilter] = useState<String>("all")
  const [list] = useState<DishProps[]>([
    {
      name: "Buttermilk Pancakes",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
      category: "breakfast"
    },
    {
      name: "Diner Double",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
      category: "lunch"
    },
    {
      name: "Godzilla Milkshake",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
      category: "shakes"
    },
    {
      name: "Country Delight",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
      category: "breakfast"
    },
    {
      name: "Egg Attack",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
      category: "lunch"
    },
    {
      name: "Oreo Dream",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
      category: "shakes"
    },
    {
      name: "Bacon Overflow",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
      category: "breakfast"
    },
    {
      name: "American Classic",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
      category: "lunch"
    },
    {
      name: "Quarantine Buddy",
      price: 15,
      description: "Quisque varius neque id libero venenatis, in maximus massa venenatis. Donec fermentum dui non ex.",
      imageUrl: "https://react-projects-5-menu.netlify.app/images/item-9.jpeg",
      category: "shakes"
    }
  ])

  function handleClick(event : SyntheticEvent) {
    event.preventDefault()
    let element = event.target as HTMLElement
    setFilter((element.textContent as string).toLowerCase())
  }

  return (
    <StyledApp>
      <StyledHeader>
        <Title>Our Menu</Title>
        <StyledHr />
      </StyledHeader>

      <StyledNav>
        <StyledButton onClick={handleClick}>
          All
        </StyledButton>
        <StyledButton onClick={handleClick}>
          Breakfast
        </StyledButton>
        <StyledButton onClick={handleClick}>
          Lunch
        </StyledButton>
        <StyledButton onClick={handleClick}>
          Shakes
        </StyledButton>
      </StyledNav>

      <StyledMain>
        {
          list.map((item, idx) => {
            if (filter === "all" || item.category.toLowerCase() === filter) {
              return <Dish {...item} />
            }
            else {
              return null
            }
          })
        }
      </StyledMain>
    </StyledApp>
  )
}
