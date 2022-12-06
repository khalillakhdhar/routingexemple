import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,Link
} from "react-router-dom";

class App extends React.Component {
render() {
return (
<Router>
<ul>
  <li><Link to="/">Accueil</Link></li>
  <li><Link to="/propos">A propos</Link></li>
  <li><Link to="/contact">Contactez nous</Link></li>
</ul>
<h1> Bienvenu</h1>
<Routes>
  <Route path="/propos" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>


</Router>


)

}
}

export default App;
