import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id));
        // console.log(ConvertedStoredBooks);
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);

    }, [])



    return (
        <div className='mb-10'>
            <h1 className='text-2xl text-center m-5'>Books</h1>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Book List:</Tab>
                        <Tab>My Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Book I read {readList.length}</h2>
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