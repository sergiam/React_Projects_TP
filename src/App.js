import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HubPol from './components/Hubs/HubPol';
import HubSergi from './components/Hubs/HubSergi';

function App() {
  
  return (
    <div>
      <Router>
      <div id='navigation'>
          <ul>
            <li>
              <Link to='/pol'>Pol</Link>
            </li>
            <li>
              <Link to='/sergi'>Sergi</Link>
            </li>
          </ul>
        </div>
      <div>
        
        <Routes>
          <Route exact path='/pol' element={<HubPol />} />
          <Route exact path='/sergi' element={<HubSergi />} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;
