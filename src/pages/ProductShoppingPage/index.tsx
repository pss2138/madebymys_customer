import {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const ProductShoppingPage: FC = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.primary}}>
        Product Shopping Page
      </Text>
    </View>
  );
};

export default ProductShoppingPage;
