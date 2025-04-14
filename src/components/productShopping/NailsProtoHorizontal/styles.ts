import {StyleSheet} from 'react-native';
import {screenWidth} from '../../../pages/ProductShoppingPage/ProductSelectionArea';

// Styles
const styles = StyleSheet.create({
  nailsContainer: {
    flexDirection: 'row',
    height: 150,
    width: screenWidth - 100,
    justifyContent: 'center',
  },
  nailWrapper: {
    marginHorizontal: 4,
  },
  nailMask: {
    width: '100%',
    height: '100%',
  },
  nailColoredFill: {
    flex: 1,
  },
  nailGlow: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '30%',
    height: '4%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 100,
    transform: [{rotate: '-80deg'}],
  },
});

export default styles;
