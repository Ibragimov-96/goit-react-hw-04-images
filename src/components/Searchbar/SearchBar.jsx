import React, { useState  } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
const Searchbar =({onSubmit}) =>{
 
  const [name, setName]= useState('')
  const handleImg = e => {
    setName(e.currentTarget.value.toLowerCase())
    // this.setState({ name: e.currentTarget.value.toLowerCase() });
  };
  
 const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      toast('Ведите имя картинки');
      return;
    }
   onSubmit(name);
    setName('')
  };
  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button className="SearchForm-button" type="submit">
          <span>Search</span>
        </button>

        <input
          onChange={handleImg}
          className="SearchForm-input"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
  //
}

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
