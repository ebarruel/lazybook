import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

export const mockServer = () => {
	createServer({
		models: {
			book: Model
		},

		factories: {
			movie: Factory.extend({
				title: faker.word.sample,
				authors: faker.helpers.multiple(faker.person.fullName, {
					count: { min: 1, max: 5 }
				}),
				contributors: faker.helpers.multiple(faker.person.fullName, {
					count: { min: 0, max: 10 }
				}),
				publisher: faker.company.name,
				cover: faker.image.url(),
				chapterList() {
					const array = [];
					const count = faker.number.int(10);

					for (let i = 0; i++; i < count) {
						array.push("Chapter ${i}");
					}
					return array;
				},
				description: faker.lorem.paragraph,
			}),
		},

		routes() {
			this.namespace = "api";
			this.urlPrefix = "http://localhost:5174";

			this.get("/book");
		},

		seeds(server) {
			server.createList("book", 5);
		}
	});
};
