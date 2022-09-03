import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="d-flex mb-3 p-3 border-bottom bg-secondary text-white">
                <h4 className="me-auto p-2">
                   <a href="/" className="text-decoration-none text-white">BOOKS</a>
                </h4>

                <nav className="p-2 btn-group">
                    <Link to="/" className="btn btn-light">Home</Link>
                    <Link to="/search" className="btn btn-light">Search</Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar