import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      // <!-- 列表中没有任务时 隐藏main -->
      // <!-- 任务编辑状态类名: editing 任务完成状态类名: completed -->
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" />
          </li>
        </ul>
      </section>
    )
  }
}
