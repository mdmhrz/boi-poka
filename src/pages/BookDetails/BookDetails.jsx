import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);
    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook);
    const { bookName, author, image, rating, category, tags, yearOfPublishing, publisher } = singleBook || {};

    const handleMarkAsRead = (id) => {
        // Store book by ID
        // Define where to store (e.g., an array or localStorage)
        // If the book already exists, show an alert
        // If the book does not exist, push it into the collection or array
        addToStoredDB(id);

        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });


    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h4>{bookName}</h4>
            <button onClick={() => handleMarkAsRead(id)} className='btn btn-accent'>Mark as Read</button>
            <button className='btn btn-info ml-2'>Add To Wishlist</button>
        </div>
    );
};

export default BookDetails;