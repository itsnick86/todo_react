const Filter = props => {
    const handleFilterButton = e => {
        e.preventDefault();
        props.onFilterButton(e.target.value);
    };

    const handleFilterSearch = e => {
        e.preventDefault();
        props.onFilterSearch(e.target.value);
    };

    return (
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
                    <button
                        type="button"
                        className="btn btn-secondary"
                        value="allButton"
                        onClick={handleFilterButton}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        value="activeButton"
                        onClick={handleFilterButton}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        value="completeButton"
                        onClick={handleFilterButton}
                    >
                        Complete
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
                        onChange={handleFilterSearch}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Filter;
