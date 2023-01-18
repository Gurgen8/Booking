import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.darkWhite,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical: 5,
    marginBottom: 16,
    fontSize: 24,
  },
});
