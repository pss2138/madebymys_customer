import {StyleSheet} from 'react-native';
import {theme} from '../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    paddingVertical: 0,
    width: '100%',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.colors.black,
    fontSize: theme.fonts.titleSmall.fontSize,
  },
});

export default styles;
