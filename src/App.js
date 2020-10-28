import Layout from './pages/Layout';
import HomePage from './pages/Homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/profile/:username" ><Layout /></Route>
      </Switch>
    </Router>
  );
}

export default App;
