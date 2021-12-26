import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Settings from "./components/settings/Settings";

export type statusMessageTextType = "set values" | "incorrect values"

function App() {
    const [inputMaxValue, setInputMaxValue] = useState<number>(5)
    const [inputMinValue, setInputMinValue] = useState<number>(2)
    const [counterValue, setCounterValue] = useState<number>(inputMinValue)
    const [counterActive, setCounterActive] = useState<boolean>(true)
    const [statusMessage, setStatusMessage] = useState<statusMessageTextType>("set values")
    //const [disable, setDisable] = useState<boolean>(false)

    // let isButtonSetDisable;
    //
    // if (counterActive) {
    //     isButtonSetDisable = true
    // }
    // if (counterActive === false) {
    //     isButtonSetDisable = false
    // }



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

    const buttons = [{name: "incr", callback: increaseCounter}, {name: "reset", callback: resetCounter}]


    return (
        <div className="App">
            <Counter counter={counterValue}
                     buttons={buttons}
                     inputMaxValue={inputMaxValue}
                     inputMinValue={inputMinValue}
                     counterActive={counterActive}
                     statusMessage={statusMessage}
            />
            <Settings
                counterValue={counterValue}
                inputMaxValue={inputMaxValue}
                setInputMaxValue={setInputMaxValue}
                inputMinValue={inputMinValue}
                setInputMinValue={setInputMinValue}
                setCounterActive={setCounterActive}
                counterActive={counterActive}
                setCounterValue={setCounterValue}
                resetCounter={resetCounter}
                statusMessage={statusMessage}
                setStatusMessage={setStatusMessage}
            />
        </div>
    );
}

export default App;
