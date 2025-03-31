import {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const MyCartPage: FC = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.primary}}>My Cart Page</Text>
    </View>
  );
};

export default MyCartPage;
