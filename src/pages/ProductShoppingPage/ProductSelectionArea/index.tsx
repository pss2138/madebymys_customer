import {FC, useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import ScreenControlButtons from '../../../components/productShopping/ScreenControlButtons';
import styles from './styles';
import WelcomeScreen from './screens/WelcomeScreen';
import SizingScreen from './screens/SizingScreen';
import OptionScreen from './screens/OptionScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import {BasicModalType, SizingScreenModalType} from '..';
import {useSelector} from 'react-redux';
import {selectIsModalOpen} from '../../../slices/componentSlice';

type ProductSelectionAreaProps = {
  zIndex: number;
  modalControl: {welcome: BasicModalType; sizing: SizingScreenModalType};
};
export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

const ProductSelectionArea: FC<ProductSelectionAreaProps> = ({
  zIndex,
  modalControl,
}) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isModalOpen = useSelector(selectIsModalOpen);

  const screens = [
    <WelcomeScreen
      isModalVisible={modalControl.welcome.isModalVisible}
      openModal={modalControl.welcome.openModal}
      closeModal={modalControl.welcome.closeModal}
    />,
    <SizingScreen modalControl={modalControl.sizing} />,
    <OptionScreen />,
    <CheckoutScreen />,
  ];
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

      {!isModalOpen && (
        <ScreenControlButtons
          carouselRef={carouselRef}
          currentIndex={currentIndex}
          zIndex={zIndex + 1}
          lastCarouselIndex={screens.length - 1}
          openProductDetailModal={modalControl.welcome.openModal}
        />
      )}
    </View>
  );
};

export default ProductSelectionArea;
