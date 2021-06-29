import React, {useState,useEffect} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';
const ShowOne= (props) => {
	
	const [pet, setPet ] = useState({});
    const [likes, setLikes ] = useState(0);

	
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/pets/" + props.id   )
			.then((res) =>setPet(res.data))
			.catch((err) => console.log(err));
				

	},[props.id] );
	const deletePet =()=>{
        
   axios.delete("http://localhost:8000/api/pets/" + props.id)
		.then((res) =>navigate("/pets/"))
		.catch((err) => console.log(err));
	};
    return (
		<div className="show">
			<div className="bar">
            <Link to = { "/pets/" }>
								
								back to home 
								</Link>
                                
			<button onClick= { deletePet}>Adopt {pet.name}</button> </div>
			<h3> <b>Name:</b>{pet.name}</h3> 
            <div className="box">
            <p> <b>Type:</b>  {pet.type}</p>
            <p> <b>Description:</b> {pet.description}</p>
            <p>  <b>Skills:</b>  <p> {pet.skill1}</p>    <p>{pet.skill2}</p>   <p>{pet.skill3}</p>  </p>
           
            <p className><b>likes:</b>               {likes}</p>
            <button onClick={(event)=>setLikes(likes + 1) }>like {pet.name}</button>
           
             </div>
			


			
			
		
			 
		</div>
	)
}

export default ShowOne;