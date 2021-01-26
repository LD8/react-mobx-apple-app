import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('basket')
@observer
class Eaten extends Component {
  render() {
    const {
      totalEaten: { num, weight },
    } = this.props.basket
    return (
      <div>
        <div>已吃掉</div>
        <div>
          <span>{num}个苹果, </span>
          <span>{weight}克</span>
        </div>
      </div>
    )
  }
}

export default Eaten
