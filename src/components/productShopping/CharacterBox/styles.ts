import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentWrapper: {marginLeft: 8},
  nickname: {
    fontSize: theme.fonts.bodyLarge.fontSize,
    fontWeight: theme.fonts.labelLarge.fontWeight,
    marginBottom: 4,
  },
  size: {
    fontSize: theme.fonts.bodyMedium.fontSize,
    fontWeight: theme.fonts.labelLarge.fontWeight,
  },
});

export default styles;
