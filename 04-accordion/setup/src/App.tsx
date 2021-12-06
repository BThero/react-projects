import React from 'react'
import './App.css'
import Question from './components/Question'

export default function App() : JSX.Element {
  return (
    <main>
      <div className="content-wrapper">
        <h1 className="heading">
          Questions And Answers About Login
        </h1>
        <div className="questions">
          <Question 
            question="Do I have to allow the use of cookies?"
            answer="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
          />

          <Question 
            question="How do I change my My Page password?"
            answer="Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
          />

          <Question 
            question="What is BankID?"
            answer="Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
          />

          <Question 
            question="Whose birth number can I use?"
            answer="Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
          />

          <Question 
            question="When do I recieve a password ordered by letter?"
            answer="Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
          />
        </div>
      </div>
    </main>
  )
}