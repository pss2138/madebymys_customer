import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {},
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  sizeButton: {
    fontSize: theme.fonts.titleMedium.fontSize,
  },
  sizeTitle: {
    fontSize: theme.fonts.titleMedium.fontSize,
    marginRight: 8,
  },
  confirmButton: {
    marginTop: 48,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  confirmButtonLabel: {
    fontSize: theme.fonts.titleMedium.fontSize,
    fontWeight: 700,
  },
});

export default styles;
