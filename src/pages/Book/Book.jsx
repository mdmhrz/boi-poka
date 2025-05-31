import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({ singleBook }) => {

    // const data = use(bookPromise);
    // console.log(data);

    const { bookName, bookId, totalPages, author, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;


    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-md border border-gray-50 p-6">
                <figure className='bg-gray-100 p-4 w-5/6 mx-auto'>
                    <img
                        src={image} className='h-[166px]'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-8'>
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by: {publisher}</p>
                    <p>Total Pages: {totalPages}</p>
                    <div className='border border-dashed border-gray-200'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;