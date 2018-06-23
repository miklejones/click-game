import React, { Component } from 'react';
import PlayingCard from "./componenets/PlayingCard";
import Wrapper from "./componenets/Wrapper";
import NavBar from "./componenets/NavBar";
import Title from "./componenets/Title";
import Footer from "./componenets/Footer";
import playingCards from "./playingCards.json";
import './App.css';

class App extends Component {

  state = {
    message: "Click a wrestler to begin.",
    playingCards,
    curScore: 0,
    topScore: 0
  }

  shufflePictures = (picState) => {

    picState.sort(() => .5 - Math.random());

  }

  handleClick = (clicked, id) => {
    if (clicked) {
      console.log("you lose broooosis");
      const clicks = this.state.playingCards;
      clicks.map(card => card.clicked = false)
      this.setState({
        message: "You guessed wrong!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        clicks,
      })
      console.log(this.state);
    } else {
      console.log('click again');
      const picture = this.state.playingCards;
      console.log(`this is what was clicked: ${JSON.stringify(picture[id - 1])}`);
      this.state.playingCards.forEach(item => {
        if (item.id === id) {
          item.clicked = true
        }
      });
      this.shufflePictures(picture);
      this.setState({
        message: "Keep guessing!",
        curScore: this.state.curScore + 1,
        picture,
      })
      console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        <NavBar
          score={this.state.curScore}
          highScore={this.state.topScore}
        />
        <Title
          message={this.state.message}
        />
        <Wrapper>
          {this.state.playingCards.map(cards => (
            <PlayingCard
              image={cards.image}
              name={cards.id}
              key={cards.id}
              clicked={cards.clicked}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
