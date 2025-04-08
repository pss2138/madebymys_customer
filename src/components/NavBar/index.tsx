import {FC, useEffect, useState} from 'react';
import {Button, Icon} from 'react-native-paper';
import styles from './styles';
import {View} from 'react-native';
import {
  CommonActions,
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import {mainScreensList, MainStackParamList} from '../../routes/navigation';
import {theme} from '../../style/global';

export type NavigationProp = NavigationContainerRef<MainStackParamList>;

const NavBar: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  useEffect(() => {
    const route = navigation.getCurrentRoute?.();
    setCurrentRoute(route?.name);

    const unsubscribe = navigation.addListener('state', () => {
      const updatedRoute = navigation.getCurrentRoute?.();
      setCurrentRoute(updatedRoute?.name);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {mainScreensList
        .filter(screen => screen.showInNavBar !== false)
        .map(screen => {
          const isActive = screen.name === currentRoute;
          return (
            <Button
              style={styles.button}
              labelStyle={[
                styles.label,
                {fontWeight: isActive ? 'bold' : '400'},
              ]}
              contentStyle={styles.content}
              key={screen.name}
              icon={() => (
                <View style={{transform: [{translateX: -4}]}}>
                  <Icon
                    source={isActive ? screen.iconActive : screen.icon}
                    size={theme.fonts.titleLarge.fontSize}
                    color={theme.colors.black}
                  />
                </View>
              )}
              mode={'contained'}
              compact={true}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: screen.name,
                        // params
                      },
                    ],
                  }),
                );
              }}>
              {screen.title}
            </Button>
          );
        })}
    </View>
  );
};

export default NavBar;
