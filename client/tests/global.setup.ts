import { test } from "@playwright/test";
import { server } from "../src/mocks/server";

test.beforeAll(async () => {
	server.listen();
});

test.afterEach(async () => {
	server.resetHandlers();
});

test.afterAll(async () => {
	server.close();
});