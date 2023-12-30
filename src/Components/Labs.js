import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Labs = () => {
    const swift= useNavigate();
    function changeHandler(){
        // render about component
        swift("/about");

    }
  return (
        <div>
                <div> I am inside Lab</div>
                <button onClick={changeHandler}>Move to about page</button>
        </div>
    )
}


export default Labs;