import React, { Component } from 'react'
import AppleList from './AppleList'
import Current from './Current'
import Eaten from './Eaten'

class Basket extends Component {
  render() {
    return (
      <div className="basket">
        <div className="sum">
          <Current />
          <Eaten />
        </div>
        <AppleList />
      </div>
    )
  }
}
export default Basket
