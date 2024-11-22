import React, { useRef } from 'react'

const UseRefHook = () => {
    const inputElem = useRef()

    const clickMe = () => {
        console.log(inputElem.current.style.backgroundColor = 'blue');
        
    }

    return (
        <div>
            <form action="" style={{ display: "flex", gap: '20px', flexDirection: 'column' }}>
                <input ref={inputElem} type="text" id='hello' className='input' />
                <button onClick={clickMe} type='button'>Click me</button>
            </form>
            <div className="title">
                <h2>Hellow world</h2>
            </div>
        </div>
    )
}

export default UseRefHook