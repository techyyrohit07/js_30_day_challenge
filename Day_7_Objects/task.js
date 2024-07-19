// Actvity 1

// task 1

let book_info = {
    title : "The courage to be disliked", 
    author: "Ichiro Kishimi",
    year: "2013"
}

console.log(book_info);

// task 2

console.log(book_info.title);
console.log(book_info["author"]);

// Activity 2

// task 3

book_info.title_and_author = function () {
    return book_info.title + " by " + book_info.author
}

console.log(book_info.title_and_author());

// // task 4

book_info.update_year = function(new_year){
    return book_info.year = new_year
}

console.log(book_info.update_year(2014));

console.log(book_info);


// Activity 3

// task 5

let library = {
    name : "Centarl library",
    books : [
        {title : "To kill a Mockingbird", author : "Harper Lee", year : "1960"},
        {title : "1984", author : "George Orwell", year : "1949"},
        {title : "Pride and Prejudice", author : "Jane Austen", year : "1813"}

    ]
 }

 console.log(library);

//  task 6

console.log(library.name);

library.books.forEach( book => console.log(book.title))

// Acctivity 4

// task 7

book_info.title_and_year = function() {
    return `${this.title} was published in ${this.year}`
}

console.log(book_info.title_and_year());

// Activity 5

// task 8

for (let key in book_info) {
    console.log( key + " : " + book_info[key] );
}

// task 9


let keys = Object.keys(book_info)
let values = Object.values(book_info)

console.log(keys);
console.log(values);




