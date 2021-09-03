import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from './auth.routes';

const MyTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    // primary: '',
    background: 'transparent',
    // card: '',
    // text: '',
    // border: '',
    // notification: '',
  },
};

export function Routes() {
  return (
      <NavigationContainer theme={MyTheme}>
        <AuthRoutes />
      </NavigationContainer>
  )
}