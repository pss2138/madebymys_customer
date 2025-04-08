import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 48,
    marginBottom: 24,
    width: '100%',
  },
  button: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: 6,
    borderColor: theme.colors.primary,
    borderRadius: 32,
    borderWidth: 1,
    fontWeight: theme.fonts.labelLarge.fontWeight,
  },
});

export default styles;
