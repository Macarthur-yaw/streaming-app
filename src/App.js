import { useState } from "react";
import "./Assets/Main.css";
// import PopUp from "./Components/pop.js";
import {Routes,Route,Link} from "react-router-dom";
import Playlist from "./Components/Playlist";
import Home from "./Components/Home";


function App() {
  const [first, setfirst] = useState(" ")
 const [pop, setpop] = useState(false);
 function openPop(){
setpop(!pop);
 }
  return (
    <div className="App">
      {/* <PopUp/> */}
      <nav className="navbar">
        <h2>Sound-box</h2>
       <nav className="subnav">
        <Link to="/" className="link">Home</Link>
         <Link to="/ab" className="link">Add-playlist</Link>
</nav>

        <input type="search" placeholder="Search" value={first} onChange={e=>setfirst(e.target.value)}/>
        {/* <button onClick={handleEvent}>Search</button> */}
      
      <button onClick={openPop}>Sign in</button>
      
 



      </nav>
      
      {pop && (<div className="header-pop">
 <div className="head-pop">
 
   
  <div className="form-pop">
  <div className="end">
  <div className="header-text">
  Sign in
  </div>
    
    
<div onClick={openPop}>     &#215;</div>
   
    </div>
 
 
 
    
  <form>
    <input type="text" placeholder="Username"/>


    <input type="password" placeholder="Password"/>

    <button>Sign in</button>
    <div>
    or you do not have an account?
    </div>
  </form>
  </div>
    
  </div></div>)}
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/ab" element={<Playlist/>}/>
</Routes>
    </div>
  );
}

export default App;
