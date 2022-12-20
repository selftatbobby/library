let myLibrary = [];
let read = [];
let notread = []
const book1 = new Book('kama sutra', 'buddha', 690, 'did not read')
const book2 = new Book('bible', 'god', 690, 'did not read')
const book3 = new Book('quran', 'allah', 690, 'did not read')
const book4 = new Book('torah', 'yaweh', 690, 'did not read')
const bookshelfnodelist = document.getElementById("bookshelf")
const form  = document.getElementById('addbook')



form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
});
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);


function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function validateForm() {
    let x = document.forms["addbook"]["booktitle"].value;
    let y = document.forms["addbook"]["author"].value;
    let z = document.forms["addbook"]["pages"].value;
    let zz = document.forms["addbook"]["read_status"].value;
    if (x == "" || y == "" || z == "" || zz == "") {
        alert("Fill it out!");
        return false;
    }
    else {
        addBookToLibrary();
    }
}
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
    let newTitle = form.elements['booktitle'].value;
    let newAuthor = form.elements['author'].value;
    let newPages = form.elements['pages'].value;
    let newBookread = form.elements['read_status'].value;
    let newBook = new Book(newTitle, newAuthor, newPages, newBookread)
    myLibrary.push(newBook)
    // console.log(newTitle);
    // console.log(newAuthor);
    // console.log(newPages);
    // console.log(newBookread);
}

function bookTransfer(){
    for (let i = 0; i < myLibrary.length; i++) {
        read.push(myLibrary[i]);
        myLibrary.splice(i, 1); 
        i--;
    }
        
}
function showLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookDisplay = document.createElement('div');
        bookDisplay.classList.add("book-display");
        bookDisplay.classList.add("book-display1");
        bookDisplay.id = `bookdisplay${i}`;
        bookshelfnodelist.append(bookDisplay);
        let bookCard = document.createElement('p');
        bookCard.innerHTML = `I ${myLibrary[i].bookRead} the book called ${myLibrary[i].title}. It has ${myLibrary[i].pages} pages. Authored by ${myLibrary[i].author}.`;
        bookDisplay.append(bookCard);
        
        let statusButton = document.createElement('button');
        let removeButton = document.createElement('button');
        statusButton.innerHTML = "Change book's read status";
        removeButton.innerHTML = "Remove book from library";
        removeButton.addEventListener("click", () => {
            removeBook(i);
        });
        statusButton.addEventListener("click", () => {
            toggleStatus(i);
        });
        bookDisplay.append(statusButton);
        bookDisplay.append(removeButton);

        // read.push(myLibrary[i]);
        // myLibrary.splice(i, 1); 
        // i--;
        // console.log(read);
        // console.log(myLibrary);  
    }   
}

function removeBook(i){
    document.getElementById(`bookdisplay${i}`).remove();
    //console.log(bookshelfnodelist.children[i]);
    //bookshelfnodelist.children[i].remove();
    //remove bookdisplay div
    //append back to myLibrary from read
}

function toggleStatus(i) {
    //toggles CSS class
    document.getElementById(`bookdisplay${i}`).classList.toggle("book-display");
}
/****************************Buttons**************************/
let btn_element = document.getElementById("library_display");
btn_element.addEventListener("click", () => {
    if (myLibrary.length > 0) {
        showLibrary();
        bookTransfer();
    }
    else return
    // console.log(myLibrary.length);
});

let btn_element2 = document.getElementById("bookbtn");
btn_element2.addEventListener("click", () => {
    validateForm();
});
