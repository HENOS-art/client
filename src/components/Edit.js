import React, { useState,useEffect } from 'react'
import axios from 'axios';

import {Link, navigate} from '@reach/router';
const Edit = (props) => {
const { id } = props;
const [errors,setErrors] =useState({});
const [pet, setPet] = useState({
    name:" ",
    type:"",
    description :"",
    skill3:"",
    skill2:"",
    skill3:"",
}); 
useEffect(() => {
		
    axios.get("http://localhost:8000/api/pets/" + id   )
        .then((res) =>setPet(res.data))
        .catch((err) => console.log(err));
            

},[] );

const update = e => {
    
    e.preventDefault();
    
    axios.put('http://localhost:8000/api/pets/'+ id ,pet )
      
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
    <div>
         <Link to = { "/pets/" }className="bar">
								
								back to home 
								</Link>

        <p><b>Edit { pet.name }</b></p>
    <form onSubmit={ (e) => update(e) }className="box2">
       <div >
                <label><b>Name</b></label>
                {
                errors.name?
                <span className="error-name">{errors.name.message}</span>
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
                <label><b>Type</b></label>
                <br/>
                {
                    errors.price ?
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
                <label><b>Description</b></label>
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
                      <div className="nav"> 
                      <p><b>Skills (optional)</b></p>
                  <div> 
                       <label><b>Skill1</b></label>
                {
                    errors.skills ? 
                        <span className="error-text">{errors.skills.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="skill1"
                    value={ pet.skill1 }
                    onChange={ (e) => inputChange(e) }
                    />
                    </div>
                    <div>   <label><b>Skill2</b></label>
                {
                    errors.skills ?
                        <span className="error-text">{errors.skills.message}</span>
                        : null
                }
                <input
                    type="text"
                    name="skill2"
                    value={ pet.skill2 }
                    onChange={ (e) => inputChange(e) }
                    />
                   </div>
                    <div>
                       <label><b>Skill3</b></label>
                {
                    errors.skills ?
                        <span className="error-text">{errors.skills.message}</span>
                        : null
                }
            
                <input
                    type="text"
                    name="skill3"
                    value={ pet.skill3}
                    onChange={ (e) => inputChange(e) }
                    />
               </div>      
            </div>
            <button type="submit">Edit Pet</button>
           
          
        </form>
    </div>
      
)
}

export default Edit;
