import axios from 'axios';
import { faker } from '@faker-js/faker';

export default class Book {
	title: string;
	authors: string[];
	description: string;
	cover: string;
	chapterList: string[];

	constructor(
		title = "title",
		authors: string[] = ["author1", "author2"],
		description = "description",
		cover = faker.image.url(),
		chapterList: string[] = ["chapter1", "chapter2"]
	) {
		this.title = title;
		this.authors = authors;
		this.description = description;
		this.cover = cover;
		this.chapterList = chapterList;
	}
}

export const getBooks = async (): Promise<Book[]> => {
	const res = await axios.get('./api/books');
	return res.data;
}