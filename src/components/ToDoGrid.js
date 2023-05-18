import { useState } from 'react';

import Modal from './Modal';

const ToDoGrid = props => {
    const [modalToDoId, setModalToDoId] = useState('');

    const listButtonFilter = props.toDoItems.filter(toDoItem => {
        if (props.buttonFilter === 'activeButton') {
            return toDoItem.completed === false;
        }
        if (props.buttonFilter === 'completeButton') {
            return toDoItem.completed === true;
        }
        return toDoItem;
    });

    const listSearchFilter = listButtonFilter.filter(toDoItem => {
        if (props.searchFilter.length > 1) {
            return toDoItem.title
                .toLowerCase()
                .includes(props.searchFilter.toLowerCase());
        }
        return toDoItem;
    });

    const handleCompletedCheck = e => {
        props.setCompletedCheck(e.target.value);
    };

    const handleNewToDoValue = e => {
        props.newToDoSetValue(e.target.value);
    };

    const handleAddToDo = () => {
        props.addToDo();
    };

    const handleModalToDoId = e => {
        setModalToDoId(e.target.parentNode.getAttribute('id'));
    };

    const handleDeleteToDo = toDoId => {
        props.deleteToDo(toDoId);
    };

    const handleEditToDo = e => {
        props.editToDo(
            e.target.parentNode.getAttribute('id'),
            document.getElementById('InputValue').value
        );
    };

    return (
        <>
            <div className="input-group mb-1">
                <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with checkbox"
                    placeholder="Add New To Do..."
                    onChange={handleNewToDoValue}
                    value={props.newToDoValue}
                ></input>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAddToDo}
                    disabled={props.newToDoValue.length === 0 ? true : false}
                >
                    Add
                </button>
            </div>
            {listSearchFilter.map(toDoItems => {
                return (
                    <div key={toDoItems.id}>
                        <div id={toDoItems.id} className="input-group mb-1">
                            <div className="input-group-text">
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value={toDoItems.id}
                                    aria-label="Checkbox for To Do Item"
                                    checked={toDoItems.completed}
                                    onChange={handleCompletedCheck}
                                ></input>
                            </div>
                            <input
                                id="InputValue"
                                type="text"
                                className={`form-control ${
                                    toDoItems.completed && 'completed'
                                }`}
                                aria-label="Text input with checkbox"
                                disabled={toDoItems.isDisabled}
                                defaultValue={toDoItems.title}
                            ></input>
                            <button
                                type="button"
                                className={`btn btn-${
                                    toDoItems.isDisabled
                                        ? 'outline-warning'
                                        : 'success'
                                }`}
                                onClick={handleEditToDo}
                            >
                                {toDoItems.isDisabled ? 'Edit' : 'Done'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                onClick={handleModalToDoId}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
            <Modal toDoId={modalToDoId} deleteToDo={handleDeleteToDo} />
        </>
    );
};

export default ToDoGrid;
