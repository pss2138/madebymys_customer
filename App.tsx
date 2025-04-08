import 'react-native-reanimated';
import {FC, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Orientation from 'react-native-orientation-locker';
import {NavigationWrapper} from './src/routes/navigation';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/style/global';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App: FC = () => {
  useEffect(() => {
    Orientation.lockToLandscape();
  });

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationWrapper />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
