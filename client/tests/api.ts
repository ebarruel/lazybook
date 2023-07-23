import { expect, test, beforeAll } from "vitest";
import { mockServer } from "../src/server";

beforeAll(async () => {
	mockServer();
});

test.skip("get book title", () => {
	// TODO might be moved to unit testing
});
