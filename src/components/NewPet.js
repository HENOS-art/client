import React, { useState } from 'react'
import axios from 'axios';

import {Link, navigate} from '@reach/router';
const NewPet = (props) => {
const [ errors,setErrors] =useState({});
const [pet, setPet] = useState({
    name:" ",
    type:"",
    description :"",
    skills:"",
}); 


const handleSubmit = e => {
    
    e.preventDefault();
    
    axios.post('http://localhost:8000/api/pets/new',pet )
      
    .then((res) => {
        console.log(res.data);
        
        if(res.data.errors) {
            setErrors(res.data.errors);
        }
        else {
            
            navigate("/pets");
        }
    })
    .catch((err) => {
        
        console.log(err);
    })
}

const inputChange = (e) => {
    console.log("input name: " + e.target.name);
    console.log("input value: " + e.target.value);
    let newPetObject = { ...pet };
    newPetObject[e.target.name] = e.target.value;
    setPet(newPetObject);
}

return (
    <div >
      <h3>  Know a pet needing a home?</h3>
      <Link to = { "/pets/" } className="bar">
								
								back to home 
								</Link>
    <form onSubmit={ (e) => handleSubmit(e) }className="box2">
        <div className="nav1">
       <div >
                <label ><b>Pet Name :</b> </label>
                
         {
                errors.name?
                <span className="error-text">{errors.name.message}</span>
                :null
            }
             <br/>
                <input
                    type="text"
                    name="name"
                    value={ pet.name }
                    onChange={ (e) => inputChange(e) }
                    />
                    
            </div>
            <div>
                <label><b>Pet Type:</b></label>
                <br/>
                {
                    errors.type ?
                        <span className="error-text">{errors.type.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="type"
                    value={ pet.type }
                    onChange={ (e) => inputChange(e) }
                    />
            </div>
            <div>
                <label><b>Pet Description:</b></label>
                <br/>
                {
                    errors.description ?
                        <span className="error-text">{errors.description.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="description"
                    value={ pet.description }
                    onChange={ (e) => inputChange(e) }
                    />
                      </div>
                      </div>
                  <div className="nav"> 
                  <p><b>Skills (optional)</b></p>
                  <div>
                       <label><b>Skill1:</b></label>
                       <br/>
               
                <input
                    type="text"
                    name="skill1"
                    value={ pet.skill1}
                    onChange={ (e) => inputChange(e) }
                    />
                    </div>
                    <div>   <label><b> Skill2</b></label>
                    <br/>
                <input
                    type="text"
                    name="skill2"
                    value={ pet.skill2 }
                    onChange={ (e) => inputChange(e) }
                    />
                   </div>
                    <div>
                       <label><b>Skill3</b></label>
                       <br/>
                
                <input
                    type="text"
                    name="skill3"
                    value={ pet.skill3}
                    onChange={ (e) => inputChange(e) }
                    />
                    
            </div>
            </div>
            <button type="submit">Add to pet </button>
           
           
        </form>
    </div>
      
)
}

export default NewPet;
