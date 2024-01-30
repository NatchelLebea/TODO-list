import React, { useState, useEffect } from 'react';
import { TodoWrapper } from './components/TodoWrapper';
import './App.css';

function App() {
    const [appState, setAppState] = useState({
        todos: []
    });

    // Load the app state from localStorage on component mount
    useEffect(() => {
        const storedState = localStorage.getItem('todoAppState');
        if (storedState) {
            setAppState(JSON.parse(storedState));
        }
    }, []);

    // Save the app state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('todoAppState', JSON.stringify(appState));
    }, [appState]);

    return (
        <div className="App">
            <TodoWrapper
                appState={appState}
                setAppState={setAppState}
            />
        </div>
    );
}

export default App;
