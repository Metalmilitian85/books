import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Nonfiction() {

    const [ books, setBooks] = useState([])

    // Install Axios. Create state to hold the info from the api. res.data is first part, then results.books is from the data.
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=lKyc7QHXqVFY1pVsAyyuNMns1PZXdNAh')
            setBooks(res.data.results.books)
            console.log(res.data.results.books)
        }
        fetchBooks()
    }, [])


  return (
    <div>
        <h1 className='font-bold text-4xl text-center py-10'>Non-Fiction</h1>
        <section>
            {/* Mapping through the books state for each (book). */}
            {/* The below const containes the sections of the object on the data page. Just pic which ones you want to use from the data object, then put them in a list. */}
            {books.map((book) => {
                const { age_group, author, book_image, buy_links, description, price, primary_isbn10, publisher, rank, title  } = book
                return (
                    <article key={rank} className='flex flex-wrap'>
                        <div className='w-[25%] mx-auto'>
                            <img src={book_image} alt={title} />
                        </div>
                        <div className='text-center'>
                            <h3 className='font-bold text-xl'>{title}</h3>
                            <p>{description}</p>
                            <p className='font-semibold'>Author: {author}</p>
                        </div>
                        <div className='flex flex-col mx-auto'>
                            <ul className='text-center'>
                                <li className='font-semibold'>Publisher: {publisher}</li>
                            </ul>
                            <ul className='text-center pb-8'>
                                <p className='font-bold mt-5'>Buy Now</p>
                                {buy_links.map((link) => {
                                    const {name, url} = link
                                    return (
                                        <div key={name}>
                                            <a href={url}>{name}</a>
                                        </div>
                                    )
                                })}
                            </ul>
                            <div className='border-b-2 border-black mb-10'></div>
                        </div>
                    </article>
                )
            })}
        </section>
    </div>
  )
}
