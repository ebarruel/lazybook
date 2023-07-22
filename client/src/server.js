import { createServer } from "miragejs";

export function mockServer( { environment = "development" } = {} ) {
	let server = createServer( {
		environment,

		routes() {
			this.namespace = "api";
			this.urlPrefix = 'http://localhost:5174';

			this.get( "/book", () => {
				return {
					title: "The Title",
					authors: [ "Author 1", "Author 2" ],
					contributors: [ "Contributor 1", "Contributor 2" ],
					publisher: [ "Publisher" ],
					cover: "$samples/accessible_epub_3/EPUB/covers/9781449328030_lrg.jpg",
					chapterList: [ "Chapter 1", "Chapter 2" ],
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				};
			} );
		}
	} );

	return server;
}