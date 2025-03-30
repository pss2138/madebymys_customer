import {NavigationContainer} from '@react-navigation/native';
import {FC, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginPage from './src/pages/LoginPage';
import Orientation from 'react-native-orientation-locker';
import {TamaguiProvider} from 'tamagui';
import {Stack} from './src/types/navigation';
import config from './src/style/tamagui';

const App: FC = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
  });

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              // options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default App;
