let myLibrary = [];

function Book(title, author, pages, bookRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.bookRead = bookRead
    this.info = function() {
        // console.log(title+', by '+author+', '+pages+' pages, '+bookRead)
        return (title+', by '+author+', '+pages+' pages, '+bookRead)
    }
}

function addBookToLibrary() {
    let newTitle = prompt("type title of book")
    let newAuthor = prompt("type the author's full name")
    let newpages = prompt("Enter the book's pages")
    let newBookread = prompt("type 'read or did not read'")
    let newBook = new Book(newTitle, newAuthor, newpages, newBookread)
    myLibrary.push(newBook)
}

function showLibrary () {
    let bookCard = document.createElement('p');
    bookCard.innerHTML = `I ${book1.bookRead} the book called ${book1.title}. It has ${book1.pages} pages. Authored by ${book1.author}.`;
    document.getElementById("bookshelf").appendChild(bookCard); 
}


const book1 = new Book('kama sutra', 'buddha', 690, 'did not read')
showLibrary();
// console.log(book1.info())


// addBookToLibrary();
// console.log(myLibrary[0]);