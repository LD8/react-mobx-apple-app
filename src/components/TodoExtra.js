import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

const FILTER_FLAGS = ['All', 'Active', 'Completed']

@inject('todo')
@observer
class TodoExtra extends Component {
  render() {
    const { unfinishedTodoCount, changeFilter, filter, clearCompleted } = this.props.todo
    return (
      // <!-- 列表中没有任务时 隐藏footer -->
      // <!-- 如果没有已完成的任务就隐藏 -->
      <footer className="footer">
        <span className="todo-count">
          <strong>{unfinishedTodoCount}</strong> item left
        </span>
        <ul className="filters">
          {FILTER_FLAGS.map((f) => (
            <li key={f}>
              <button onClick={() => changeFilter(f)} className={f === filter ? 'selected' : ''}>
                {f}
              </button>
            </li>
          ))}
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}

export default TodoExtra
