let myLibrary = []; //My book library
// The cards container
const wrap = document.querySelector('.cards-container');
// Add book button
const newBookButton = document.querySelector('.addBook');
// Form to add book
const formAddBook = document.querySelector('.formAddBook');
// Button to validate the book entry
const formButton = document.querySelector('#form-button');
// Inputs from the form
const titre = document.querySelector('#form-titre');
const auteur = document.querySelector('#form-auteur');
const pages = document.querySelector('#form-pages');
const dejaLu = document.querySelector('#form-checkbox');


// The constructor
function Book(title, author, nbOfPages, alreadyRead) {
  let str;
  this.title = title;
  this.author = author;
  this.nbOfPages = nbOfPages;
  this.alreadyRead = alreadyRead;
  this.info = function () {
    return (`${title} by ${author}, ${nbOfPages} pages, ${alreadyRead}`);
  }
}

// A function to add a book in the library
function addBookToLibrary(title, author, nbOfPages, alreadyRead) {
  myLibrary.push(new Book(title, author, nbOfPages, alreadyRead));
}

// Some books exemples
addBookToLibrary("L'interprétation du rêve", 'Sigmund Freud', 643, false);
addBookToLibrary('Ethique', 'Baruch Spinoza', 400, true);
addBookToLibrary("Emile ou de l'éducation", 'Jean-Jacques Rousseau', 512, false);
addBookToLibrary('La république', 'Platon', 818, true);

// Function to displayBooks
function displayBooks() {
  //Remove the old cards
  while (wrap.firstChild) {
    wrap.removeChild(wrap.firstChild);
  }
  //Create the cards
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let read = document.createElement('div');

    title.innerText = myLibrary[i].title;
    author.innerText = `by ${myLibrary[i].author}`;
    pages.innerText = `${myLibrary[i].nbOfPages} pages`;
    if(myLibrary[i].alreadyRead){
      read.innerText = "Déjà lu";
    }
    else{
      read.innerText = "Pas encore lu";
    }

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

// When the button is clicked, open the form
newBookButton.addEventListener('click', () => formAddBook.style.visibility = "visible");

// When the form button is clicked, create a new book entry with the data
formButton.addEventListener('click', function (e) {
  addBookToLibrary(titre.value, auteur.value, pages.value, dejaLu.checked);
  formAddBook.style.visibility = "hidden";
  displayBooks();
})


