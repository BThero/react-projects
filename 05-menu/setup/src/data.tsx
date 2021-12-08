import {DishProps} from './components/types'

let dishes : DishProps[] = [
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
]

export function getDishes() {
  return dishes
}