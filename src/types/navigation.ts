import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
