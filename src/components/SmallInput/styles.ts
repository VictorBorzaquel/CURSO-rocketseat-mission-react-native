import { theme } from '../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    borderRadius: 8,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
})