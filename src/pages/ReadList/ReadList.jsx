import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        // console.log(ConvertedStoredBooks);
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);

    }, []);

    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPages)
        }
        if (type === "ratings") {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRatings)
            console.log(sortedByRatings);
        }
    }



    return (
        <div className='mb-10'>
            <h1 className='text-2xl text-center m-5'>Books</h1>
            <div className='text-center'>
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Sort By: {sort ? sort : ""}
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li><a onClick={() => handleSort("pages")}>Page</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Book List:</Tab>
                        <Tab>My Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Book I read {readList.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                            {
                                readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>My wish list</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadList;