import {FC} from 'react';
import styles from './styles';
import {IconButton, Modal} from 'react-native-paper';
import {ScrollView, TouchableOpacity, View} from 'react-native';

interface TitleProps {
  content: any;
  isVisible: boolean;
  closeModal: () => void;
}

const BasicModal: FC<TitleProps> = ({content, isVisible, closeModal}) => {
  return (
    <Modal
      visible={isVisible}
      onDismiss={closeModal}
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.cancelBox}
        onPress={() => {
          closeModal();
        }}>
        <IconButton icon="close" size={24} />
      </TouchableOpacity>
      <ScrollView>{content}</ScrollView>
    </Modal>
  );
};

export default BasicModal;
