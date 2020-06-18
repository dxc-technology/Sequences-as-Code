import React from 'react';
import { Route } from "react-router-dom";

// JSON Configuration Info
import sac from "./missions";

// Components and Pages
import SacMenu from "./components/SacMenu";
import Home from "./pages/HomePage";
import MissionPage from "./components/MissionPage";
import SearchPage from "./components/SearchPage";

// STYLES
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <SacMenu />
    <div className="container">
      <Route exact={true} path="/" component={Home}/>
      {
        /* build a route for each mission in the JSON file*/
        sac.missions.map((mission) => {
          return (
            <Route key={mission.id} path={`/${mission.title}`} render={(props) => <MissionPage {...props} title={mission.title} />}/>
          )
        })
      }
      <Route exact={true} path="/SearchPage" component={SearchPage}/>
    </div>
  </div>
);

export default App;