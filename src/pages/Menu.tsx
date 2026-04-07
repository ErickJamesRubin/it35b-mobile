import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRoute, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { informationCircleOutline, logOutOutline } from 'ionicons/icons';
import { homeOutline } from 'ionicons/icons';

const Menu:React.FC = () => {

    const path = [
        {name: 'Home', url: '/app/home',icon:homeOutline  },
        {name: 'About', url: '/app/about',icon:informationCircleOutline},
    ]
    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    {/* Header */}
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    {/* Content */}
                    <IonContent>
                        {path.map((item,index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon></IonIcon>
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                </IonItem>

                            </IonMenuToggle>
                        ))}

                        <IonButton routerLink="/" routerDirection="back" expand="full">
                            <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        </IonButton>

                    </IonContent>

                </IonMenu>
                {/* Routing */}
                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home}></Route>
                    <Route exact path="/app">
                        <Redirect to="/app/home" />
                    </Route>

                    <Route exact path="/app/about" component={About}></Route>

                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;