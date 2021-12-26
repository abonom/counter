import React from 'react';
import {statusMessageTextType} from "../../App";

type DisplayPropsType = {
    counter: number | string
    inputMaxValue: number
    counterActive: boolean
    statusMessage: statusMessageTextType
}

const Display = (props: DisplayPropsType) => {

    const isMaxValueClass = props.counter === props.inputMaxValue ? "maxValue" : ""

    return (
        <div className={props.statusMessage === "incorrect values" ? "status-error-message display": `${isMaxValueClass} display`}>
            <span>{props.counterActive ? props.counter : props.statusMessage}</span>
        </div>
    );
};

export default Display;