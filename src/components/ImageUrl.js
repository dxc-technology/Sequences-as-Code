
import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

class ImageUrl extends Component {

  static get propTypes() {
    return {
        title: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string
    };
  }

  render() {
    return (
      <Fragment>
        <div>
        {
          <a href={require(`../sequences/${this.props.title}/images/${this.props.url}`)}  target="sac">{this.props.description}</a>
        }
        </div>
      </Fragment>
    )}
}

export default ImageUrl;

