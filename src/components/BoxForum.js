import React from 'react';
import { useState } from 'react';

const BoxForum = ({boxes, setBoxes}) => {

    const [color, setColor] = useState("red");
    const [height, setHeight] = useState("150");

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, {
            color: color,
            height: height,
            style: {
                display: "inline-block",
                border: "1px solid " + color,
                height: height + "px"
            }
        }])
    }

    return(
        <div>
             <form onSubmit={ handleSubmit }>
                <div className="Form-group">
                <label htmlFor="color">Color</label>
                <input className="Form-control" type="text" value={color} onChange={handleColor } ></input>
                </div>
                <div className="form-group">
                <label htmlFor="height">Height/Width</label>
                <input className="form-control" type="text" value={height} onChange={handleHeight} ></input>
                </div>
                <button className="form-control" type="submit">Add</button>
            </form>
        </div>
    )
}

export default BoxForum;