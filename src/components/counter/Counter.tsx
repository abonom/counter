import React from 'react';
import Display from "../display/Display";
import Button from "../button/Button";
import {statusMessageTextType} from "../../App";

type CounterPropsType = {
    counter: number
    buttons: { name: string, callback: () => void }[]
    inputMaxValue: number
    inputMinValue: number
    counterActive: boolean
    statusMessage: statusMessageTextType
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className="Counter">
            <Display counter={props.counter}
                     inputMaxValue={props.inputMaxValue}
                     counterActive={props.counterActive}
                     statusMessage={props.statusMessage}/>
            <div className="buttons">
                {
                    props.buttons.map(b => {
                        return (
                            <Button
                                name={b.name}
                                counterValue={props.counter}
                                callback={b.callback}
                                minValue={props.inputMinValue}
                                maxValue={props.inputMaxValue}
                                counterActive={props.counterActive}
                                statusMessage={props.statusMessage}
                            />
                        )
                    })
                }
            </div>


            {/*<button onClick={increaseCounter} disabled={isDisableIncr}>incr</button>
                <button onClick={resetCounter} disabled={isDisableSet}>reset</button>*/}
        </div>
    );
};

export default Counter;