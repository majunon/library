let myLibrary = []; //My book library
// if the local storage has been used...
if(localStorage.length){
  myLibrary = localStorage.getItem('myLibrary'); // charge the library from the local storage
  myLibrary = JSON.parse(myLibrary);
}
else{
  // Add some books exemples
  addBookToLibrary("L'interprétation du rêve", 'Sigmund Freud', 643, false);
  addBookToLibrary('Ethique', 'Baruch Spinoza', 400, true);
  addBookToLibrary("Emile ou de l'éducation", 'Jean-Jacques Rousseau', 512, false);
  addBookToLibrary('La république', 'Platon', 818, true);
}

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
function Book(id, title, author, nbOfPages, alreadyRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.nbOfPages = nbOfPages;
  this.alreadyRead = alreadyRead;
  this.toggleReadStatus = function(){
    this.alreadyRead=!this.alreadyRead;
  }
}

// A function to add a book in the library
function addBookToLibrary(title, author, nbOfPages, alreadyRead) {
  let index=0;
  while(myLibrary.find(element => element.id == index)){
    index++;
  }
  myLibrary.push(new Book(index,title, author, nbOfPages, alreadyRead));
  localStorage.setItem('myLibrary',JSON.stringify(myLibrary));
}

// A function to remove a book from the library
function removeBook(id){
  myLibrary=myLibrary.filter(item => item.id != id);
  displayBooks();
}

// Function to displayBooks
function displayBooks() {
  //Remove the old cards
  while (wrap.lastChild) {
    wrap.removeChild(wrap.lastChild);
  }
  // Create the cards
  for (let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement('div');
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let read = document.createElement('button');
    let suppr = document.createElement('button');

    title.innerText = myLibrary[i].title;
    author.innerText = `by ${myLibrary[i].author}`;
    pages.innerText = `${myLibrary[i].nbOfPages} pages`;
    if(myLibrary[i].alreadyRead){
      read.innerText = "Déjà lu";
    }
    else{
      read.innerText = "Pas encore lu";
    }
    read.addEventListener('click',event => {
      myLibrary[i].toggleReadStatus();
      displayBooks();
    });
    suppr.innerText = "X";

    card.classList.add("card");
    let data_id = document.createAttribute("data-id");
    data_id.value = myLibrary[i].id;
    suppr.setAttributeNode(data_id);
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");
    suppr.classList.add("suppr-button");   

    suppr.addEventListener('click', event =>{
      removeBook(event.target.getAttribute("data-id"));
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(suppr);
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

