import fetch from 'node-fetch';

const url = "http://jsonplaceholder.typicode.com/todos/3"
// const url = "t.json"

const get_data = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

get_data(url);