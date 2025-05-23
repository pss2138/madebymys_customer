import {FC} from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import styles from './styles';

type ScreenControlButtonsProps = {
  carouselRef: React.RefObject<ICarouselInstance | null>;
  currentIndex: number;
  zIndex: number;
  lastCarouselIndex: number;
  openProductDetailModal: () => void;
};

const ScreenControlButtons: FC<ScreenControlButtonsProps> = ({
  carouselRef,
  currentIndex,
  zIndex,
  lastCarouselIndex,
  openProductDetailModal,
}) => {
  return (
    <View style={[styles.container, {zIndex}]}>
      <Button
        style={styles.button}
        disabled={currentIndex === 0}
        onPress={() => carouselRef.current?.prev()}>
        {'<'} Prev
      </Button>

      {currentIndex === 0 && (
        <Button style={styles.button} onPress={openProductDetailModal}>
          Product Details
        </Button>
      )}

      <Button
        style={styles.button}
        disabled={currentIndex === lastCarouselIndex}
        onPress={() => carouselRef.current?.next()}>
        Next {'>'}
      </Button>
    </View>
  );
};

export default ScreenControlButtons;
