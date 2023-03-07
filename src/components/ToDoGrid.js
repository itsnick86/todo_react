const ToDoGrid = props => {
    return (
        <div>
            <div className="row" id="ToDoInput">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add New To Do..."
                    aria-label="New To Do Input"
                    aria-describedby="ToDoInput"
                ></input>
            </div>
            {props.toDoItems.map(toDoItems => {
                return (
                    <div key={toDoItems.id} className="row border">
                        <div className="form-check col-auto me-auto">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="completeToDoCheckbox"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="completeToDoCheckbox"
                            ></label>
                            {toDoItems.title}
                        </div>
                        <div className="col-auto">
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ToDoGrid;
