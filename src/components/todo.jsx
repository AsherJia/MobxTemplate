import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Todo extends Component {
    static propTypes = { }

    constructor(props) {
        super(props)
        this.state = { }
    }

    onToggleCompleted = () => {
        const todo = this.props.todo
        todo.completed = !todo.completed
    }

    onRename = () => {
        const todo = this.props.todo
        todo.task = prompt('Task name', todo.task) || ""
    }

    render() {
        const { todo, index } = this.props;

        return (
            <li onDoubleClick={this.onRename}>
                <input
                    type="checkbox"
                    checked={ todo.completed }
                    onChange={ this.onToggleCompleted }
                />
                { todo.task }
                <input
                    type='button'
                    value='Delete'
                    onClick={() => {
                        this.props.onDeleteTask(index)
                    }}
                />
            </li>
        )
    }
}
