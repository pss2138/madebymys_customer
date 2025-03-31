import {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const MyOrdersPage: FC = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.primary}}>
        My Orders Page
      </Text>
    </View>
  );
};

export default MyOrdersPage;
