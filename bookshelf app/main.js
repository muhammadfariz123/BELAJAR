document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("book-form");
    const searchInput = document.getElementById("search");
    const incompleteBookshelf = document.getElementById("incompleteBookshelfList");
    const completeBookshelf = document.getElementById("completeBookshelfList");

    let books = JSON.parse(localStorage.getItem("books")) || [];
    let editIndex = null;

    function saveBooks() {
        localStorage.setItem("books", JSON.stringify(books));
        renderBooks();
    }

    function renderBooks() {
        incompleteBookshelf.innerHTML = "";
        completeBookshelf.innerHTML = "";
        books.forEach((book, index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.setAttribute("data-bookid", book.id);
            bookItem.setAttribute("data-testid", "bookItem");
            bookItem.innerHTML = `
                <h3 data-testid="bookItemTitle">${book.title}</h3>
                <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
                <p data-testid="bookItemYear">Tahun: ${book.year}</p>
                <div>
                    <button data-testid="bookItemIsCompleteButton" onclick="toggleBook(${index})">
                        ${book.isComplete ? "Belum Selesai" : "Selesai Dibaca"}
                    </button>
                    <button data-testid="bookItemDeleteButton" onclick="deleteBook(${index})">Hapus</button>
                    <button data-testid="bookItemEditButton" onclick="editBook(${index})">Edit</button>
                </div>
            `;
            if (book.isComplete) {
                completeBookshelf.appendChild(bookItem);
            } else {
                incompleteBookshelf.appendChild(bookItem);
            }
        });
    }

    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = parseInt(document.getElementById("year").value);
        const isComplete = document.getElementById("isComplete").checked;
        
        if (editIndex !== null) {
            books[editIndex] = { ...books[editIndex], title, author, year, isComplete };
            editIndex = null;
        } else {
            const newBook = {
                id: Date.now().toString(),
                title,
                author,
                year,
                isComplete
            };
            books.push(newBook);
        }
        
        saveBooks();
        bookForm.reset();
    });

    window.toggleBook = function (index) {
        books[index].isComplete = !books[index].isComplete;
        saveBooks();
    };

    window.deleteBook = function (index) {
        books.splice(index, 1);
        saveBooks();
    };

    window.editBook = function (index) {
        const book = books[index];
        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("year").value = book.year;
        document.getElementById("isComplete").checked = book.isComplete;
        editIndex = index;
    };

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll("[data-testid='bookItem']").forEach(item => {
            const title = item.querySelector("[data-testid='bookItemTitle']").textContent.toLowerCase();
            item.style.display = title.includes(query) ? "block" : "none";
        });
    });

    renderBooks();
});
