import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actionFetchBook';
import { actionAddBook } from '../redux/actions/actionBook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerSearch = () => {

  const [title, setTitle] = useState('');

  // Here we use hooks
  const state = useSelector(state => state.search);
  const dispatch = useDispatch();

  
  
  // 1: I receive the info
  // 2: I dispatch the title
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchBooks(title))
  }

  const handleSave = (title, author) => {
    const bookToSave = { title, author};
    dispatch(actionAddBook(bookToSave));
    toast(`"${title}" saved!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
      }
    );
  }

  const displayFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading</span>
      </div>
    </div>
  )
  : state.error !== '' ? (
    <p>{state.error}</p>
  )
  :
  (
    state.fetchedBooks.map( data => {
      return (
      <div className="card mb-2" key={data.id}>
        <div className="card-header">
          <h5 className="mb-0">
            <button 
              className="btn btn-link collapsed text-decoration-none"
              data-toggle="collapse"
              data-target={`#${data.id}`}
              aria-expanded="false"
              >
                {data.volumeInfo.title}
              </button>
          </h5>
        </div>
        <div 
          className="collapse" 
          id={ data.id }
          data-parent="#accordion">
          <div className="card-body">
          {
            data.volumeInfo.hasOwnProperty('imageLinks') && 
            <img 
              src={data.volumeInfo.imageLinks.thumbnail} 
              alt={data.volumeInfo.title}
            />
          }
           
            <br />
            {
              data.volumeInfo.hasOwnProperty('title') &&
              <h4 className="card-title">Title: {data.volumeInfo.title}</h4> 
            }
            {
              data.volumeInfo.hasOwnProperty('authors') &&
              <h5 className="card-title">Authors: {data.volumeInfo.authors}</h5>
            }
            {
              data.volumeInfo.hasOwnProperty('description') &&
              <p className="card-text">Description: {data.volumeInfo.description}</p>
            }           
            {
              data.volumeInfo.hasOwnProperty('previewLink') &&
              <a 
              className="btn btn-outline-secondary"
              target="_blank" 
              rel="no  noreferrer"
              href={data.volumeInfo.previewLink}
              >More infos</a>            
            }              
            <button 
              className="btn btn-outline-secondary m-3"
              onClick={() => handleSave(data.volumeInfo.title, data.volumeInfo.authors)}
              
              >Save</button>
            
          </div>
        </div>
      </div>
      )
    })
    
  )

  return (
    <main role="main">
      <div className="bg-light mb-4 pt-4" style={{minHeight: '200px'}}>
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Search for a book on Google API</p>

          <form 
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          > 
            <div className="p-2">
              <input 
                type="text"
                className="form-control"
                placeholder="Search"
                required
                value={title}
                onChange={ event => setTitle(event.target.value) }
              />
            </div>

            <div className="p-2">
              <button 
                className="btn btn-outline-secondary"
                >Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{minHeight: '200px'}}>
        <div id="accordion">

        { displayFetchedBooks }
        <ToastContainer />
        </div>
      </div>
    </main>
  )
}

export default ContainerSearch