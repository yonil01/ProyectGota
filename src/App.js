import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './views/Home';

function App() {
  return (
    <Router>
      {/* ? cuando no es nesesario */}
      <Route path="/:subPage" component={Home} exact/>
    </Router>
  );
}

export default App;