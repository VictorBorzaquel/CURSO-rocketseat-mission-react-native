import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
  },
  bannerComponent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 28,
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
  },
  members: {
    marginLeft: 24,
    marginTop: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
})