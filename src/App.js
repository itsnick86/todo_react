import Filter from './components/Filter';
import ToDoGrid from './components/ToDoGrid';

import './App.css';

function App() {
    return (
        <div className="container">
            <h1 className="text-center">Things To Do</h1>
            <Filter />
            <ToDoGrid />
        </div>
    );
}

export default App;
