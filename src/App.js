import { useState } from 'react';

import Filter from './components/Filter';
import ToDoGrid from './components/ToDoGrid';

import './App.css';

function App() {
    const initToDoList = [
        { id: 1, title: 'Build Wireframe', completed: false },
        { id: 2, title: 'Map Out Components', completed: false },
        { id: 3, title: 'Build The App', completed: true },
    ];

    const [filteredButton, setFilteredButton] = useState('allButton');
    const [filteredSearch, setFilteredSearch] = useState('');
    const [newToDoValue, setNewToDoValue] = useState('');
    const [toDoList, setToDoList] = useState(initToDoList);

    const handleFilterButton = selectedButton => {
        setFilteredButton(selectedButton);
    };

    const handleFilterSearch = searchText => {
        setFilteredSearch(searchText);
    };

    const handleNewToDoValue = newToDo => {
        setNewToDoValue(newToDo);
    };

    const handleCompletedCheck = toDoId => {
        setToDoList(prevToDoList =>
            prevToDoList.map(toDo => {
                if (toDo.id.toString() === toDoId) {
                    return {
                        ...toDo,
                        completed: !toDo.completed,
                    };
                } else {
                    return toDo;
                }
            })
        );
    };

    const handleAddToDo = () => {
        if (newToDoValue.length > 0) {
            setToDoList(prevToDoList => {
                return [
                    ...prevToDoList,
                    {
                        id: Math.floor(Math.random() * 10000),
                        title: newToDoValue,
                        completed: false,
                    },
                ];
            });
            setNewToDoValue('');
        }
    };

    const handleDeleteToDo = toDoId => {
        setToDoList(prevToDoList =>
            prevToDoList.filter(toDo => toDo.id.toString() !== toDoId)
        );
    };

    return (
        <div className="container">
            <h1 className="text-center">Things To Do</h1>
            <Filter
                onFilterButton={handleFilterButton}
                onFilterSearch={handleFilterSearch}
            />
            <ToDoGrid
                toDoItems={toDoList}
                buttonFilter={filteredButton}
                searchFilter={filteredSearch}
                newToDoSetValue={handleNewToDoValue}
                newToDoValue={newToDoValue}
                addToDo={handleAddToDo}
                deleteToDo={handleDeleteToDo}
                setCompletedCheck={handleCompletedCheck}
            />
        </div>
    );
}

export default App;
