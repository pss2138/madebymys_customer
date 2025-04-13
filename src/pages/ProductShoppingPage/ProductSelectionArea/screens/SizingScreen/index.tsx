import {FC, useEffect, useState} from 'react';
import styles from './styles';
import {Button, Icon, Text} from 'react-native-paper';
import {Pressable, ScrollView, View} from 'react-native';
import CharacterBox from '../../../../../components/productShopping/CharacterBox';
import {ModalControlMap} from '../../..';
import AddCharacterModal, {
  EditingCharacterType,
} from '../../../../../components/productShopping/AddCharacterModal';
import SizeGuideModal from '../../../../../components/productShopping/SizeGuideModal';

const characters = [
  {nickname: 'Suzy', size: 'M'},
  {nickname: 'Amy', size: 'XS'},
  {nickname: 'MJ', size: 'S'},
  {nickname: 'Jane', size: 'L'},
];

export type SizingScreenProps = {
  modalControl: ModalControlMap['sizing'];
};

const SizingScreen: FC<SizingScreenProps> = ({modalControl}) => {
  const [selectedCharacter, setSelectedCharacter] =
    useState<EditingCharacterType>({nickname: '', size: ''});
  const [editingCharacter, setEditingCharacter] =
    useState<EditingCharacterType>({nickname: '', size: ''});

  const AddCharacterBox = (
    <Pressable
      style={styles.addCharacterBox}
      onPress={modalControl.openAddCharacterModal}>
      <Icon source="plus-circle-outline" size={36} />
      <View style={styles.characterContentWrapper}>
        <Text style={styles.addCharacterTitle}>Add Size</Text>
      </View>
    </Pressable>
  );

  const selectedSize = () => {
    if (selectedCharacter.nickname === undefined) return '';
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].nickname === selectedCharacter.nickname)
        return characters[i].size;
    }
    return '';
  };
  useEffect(() => {
    if (modalControl.isAddCharacterModalVisible === false) {
      setEditingCharacter({nickname: '', size: ''});
    }
  }, [modalControl.isAddCharacterModalVisible]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.charactersArea}>
        {characters.map((character, i) => (
          <CharacterBox
            character={character}
            key={i}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
            openEditCharacterModal={modalControl.openAddCharacterModal}
            setEditingCharacter={setEditingCharacter}
          />
        ))}
        {AddCharacterBox}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button
          icon="information-outline"
          mode="outlined"
          style={styles.sizeButton}
          labelStyle={{color: 'blue'}}
          onPress={modalControl.openSizeGuideModal}>
          Size Guide
        </Button>
        <View style={styles.sizeResultBox}>
          <Text style={styles.sizeTitle}>Selected Size</Text>
          <Text style={styles.sizeValue}>{selectedSize()}</Text>
        </View>
      </View>

      <AddCharacterModal
        isModalVisible={modalControl.isAddCharacterModalVisible}
        closeModal={modalControl.closeAddCharacterModal}
        title={editingCharacter.size === '' ? 'Add Size' : 'Edit Size'}
        prevCharacter={editingCharacter}
      />
      <SizeGuideModal
        isVisible={modalControl.isSizeGuideModalVisible}
        closeModal={modalControl.closeSizeGuideModal}
      />
    </View>
  );
};

export default SizingScreen;
