import { test as base, expect } from "@playwright/test";
import { type MockServiceWorker, createWorkerFixture } from 'playwright-msw';
import { handlers } from '../src/mocks/handlers';

const test = base.extend<{
	worker: MockServiceWorker;
}>({
	worker: createWorkerFixture(handlers),
});

export { test, expect };