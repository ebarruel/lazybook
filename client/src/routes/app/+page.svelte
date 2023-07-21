<script lang="ts">
	import Reading from "$lib/components/Reading.svelte";
	import { Book } from "$lib/types/book";

	let book: Book = new Book();
</script>

<div>
	<Reading {book} />
</div>
