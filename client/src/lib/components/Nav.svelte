<script lang="ts">
	// rename to allow for easy replacement
	const HomeIcon = "home-outline";
	const LibIcon = "library-outline";
	const PubIcon = "pencil-outline";
	const SearchIcon = "search-outline";
	const UserIcon = "person-outline";
</script>

<ion-tab-button tab="home">
	<ion-icon name={HomeIcon}></ion-icon>
	<ion-label>home</ion-label>
</ion-tab-button>

<ion-tab-button tab="library">
	<ion-icon name={LibIcon}></ion-icon>
	<ion-label>lib</ion-label>
</ion-tab-button>

<ion-tab-button tab="publish">
	<ion-icon name={PubIcon}></ion-icon>
	<ion-label>pub</ion-label>
</ion-tab-button>

<ion-tab-button tab="search">
	<ion-icon name={SearchIcon}></ion-icon>
	<ion-label>search</ion-label>
</ion-tab-button>

<ion-tab-button tab="user">
	<ion-icon name={UserIcon}></ion-icon>
	<ion-label>user</ion-label>
</ion-tab-button>
