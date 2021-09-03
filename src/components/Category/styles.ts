import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15
  },
  square: {
    width: 10,
    height: 10,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 3,
    borderWidth: 1
  },
  check: {
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
  },
  checked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.secondary40
  }
})