import axios from "axios";

export default class Book {
	title: string;
	authors: string[];
	description: string;
	cover: string;
	chapterList: string[];

	constructor(
		title = "Title Not Found",
		authors: string[] = ["Author Not Found"],
		description = "Description Not Found",
		cover = "Cover Not Found",
		chapterList: string[] = ["Chapter Not Found"]
	) {
		this.title = title;
		this.authors = authors;
		this.description = description;
		this.cover = cover;
		this.chapterList = chapterList;
	}
}

export const getBooks = async (): Promise<Book[]> => {
	const res = await axios.get("./api/books");
	return JSON.parse(res.data);
};
