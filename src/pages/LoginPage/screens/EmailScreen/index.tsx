import {FC, useState} from 'react';
import {View} from 'react-native';
import Title from '../../../../components/global/Title';
import InputBox from '../../../../components/global/InputBox';
import {UserInputType} from '../..';

interface EmailScreenProps {
  userInput: UserInputType;
  setUserInput: React.Dispatch<React.SetStateAction<UserInputType>>;
  setIsCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailScreen: FC<EmailScreenProps> = ({
  userInput,
  setUserInput,
  setIsCodeSent,
}) => {
  const pressButton = () => {
    setIsCodeSent(true);
  };

  return (
    <View>
      <Title text="Login & Sign Up" />
      <InputBox
        title="email"
        textValue={userInput.email}
        setTextValue={setUserInput}
        buttonTitle="Send Code"
        buttonAction={pressButton}
        textLength={100}
      />
    </View>
  );
};

export default EmailScreen;
