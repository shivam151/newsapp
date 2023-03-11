import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = "8c5fad63c0ca40c18e9b15d5d9fe74cf";
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Switch>
          <Route path="/business">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"business"} />
          </Route>
          <Route path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"entertainment"} />
          </Route>
          <Route path="/general">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"general"} />
          </Route>
          <Route path="/health">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"health"} />
          </Route>
          <Route path="/science">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"science"} />
          </Route>
          <Route path="/sports">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"sports"} />
          </Route>
          <Route path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"technology"} />
          </Route>
          <Route path="/">
            <News setProgress={setProgress} apiKey={apiKey} pagesize={5} category={"general"} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App