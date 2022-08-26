import React, { useState } from 'react'

const AddBooks = () => {

  const initialState = {
    title: '',
    author: ''
  }

  const [newData, setNewData] = useState(initialState)
  console.log(newData)
  return (
    <main role="main">
      <div className="bg-light mb-4 pt-4" style={{minHeight: '200px'}}>
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Add a book to your library</p>

          <form className="d-flex justify-content-center">
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
              <button className="btn btn-outline-secondary">Add a book</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{minHeight: '200px'}}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li className="list-group-item list-group-item-light d-flex justify-content-between">Saved books here</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button 
                className="btn btn-danger mt-4 mb-5"
              >Delete all books</button>
            </div>
          </div>        
        </div>
      </div>
    </main>
    
  )
}
 
export default AddBooks