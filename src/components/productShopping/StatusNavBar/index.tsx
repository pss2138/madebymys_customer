import {FC} from 'react';
import styles from './styles';
import {Button, Icon, Text} from 'react-native-paper';
import {View} from 'react-native';
import {theme} from '../../../style/global';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../NavBar';

const StatusNavBar: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        icon={() => (
          <Icon source="home-outline" size={theme.fonts.titleLarge.fontSize} />
        )}
        onPress={() => {
          navigation.navigate('ProductsList');
        }}>
        Home
      </Button>
    </View>
  );
};

export default StatusNavBar;
