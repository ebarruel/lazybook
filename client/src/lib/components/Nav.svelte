<script lang="ts">
	import IonHomeOutline from "~icons/ion/home-outline";
	import IonLibraryOutline from "~icons/ion/library-outline";
	import IonPencilOutline from "~icons/ion/pencil-outline";
	import IonSearchOutline from "~icons/ion/search-outline";
	import IonPersonOutline from "~icons/ion/person-outline";

	// rename to allow for easy replacement
	let HomeIcon = IonHomeOutline;
	let LibIcon = IonLibraryOutline;
	let PubIcon = IonPencilOutline;
	let SearchIcon = IonSearchOutline;
	let UserIcon = IonPersonOutline;
</script>

<ion-tab-button tab="home">
	<HomeIcon />
	<ion-label>home</ion-label>
</ion-tab-button>

<ion-tab-button tab="library">
	<LibIcon />
	<ion-label>lib</ion-label>
</ion-tab-button>

<ion-tab-button tab="publish">
	<PubIcon />
	<ion-label>pub</ion-label>
</ion-tab-button>

<ion-tab-button tab="search">
	<SearchIcon />
	<ion-label>search</ion-label>
</ion-tab-button>

<ion-tab-button tab="user">
	<UserIcon />
	<ion-label>user</ion-label>
</ion-tab-button>
