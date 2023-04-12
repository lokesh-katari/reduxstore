import React from 'react'
import { useDispatch } from 'react-redux';

const Balance = () => {
  const dispatch =useDispatch();
  const add=()=>{
    dispatch({
      type:"increment",
    })
  }
  const sub=()=>{
    dispatch({
      type:"decrement",
    })
  }
  const payload=()=>{
    dispatch({
      type:"incrementByvalue",
      payload:10
    })
  }
  return (
   <>
   <div className="container">
   <button onClick={sub} className='btn btn-primary mx-2'>-</button>
   Add to Cart
   <button  onClick={add} className='btn btn-primary mx-2'>+</button>
   <button  onClick={payload} className='btn btn-primary mx-2'>+</button>
   </div>
   </>
  )
}

export default Balance  