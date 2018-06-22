import React, { Component } from 'react';
import PlayingCard from "./componenets/PlayingCard";
import Wrapper from "./componenets/Wrapper";
import playingCards from "./playingCards.json";
import './App.css';

class App extends Component {

  state = {
    playingCards
  }

  render() {
    return (
      <Wrapper>
        {this.state.playingCards.map(cards => (
          <PlayingCard
            image={cards.image}
            name={cards.id}

          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
