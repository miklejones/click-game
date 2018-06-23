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
    playingCards
  }

  
  handleClick = (clicked, id) => {
    if (clicked) {
      console.log("you lose broooosis");
      const clicks = this.state.playingCards;
      clicks.map(card => card.clicked = false)
      this.setState({
        clicks,
      })
      console.log(this.state);
      
      
      

    } else {
      console.log('click again');
      const picture = this.state.playingCards;
      console.log(`this is what was clicked: ${JSON.stringify(picture[id - 1])}`);
      picture[id - 1].clicked = true;
      // picture.sort((a,b) => .5 - Math.random());
      this.setState({
        picture,
      })
      console.log(this.state);
      
    }



  }

  render() {
    return (
      <div>
        <NavBar />
        <Title />
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
