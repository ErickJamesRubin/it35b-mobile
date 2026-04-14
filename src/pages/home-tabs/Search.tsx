import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Seach:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Seach</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <h1>Seach</h1>
            </IonContent>
        </IonPage>
    );
};

export default Seach;