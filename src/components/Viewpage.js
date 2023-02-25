import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./View.css"
function Viewpage() {
  const[details,setDetails]=useState([]);
  const[search,setSearch]=useState("");
  const[searchDetails,setSearchDetails]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:5000/recipe/all/")
    .then(res=>setDetails(res.data.details))
    .catch(e=>console.log(e))
  },[])

  function searchItems(){
      let datas=details.filter(data=>data.title.includes(search));
      setSearchDetails(datas)
  }

  return (
    <div className='container'>
      <div className='top'>
      <img
          className="logo"
          alt="logo"
          src="https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg"
        />
       <button onClick={()=>{
        localStorage.clear()
        navigate("/")
       }}  type="button" className="btn btn-primary">LogOff</button>
      </div>
      <div className="input-group mb-3">
  <input type="text" value={search} onChange={e=>setSearch(e.target.value)} className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button onClick={()=>searchItems()} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
<div><button onClick={()=>navigate("/addnew")}>Add New</button></div>
   <div>
    {searchDetails.length===0?<>
      <div className='view'>
   {details.map((data,index)=>{
    
      return <div onClick={()=>navigate("/details",{state:data})
  } style={{backgroundImage:'url('+data.image.url+')',width:"450px",height:"300px",backgroundSize:"100% 100%",marginBottom:"15px"}}>
        {console.log(data)}
        <span style={{width:"400px",backgroundColor:'black',height:"40px",color:"yellow",fontWeight:"bolder",fontSize:"larger"}}>
      {data.title}
        </span>
    </div>
        
    })}
   </div>
    </>:<>
    <div className='view'>
   {searchDetails.map((data,index)=>{
    
      return <div onClick={()=>navigate("/details",{state:data})
  } style={{backgroundImage:'url('+data.image.url+')',width:"450px",height:"300px",backgroundSize:"100% 100%",marginBottom:"15px"}}>
        {console.log(data)}
        <span style={{width:"400px",backgroundColor:'black',height:"40px",color:"yellow",fontWeight:"bolder",fontSize:"larger"}}>
      {data.title}
        </span>
    </div>
        
    })}
   </div>
    </>}
   
   </div>
    </div>
  )
}

export default Viewpage
