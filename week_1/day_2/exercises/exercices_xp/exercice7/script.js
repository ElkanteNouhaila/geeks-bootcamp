// ====Exercice 7 : My book list
let allBooks = [
    {
        title: 'Harry Potter ',
        author: 'J.K. Rowling',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg',
        alreadyRead: false
    },
    {
        title: 'The secret',  
        author: 'Rhonda Byrne',
        image: 'https://m.media-amazon.com/images/I/41+eK8zBwQL.jpg',
        alreadyRead: true
    },
]

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");

    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";

    if (book.alreadyRead === true) {
        bookDetails.style.color = "red";
    }

    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(img);
    section.appendChild(bookDiv);
});
