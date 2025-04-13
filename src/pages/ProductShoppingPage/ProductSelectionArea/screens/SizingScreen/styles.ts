import {StyleSheet} from 'react-native';
import {theme} from '../../../../../style/global';

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    paddingTop: 40,
    paddingBottom: 80,
    paddingHorizontal: 32,
  },
  charactersArea: {
    width: '50%',
    marginHorizontal: 20,
  },
  addCharacterBox: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    marginVertical: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingVertical: 12,
    alignItems: 'center',
  },
  characterContentWrapper: {marginLeft: 8},
  addCharacterTitle: {
    fontSize: theme.fonts.titleLarge.fontSize,
    fontWeight: theme.fonts.labelLarge.fontWeight,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    width: '20%',
    marginLeft: 32,
    marginRight: 100,
  },
  sizeButton: {
    backgroundColor: theme.colors.blueLight,
    borderColor: 'blue',
    borderWidth: 2,
  },
  sizeResultBox: {
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 36,
    paddingHorizontal: 12,
  },
  sizeTitle: {
    fontSize: theme.fonts.bodyLarge.fontSize,
    marginBottom: 8,
  },
  sizeValue: {
    fontSize: 32,
  },
});

export default styles;
