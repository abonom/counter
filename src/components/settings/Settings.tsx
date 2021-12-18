import React, {ChangeEvent} from 'react';
import Button from "../button/Button";

type SettingsPropsType = {
    counterValue: number
    inputMinValue: number
    inputMaxValue: number
    setInputMaxValue: (value: number) => void
    setInputMinValue: (value: number) => void

}

const Settings = (props: SettingsPropsType) => {


    const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInputMaxValue(+e.currentTarget.value)

    }

    const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInputMinValue(+e.currentTarget.value)
    }

    const setInputValues = () => {

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
                                //callback={callback}
                                minValue={props.inputMinValue}
                                maxValue={props.inputMaxValue}
                            />

            </div>


            {/*<button onClick={increaseCounter} disabled={isDisableIncr}>incr</button>
                <button onClick={resetCounter} disabled={isDisableSet}>reset</button>*/}
        </div>
    );
};

export default Settings;