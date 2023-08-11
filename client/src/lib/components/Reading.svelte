<script lang="ts">
	import type Book from "$lib/types/book";

	export let book: Book;
	console.log(book);
	let coverImg: string = book.cover !== "Cover Not Found" ? book.cover : "$lib/assets/defaultImg";
	let title: string = book.title;
	let authors: string[] = book.authors;
	let description: string = book.description;
</script>

<ion-card>
	<ion-card-header>
		<ion-card-title>Currently Reading...</ion-card-title>
	</ion-card-header>

	<ion-grid>
		<ion-row>
			<ion-col size="auto">
				<ion-img
					src={coverImg}
					alt="Currently Reading Cover Image"
				/>
			</ion-col>
			<ion-col>
				<h1>{title}</h1>
				<h2>{authors}</h2>
				<p>{description}</p>
			</ion-col>
		</ion-row>
	</ion-grid>
</ion-card>

<style>
	ion-img {
		width: 200;
		height: 300;
	}
</style>