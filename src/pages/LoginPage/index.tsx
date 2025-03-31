import {FC} from 'react';
import {Text, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setToken} from '../../slices/userSlice';

const LoginPage: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          dispatch(setToken('login pressed'));
        }}
        style={{backgroundColor: theme.colors.primary}}>
        Login
      </Button>
    </View>
  );
};

export default LoginPage;
