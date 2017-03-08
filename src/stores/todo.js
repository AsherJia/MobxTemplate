import { observable, computed } from 'mobx'

// use computed if you want to reactively produce a value that can be used by other observers
// autorun if you don't want to produce a new value but rather want ot achieve an effect.

export default class TodoStore {
    @observable todos = []

    @computed get completedTodosCount()  {
        return this.todos.filter(todo => todo.completed === true).length
    }

    @computed get allTodosCount() {
        return this.todos.length
    }

    addTodo = (task) => {
        this.todos.push({ task, completed: false })
    }

    deleteTask = (index) => {
        this.todos.splice(index, 1)
    }
}
