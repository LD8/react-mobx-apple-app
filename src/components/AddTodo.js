import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
  }
  // 添加任务
  addTodo(e) {
    const { todoAdd } = this.props.todo
    // 判断用户敲击的是否是回车键
    if (e.key === 'Enter') {
      // 获取用户在 input 中输入的内容
      const taskName = e.target.value
      if (taskName.trim().length === 0) {
        // 判断用户是否输入了内容
        return
      }
      // 添加至 todo list
      todoAdd(taskName)
      // 清空 input
      e.target.value = ''
    }
  }
  render() {
    // const { todos } = this.props.todo
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" onKeyUp={this.addTodo} />
      </header>
    )
  }
}

export default AddTodo
