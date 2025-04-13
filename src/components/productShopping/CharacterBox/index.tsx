import {FC} from 'react';
import styles from './styles';
import {Icon, IconButton, Text} from 'react-native-paper';
import {Pressable, View} from 'react-native';
import {EditingCharacterType} from '../AddCharacterModal';

type characterBoxProps = {
  character: EditingCharacterType;
  selectedCharacter: EditingCharacterType;
  setSelectedCharacter: React.Dispatch<
    React.SetStateAction<EditingCharacterType>
  >;
  openEditCharacterModal: () => void;
  setEditingCharacter: React.Dispatch<
    React.SetStateAction<EditingCharacterType>
  >;
};
const CharacterBox: FC<characterBoxProps> = ({
  character,
  selectedCharacter,
  setSelectedCharacter,
  openEditCharacterModal,
  setEditingCharacter,
}) => {
  const isNotSelected = character.nickname !== selectedCharacter.nickname;
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.box,
          {
            opacity:
              selectedCharacter.nickname === undefined || !isNotSelected
                ? 1
                : 0.8,
          },
        ]}
        onPress={() => {
          if (selectedCharacter.nickname === character.nickname)
            setSelectedCharacter(prev => ({...prev, nickname: ''}));
          else
            setSelectedCharacter(prev => ({
              ...prev,
              nickname: character.nickname,
            }));
        }}>
        <Icon
          source={isNotSelected ? 'check-circle-outline' : 'check-circle'}
          color={isNotSelected ? 'gray' : 'blue'}
          size={24}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.nickname}>{character.nickname}</Text>
          <Text>
            Size: <Text style={styles.size}>{character.size}</Text>
          </Text>
        </View>
      </Pressable>

      <IconButton
        icon="pencil-circle-outline"
        size={24}
        style={{width: 48}}
        onPress={async () => {
          setEditingCharacter({
            nickname: character.nickname,
            size: character.size,
          });
          openEditCharacterModal();
        }}
      />
    </View>
  );
};

export default CharacterBox;
