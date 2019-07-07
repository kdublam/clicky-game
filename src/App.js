import React, { useState } from 'react';
import ImgCard from "./components/ImgCard"
import friends from "./friends.json"
import './App.css';

function App() {
  const clickedImg = [];

  const [arr, setArr] = useState(friends)
  const shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  const handleClick = (event, name) => {
    clickedImg.push(name)
    console.log(clickedImg)
    setArr(shuffle(arr))

  }


  let shuffleArray = shuffle(friends)



  return (
    <div className="App">
      <h1>Clicky Game</h1>
      {
        arr.map((friend, index) => {
          return (
            <ImgCard name={friend.name} image={friend.image} key={index} handleClick={handleClick} />
          )
        })
      }
    </div>
  );
}

export default App;
