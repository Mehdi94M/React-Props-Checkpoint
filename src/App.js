
import './App.css';
import Profile from './component/profil/Profile';
import image from './component/profil/36063671_1335900316543961_8595483960329371648_n.jpg'

function App() {
  const handleName = (name) => {
    alert(`Hi, I am ${name}, thanks for the click ;)`)
  }

  return (
    <div className="App">
      <Profile 
        fullName="MessaoudMehdi" 
        profession="MERN Stack Student"
        bio="professional transition from SupplyChain Manager to FullStack Developer with MERN.js"
        handleName={handleName}>
        <img src={image} alt="Meee!"></img>    
      </Profile>
    </div>
  );
 
}

export default App;
