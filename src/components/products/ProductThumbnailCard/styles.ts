import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    padding: 0,
    marginRight: 16,
    borderWidth: 6,
    borderColor: theme.colors.primary,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  cardContent: {
    flexGrow: 0,
    flexShrink: 1,
    padding: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: theme.fonts.titleLarge.fontSize,
    fontWeight: 700,
    lineHeight: theme.fonts.titleLarge.lineHeight,
    marginTop: 5,
    marginBottom: 5,
  },
  infoBox: {
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  subInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceBox: {
    flexDirection: 'row',
  },
  price: {
    fontSize: theme.fonts.bodyLarge.fontSize,
  },
  priceDiscount: {
    color: 'gray',
    fontSize: theme.fonts.bodyLarge.fontSize,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'gray',
    marginLeft: 3,
  },
  reviewBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewPoint: {
    fontSize: theme.fonts.bodyLarge.fontSize,
  },
  purchaseCount: {
    color: 'gray',
    fontSize: theme.fonts.bodyLarge.fontSize,
  },
});

export default styles;
