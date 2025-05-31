import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center gap-10 p-10'>
            <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <button className='btn btn-primary'>Click</button>
            </div>
            <div>
                <img className='w-[full]' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;