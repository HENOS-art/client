
import './App.css';
import { Router } from '@reach/router';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import ShowOne from './components/ShowOne';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      
        <Router>
        <AllPets path = "/pets"/>
        <NewPet path = "/pets/new"/>
        <ShowOne path = "/pets/:id"/>
        <Edit path ="/pets/:id/edit"/>
      </Router> 
    </div> 
  );
}

export default App;
