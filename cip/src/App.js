import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage";
import Plogin from "./components/pages/Plogin";
import Dlogin from "./components/pages/Dlogin";

function App() {
  return (
    < Router>
    <div>
          <Routes>
                 <Route exact path='/' element={< LandingPage />}></Route>   
                 <Route exact path='/Plogin' element={< Plogin />}></Route> 
                 <Route exact path='/Dlogin' element={< Dlogin />}></Route>   
          </Routes>   
    </div>
    </Router>
    
  );
}

export default App;
