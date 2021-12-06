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
      <div>
        <nav>
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
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/teams/:id">
            <TeamsDetail />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/players/:id">
            <PlayersDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
