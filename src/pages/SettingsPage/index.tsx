import {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const SettingsPage: FC = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.primary}}>Settings Page</Text>
    </View>
  );
};

export default SettingsPage;
