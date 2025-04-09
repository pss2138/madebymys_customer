import {FC, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import StatusNavBar from '../../components/productShopping/StatusNavBar';
import ProductSelectionArea from './ProductSelectionArea';
import SellerInteractionArea from '../../components/productShopping/SellerInteractionArea';

export type BasicModalType = {
  isModalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  zIndex: number;
};
const ProductShoppingPage: FC = () => {
  const zIndexs = {
    seller: 10,
    product: 0,
  };
  const [isWelcomeModalVisible, setIsWelcomeModalVisible] = useState(false);
  const modalControl = {
    welcome: {
      isModalVisible: isWelcomeModalVisible,
      openModal: () => {
        console.log('pressed');
        setIsWelcomeModalVisible(true);
      },
      closeModal: () => {
        setIsWelcomeModalVisible(false);
      },
      zIndex: zIndexs.product,
    },
  };
  return (
    <View style={styles.container}>
      <StatusNavBar />

      {/* Main Screen */}
      <ImageBackground
        source={require('../../../assets/images/interior.png')}
        style={styles.background}>
        {/* <SellerInteractionArea zIndex={zIndexs.seller} /> */}
        <ProductSelectionArea
          zIndex={zIndexs.product}
          modalControl={modalControl}
        />
      </ImageBackground>
    </View>
  );
};

export default ProductShoppingPage;
