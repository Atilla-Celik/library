"use strict";

const formContainer = document.querySelector(".form-container");
const newBook = document.querySelector(".new-book");
const addBook = document.querySelector(".add-book");
const cancel = document.querySelector(".cancel");

const bookTitle = document.querySelector("#book-title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

const books = document.querySelector(".books");

const library = [];

console.log(library.prototype);

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//Opens the window for adding a new book
//************************************* */
newBook.addEventListener("click", () => {
    formContainer.classList.remove("hidden");
});

//Cancels and closes the new book window
//************************************* */
cancel.addEventListener("click", () => {
    formContainer.classList.add("hidden");
});

//Adds the book to the library and displays it
//************************************* */
addBook.addEventListener("click", () => {
    let info = [bookTitle.value, author.value, pages.value, read.value];
    let book = new Book(...info);
    library.push(book);

    // bookCont = document.createElement("div");
    // bookCont.classList.add("book-cont");

    // //Creates a div for the button to be put into
    // let deleteBtnCont = document.createElement("div");
    // deleteBtnCont.classList.add("delete-btn-cont");

    // //Creates the button to delete the "book"
    // deleteBtn = document.createElement("button");
    // deleteBtn.innerText = "X";
    // deleteBtn.classList.add("delete-btn");
    // // deleteBtn.addEventListener("click", () => {
    // //     bookCont.remove();
    // // });

    //Appends the button to the div
    // deleteBtnCont.appendChild(deleteBtn);

    // //Creates the div for each "book" that is added
    // let bookInfo = document.createElement("div");
    // bookInfo.classList.add("book");

    // //Tries to add the div with the delete button to the "book"
    // bookCont.appendChild(deleteBtnCont);

    // //"books" is the basically the area where the "book" items are being shown. This part works fine
    // bookInfo.innerText = `Title: ${bookTitle.value}\n\nAuthor: ${author.value}\n\nPages: ${pages.value}`;
    // bookCont.appendChild(bookInfo);
    // books.appendChild(bookCont);
    // bookCont.dataset.number = library.length;
    // libraryBtns();
    // bookTitle.value = "";
    // author.value = "";
    // pages.value = "";
    // read.value = "";
    displayLibrary();

    formContainer.classList.add("hidden");

    console.log(library);
});

const displayLibrary = function () {
    while (books.firstChild) {
        books.firstChild.remove();
    }
    library.forEach((book) => {
        // book.remove();
        //!!!!!!!!!

        let bookCont = document.createElement("div");
        bookCont.classList.add("book-cont");
        bookCont.dataset.bookNumber = library.length;

        //Creates a div for the delete button to be put into
        let deleteBtnCont = document.createElement("div");
        deleteBtnCont.classList.add("delete-btn-cont");

        //Creates the button to delete the "book"
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            bookCont.remove();
        });

        // deleteBtn.addEventListener("click", () => {
        //     bookCont.remove();
        // });
        deleteBtnCont.appendChild(deleteBtn);
        bookCont.appendChild(deleteBtnCont);

        //Creates the div for each "book" that is added
        let bookInfo = document.createElement("div");
        bookInfo.classList.add("book");

        //Tries to add the div with the delete button to the "book"

        //"books" is the basically the area where the "book" items are being shown. This part works fine
        bookInfo.innerText = `Title: ${book.title}\n\nAuthor: ${book.author}\n\nPages: ${book.pages}`;
        bookCont.appendChild(bookInfo);
        books.appendChild(bookCont);
        bookCont.dataset.number = library.length;

        bookTitle.value = "";
        author.value = "";
        pages.value = "";
        read.value = "";
        console.log(bookCont.dataset.bookNumber);
    });
};

// const libraryBtns = function () {
//     library.forEach((book) => {
//         deleteBtn.addEventListener("click", () => {
//             bookCont.dataset.bookNumber.remove();
//         });
//     });
// };
