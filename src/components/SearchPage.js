import React, { Component, Fragment } from "react";
import "../index.css";

// JSON Configuration Info
import sac from "../missions";
import ImageUrl from "./ImageUrl";

class SearchPage extends Component {
  state = {
    searchTitle: "",
    searchUMLTags: "",
    sequences: []
  };

  handleOnChangeTitle = event => {
    this.setState({ searchTitle: event.target.value });
  };

  handleOnChangeUMLTags = event => {
    this.setState({ searchUMLTags: event.target.value });
  };

  handleSearchSequences = () => {

    //console.log("handleSearchSequences:searchTitle: ", this.state.searchTitle);
    console.log("handleSearchSequences:searchUMLTags: ", this.state.searchUMLTags);

    var sequences = [];
    this.setState({ sequences: [] });

    if(this.state.searchTitle === "" && this.state.searchUMLTags === "")
    {
      return;
    }

    sac.missions.filter((mission) => {
      return mission.sequences.filter((sequence) => {
        if((sequence.description.toUpperCase().includes(this.state.searchTitle.toUpperCase())
            && sequence.description !== "") &&
           sequence.umltags.findIndex(tag => tag.toLowerCase().includes(this.state.searchUMLTags.toLowerCase())) > -1
            && sequence.umltags.length > 0)
        {
          sequence.title = mission.title;
          sequence.display = mission.component + "->" + sequence.description
          sequences.push(sequence);
          //console.log ("found:", sequence);
        }
        return sequences
      });
    });

    this.setState({ sequences: sequences });

    console.log("sequences: ", this.state.sequences);
  };

  render() {
    //console.log("render sequences: ", this.state.sequences);
    return (
      <div id="searchSequences">
        <h1>Search Sequences</h1>
        <h4>By Title</h4>
        <input
          id="searchSequencesInputTitle"
          name="text"
          type="text"
          placeholder="Enter full or partial sequence title to search for"
          onChange={event => this.handleOnChangeTitle(event)}
          value={this.state.searchTitle}
        />
        <h4>By UML Tag</h4>
        <input
          id="searchSequencesInputUMLTag"
          name="text"
          type="text"
          placeholder="Enter full or partial sequence UML tag to search for"
          onChange={event => this.handleOnChangeUMLTags(event)}
          value={this.state.searchUMLTags}
        />
        <button id="searchSequencesButton" onClick={this.handleSearchSequences} type="submit">Search</button>
        { this.state.sequences.length > 0 ?
          (
            <Fragment>
              <div>
                <ul>
                  {
                    this.state.sequences.map((sequence) => {
                      return (
                        <li key={sequence.id}>
                          <ImageUrl title={sequence.title} url={sequence.url} description={sequence.display} />
                        </li>
                      );
                    })
                  }
                  </ul>
              </div>
            </Fragment>
          )
          :
          (
            <Fragment>
              <h4>No sequences found with the specified key words in their titles or matching the specified UML tag.</h4>
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default SearchPage;