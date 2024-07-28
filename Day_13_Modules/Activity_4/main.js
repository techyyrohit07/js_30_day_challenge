// task 6

import _ from 'lodash'
import axios from 'axios'

const numbers = [1,2,4,5,6,5,3,2,4,5,5,6]

const new_numbers = _.uniq(numbers)

console.log(new_numbers);


// task 7


async function fetchData(){
    try {
        let response = await axios.get('https://api.github.com/users/techyyrohit07')
        console.log(response.data.login);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
} 

fetchData()