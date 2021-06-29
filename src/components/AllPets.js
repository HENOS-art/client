import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const AllPets= (props) => {
	
	const [pets, setPets ] = useState([]);

	
	useEffect(() => {
		
		axios.get("http://localhost:8000/api/pets")
			.then((res) => {
				console.log(res.data);
				
				setPets(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

	}, []);


	return (
		<div>
			<h3>These pets are looking for a good home.</h3>
			<Link to={"/pets/new"}>
				add a pet to the shelter
			</Link>
		 <table >  
			<thead>
				<th>Name</th>
				<th><b>Type</b></th>
				<th><b>Actions</b></th>
            </thead>
			<tbody>
				{
					pets.map((pet,index)=>
					<tr key={ index }>
                     <td>
						 <p><b>{pet.name}</b></p>
					 </td>
					 <td>
						 <p><b>{pet.type}</b></p>
					 </td>
					 <td>
					 <Link to = { "/pets/" + pet._id }>
								
								Details 
								</Link>
                          |
						  <Link to={"/pets/" + pet._id + "/edit"}>
			                             	edit
		                            </Link>
					 </td>
					</tr>
					
					)
				}
			</tbody>
					
				</table>
			
				
							
			

				    
		</div>
	)
}

export default AllPets;