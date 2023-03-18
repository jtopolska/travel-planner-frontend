import axios from './axios';

export const getAllItems = ( setAllItems ) => {
    axios.get('/')
    .then(({data}) => {
        console.log(data);
        setAllItems(data);
    })
}

export const postItem = ( travelItem, setTravelItem, setAllItems ) => {
    axios.post('/post', { travelItem, done: false })
    .then((data) => {
        console.log('fetch post data', data)
        setTravelItem('');
        getAllItems(setAllItems)
    })
    .catch((err) => console.log('fetch post err', err));
}

export const checkItem = ( _id, setAllItems ) => {
    axios.post('/check', { _id, done: true })
    .then((data) => {
        console.log('fetch check data', data)
        getAllItems(setAllItems)
    })
}

export const editItem = ( itemID, travelItem, setTravelItem, setAllItems, setEdit ) => {
    axios.post('/edit', { _id: itemID, travelItem, done: false })
    .then((data) => {
        console.log('fetch edit data', data);
        setTravelItem('');
        setEdit(false);
        getAllItems(setAllItems);
    })
    .catch((err) => console.log('fetch edit err', err));
}

export const deleteItem = ( _id, setAllItems ) => {
    axios.post('/delete', { _id })
    .then((data) => {
        console.log('fetch delete data', data);
        getAllItems(setAllItems);
    })
    .catch((err) => console.log('fetch edit err', err));
}

export const uncheckItem = ( _id, setAllItems ) => {
    axios.post('/uncheck', { _id, done: false })
    .then((data) => {
        console.log('fetch uncheck data', data)
        getAllItems(setAllItems)
    })
}