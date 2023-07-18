<script lang="ts">
    import IonHomeOutline from '~icons/ion/home-outline';
    import IonLibraryOutline from '~icons/ion/library-outline';
    import IonPencilOutline from '~icons/ion/pencil-outline';
    import IonSearchOutline from '~icons/ion/search-outline';
    import IonPersonOutline from '~icons/ion/person-outline';
</script>

<ion-tab-button tab="home">
    <IonHomeOutline></IonHomeOutline>
    <ion-label>home</ion-label>
</ion-tab-button>

<ion-tab-button tab="library">
    <IonLibraryOutline></IonLibraryOutline>
    <ion-label>lib</ion-label>
</ion-tab-button>
    
<ion-tab-button tab="publish">
    <IonPencilOutline></IonPencilOutline>
    <ion-label>pub</ion-label>
</ion-tab-button>

<ion-tab-button tab="search">
    <IonSearchOutline></IonSearchOutline>
    <ion-label>search</ion-label>
</ion-tab-button>

<ion-tab-button tab="user">
    <IonPersonOutline></IonPersonOutline>
    <ion-label>user</ion-label>
</ion-tab-button>