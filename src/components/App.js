import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.addFish = this.addFish.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  }

    loadSamples() {
      this.setState({
        fishes: sampleFishes
      })
    }

    addFish(fish) {
      // take copy of existing state
      const fishes = {...this.state.fishes}
      // add new fish
      const timestamp = Date.now();
      fishes[`fish-${timestamp}`] = fish;
      this.setState({fishes: fishes})
    }
  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Fish Market" />
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
