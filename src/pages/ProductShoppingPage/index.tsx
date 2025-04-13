import {FC, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import StatusNavBar from '../../components/productShopping/StatusNavBar';
import ProductSelectionArea from './ProductSelectionArea';
import SellerInteractionArea from '../../components/productShopping/SellerInteractionArea';
import {useDispatch} from 'react-redux';
import {setIsModalOpen} from '../../slices/componentSlice';

export type BasicModalType = {
  isModalVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  zIndex?: number;
};
export type SizingScreenModalType = {
  isAddCharacterModalVisible: boolean;
  openAddCharacterModal: () => void;
  closeAddCharacterModal: () => void;
  isSizeGuideModalVisible: boolean;
  openSizeGuideModal: () => void;
  closeSizeGuideModal: () => void;
};
export type ModalControlMap = {
  welcome: BasicModalType;
  sizing: SizingScreenModalType;
};

const ProductShoppingPage: FC = () => {
  const dispatch = useDispatch();
  const zIndexs = {
    seller: 10,
    product: 0,
  };
  const [isWelcomeModalVisible, setIsWelcomeModalVisible] = useState(false);
  const [isAddCharacterModalVisible, setIsAddCharacterModalVisible] =
    useState(false);
  const [isSizeGuideModalVisible, setIsSizeGuideModalVisible] = useState(false);
  const modalControl: ModalControlMap = {
    welcome: {
      isModalVisible: isWelcomeModalVisible,
      openModal: () => {
        setIsWelcomeModalVisible(true);
        dispatch(setIsModalOpen(true));
      },
      closeModal: () => {
        setIsWelcomeModalVisible(false);
        dispatch(setIsModalOpen(false));
      },
    },
    sizing: {
      isAddCharacterModalVisible,
      openAddCharacterModal: () => {
        setIsAddCharacterModalVisible(true);
        dispatch(setIsModalOpen(true));
      },
      closeAddCharacterModal: () => {
        setIsAddCharacterModalVisible(false);
        dispatch(setIsModalOpen(false));
      },
      isSizeGuideModalVisible,
      openSizeGuideModal: () => {
        setIsSizeGuideModalVisible(true);
        dispatch(setIsModalOpen(true));
      },
      closeSizeGuideModal: () => {
        setIsSizeGuideModalVisible(false);
        dispatch(setIsModalOpen(false));
      },
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
