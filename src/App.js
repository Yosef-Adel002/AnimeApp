import app from './firebase'
import './App.css';
import Loginpage from './components/pages/Loginpage';
import {Route , Switch ,Redirect} from "react-router-dom"
import Home from './components/pages/Home';
import Serch from './components/pages/Serch';
import AnimeDetaies from './components/pages/AnimeDetaies';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
            <Redirect to  = "/Home"/>
        </Route>
          <Route path="/Home">
              <Home></Home>
          </Route>
          <Route path="/login">
              <Loginpage></Loginpage>
          </Route>
          <Route path="/search">
              <Serch/>
          </Route>
          <Route path="/Detailes/:name">
              <AnimeDetaies/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
