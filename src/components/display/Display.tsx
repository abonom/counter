import React from 'react';

type DisplayPropsType = {
    counter: number
    inputMaxValue: number
}

const Display = (props: DisplayPropsType) => {

    const isMaxValueClass = props.counter === props.inputMaxValue ? "maxValue" : ""

    return (
        <div className={`${isMaxValueClass} display`}>
            <span>{props.counter}</span>
        </div>
    );
};

export default Display;