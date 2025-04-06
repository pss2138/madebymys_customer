import {FC} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const ProductsListPage: FC = () => {
  const theme = useTheme();
  return (
    <View>
      <Text style={{backgroundColor: theme.colors.secondary}}>
        Products List Page
      </Text>
    </View>
  );
};

export default ProductsListPage;
