import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

// JSON Configuration Info
import sac from "../missions";
import ImageUrl from "./ImageUrl";

class MissionPage extends Component {

  static get propTypes() {
    return {
        title: PropTypes.string
    };
  }

	render() {
		return (
      <Fragment>
          <div>
            {
              sac.missions.map((mission) => {
                if(mission.title !== this.props.title) return null;
                return (
                  <div key={mission.id}>
                    <h1>{mission.component}</h1>
                    <div>
                      <ul>
                        {
                          mission.sequences.map((sequence) => {
                            if(sequence.heading===""){
                              return (
                                <li key={sequence.id}>
                                  <ImageUrl title={mission.title} url={sequence.url} description={sequence.description} />
                                </li>
                              );
                            }
                            return (
                              <div key={sequence.id}>
                                <h2>{sequence.heading}</h2>
                                <li key={sequence.id}>
                                  <ImageUrl title={mission.title} url={sequence.url} description={sequence.description} />
                                </li>
                              </div>
                            );
                          })
                        }
                      </ul>
                    </div>
                  </div>
                );
              })
            }
        </div>
      </Fragment>
    );
  }
}

export default MissionPage;