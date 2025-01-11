import './App.css';
import {useReducer} from "react";

const initState = 0

const UP = 'up'
const DOWN = 'down'

const reducer = (state, action) => {
    switch (action) {
        case UP:
            return state + 1
        case DOWN:
            return state - 1
        default:
            throw new Error(`Unknown action: ${action}`)
    }
}

function App() {
    const [number, dispatch] = useReducer(reducer, initState)
    return (
        <div className="App">
            <h1>{number}</h1>
            <button onClick={() => dispatch(UP)}>Tăng</button>
            <button onClick={() => dispatch(DOWN)}>Giảm</button>
        </div>
    );
}

export default App;
