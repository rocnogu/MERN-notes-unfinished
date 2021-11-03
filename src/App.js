import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//
import CreateNode from "./components/CreateNode";
import Home from "./components/Home";
import Nbar from "./components/Nbar";
import Notes from "./components/Notes";
//

//
//
export default function App() {
  //
  return (
    <div className="App">
      <Router>
      <Nbar fixed="top"/>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>

        <Route exact path="/notes">
          <Notes />
        </Route>

        <Route exact path="/create">
          <CreateNode />
        </Route>
        </Switch>

      </Router>
    </div>
  );
}
