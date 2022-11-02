import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Link to='task-1'>
                <button>task1</button>
            </Link>
            <Link to='task-2'>
                <button>task2</button>
            </Link>
        </div>
    );
}

export default App;
