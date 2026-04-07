import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const About:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonButton slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButton>
                        <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <h1>About</h1>
            </IonContent>
        </IonPage>
    );
};

export default About;