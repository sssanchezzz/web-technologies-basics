import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

function App() {
    return (
        <AppContainer>
            <Link to='task-1'>
                <button>Task 1</button>
            </Link>
            <Link to='task-2'>
                <button>Task 2</button>
            </Link>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
    button {
        padding: 1rem 2rem;
        border: 1px solid #ccc;
        border-radius: 7px;
        cursor: pointer;
        background: white;
        box-shadow: 5px 5px 5px #d2adff;
    }
`;

export default App;
