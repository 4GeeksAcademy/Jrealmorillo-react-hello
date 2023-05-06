
import React, { useState, useEffect } from "react";
import { BsFillClockFill } from "react-icons/bs";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);

    return (
        <div className="row bg-dark m-2 p-2">
            <div className="col-06 d-flex flex-nowrap display-1 text-white justify-content-around">
                <div className="box">
                    <i className="clockIcon"><BsFillClockFill /></i>
                </div>
                <div className="box">{six % 10}</div>
                <div className="box">{five % 10}</div>
                <div className="box">{four % 10}</div>
                <div className="box">{three % 10}</div>
                <div className="box">{two % 10}</div>
                <div className="box">{one % 10}</div>
            </div>
        </div>
    )
}

export default Counter;
