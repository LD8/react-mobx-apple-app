import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('basket')
@observer
class AppleList extends Component {
  render() {
    const { eat, pick, currentList } = this.props.basket
    return (
      <div className="list">
        <ul>
          {currentList.map((apple, i) => (
            <li key={apple.id} className="apple-item">
              <div>
                <div>红苹果 - {apple.id}号</div>
                <div>{apple.weight}克</div>
              </div>
              <div>
                <button className="eat-apple-btn" onClick={() => eat(i)}>
                  吃掉
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" onClick={pick} className="pick-apple-btn">
          摘苹果
        </button>
      </div>
    )
  }
}

export default AppleList
