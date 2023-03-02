import './App.css';

function App() {
    return (
        <div className="container">
            {/* Title Section */}
            <h1 className="text-center">Things To Do</h1>
            {/* Filter Section */}
            <div className="row justify-content-end">
                <div
                    className="btn-toolbar col-auto"
                    role="toolbar"
                    aria-label="Filter toolbar"
                >
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Filter buttons"
                    >
                        <button type="button" className="btn btn-secondary">
                            All
                        </button>
                        <button type="button" className="btn btn-secondary">
                            Active
                        </button>
                        <button type="button" className="btn btn-secondary">
                            Completed
                        </button>
                    </div>
                    <div className="input-group">
                        <div className="input-group-text" id="SearchFilter">
                            ?
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Input search filter"
                            aria-describedby="SearchFilter"
                        ></input>
                    </div>
                </div>
            </div>
            {/* To Do Grid */}
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
                <div className="row border">
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
                        >
                            Build Wireframe
                        </label>
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
                <div className="row border">
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
                        >
                            Map Out Components
                        </label>
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
                <div className="row border">
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
                        >
                            Build The App
                        </label>
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
            </div>
        </div>
    );
}

export default App;
