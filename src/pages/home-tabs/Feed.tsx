import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Feed:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButton>
                        <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <h1>Feed</h1>
            </IonContent>
        </IonPage>
    );
};

export default Feed;