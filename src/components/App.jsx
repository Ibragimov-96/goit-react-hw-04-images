import React, { useState,useEffect  } from 'react';
import { ToastContainer } from 'react-toastify';
import Components from './Component/Components';
import Searchbar from './Searchbar/SearchBar';
import Galary from './Galary/Galary';
import Button from './Button/Button';
import { Loader } from './Loader/Loder';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const App =()=> {
  // state = {
  //   imgName: null,
  //   error: null,
  //   images: [],
  //   page: 1,
  //   isLoading: false,
  //   btnLoader: true,
  // };
  const [imgName, setImgName]=useState('')
  const [errors, setError]=useState(null)
  const [images, setImages]=useState([])
  const [page, setPage]=useState(1)
  const [isLoading, setIsLoading]=useState(false)
  const [btnLoader, setBtnLoader]=useState(true)
  const loadeMore = () => {
    setPage(prevState => prevState +1)
    // this.setState(prevState => {
    //   return { page: prevState.page + 1 };
    // });
  };
  const KEY = `32393059-516ce92bb65b938d93c48f3a1`;
  const API = `https://pixabay.com/api/?q=${imgName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  useEffect(()=>{
    if(imgName ===""){return}
    setIsLoading(true)
    setBtnLoader(true)
    fetch(API)
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }

          return Promise.reject(new Error(`Нет таких картинок ${imgName}`));
        })
        .then(img => {
          if (!img.hits.length) {
            toast('Такой картинки нет');
          }
          if (img.hits.length < 12) {
            setBtnLoader(false)
            // this.setState({ btnLoader: false });
          }
          setImages(prevState=>[...prevState,...img.hits])
          // this.setState(prevState => ({
          //   images: [...prevState.images, ...img.hits],
          // }));
        })
        .catch(error => 
          setError(error))
          // this.setState({ error }))
        .finally(() => 
        setIsLoading(false)
        
       );
  },[imgName,page])

  // componentDidUpdate (prevProps, prevState) {
  //   const prevName = prevState.imgName;
  //   const nextName = this.state.imgName;
  //   const KEY = `32393059-516ce92bb65b938d93c48f3a1`;
  //   const API = `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  //   if (prevName !== nextName || this.state.page !== prevState.page) {
  //     this.setState({ isLoading: true, btnLoader: true });
  //     fetch(API)
  //       .then(responce => {
  //         if (responce.ok) {
  //           return responce.json();
  //         }

  //         return Promise.reject(new Error(`Нет таких картинок ${nextName}`));
  //       })
  //       .then(img => {
  //         if (!img.hits.length) {
  //           toast('Такой картинки нет');
  //         }
  //         if (img.hits.length < 12) {
  //           this.setState({ btnLoader: false });
  //         }
  //         this.setState(prevState => ({
  //           images: [...prevState.images, ...img.hits],
  //         }));
  //       })
  //       .catch(error => this.setState({ error }))
  //       .finally(() => this.setState({ isLoading: false }));
  //   }
  // }
  const onSubmit = name => {
    setImgName(name)
    setPage(1)
    setImages([])
    // this.setState({ imgName: name, page: 1, images: [] });
  };
  return (
    <>
      <Components>
        <Searchbar onSubmit={onSubmit} />
        {isLoading && <Loader />}

        <Galary images={images} />
        {images.length > 0 && btnLoader && (
          <Button loadMore={loadeMore} />
        )}
      </Components>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
