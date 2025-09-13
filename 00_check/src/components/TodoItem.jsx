const TodoItem = (props) => {
    return (
        <div className="todo-items">
            <div className="todo-left">
            <input type="checkbox" />
                <p>{props.item}</p>
            </div>
            <span class="material-symbols-outlined">delete</span>
        </div>
    )
}

export default TodoItem