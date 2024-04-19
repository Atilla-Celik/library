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

const showLibrary = function () {
    let bookShowCase = document.createElement("div");
    bookShowCase.classList.add("book");
    bookShowCase.innerText = `Title: ${bookTitle.value}\nAuthor: ${author.value}\nPages: ${pages.value}`;
    books.appendChild(bookShowCase);
};

// const addToLib = function (book) {
//     book.
// }

const meridian = new Book("Blood Meridian", "Cormac Mc Carthy", "300", "no");

newBook.addEventListener("click", () => {
    formContainer.classList.remove("hidden");
});

addBook.addEventListener("click", () => {
    let info = [bookTitle.value, author.value, pages.value, read.value];
    let book = new Book(...info);
    library.push(book);
    // let bookShowCase = document.createElement("div");
    // bookShowCase.innerHTML = `${book}`;
    showLibrary();
    bookTitle.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";

    formContainer.classList.add("hidden");

    console.log(library);
});

cancel.addEventListener("click", () => {
    formContainer.classList.add("hidden");
});
