import React, {ChangeEvent} from 'react';
import Button from "../button/Button";
import {statusMessageTextType} from "../../App";

type SettingsPropsType = {
    counterValue: number
    inputMinValue: number
    inputMaxValue: number
    setInputMaxValue: (value: number) => void
    setInputMinValue: (value: number) => void
    setCounterActive: (value: boolean) => void
    counterActive: boolean
    setCounterValue: (value: number) => void
    resetCounter: () => void
    statusMessage: statusMessageTextType
    setStatusMessage: (status:statusMessageTextType) => void
}

const Settings = (props: SettingsPropsType) => {



    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInputMaxValue(+e.currentTarget.value)
        props.setCounterActive(false)
    }

    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInputMinValue(+e.currentTarget.value)
        props.setCounterActive(false)
    }

    const onSetButtonClick = () => {
        props.setCounterActive(true)
        props.resetCounter()
    }

    if (props.inputMinValue >= props.inputMaxValue) {
        props.setStatusMessage("incorrect values")
    }
    else {
        props.setStatusMessage("set values")
    }



    return (
        <div className="Settings">
            <div className={"display"}>
                <p>
                    <label>
                        MaxValue: <br/>
                        <input type="number" value={props.inputMaxValue} onChange={onMaxValueChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        MinValue: <br/>
                        <input type="number" value={props.inputMinValue} onChange={onMinValueChange}/>
                    </label>
                </p>
            </div>
            <div className="buttons">

                            <Button
                                name={"set"}
                                counterValue={props.counterValue}
                                callback={onSetButtonClick}
                                minValue={props.inputMinValue}
                                maxValue={props.inputMaxValue}
                                counterActive={props.counterActive}
                                statusMessage={props.statusMessage}
                            />

            </div>


            {/*<button onClick={increaseCounter} disabled={isDisableIncr}>incr</button>
                <button onClick={resetCounter} disabled={isDisableSet}>reset</button>*/}
        </div>
    );
};

export default Settings;