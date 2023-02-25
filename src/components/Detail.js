import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./View.css";
function Detail() {
    const[instruction,setInstruction]=useState(true)
    const location=useLocation();
    const details=location.state;
    const navigate=useNavigate();
  return (
    <div className='container'>
      {console.log(details)}
      <div className='top'>
      <img
      onClick={()=>navigate(-1)}
          className="logo"
          alt="logo"
          src="https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg"
        />
       <button type="button" className="btn btn-primary">LogOff</button>
       </div>
       <div className='side'>
        <div className='right'>
            <h5>{details.title}</h5>
            <img className="dishimage" src={details.image.url} alt="dish"/>
        </div>
        <div  className='left'>
            <button className='instruct' onClick={()=>setInstruction(true)}>
                Instruction
            </button>
            <button className='instruct' onClick={()=>setInstruction(false)}> 
                Ingredients
            </button>
   
            {   
            instruction?
            <p>{details.directions}</p>:
            <ul>
                {details.ingredients.map((list,index)=>{
                    return <li>
                        {list}
                    </li>
                })}
            </ul>
            }


            </div> 
       </div>
      </div>
   
  )
}

export default Detail
