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

addBookToLibrary('Titre1','Auteur1', 100, 'déjà lu');
addBookToLibrary('Titre2','Auteur2', 200, 'pas lu');

function displayBooks(){
  for(let i=0;i<myLibrary.length;i++){
    
  }
}
