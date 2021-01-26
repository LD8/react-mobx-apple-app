import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('basket')
@observer
class Current extends Component {
  render() {
    const {
      currentBasket: { num, weight },
    } = this.props.basket
    return (
      <div>
        <div>当前</div>
        <div>
          <span>{num}个苹果, </span>
          <span>{weight}克</span>
        </div>
      </div>
    )
  }
}

export default Current
