import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Settings from "./components/settings/Settings";

function App() {


    const [inputMaxValue, setInputMaxValue] = useState<number>(5)
    const [inputMinValue, setInputMinValue] = useState<number>(2)
    const [counterValue, setCounterValue] = useState<number>(inputMinValue)
    //const [disable, setDisable] = useState<boolean>(false)


    const increaseCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const resetCounter = () => {
        setCounterValue(inputMinValue)
    }


    const setLocalStorageValue = (counter: number) => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }

    const getLocalStorageValue = () => {
        let stringValue = localStorage.getItem("counterValue");
        if (stringValue) {
            setCounterValue(JSON.parse(stringValue))
        }
    }

    useEffect(() => {
        getLocalStorageValue()
    }, [])


    useEffect(() => {
        setLocalStorageValue(counterValue)
    }, [counterValue])

    const buttons = [{name: "incr", callback: increaseCounter}, {name: "reset", callback: resetCounter},]


    return (
        <div className="App">
            <Counter counter={counterValue}
                     buttons={buttons}
                     inputMaxValue={inputMaxValue}
                     inputMinValue={inputMinValue}/>
            <Settings
                counterValue={counterValue}
                inputMaxValue={inputMaxValue}
                setInputMaxValue={setInputMaxValue}
                inputMinValue={inputMinValue}
                setInputMinValue={setInputMinValue}/>
        </div>
    );
}

export default App;
