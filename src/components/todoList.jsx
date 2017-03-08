import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Todo from './todo.jsx'

import DevTool from 'mobx-react-devtools';

@observer
export default class TodoList extends Component {
    static propTypes = { }

    constructor(props) {
        super(props)
        this.state = { }
    }

    render() {
        const { todoStore } = this.props

        return (
            <div>
                <DevTool />
                {
                    todoStore.todos.map((todo, index) => {
                        return (
                            <Todo
                                todo={ todo }
                                key={ index }
                                index={ index }
                                onDeleteTask={ todoStore.deleteTask }
                            />
                        )
                    })
                }
                Progress: { todoStore.completedTodosCount }
                <br/>
                AllCount: { todoStore.allTodosCount }
                <br/>
                <input
                    type = 'text'
                    onKeyDown = {
                        (event) => {
                            if (event.keyCode == "13") {
                                todoStore.addTodo(event.target.value)
                                event.target.value = ''
                            }
                        }
                    }
                />
            </div>
        )
    }
}
