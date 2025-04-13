import {FC} from 'react';
import styles from './styles';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';

interface InputBoxProps<T> {
  title: string;
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<T>>;
  buttonTitle?: string;
  buttonAction?: () => void;
  textLength?: number | undefined;
}

const InputBox = <T,>({
  title,
  textValue,
  setTextValue,
  buttonTitle,
  buttonAction,
  textLength,
}: InputBoxProps<T>) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputArea}>
        <TextInput
          mode="outlined"
          label={title}
          value={textValue}
          onChangeText={text =>
            setTextValue(prev => ({...prev, [title]: text}))
          }
          right={
            <TextInput.Affix text={textLength ? `/${textLength}` : '/100'} />
          }
          onSubmitEditing={buttonAction}
          returnKeyType="done"
          submitBehavior="submit"
        />
      </View>

      {buttonTitle && (
        <Button style={styles.button} mode="contained" onPress={buttonAction}>
          {buttonTitle}
        </Button>
      )}
    </View>
  );
};

export default InputBox;
