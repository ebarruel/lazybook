import axios from "axios";

export default class Book {
	title: string | null;
	authors: string[];
	description: string | null;
	cover: string | null;
	chapterList: string[] | null;

	constructor(
		title = null,
		authors: string[] = [],
		description = null,
		cover = null,
		chapterList: string[] = []
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
