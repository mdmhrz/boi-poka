import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    const [allBooks, setAllBooks] = useState([]);


    // *Way 1 for Data Fetching
    // useEffect(() => {
    //     fetch('booksData.json').then(res => res.json()).then(data =>
    //         setAllBooks(data)
    //     )
    // }, []);

    // Way-2 for Data Fetching 
    // const bookPromise = fetch('booksData.json').then(res => res.json());


    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading......</span>}>
                {
                    data.map(singleBook => <Book key={singleBook.bookId} data={data}></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;