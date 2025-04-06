import {FC} from 'react';
import styles from './styles';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setToken} from '../../../../slices/userSlice';
import {theme} from '../../../../style/global';
import Title from '../../../../components/global/Title';
import InputBox from '../../../../components/global/InputBox';
import {UserInputType} from '../..';

interface CodeScreenProps {
  userInput: UserInputType;
  setUserInput: React.Dispatch<React.SetStateAction<UserInputType>>;
}

const DigitCodeScreen: FC<CodeScreenProps> = ({userInput, setUserInput}) => {
  const dispatch = useDispatch();
  const pressButton = () => {
    dispatch(setToken('login pressed'));
  };

  return (
    <View>
      <Title text="Enter 6 Digit Codes" />
      <InputBox
        title="code"
        textValue={userInput.code}
        setTextValue={setUserInput}
        buttonTitle="confirm"
        buttonAction={pressButton}
        textLength={6}
      />
    </View>
  );
};

export default DigitCodeScreen;
