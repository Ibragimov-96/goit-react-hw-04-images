import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Components from './Component/Components';
import Searchbar from './Searchbar/SearchBar';
import Galary from './Galary/Galary';
import Button from './Button/Button';
import { Loader } from './Loader/Loder';

import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    imgName: null,
error:null,
    images: [],
    page: 1,
    isLoading: false,
  };
  loadeMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;
    const KEY = `32393059-516ce92bb65b938d93c48f3a1`;
    const API = `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    if (prevName !== nextName || this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      fetch(API)
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(
            new Error(`Нет таких картинок ${nextName}`)
          )
        })
        .then(img =>
          this.setState(prevState => ({
            images: [...prevState.images, ...img.hits],
          }))
        ).catch(error=> this.setState({error}))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  onSubmit = name => {
    this.setState({ imgName: name, page: 1, images: [] });
  };
  render() {
    return (
      <>
        <Components>
          <Searchbar onSubmit={this.onSubmit} />
          {this.state.isLoading && <Loader />}

          <Galary images={this.state.images} />
          {this.state.imgName && <Button loadMore={this.loadeMore}/>}
        </Components>
        <ToastContainer position="top-right" autoClose={2000} />
      </>
    );
  }
}
