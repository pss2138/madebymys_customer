import {FC, useEffect, useState} from 'react';
import styles from './styles';
import {BasicModalType} from '../../../pages/ProductShoppingPage';
import Title from '../../global/Title';
import BasicModal from '../../global/BasicModal';
import {Keyboard, View} from 'react-native';
import InputBox from '../../global/InputBox';
import {Button, Text} from 'react-native-paper';

type AddCharacterModalProps = Omit<BasicModalType, 'openModal'> & {
  title: string;
  prevCharacter: EditingCharacterType;
};
export type EditingCharacterType = {
  nickname: string;
  size: string;
};
type SizeButtonProps = {
  size: string;
  pressAction: () => void;
};

const AddCharacterModal: FC<AddCharacterModalProps> = ({
  isModalVisible,
  closeModal,
  title,
  prevCharacter,
}) => {
  const sizes = ['XS', 'S', 'M', 'L'];
  const [characterInput, setCharacterInput] = useState<EditingCharacterType>({
    nickname: prevCharacter.nickname ?? '',
    size: prevCharacter.size ?? '',
  });
  useEffect(() => {
    if (prevCharacter.nickname !== '') setCharacterInput(prevCharacter);
  }, [prevCharacter]);
  useEffect(() => {
    if (isModalVisible === false) {
      setCharacterInput({nickname: '', size: ''});
    }
  }, [isModalVisible]);

  const pressSizeButton: (size: string) => void = size => {
    if (characterInput.size === size) {
      setCharacterInput(prev => ({
        ...prev,
        size: '',
      }));
    } else
      setCharacterInput(prev => ({
        ...prev,
        size,
      }));
  };

  const SizeButton: FC<SizeButtonProps> = ({size, pressAction}) => (
    <Button
      labelStyle={styles.sizeButton}
      style={{
        marginRight: 12,
        backgroundColor:
          characterInput.size === size || !characterInput.size
            ? 'none'
            : 'gray',
      }}
      mode="outlined"
      onPress={pressAction}>
      {size}
    </Button>
  );
  const modalContent = (
    <View style={styles.container}>
      <Title text={title} />
      <InputBox
        title="nickname"
        textValue={characterInput.nickname}
        setTextValue={setCharacterInput}
        buttonAction={Keyboard.dismiss}
      />
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeTitle}>Size :</Text>
        {sizes.map((size, i) => (
          <SizeButton
            key={i}
            size={size}
            pressAction={() => {
              pressSizeButton(size);
            }}
          />
        ))}
      </View>

      <Button
        style={styles.confirmButton}
        labelStyle={styles.confirmButtonLabel}
        mode="outlined"
        onPress={() => {
          // save data & Add new size on the bottom of the list & select the new size
          closeModal();
        }}>
        {prevCharacter.size === '' && `+ `}
        {title}
      </Button>
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

export default AddCharacterModal;
