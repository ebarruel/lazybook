import { rest } from "msw";
import Book from "../lib/types/book";

const handlers = [
    rest.get("/api/books", (req, res, ctx) => {
        const books = Array.from({length: 5}, () => {
            return new Book();
        });

        return res(
            ctx.status(200),
            ctx.json(JSON.stringify(books))
        )
    }),
]

export default handlers;