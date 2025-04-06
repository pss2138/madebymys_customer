import {FC} from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;
