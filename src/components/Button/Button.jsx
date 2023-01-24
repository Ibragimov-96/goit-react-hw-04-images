import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Div } from './ButtonStyle';
class BtnLoadMore extends Component {
  render() {
    return (
      <Div>
        <button onClick={this.props.loadMore} type="button" className="Button">
          Load More
        </button>
      </Div>
    );
  }
}

export default BtnLoadMore;
BtnLoadMore.propTypes={
  loadMore:PropTypes.func
}