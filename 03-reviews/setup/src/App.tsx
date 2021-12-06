import React, { useState } from 'react'
import { ReviewData, ReviewProps } from './components/types'
import Review from './components/Review'
import './App.css'

export default function App() : JSX.Element {
  const [idx, setIdx] = useState<number>(0);
  const [list, setList] = useState<ReviewData[]>([
    {
      name: "Susan Smith",
      activity: "WEB DEVELOPER",
      review: "Curabitur at lorem vel mauris blandit placerat. Phasellus ac urna venenatis, aliquet lorem non, ornare odio. Sed varius bibendum elit, quis ultrices diam fermentum eget. Praesent massa eros, pulvinar a felis in, iaculis efficitur velit. Maecenas auctor lectus tempor arcu commodo tincidunt. Nullam auctor tortor dolor, sed dapibus arcu varius dapibus. Aliquam nec hendrerit neque, vulputate egestas dolor. Nam sit amet pellentesque lorem. Fusce consequat urna sed nibh tincidunt, eget hendrerit odio luctus. Praesent finibus in turpis vitae feugiat. Suspendisse sit amet risus eros. Morbi metus sapien, rhoncus sed cursus eget, aliquam vitae risus. Donec bibendum magna quis volutpat efficitur. Etiam sagittis varius eros, ac aliquet erat ultricies a. Donec sed dolor arcu. Cras vitae lectus vitae quam molestie venenatis blandit vitae nisi.",
      imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
      name: "Anna Johnson",
      activity: "WEB DESIGNER",
      review: "Phasellus eu ex maximus, elementum diam id, sodales velit. Vivamus fermentum purus facilisis eros dictum tincidunt. Morbi elit est, facilisis quis pellentesque quis, fringilla eu orci. Nunc pretium, eros mattis euismod laoreet, massa nulla pretium enim, a ultrices justo metus ut massa. Donec tincidunt lacinia justo, eu rhoncus sem ornare id. Aliquam rutrum lectus ac iaculis sodales. Suspendisse mattis elementum odio quis dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque eu erat eget eros efficitur consequat. Etiam at nisl id dolor eleifend lobortis quis nec augue. Nunc finibus semper nibh eu condimentum. Mauris dapibus pretium lectus in gravida.",
      imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
      name: "Peter Jones",
      activity: "INTERN",
      review: "Proin finibus tristique mauris, sit amet consectetur ligula interdum in. Nunc pretium sapien at tristique rhoncus. Fusce maximus scelerisque nisi, suscipit rutrum augue maximus eget. Maecenas nibh turpis, aliquet vitae pharetra eget, vestibulum vitae tortor. Mauris augue arcu, molestie sit amet lobortis eget, laoreet sed augue. Aenean blandit libero non nibh ultricies commodo. Ut imperdiet aliquet nisi molestie dignissim. Duis magna libero, volutpat quis dolor vel, rutrum ultricies neque. Etiam consequat eget augue sagittis consectetur. Suspendisse potenti. Maecenas sed metus mauris. Nunc efficitur metus sit amet efficitur commodo.",
      imgUrl: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    }
  ]);

  function handleClickPrev() {
    setIdx((idx + list.length - 1) % list.length)
  }

  function handleClickNext() {
    setIdx((idx + 1) % list.length)
  }

  function handleClickRandom() {
    setIdx(Math.floor(Math.random() * list.length))
  }

  return (
    <div className="app">
      <main>
        <header>
          <h1>Our reviews</h1>
          <hr />
        </header>

        {
          list.map((item, i) => {
            if (i === idx) {
              return <Review 
                data = {item}
                onClickNext = {handleClickNext}
                onClickPrev = {handleClickPrev}
                onClickRandom = {handleClickRandom}
              />
            }
            else {
              return null
            }
          })
        }
      </main>
    </div>
  )
}