showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

function getAllBooks() {
    return [
      { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
      { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
      { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
      { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
  }

console.log(getAllBooks());

function logFirstAvailable(books: { id: number; title: string; author: string; available: boolean }[]) {
    console.log('Number of books:', books.length);
    const firstAvailableBook = books.find((book) => book.available);
    if (firstAvailableBook) {
      console.log('First available book:', firstAvailableBook.title);
    }
  }
  
  logFirstAvailable(getAllBooks());


  enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
  }
  
  function getAllBooks2() {
    return [
      { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
      { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
      { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
      { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
  }
  console.log(getAllBooks2());



  function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks2();
    const titles = books
        .filter((book) => book.category === category)
        .map((book) => book.title);
    return titles;
  }

  console.log(getBookTitlesByCategory(Category.JavaScript));



  function logBookTitles(titles: string[]) {
    console.log(titles);
}

const javascriptTitles = getBookTitlesByCategory(Category.JavaScript);
logBookTitles(javascriptTitles);


function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const book = getAllBooks2()[index];
  return [book.title, book.author];
}

console.log(getBookAuthorByIndex(0));



function calcTotalPages(libraries: { lib: string, books: bigint, avgPagesPerBook: number }[]) {
  let totalPages: bigint = 0n;
  for (const library of libraries) {
      totalPages += BigInt(library.books) * BigInt(library.avgPagesPerBook);
  }
  return totalPages;
}

const libraries = [
  { lib: 'libName1', books: 1_000_000_000n, avgPagesPerBook: 250 },
  { lib: 'libName2', books: 5_000_000_000n, avgPagesPerBook: 300 },
  { lib: 'libName3', books: 3_000_000_000n, avgPagesPerBook: 280 }
];

console.log(calcTotalPages(libraries));