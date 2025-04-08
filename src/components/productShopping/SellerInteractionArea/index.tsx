import {FC} from 'react';
import styles from './styles';
import {Image, View} from 'react-native';

const SellerInteractionArea: FC = () => {
  const sellerImgUri = {
    idle: require('../../../../assets/images/mys/idle.png'),
    // idle: require('*/assets/images/mys/idle.png'),
    suggest: require('../../../../assets/images/mys/suggest.png'),
  };
  return (
    <View>
      <Image style={{height: 100, width: 100}} source={sellerImgUri.idle} />
    </View>
  );
};

export default SellerInteractionArea;
