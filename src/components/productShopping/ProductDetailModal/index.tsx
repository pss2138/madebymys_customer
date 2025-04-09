import {FC} from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';
import {BasicModalType} from '../../../pages/ProductShoppingPage';
import Title from '../../global/Title';
import BasicModal from '../../global/BasicModal';
import {View} from 'react-native';

type ProdcutDetailModalProps = Omit<BasicModalType, 'openModal'> & {
  title: string;
  description: string;
};

const ProductDetailModal: FC<ProdcutDetailModalProps> = ({
  isModalVisible,
  closeModal,
  title,
  description,
}) => {
  const modalContent = (
    <View style={styles.container}>
      <Title text={title} />
      <Text>{description}</Text>
    </View>
  );
  return (
    <BasicModal
      content={modalContent}
      isVisible={isModalVisible}
      closeModal={closeModal}
    />
  );
};

export default ProductDetailModal;
