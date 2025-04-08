import {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import StatusNavBar from '../../components/productShopping/StatusNavBar';
import ProductSelectionArea from './ProductSelectionArea';
import SellerInteractionArea from '../../components/productShopping/SellerInteractionArea';

const ProductShoppingPage: FC = () => {
  const zIndexs = {
    seller: 10,
    product: 0,
  };
  return (
    <View style={styles.container}>
      <StatusNavBar />

      {/* Main Screen */}
      <ImageBackground
        source={require('../../../assets/images/interior.png')}
        style={styles.background}>
        {/* <SellerInteractionArea zIndex={zIndexs.seller} /> */}
        <ProductSelectionArea zIndex={zIndexs.product} />
      </ImageBackground>
    </View>
  );
};

export default ProductShoppingPage;
