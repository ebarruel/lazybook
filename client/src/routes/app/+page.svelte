<script lang="ts">
	import Reading from "$lib/components/Reading.svelte";
	import Book, { getBooks } from "$lib/types/book";

	let pbook: Promise<Book> = getBooks().then((books) => {
		return books[0];
	});
</script>

{#await pbook}
	<p>Currently Reading...</p>
{:then book}
	<Reading {book} />
{/await}
