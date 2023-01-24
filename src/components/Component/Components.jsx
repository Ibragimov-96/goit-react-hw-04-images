import React, { Component } from 'react';

// import PropTypes from 'prop-types';
class Components extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default Components;
