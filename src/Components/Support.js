import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Support = () => {
    const change=useNavigate();
    function changeHandler(){
        change("/labs")
    }
  return (
        <div>
                <div> I am inside Support</div>
                <button onClick={changeHandler}>Move To Lab Page</button>
        </div>

    )
}


export default Support;