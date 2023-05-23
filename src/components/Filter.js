const Filter = props => {
    const handleFilterButton = e => {
        e.preventDefault();
        props.onFilterButton(e.target.value);
    };

    const handleFilterSearch = e => {
        e.preventDefault();
        props.onFilterSearch(e.target.value);
    };

    const handleClearFilter = () => {
        props.onFilterButton('');
        props.onFilterSearch('');
        document.getElementById('SearchText').value = '';
    };

    return (
        <div className="row justify-content-end mt-3 mb-3">
            <div
                className="btn-toolbar col-auto"
                role="toolbar"
                aria-label="Filter toolbar"
            >
                <div className="input-group">
                    <div className="input-group-text" id="SearchFilter">
                        ?
                    </div>
                    <input
                        id="SearchText"
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Input search filter"
                        aria-describedby="SearchFilter"
                        onChange={handleFilterSearch}
                    ></input>
                </div>
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Filter buttons"
                >
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
                    <button
                        type="button"
                        className="btn btn-secondary"
                        value="clearButton"
                        onClick={handleClearFilter}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
