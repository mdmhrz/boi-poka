import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookIds = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookIds);
    // console.log(singleBook);
    const { bookName, bookId, author, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h4>{bookName}</h4>
            <button className='btn btn-accent'>Read</button>
            <button className='btn btn-info ml-2'>Wishlist</button>
        </div>
    );
};

export default BookDetails;