import { useState } from 'react';

import Filter from './components/Filter';
import ToDoGrid from './components/ToDoGrid';

import './App.css';

function App() {
    const [filteredButton, setFilteredButton] = useState('allButton');
    const [filteredSearch, setFilteredSearch] = useState('');

    const initToDoList = [
        { id: 1, title: 'Build Wireframe', completed: false },
        { id: 2, title: 'Map Out Components', completed: false },
        { id: 3, title: 'Build The App', completed: true },
    ];

    const handleFilterButton = value => {
        setFilteredButton(value);
    };

    const handleFilterSearch = value => {
        setFilteredSearch(value);
    };

    return (
        <div className="container">
            <h1 className="text-center">Things To Do</h1>
            <Filter
                onFilterButton={handleFilterButton}
                onFilterSearch={handleFilterSearch}
            />
            <ToDoGrid
                toDoItems={initToDoList}
                buttonFilter={filteredButton}
                searchFilter={filteredSearch}
            />
        </div>
    );
}

export default App;
