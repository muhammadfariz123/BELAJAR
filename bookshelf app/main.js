document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("book-form");
    const searchInput = document.getElementById("search");
    const incompleteBookshelf = document.getElementById("incompleteBookshelfList");
    const completeBookshelf = document.getElementById("completeBookshelfList");

    let books = JSON.parse(localStorage.getItem("books")) || [];

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
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>
                <button onclick="toggleBook(${index})">
                    ${book.isComplete ? "Belum Selesai" : "Selesai Dibaca"}
                </button>
                <button onclick="deleteBook(${index})">Hapus</button>
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
        books.push({ title, author, year, isComplete });
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

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll(".book-item").forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            item.style.display = title.includes(query) ? "block" : "none";
        });
    });

    renderBooks();
});
