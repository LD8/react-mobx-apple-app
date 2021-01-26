import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoList extends Component {
  render() {
    const { filteredTodo, todoDelete, todoComplete } = this.props.todo
    return (
      // <!-- 列表中没有任务时 隐藏main -->
      // <!-- 任务编辑状态类名: editing 任务完成状态类名: completed -->
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {filteredTodo.map((t, i) => (
            <li className={t.completed ? 'completed' : ''} key={i.toString()}>
              <div className="view">
                <input className="toggle" type="checkbox" checked={t.completed} onChange={() => todoComplete(i)} />
                <label>{t.taskName}</label>
                <button className="destroy" onClick={() => todoDelete(i)}></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default TodoList
