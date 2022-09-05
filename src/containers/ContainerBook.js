import React, { useState } from 'react'
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import { actionAddBook, actionDeleteBook, actionDeleteAllBooks } from '../redux/actions/actionBook';

const ContainerBook = ({ libraryData, addBook, deleteBook, deleteAllBooks }) => {

  const initialState = {
    title: '',
    author: ''
  }

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = event => {
    // We put the state as 
    event.preventDefault();
    addBook(newData);

    // Empty the input after 
    setNewData(initialState);
  }

  const displayData = libraryData.length > 0 ?
    <FlipMove>
    { libraryData.map( data => {
      return(
          <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
            <span><strong>Title: </strong> {data.title}</span>    
            <span><strong>Author: </strong> {data.author}</span>
            <span 
              className="btn btn-danger"
              onClick={() => deleteBook(data.id)}
            >x</span>
          </li>
        
      )
    })}
    </FlipMove>
    :
    <p className="text-center">No Book saved</p>

  const deleteAllBooksBtn = libraryData.length > 0 && 
    <div className="d-flex justify-content-center">
      <button 
        className="btn btn-danger mt-4 mb-5"
        onClick={() => deleteAllBooks()}
        >Delete all books
      </button>          
    </div>
    


  return (
    <main role="main">
      <div className="bg-light mb-4 pt-4" style={{minHeight: '200px'}}>
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Add a book to your library</p>

          <form className="d-flex justify-content-center" onSubmit={handleSubmit}> 
            <div className="p-2">
              <input 
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Title"
                required
                onChange={ event => setNewData({...newData, title: event.target.value})}
              />
            </div>

            <div className="p-2">
              <input 
                value={newData.author}
                type="text"
                className="form-control"
                placeholder="Author"
                required
                onChange={ event => setNewData({...newData, author: event.target.value})}
              />
            </div>

            <div className="p-2">
              <button className="btn btn-outline-secondary">Add</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{minHeight: '200px'}}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              { displayData }
            </ul>
            { deleteAllBooksBtn } 
          </div>        
        </div>
      </div>
    </main>
    
  )
}

// 1: We map the state from the Redux store
// state.library is from state.js rootReducer
// 2: load the array books
// 3: libraryData will now be available in the props of the component
const mapStateToProps = state => {

  return {
    // libraryData: state.library.books
    libraryData: state.library
  }
}

// 1: We dispatch the action addBook from actionAddBook.js with the action and payload, 
// 2: we give to addBook as params the newData located in the state of this component
// 3: addBook will now be available in the props of the component
// Same with actionDeleteBook
const mapDispatchToProps = dispatch => {
  return {
    addBook: newData => dispatch(actionAddBook(newData)),
    deleteBook: id => dispatch(actionDeleteBook(id)),
    deleteAllBooks: () => dispatch(actionDeleteAllBooks())
  }
}
 
// connect will generate a superior component
export default connect(mapStateToProps, mapDispatchToProps)(ContainerBook);