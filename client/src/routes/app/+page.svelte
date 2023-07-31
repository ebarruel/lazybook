<script lang="ts">
	import Reading from "$lib/components/Reading.svelte";
	import Book, { getBooks } from "$lib/types/book";

	let book: Book;
	getBooks().then(books => {book = books[0]});
</script>

<div>
	<Reading {book} />
</div>
