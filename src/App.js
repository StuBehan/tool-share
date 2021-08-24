import './App.css';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search';
import Tools from './pages/tools';
import Options from './pages/options';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <strong>Tool Share!</strong>
        </header>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/tools' component={Tools}/>
          <Route path='/options' component={Options}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
