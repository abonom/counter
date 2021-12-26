import React from 'react';
import {statusMessageTextType} from "../../App";

type ButtonPropsType = {
    callback: () => void
    name: string
    counterValue: number
    minValue: number
    maxValue: number
    counterActive: boolean
    statusMessage: statusMessageTextType
}

function Button(props: ButtonPropsType) {

    let isDisable = false
    let maxValue = props.maxValue
    let nimValue = props.minValue
    if ((props.counterValue === maxValue && props.name === "incr") || (props.counterActive === false && props.name === "incr")) {
       isDisable = true
    }
    if ((props.counterValue === nimValue && props.name === "reset") || (props.counterActive === false && props.name === "reset")) {
        isDisable = true
    }

    if (props.counterActive && props.name === "set" || props.statusMessage === "incorrect values" && props.name === "set") {
        isDisable = true
    }










    return (
        <div>
            <button onClick={props.callback}
                    disabled={isDisable}>
                {props.name}
            </button>
        </div>
    );
}

export default Button;