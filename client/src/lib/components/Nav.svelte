<ion-tabs>
    <ion-tab-bar slot="bottom">
        <ion-tab>

            <ion-tab-button tab="home">
                <ion-icon :icon="home-outline"></ion-icon>
            </ion-tab-button>

            <ion-tab-button tab="library">
                <ion-icon :icon="library-outline"></ion-icon>
            </ion-tab-button>
            
            <ion-tab-button tab="publish">
                <ion-icon :icon="pencil-outline"></ion-icon>
            </ion-tab-button>

            <ion-tab-button tab="search">
                <ion-icon :icon="search-outline"></ion-icon>
            </ion-tab-button>

            <ion-tab-button tab="user">
                <ion-icon :icon="person-outline"></ion-icon>
            </ion-tab-button>
        </ion-tab>
    </ion-tab-bar>
</ion-tabs>