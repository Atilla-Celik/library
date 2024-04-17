"use strict";

const library = [];

console.log(library.prototype);

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const meridian = new Book("Blood Meridian", "Cormac Mc Carthy", "300", "no");

console.log(meridian);
