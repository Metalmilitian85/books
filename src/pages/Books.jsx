import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Fiction from './books/Fiction'
import { Link } from 'react-router-dom'

export default function Books() {

    const [ books, setBooks] = useState([])

    // Install Axios. Create state to hold the info from the api. res.data is first part, then results.books is from the data.
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?api-key=lKyc7QHXqVFY1pVsAyyuNMns1PZXdNAh')
            setBooks(res.data.results.books)
            console.log(res.data.results.books)
        }
        fetchBooks()
    }, [])


  return (
    <div>
        <h1 className='font-bold text-4xl text-center py-10'>Books</h1>
        <Link to="/fiction">Fiction</Link>
        <Link to="/nonfiction">Non-Fiction</Link>
    </div>
  )
}
