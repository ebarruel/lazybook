<script lang="ts">
    let coverImg:string, title:string, author:string, description:String;
</script>

<ion-card>
    <ion-card-header>
        <ion-card-title>Currently Reading...</ion-card-title>
    </ion-card-header>

    <ion-grid>
        <ion-row>
            <ion-col>
                <ion-img src={coverImg}></ion-img>
            </ion-col>
            <ion-col>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{description}</p>
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-card>