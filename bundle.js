/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
function getAllBooks() {
    return [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
}
console.log(getAllBooks());
function logFirstAvailable(books) {
    console.log('Number of books:', books.length);
    const firstAvailableBook = books.find((book) => book.available);
    if (firstAvailableBook) {
        console.log('First available book:', firstAvailableBook.title);
    }
}
logFirstAvailable(getAllBooks());
var Category;
(function (Category) {
    Category[Category["JavaScript"] = 0] = "JavaScript";
    Category[Category["CSS"] = 1] = "CSS";
    Category[Category["HTML"] = 2] = "HTML";
    Category[Category["TypeScript"] = 3] = "TypeScript";
    Category[Category["Angular"] = 4] = "Angular";
})(Category || (Category = {}));
function getAllBooks2() {
    return [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
}
console.log(getAllBooks2());
function getBookTitlesByCategory(category) {
    const books = getAllBooks2();
    const titles = books
        .filter((book) => book.category === category)
        .map((book) => book.title);
    return titles;
}
console.log(getBookTitlesByCategory(Category.JavaScript));
function logBookTitles(titles) {
    console.log(titles);
}
const javascriptTitles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(javascriptTitles);
function getBookAuthorByIndex(index) {
    const book = getAllBooks2()[index];
    return [book.title, book.author];
}
console.log(getBookAuthorByIndex(0));
function calcTotalPages(libraries) {
    let totalPages = 0n;
    for (const library of libraries) {
        totalPages += BigInt(library.books) * BigInt(library.avgPagesPerBook);
    }
    return totalPages;
}
const libraries = [
    { lib: 'libName1', books: 1000000000n, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5000000000n, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3000000000n, avgPagesPerBook: 280 }
];
console.log(calcTotalPages(libraries));

/******/ })()
;
//# sourceMappingURL=bundle.js.map