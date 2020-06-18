import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

// JSON Configuration Info
import sac from "../missions";

class SacMenu extends Component {

  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <NavLink className='navBarBrandLink' to="/">Home</NavLink>
          {
            //Build a Nav.Link for each mission in the JSON file
            sac.missions.map((mission) => {
              return (
                <NavLink className='navBarLink' key={mission.id} to={mission.title}>{mission.navlink}</NavLink>
              )
            })
          }
          <NavLink className='navBarBrandLink' to="/SearchPage">Search</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default SacMenu;
