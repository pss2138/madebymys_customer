import {StyleSheet} from 'react-native';
import {theme} from '../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 16,
    width: '75%',
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 12,
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: 30,
    paddingVertical: 20,
    zIndex: 20,
    pointerEvents: 'box-none',
  },
  cancelBox: {
    position: 'absolute',
    top: 12,
    right: 6,
    width: 48,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 21,
  },
});

export default styles;
