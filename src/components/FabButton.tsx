import {IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import {
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';

interface ContainerProps { }

const FabButton: React.FC<ContainerProps> = () => {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
  );
};

export default FabButton;
