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

type LoginStackParamList = {
  Login: undefined;
};

type MainStackParamList = {
  ProductsList: undefined;
  ProductShopping: undefined;
  MyOrders: undefined;
  MyCart: undefined;
  Settings: undefined;
};

const LoginStack = createNativeStackNavigator<LoginStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

export const LoginStackNavigator: FC = () => {
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

export const MainStackNavigator: FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="ProductsList"
        component={ProductsListPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="ProductShopping"
        component={ProductShoppingPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="MyOrders"
        component={MyOrdersPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="MyCart"
        component={MyCartPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingsPage}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

const NavigationWrapper: FC = () => {
  const token = useSelector(selectToken);

  return (
    <NavigationContainer>
      {token ? <MainStackNavigator /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
};

export default NavigationWrapper;
