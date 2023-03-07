import Filter from './components/Filter';
import ToDoGrid from './components/ToDoGrid';

import './App.css';

function App() {
    const initToDoList = [
        { id: 1, title: 'Build Wireframe', completed: false },
        { id: 2, title: 'Map Out Components', completed: false },
        { id: 3, title: 'Build The App', completed: false },
    ];

    return (
        <div className="container">
            <h1 className="text-center">Things To Do</h1>
            <Filter />
            <ToDoGrid toDoItems={initToDoList} />
        </div>
    );
}

export default App;
