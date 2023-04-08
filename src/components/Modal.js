const Modal = props => {
    const handleDeleteToDo = () => {
        props.deleteToDo(props.toDoId);
    };

    return (
        <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModalLabel">
                            Delete
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to remove?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleDeleteToDo}
                            data-bs-dismiss="modal"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
