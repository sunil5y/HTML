document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchBar = document.getElementById('searchBar');
    const newBookInput = document.getElementById('newBookInput');
    const addBookBtn = document.getElementById('addBookBtn');

    let books = [];

    function renderBooks() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const li = document.createElement('li');
            li.className = `book-item ${book.favorite ? 'favorite' : ''}`;
            li.textContent = book.title;

            const favoriteBtn = document.createElement('button');
            favoriteBtn.textContent = book.favorite ? 'Unfavorite' : 'Favorite';
            favoriteBtn.addEventListener('click', () => toggleFavorite(index));

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeBook(index));

            li.appendChild(favoriteBtn);
            li.appendChild(removeBtn);
            bookList.appendChild(li);
        });
    }

    function addBook() {
        const title = newBookInput.value.trim();
        if (title) {
            books.push({ title, favorite: false });
            newBookInput.value = '';
            renderBooks();
        }
    }

    function removeBook(index) {
        books.splice(index, 1);
        renderBooks();
    }

    function toggleFavorite(index) {
        books[index].favorite = !books[index].favorite;
        renderBooks();
    }

    function searchBooks() {
        const query = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
        bookList.innerHTML = '';
        filteredBooks.forEach((book, index) => {
            const li = document.createElement('li');
            li.className = `book-item ${book.favorite ? 'favorite' : ''}`;
            li.textContent = book.title;

            const favoriteBtn = document.createElement('button');
            favoriteBtn.textContent = book.favorite ? 'Unfavorite' : 'Favorite';
            favoriteBtn.addEventListener('click', () => toggleFavorite(index));

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeBook(index));

            li.appendChild(favoriteBtn);
            li.appendChild(removeBtn);
            bookList.appendChild(li);
        });
    }

    addBookBtn.addEventListener('click', addBook);
    searchBar.addEventListener('input', searchBooks);

    renderBooks();
});
