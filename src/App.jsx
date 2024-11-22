import { useEffect, useReducer, useState } from 'react'
import { INITIAL_STATE, postReducer } from './reducers/postReducer'
import { ACTION_TYPE } from './actionTypes/postActionTypes'
import './App.css'
// import Form from './components/Form'
import Counter from './components/Counter/Counter'
import ProfileCared from './components/Counter/ProfileCared'



function App() {
  // dispatch allows us to send a message to the reducer
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)
  
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPE.FETCH_START })
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json()
      }).then((data) => {
        dispatch({ type: ACTION_TYPE.FETCH_SUCCESS, payload: data })
      }).catch((err) => {
        dispatch({ type: ACTION_TYPE.FETCH_ERROR })
      })
  }


  return (
    <>
      {/* <button onClick={handleFetch}>
        {state.loading ? "wait..." : "Fetch the post"}
      </button>
      <p>{state.post.title}</p>
      <span>{state.error && "Something went wrong"}</span> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      <ProfileCared/>
    </>
  )
}

export default App
