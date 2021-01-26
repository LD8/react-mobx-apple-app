import React, { Component } from 'react'

export default class TodoExtra extends Component {
  render() {
    return (
      // <!-- 列表中没有任务时 隐藏footer -->
      // <!-- 如果没有已完成的任务就隐藏 -->
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> item left
        </span>
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}
