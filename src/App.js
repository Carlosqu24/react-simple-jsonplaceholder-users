import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//COMPONENTS
import { Cards } from './components/Cards'
import { Card } from './components/Card'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App p-5">
        <Router>
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route path="/:id" component={Card} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
