import {StyleSheet} from 'react-native';
import {theme} from '../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  nav: {
    width: 100,
    backgroundColor: theme.colors.primary,
  },
  screen: {
    flex: 1,
  },
  headerTitle: {
    fontSize: theme.fonts.titleLarge.fontSize,
  },
});

export default styles;
