import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import LoginPage from '../pages/LoginPage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductShoppingPage from '../pages/ProductShoppingPage';
import MyOrdersPage from '../pages/MyOrdersPage';
import MyCartPage from '../pages/MyCartPage';
import SettingsPage from '../pages/SettingsPage';
import {NavigationContainer} from '@react-navigation/native';
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
  ProductShopping: undefined;
  MyOrders: undefined;
  MyCart: undefined;
  Settings: undefined;
};

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
            // headerShown: false,
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

  return (
    <NavigationContainer>
      {token ? (
        <View style={styles.container}>
          <View style={styles.nav}>
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
