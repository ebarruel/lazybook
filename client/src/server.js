import { createServer } from "miragejs";

createServer({
	routes() {
		this.namespace = "api";

		this.get("/title", () => {
			return {
				title: "The Title"
			};
		});

		this.get("/authors", () => {
			return {
				authors: ["Author 1", "Author 2"]
			};
		});

		this.get("/contributors", () => {
			return {
				contributors: [ "Contributor 1", "Contributor 2" ]
			};
		});

		this.get("/publisher", () => {
			return {
				publisher: [ "Publisher" ]
			};
		});

		this.get("/cover", () => {
			return {
				cover: "$samples/accessible_epub_3/EPUB/covers/9781449328030_lrg.jpg"
			};
		});

		this.get("/description", () => {
			return {
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			};
		});
	}
});
