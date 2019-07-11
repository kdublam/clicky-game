import React from "react"
import friends from "../../friends.json"
import ImgCard from "../ImgCard"
import Wrapper from "../Wrapper"
import Score from "../Score"
import Footer from "../Footer"
import "./style.css"

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedImg: [],
      friends: this.shuffle(friends),
      score: 0,
      highscore: 5,
      textinput: ""
    }
    this.handleClick = this.handleClick.bind(this)
    // this.handleChange = this.handleChange.bind(this)

  }

  shuffle(array) {
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

  handleClick(event, name) {
    const clickedImg = this.state.clickedImg
    let highscore = this.state.highscore
    let score = this.state.score
    if (!clickedImg.includes(name)) {
      let score = this.state.score
      clickedImg.push(name)
      score++
      console.log(score)
      let newArray = this.shuffle(this.state.friends)
      this.setState({
        friends: newArray,
        clickedImg: clickedImg,
        score: score
      })
    }
    else if (clickedImg.includes(name) && score > highscore) {
      let score = 0
      let newArray = this.shuffle(this.state.friends)
      let highscore = this.state.score
      let clickedImg = []
      this.setState({
        friends: newArray,
        clickedImg: clickedImg,
        score: score,
        highscore: highscore
      })
      if (this.state.score === 16) {
        alert("You've completed the memory challenge!")
      } else {
        alert("You already selected this character! New High Score!!!")
      }
    }
    else if (clickedImg.includes(name) && score <= highscore) {
      let score = 0
      let newArray = this.shuffle(this.state.friends)
      let clickedImg = []
      this.setState({
        friends: newArray,
        clickedImg: clickedImg,
        score: score
      })
      if (this.state.score === 16) {
        alert("You've completed the memory challenge! See you can do it again!")
      } else {
        alert("You already selected this character! Try again....")
      }

    }

    console.log(clickedImg)

  }

  // handleChange(event){
  //   this.setState({
  //     textinput: event.target.value
  //   },()=>{
  //     console.log(this.state)

  //   })

  //   // console.log(this.state)
  // }

  render() {
    return (
      <div>
        {/* <input onChange={this.handleChange}></input> */}
        <img className="logo" src="http://img05.deviantart.net/cef3/i/2015/122/c/4/dragon_ball_z__dbz__nuevo_logo_by_saodvd-d8rx6aw.png"></img>
        <h2 className="gameName">Memory Challenge</h2>
        <Wrapper>
          {
            this.state.friends.map((friend, index) => {
              return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">

                  <ImgCard name={friend.name} image={friend.image} key={index} handleClick={this.handleClick} />
                </div>
              )
            })
          }
        </Wrapper>
        <Score score={this.state.score} highscore={this.state.highscore} />
        <Footer />
      </div>
    );
  }

}

export default Game