import axios from 'axios';
import React, { useState } from 'react'

function Addnew() {
    const[details,setDetails]=useState({
        title:"",
        author:"",
        image:"",
        ingredients:"",
        directions:""

    });
    function handleSubmit(){
        let listIngredients=details.ingredients.split(",")
        axios.post("https://recipe-backend-psi.vercel.app/recipe/add",{
            userId:localStorage.getItem("id"),
            title:details.title,
            author:details.author,
            image:{
                url:details.image,
                type:"image"
            },
            ingredients:listIngredients,
            directions:details.directions
        })
        .then(res=>console.log(res))
        .catch(e=>console.log(e))
    }
  return (
    <div>
      <form>
        <h1>Create Recipe</h1>
        <h5>Share a recipe with the club by completing the below form</h5>
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input value={details.title} onChange={(e)=>setDetails({...details,title:e.target.value})}  type="text" className="form-control" placeholder="Recipe Title" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input value={details.author} onChange={(e)=>setDetails({...details,author:e.target.value})} type="text" className="form-control" placeholder="Author" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input value={details.image} onChange={(e)=>setDetails({...details,image:e.target.value})} type="text" className="form-control" placeholder="Please upload image or url" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input value={details.ingredients} onChange={(e)=>setDetails({...details,ingredients:e.target.value})} type="text" className="form-control" placeholder="Enter your Ingrediants with comma seperated values " aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input value={details.directions} onChange={(e)=>setDetails({...details,directions:e.target.value})} type="text" className="form-control" placeholder="Recipe directions" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<button onClick={()=>handleSubmit()}>Submit</button>
      </form>
    </div>
  )
}

export default Addnew
