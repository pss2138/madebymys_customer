import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderWidth: 6,
    borderColor: theme.colors.primary,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    overflow: 'visible',
  },
  image: {
    borderRadius: 16,
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
