import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import Home from './views/Home';
import PlayersDetail from './views/Players/PlayersDetail';
import TeamsDetail from './views/Teams/TeamsDetail';

export default function App() {
  return (
    <Router>
      <div className='main-cnt'>
        <nav className='top-bar'>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              <NavLink to="/players">Players</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/teams/:id" component={TeamsDetail  }/>
          <Route exact path="/players"
            component={Players} />
          <Route exact path="/players/:id"
            component={PlayersDetail} />
          <Route exact path="/" component={Home}/>
            
        </Switch>
      </div>
    </Router>
  );
}
