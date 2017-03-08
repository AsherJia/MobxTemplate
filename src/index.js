import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoList from './components/todoList.jsx'
import TodoStore from './stores/todo'
import OrderLine from './stores/orderLine'

import { autorun } from "mobx"

const todoStore = new TodoStore()
todoStore.addTodo('foo')
todoStore.addTodo('bar')

ReactDOM.render(
    <TodoList todoStore={todoStore} />,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept('./components/todoList.jsx', () => {
        var NewTodoList = require('./components/todoList.jsx').default
        ReactDOM.render(
            <NewTodoList todoStore={todoStore}/>,
            document.getElementById('todoapp')
        )
    })
}

console.log('=================================================================')
const orderLine = new OrderLine(10)
console.log("price" in orderLine)
console.log(orderLine.hasOwnProperty("price"))

const dispose = autorun(() => {
    if (orderLine.amount < 0) {
        throw new Error('Amount should not be negative')
    }
    console.error(`Total price: ${orderLine.price*orderLine.amount}`)
})


orderLine.changeCount(1)
orderLine.changeCount(2)
orderLine.changeCount(3)
orderLine.changeCount(4)
orderLine.changeCount(5)

dispose.onError(error => {
    window.alert('Please enter a valid amount.')
})

orderLine.changeCount(-5)
