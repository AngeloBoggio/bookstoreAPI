const express = express();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { id: 6, title: "Beloved", author: "Toni Morrison", year: 1987 },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
  {
    id: 8,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  { id: 9, title: "The Great Alone", author: "Kristin Hannah", year: 2018 },
  { id: 10, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 11, title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { id: 12, title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  {
    id: 13,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
  },
  { id: 14, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 15, title: "Frankenstein", author: "Mary Shelley", year: 1818 },
  { id: 16, title: "Dracula", author: "Bram Stoker", year: 1897 },
  {
    id: 17,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
  },
  { id: 18, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
  {
    id: 19,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    year: 1890,
  },
  { id: 20, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
];

app.get("/", (req, res) => {
  res.send("Bookstore API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/books", (req, res) => {
  const book = { id: books.length + 1, ...req.body };
  books.push(book);
  res.status(201).send(book);
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((book) => book.id == parseInt(req.params.id));
  if (!book) res.status(404).send("The book with the given ID was not found");
  res.send(book);
});
