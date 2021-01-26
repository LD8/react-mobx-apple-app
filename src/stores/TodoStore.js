import { observable, action, computed } from 'mobx'

class TodoStore {
  @observable todos = []
  // 筛选条件
  @observable filter = 'All'
  // 更改筛选条件
  @action.bound changeFilter(condition) {
    this.filter = condition
  }
  // 检测筛选条件的变化 => 进行筛选
  @computed get filteredTodo() {
    switch (this.filter) {
      case 'All':
        return this.todos
      case 'Active':
        return this.todos.filter((t) => !t.completed)
      case 'Completed':
        return this.todos.filter((t) => t.completed)
      default:
        return this.todos
    }
  }
  // 添加任务
  @action.bound todoAdd(taskName) {
    this.todos.push({
      taskName,
      completed: false,
    })
  }
  // 删除任务
  @action.bound todoDelete(index) {
    this.todos.splice(index, 1)
  }
  // 完成任务
  @action.bound todoComplete(index) {
    this.todos[index].completed = !this.todos[index].completed
  }
  // 计算未完成任务数量
  @computed get unfinishedTodoCount() {
    return this.todos.filter((t) => !t.completed).length
  }
  // 清除已完成
  @action.bound clearCompleted() {
    this.todos = this.todos.filter((t) => !t.completed)
  }
}

const todo = new TodoStore()

export default todo
