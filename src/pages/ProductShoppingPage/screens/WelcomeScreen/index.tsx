import {FC} from 'react';
import styles from './styles';
import {Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';

const WelcomeScreen: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        paddingVertical: 40,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}>
        {Array.from({length: 10}).map((_, i) => (
          <View
            key={i}
            style={{
              width: 120,
              height: 100,
              backgroundColor: '#ffccdd',
              marginRight: 12,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
