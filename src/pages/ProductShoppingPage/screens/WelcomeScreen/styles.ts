import {StyleSheet} from 'react-native';
import {theme} from '../../../../style/global';

// Styles
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: theme.fonts.titleLarge.fontSize,
    fontWeight: theme.fonts.titleLarge.fontWeight,
    lineHeight: theme.fonts.titleLarge.lineHeight,
    margin: 10,
  },
});

export default styles;
