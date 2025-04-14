import {FC} from 'react';
import styles from './styles';
import {View} from 'react-native';
import NailsProtoHorizontal from '../../../../../components/productShopping/NailsProtoHorizontal';

const OptionScreen: FC = () => {
  const response = {
    id: '14',
    title: 'cobra',
    shape: 'almond',
    length: 'long',
    nails: [
      {
        fingerIndex: 1,
        imageUri: require('../../../../../../assets/images/nails/almond_long_1.png'),
        color: 'black',
        width: 100,
        height: 150,
      },
      {
        fingerIndex: 2,
        imageUri: require('../../../../../../assets/images/nails/almond_long_2.png'),
        color: 'black',
        width: 85,
        height: 150,
        translateY: 10,
      },
      {
        fingerIndex: 3,
        imageUri: require('../../../../../../assets/images/nails/almond_long_2.png'),
        color: 'white',
        width: 95,
        height: 150,
        translateY: 2,
      },
      {
        fingerIndex: 4,
        imageUri: require('../../../../../../assets/images/nails/almond_long_2.png'),
        color: 'black',
        width: 85,
        height: 150,
        translateY: 10,
      },
      {
        fingerIndex: 5,
        imageUri: require('../../../../../../assets/images/nails/almond_long_5.png'),
        color: 'black',
        width: 70,
        height: 150,
        translateY: 22,
      },
    ],
  };

  return (
    <View>
      <NailsProtoHorizontal
        nails={response.nails}
        shape={response.shape}
        length={response.length}
      />
    </View>
  );
};

export default OptionScreen;
