import { Todo } from "../models/to-do";

interface TodoListProps {
    todoList: Todo[],
    setTodoList: (todoList: Todo[]) => void
}

const TodoList = (props: TodoListProps) => {

    const { todoList, setTodoList } = props;

    const handleCheck = (index: number) => {        
        const newTodoList = [...todoList];
        newTodoList[index].checked = !newTodoList[index].checked;
        setTodoList(newTodoList);
    };

    const handleDelete = (index: number) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };
    

    if (!todoList || todoList.length === 0) {
        return <p>No to-do items yet!</p>
    }

    return (
        <>
            {todoList.map((todo, index) => (
                <div key={todo.id} className="todo-item">
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onClick={() => handleCheck(index)}
                        />
                        <span className={ todo.checked ? "checked-todo" : "" } >{todo.text}</span>
                    </div>
                    <button
                        className="todo-delete-btn"
                        onClick={() => handleDelete(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
};

export default TodoList;
