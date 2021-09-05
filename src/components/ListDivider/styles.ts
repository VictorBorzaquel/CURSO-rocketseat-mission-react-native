import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '78%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    alignSelf: 'flex-end',
  },
  center: {
    marginVertical: 12
  },
  notCenter: {
    marginTop: 2, 
    marginBottom: 31
  }
})