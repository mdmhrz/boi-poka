const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem('readList');
    if (storedBookSTR) {
        const storeBookData = JSON.parse(storedBookSTR);
        return storeBookData;
    }
    else {
        return []
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert('This Book already Exist')
    }
    else {
        storedBookData.push(id);
        // console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }

}

export { addToStoredDB, getStoredBook }