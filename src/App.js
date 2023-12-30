import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import About from './Components/About';
import Labs from './Components/Labs';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import MainHeader from './Components/MainHeader';
function App() {
  return (
    <div className="App">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
         <NavLink to="/about">About</NavLink>
         </li>
        <li> 
        <NavLink to="/labs">Lab</NavLink>
        </li>
        <li>
        <NavLink to="/support">Support</NavLink>

        </li>
      </ul>
    </nav>
     
     <Routes>
      <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
