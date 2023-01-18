import {colors} from '../../constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkWhite,
    paddingTop: 85,
  },
  body: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  addTodoIcon: {
    position: 'absolute',
    bottom: 31,
    right: 36,
  },
  name: {
    paddingHorizontal: 15,
    marginBottom: 19,
  },
  button: {
    width: '100%',
    height: 44,
    marginBottom: 16,
  },

  cont: {
    height: 44,
    backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  deleteButton: {
    height: 44,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.red,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 1,
  },
  deleteTextStyle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
