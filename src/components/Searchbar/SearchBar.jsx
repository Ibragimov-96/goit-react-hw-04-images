import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'
class Searchbar extends Component {
  state = {
    name: '',
  };
  handleImg = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      toast('Ведите имя картинки');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button className="SearchForm-button" type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleImg}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

  //
}

export default Searchbar;
Searchbar.propTypes={
  onSubmit:PropTypes.func
}