<ion-tabs>
    <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
            <ion-icon :icon="home-outline">home</ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="library">
            <ion-icon :icon="library-outline">lib</ion-icon>
        </ion-tab-button>
            
        <ion-tab-button tab="publish">
            <ion-icon :icon="pencil-outline">pub</ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="search">
            <ion-icon :icon="search-outline">search</ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="user">
            <ion-icon :icon="person-outline">user</ion-icon>
        </ion-tab-button>
    </ion-tab-bar>
</ion-tabs>