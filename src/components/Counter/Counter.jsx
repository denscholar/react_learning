import React, { useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleAdd = () => {
        setCounter((prev) => prev + 1)
    }
    const handleSub = () => {
        if (counter >= 1) {
            return setCounter((prev) => prev - 1)
        }
        else {
            return
        }
    }
    return (
        <div>
            <h1 style={{ fontSize: "70px", padding: "0", margin: "0" }}>{counter}</h1>
            <div className="buttons" style={{ display: "flex", gap: "5rem" }}>
                <button onClick={handleSub} type='button'>-</button>
                <button onClick={handleAdd} type='button'>+</button>
            </div>
        </div>
    )
}

export default Counter