import React from 'react'
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const move=useNavigate()

    function changeHandler(){
        move("/support")
    }
    function backHandler(){
     move(-1);
    
    }

  return (
        <div>
                <div> I am inside About</div>

            <button onClick={changeHandler}>Move To Support Page</button>
            <button onClick={backHandler}>Back </button>
        </div>

    )
}


export default About;
