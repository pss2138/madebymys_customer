import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import LoginPage from '../pages/LoginPage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductShoppingPage from '../pages/ProductShoppingPage';
import MyOrdersPage from '../pages/MyOrdersPage';
import MyCartPage from '../pages/MyCartPage';
import SettingsPage from '../pages/SettingsPage';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectToken} from '../slices/userSlice';
import {View} from 'react-native';
import styles from './styles';
import NavBar from '../components/NavBar';

type LoginStackParamList = {
  Login: undefined;
};

export type MainStackParamList = {
  ProductsList: undefined;
  ProductShopping: {productId: string};
  MyOrders: undefined;
  MyCart: undefined;
  Settings: undefined;
};

export type MainStackNavigationType =
  NativeStackNavigationProp<MainStackParamList>;

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

const LoginStackNavigator: FC = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};

type ScreenType = {
  name: keyof MainStackParamList;
  title: string;
  component: FC;
  icon: string;
  iconActive: string;
  showInNavBar?: boolean;
  showHeader?: boolean;
};

export const mainScreensList: ScreenType[] = [
  {
    name: 'ProductsList',
    title: 'Products',
    component: ProductsListPage,
    icon: 'home-outline',
    iconActive: 'home',
  },
  {
    name: 'ProductShopping',
    title: 'Shop',
    component: ProductShoppingPage,
    icon: 'shopping-outline',
    iconActive: 'shopping',
    showInNavBar: false,
    showHeader: false,
  },
  {
    name: 'MyOrders',
    title: 'Orders',
    component: MyOrdersPage,
    icon: 'file-document-outline',
    iconActive: 'file-document',
  },
  {
    name: 'MyCart',
    title: 'Cart',
    component: MyCartPage,
    icon: 'cart-outline',
    iconActive: 'cart',
  },
  {
    name: 'Settings',
    icon: 'cog-outline',
    title: 'Settings',
    component: SettingsPage,
    iconActive: 'cog',
  },
];

const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator>
      {mainScreensList.map((screen, index) => (
        <MainStack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: screen.showHeader !== false,
            headerTransparent: true,
            headerTitle: screen.title,
            headerTitleStyle: styles.headerTitle,
          }}
        />
      ))}
    </MainStack.Navigator>
  );
};

export const NavigationWrapper: FC = () => {
  const token = useSelector(selectToken);

  const navigationRef = createNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={() => {
        if (navigationRef.isReady()) {
          const current = navigationRef.getCurrentRoute()?.name;
          setCurrentRoute(current);
        }
      }}>
      {token ? (
        <View style={styles.container}>
          <View
            style={[
              styles.nav,
              currentRoute === 'ProductShopping' && styles.hideNav,
            ]}>
            <NavBar />
          </View>
          <View style={styles.screen}>
            <MainStackNavigator />
          </View>
        </View>
      ) : (
        <LoginStackNavigator />
      )}
    </NavigationContainer>
  );
};
