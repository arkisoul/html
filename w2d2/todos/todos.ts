import {ITodo, Todo} from './todo';

export interface ITodos {
    todos: ITodo[]

    addTodo: (title: string) => void
    removeTodo: (id: number) => void
    updateTodo: (id: number) => void
    getAll: () => ITodo[]
}

export class Todos implements ITodos {
    
}