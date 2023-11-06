const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    library.push(book);
}


const addBook = document.getElementById('add-book');

const dialog = document.getElementById('dialog');

const formTitle = document.getElementById('form-title');
const formAuthor = document.getElementById('form-author');
const formPages = document.getElementById('form-pages');
const formCheckbox = document.getElementById('read-it');
const submitButton = document.getElementById('submit-button');

addBook.addEventListener('click', () => {
    dialog.showModal();
});

submitButton.addEventListener('click', () => {
    let readStatus = '';
    if (formCheckbox.checked === true) {
        readStatus = 'Read';
    } else if (formCheckbox.checked === false) {
        readStatus = 'Unread';
    }
    const book = new Book(formTitle.value, formAuthor.value, formPages.value, readStatus);
    addBookToLibrary(book);

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const title = document.createElement('li');
    title.innerText = `"${book.title}"`;

    const author = document.createElement('li');
    author.innerText = `${book.author}`;

    const pages = document.createElement('li');
    pages.innerText = `${book.pages} pages`;

    const readButton = document.createElement('button');
    readButton.innerText = `${book.read}`;
    readButton.classList.add('read-button');
    if (formCheckbox.checked === true) {
        readButton.classList.add('toggle-read');
    } else if (formCheckbox.checked === false) {
        readButton.classList.add('toggle-unread');
    }
    readButton.addEventListener('click', () => {
        if (readButton.classList.contains('toggle-read')) {
            readButton.classList.remove('toggle-read');
            readButton.classList.add('toggle-unread');
            readButton.innerText = 'Unread';
        } else if (readButton.classList.contains('toggle-unread')) {
            readButton.classList.remove('toggle-unread');
            readButton.classList.add('toggle-read');
            readButton.innerText = 'Read';
        }
    });


    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-book-card');
    removeButton.addEventListener('click', () => {
        removeButton.parentElement.remove();
    })


    bookCard.append(title, author, pages, readButton, removeButton);

    const content = document.querySelector('.content-content');
    content.append(bookCard);

    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    formCheckbox.checked = false;
    dialog.close();
});