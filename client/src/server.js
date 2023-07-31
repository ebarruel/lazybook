import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

export const mockServer = () => {
	let server = createServer({
		models: {
			book: Model
		},

		routes() {
			this.logging = true;
			// this.urlPrefix = "http://localhost:4183";
			this.namespace = "api";

			this.get("/books");
			this.passthrough();
		},

		factories: {
			book: Factory.extend({
				title: faker.lorem.words().toUpperCase(),
				authors: faker.helpers.multiple(faker.person.fullName, {
					count: { min: 1, max: 5 }
				}),
				contributors: faker.helpers.multiple(faker.person.fullName, {
					count: { min: 0, max: 10 }
				}),
				publisher: faker.company.name(),
				cover: faker.image.url(),
				chapterList() {
					const count = faker.number.int({min: 1, max: 10});
					var array = [];

					for (let i = 0; i < count; i++) {
						array.push("Chapter " + i.toString());
					}
					return array;
				},
				description: faker.lorem.paragraph()
			})
		},

		seeds(server) {
			server.createList("book", 5);
		}
	});

	return server;
};
