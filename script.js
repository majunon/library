let myLibrary = [];

function Book(title, author, nbOfPages, alreadyRead) {
  this.title = title;
  this.author = author;
  this.nbOfPages = nbOfPages;
  this.alreadyRead = alreadyRead;
  this.info = function () {
    return (`${title} by ${author}, ${nbOfPages} pages, ${alreadyRead}`);
  }
}

function addBookToLibrary(title, author, nbOfPages, alreadyRead) {
  myLibrary.push(new Book(title, author, nbOfPages, alreadyRead));
}

addBookToLibrary('Titre1', 'Auteur1', 100, 'déjà lu');
addBookToLibrary('Titre2', 'Auteur2', 200, 'pas lu');

const wrap = document.querySelector('.cards-container');

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let read = document.createElement('div');

    title.innerText = myLibrary[i].title;
    author.innerText = `by ${myLibrary[i].author}`;
    pages.innerText = `${myLibrary[i].nbOfPages} pages`;
    read.innerText = myLibrary[i].alreadyRead;

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    wrap.appendChild(card);
  }
}

displayBooks();
