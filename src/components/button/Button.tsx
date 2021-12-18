import React from 'react';

type ButtonPropsType = {
    callback?: () => void
    name: string
    counterValue: number
    minValue: number
    maxValue: number
}

function Button(props: ButtonPropsType) {

    let isDisable = false
    let maxValue = props.maxValue
    let nimValue = props.minValue
    if (props.counterValue === maxValue) {
        props.name === "incr" ? isDisable = true : isDisable = false
    }
    if (props.counterValue === nimValue) {
        props.name === "reset" ? isDisable = true : isDisable = false
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