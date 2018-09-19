import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  // alternative way of accessing this outside of render is:
  // constructor() {
// super();
// this.goToStore = this.goToStore.bind(this)
// }
// otherwise bind gotoStore to StorePicker in onSubmit function in render: onSubmit={(e) => this.goToStore(e)}

  goToStore(event) {
    event.preventDefault();
    const storeId = this.storeInput.value;
    console.log(this.storeInput.value)
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render () {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
