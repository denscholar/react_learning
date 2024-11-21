import React, { useReducer, useState } from 'react'
import { formReducer, FORM_INITIAL_STATE } from '../reducers/formReducers';
import { FORM_ACTION_TYPE } from '../actionTypes/formActionTypes';

const Form = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);

    const handleChange = () => {
        dispatch({ type: FORM_ACTION_TYPE.CHANGE_INPUT, payload: { name: e.target.name, value: e.target.value } })
    }

    const handleTag = () => {
        // split the tags
        const tags = text.split(",")
        tags.forEach((tag) => {
            if (tag) {
                dispatch({ type: FORM_ACTION_TYPE.ADD_TAG, payload: tag })
            } else {
                return
            }
        })
        setText("");
    }


    return (
        <div>
            <form action="">
                <div className="inputs" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input type="text" name='title' placeholder='Title' onChange={handleChange} />
                    <input type="text" name='desc' placeholder='Desc' onChange={handleChange} />
                    <input type="number" name='price' placeholder='Price' onChange={handleChange} />

                </div>
                <h2>Category</h2>
                <select onChange={handleChange} name="category" id="" style={{ padding: "10px" }}>
                    <option value="sneakers">Sneakers</option>
                    <option value="canvas">Canvas</option>
                    <option value="jeans">Jeans</option>
                </select>

                <h3>Tags</h3>
                <textarea cols="35" rows="5" name="" id="" placeholder='seperate tags with coma=ma' value={text} onChange={(e) => setText(e.target.value)}></textarea> <br /><br />

                <div style={{ display: "flex", justifyContent: "center", gap: "5px", margin: "0" }}>
                    {state.tags.map((tag) => {
                        return <small onClick={() => { dispatch({ type: FORM_ACTION_TYPE.REMOVE_TAG, payload: tag }) }} style={{ listStyleType: 'none', border: "1px solid white", padding: "10px", marginBottom: "10px" }}>{tag}</small>
                    })}
                </div>

                <button onClick={handleTag} type='button'>Add Tags</button>



                <div style={{ marginTop: "20px", gap: "20px", display: "flex", justifyContent: "center" }}>
                    <button type='button' onClick={() => dispatch({ type: FORM_ACTION_TYPE.DECREASE })}>-</button>
                    <h3>Quantity {state.quantity}</h3>
                    <button type='button' onClick={() => dispatch({ type: FORM_ACTION_TYPE.INCREASE })}>+</button>
                </div>


            </form>
        </div>
    )
}

export default Form