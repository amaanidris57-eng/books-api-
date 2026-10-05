const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory storage
let books = [
{ id: 1, title: "Clean Code", author: "Robert C. Martin" },
{ id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
];
let nextId = 3;

// GET /books - all books
app.get("/books", (req, res) => {
res.json(books);
});

// GET /books/:id - single book (bonus)
app.get("/books/:id", (req, res) => {
const book = books.find((b) => b.id === parseInt(req.params.id));
if (!book) return res.status(404).json({ error: "Book not found" });
res.json(book);
});

// POST /books - add a book
app.post("/books", (req, res) => {
const { title, author } = req.body;
if (!title || !author) {
return res.status(400).json({ error: "title and author are required" });
}
const newBook = { id: nextId++, title, author };
books.push(newBook);
res.status(201).json(newBook);
});

// PUT /books/:id - update a book
app.put("/books/:id", (req, res) => {
const book = books.find((b) => b.id === parseInt(req.params.id));
if (!book) return res.status(404).json({ error: "Book not found" });

const { title, author } = req.body;
if (title) book.title = title;
if (author) book.author = author;
res.json(book);
});

// DELETE /books/:id - remove a book
app.delete("/books/:id", (req, res) => {
const index = books.findIndex((b) => b.id === parseInt(req.params.id));
if (index === -1) return res.status(404).json({ error: "Book not found" });

const deleted = books.splice(index, 1)[0];
res.json({ message: "Book deleted", book: deleted });
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
