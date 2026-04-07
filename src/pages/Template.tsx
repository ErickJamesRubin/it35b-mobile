import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Template:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButton>
                        <IonTitle>Template</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <h1>Template</h1>
            </IonContent>
        </IonPage>
    );
};

export default Template;