import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import EmailScreen from './screens/EmailScreen';
import DigitCodeScreen from './screens/DigitCodeScreen';

export type UserInputType = {
  email: string;
  code: string;
};

type CurrentScreenType = 'email' | 'code';

const LoginPage: FC = () => {
  const [userInput, setUserInput] = useState<UserInputType>({
    email: '',
    code: '',
  });
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [currentScreen, setCurrentScreen] =
    useState<CurrentScreenType>('email');

  useEffect(() => {
    if (isCodeSent) {
      setCurrentScreen('code');
    }
  }, [isCodeSent]);

  return (
    <View style={styles.container}>
      {currentScreen === 'email' ? (
        <EmailScreen
          userInput={userInput}
          setUserInput={setUserInput}
          setIsCodeSent={setIsCodeSent}
        />
      ) : (
        <DigitCodeScreen userInput={userInput} setUserInput={setUserInput} />
      )}
    </View>
  );
};

export default LoginPage;
