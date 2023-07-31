import axios from 'axios';

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
		cover = "cover",
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
	// const headers: Headers = new Headers();
	// headers.set('Content-Type', 'application/json');
	// headers.set('Accept', 'application/json');

	// const request: RequestInfo = new Request('/api/movies', {
	// 	method: 'GET',
	// 	headers: headers
	// });

	// return fetch(request)
	// 	// the JSON body is taken from the response
	// 	.then(res => res.json())
	// 	.then(res => {
	// 		return res as Book[]
    // 	})
	// ;


	const res = await axios.get('./api/books');
	return res.data;
}