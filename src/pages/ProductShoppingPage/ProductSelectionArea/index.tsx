import {FC, useRef, useState} from 'react';
import {Text} from 'react-native-paper';
import {Dimensions, ScrollView, View} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import ScreenControlButtons from '../../../components/productShopping/ScreenControlButtons';
import styles from './styles';
import WelcomeScreen from '../screens/WelcomeScreen';
import SizingScreen from '../screens/SizingScreen';
import OptionScreen from '../screens/OptionScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

type ProductSelectionAreaProps = {
  zIndex: number;
};

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const screens = [
  <WelcomeScreen />,
  <SizingScreen />,
  <OptionScreen />,
  <CheckoutScreen />,
];

const ProductSelectionArea: FC<ProductSelectionAreaProps> = ({zIndex}) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View
      style={[
        styles.container,
        {width: screenWidth - 80, height: screenHeight, zIndex},
      ]}>
      <Carousel
        ref={carouselRef}
        width={screenWidth}
        height={screenHeight}
        data={screens}
        enabled={false}
        style={styles.carousel}
        renderItem={({index}) => screens[index]}
        onProgressChange={(_, absoluteProgress) => {
          setCurrentIndex(Math.round(absoluteProgress));
        }}
      />

      <ScreenControlButtons
        carouselRef={carouselRef}
        currentIndex={currentIndex}
        zIndex={zIndex + 1}
        lastCarouselIndex={screens.length - 1}
      />
    </View>
  );
};

export default ProductSelectionArea;
