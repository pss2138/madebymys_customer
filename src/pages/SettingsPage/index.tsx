import {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setToken} from '../../slices/userSlice';

const SettingsPage: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.primary}}>Settings Page</Text>
      <Button
        mode="contained"
        onPress={() => {
          dispatch(setToken(undefined));
        }}
        style={{backgroundColor: theme.colors.primary}}>
        Logout
      </Button>
    </View>
  );
};

export default SettingsPage;
