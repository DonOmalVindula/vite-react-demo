import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/to-do-list'
import { Todo } from './models/to-do';

function App() {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        const todoList = localStorage.getItem("todoList");

        if (todoList) {
            setTodoList(JSON.parse(todoList));
        }
    }, []);

    useEffect(() => {
        if (todoList.length === 0) {
            return;
        }

        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo: Todo = {
            id: todoList.length + 1,
            text: event.currentTarget.todoName.value,
            checked: false
        };

        setTodoList([...todoList, newTodo]);
    };

    return (
        <>
            <h1>To-do List ({todoList.length})</h1>
            <div className="todo-action-row">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="todo-name" className="todo-label">Name:</label>
                    <input id="todoName" className="todo-input" type="text" />
                    <button className="todo-add-btn" type="submit">Add</button>
                </form>
            </div>
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </>
    )
}

export default App
