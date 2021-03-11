import "./App.css";
import Home from "./Component/Home/Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LeagueInfo from './Component/LeagueInfo/LeagueInfo';

function App() {
  return (
    <Router>
     <Switch>
     <Route exact path="/details/:idLeague" component={LeagueInfo} />
     <Route exact path="/" component={Home} />
     <Route path="*" render={() => <h1>Data not found</h1>} />
     </Switch>
    </Router>
  );
}

export default App;
