import React, {useState} from 'react';
import './App.css';

function App() {

    const [counter, setCounter] = useState<number>(0)
    //const [disable, setDisable] = useState<boolean>(false)

    let isDisableIncr: boolean = false;
    let isDisableSet: boolean = false;

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    if (counter === 5) {
        isDisableIncr = !isDisableIncr
    }

    if (counter === 0) {
        isDisableSet = !isDisableSet
    }

    const isMaxValueClass = counter === 5 ? "maxValue" : ""

    return (
        <div className="App">
            <div className={`display ${isMaxValueClass}`}>{counter}</div>
            <div className="buttons">
                <button onClick={increaseCounter} disabled={isDisableIncr}>incr</button>
                <button onClick={resetCounter} disabled={isDisableSet}>reset</button>
            </div>
        </div>
    );
}

export default App;
