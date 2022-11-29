function Book(title, author, pages, bookRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.bookRead = bookRead
    this.sayBookinfo = function() {
        // console.log(title+', by '+author+', '+pages+' pages, '+bookRead)
        return (title+', by '+author+', '+pages+' pages, '+bookRead)
    }
}

const book1 = new Book('kama sutra', 'buddha', 690, 'not read yet')

console.log(book1.sayBookinfo())