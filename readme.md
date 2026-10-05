# Books REST API

A simple REST API built with Node.js and Express to manage a list of books. Data is stored in memory (no database), so it resets whenever the server restarts.

## Setup

```bash
npm install
node server.js
```

The server runs at `http://localhost:3000`.

## Endpoints

| Method | Endpoint | Description |
|--------|--------------|----------------------|
| GET | /books | Get all books |
| GET | /books/:id | Get a book by ID |
| POST | /books | Add a new book |
| PUT | /books/:id | Update a book by ID |
| DELETE | /books/:id | Delete a book by ID |

## Book Object

```json
{
"id": 1,
"title": "Clean Code",
"author": "Robert C. Martin"
}
```

## Example Requests

**POST /books**
```json
{
"title": "Atomic Habits",
"author": "James Clear"
}
```

**PUT /books/1**
```json
{
"title": "Clean Code 2nd Edition",
"author": "Robert C. Martin"
}
```

## Responses

- `200 OK` – successful GET, PUT, DELETE
- `201 Created` – book added with POST
- `400 Bad Request` – title or author missing
- `404 Not Found` – book ID does not exist

## Tools Used

Node.js, Express, VS Code, Postman

## Testing

All endpoints were tested using Postman.
