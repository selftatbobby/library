let myLibrary = [];
let read = [];
let notread = []
const book1 = new Book('kama sutra', 'buddha', 690, 'did not read')
const book2 = new Book('bible', 'god', 690, 'did not read')
const book3 = new Book('quran', 'allah', 690, 'did not read')
const book4 = new Book('torah', 'yaweh', 690, 'did not read')
const mynodelist = document.getElementById("bookshelf")

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);


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
    let newTitle = prompt("What's the title of book?")
    let newAuthor = prompt("Provide author's full name:")
    let newpages = prompt("How many pages?")
    let newBookread = prompt("Did you 'read' or 'did not read'?")
    let newBook = new Book(newTitle, newAuthor, newpages, newBookread)
    myLibrary.push(newBook)
}


function showLibrary () {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookCard = document.createElement('p');
        bookCard.innerHTML = `I ${myLibrary[i].bookRead} the book called ${myLibrary[i].title}. It has ${myLibrary[i].pages} pages. Authored by ${myLibrary[i].author}.`;
        document.getElementById("bookshelf").append(bookCard);
        read.push(myLibrary[i]);
        myLibrary.splice(i, 1); 
        i--;
        // console.log(myLibrary.length);
        // console.log(read.length);
    }   
}

/****************************Buttons**************************/
let btn_element = document.getElementById("library_display");
btn_element.addEventListener("click", () => {
    if (myLibrary.length > 0) {
        showLibrary();
        // console.log(mynodelist.children.length);
    }
    else return
    
    // console.log(myLibrary.length);
});

let btn_element2 = document.getElementById("add_book");
btn_element2.addEventListener("click", () => {
    addBookToLibrary();
});
