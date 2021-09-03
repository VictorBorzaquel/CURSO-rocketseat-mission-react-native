import React from "react";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";

import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });

  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
  <Background>
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent 
    />
    <Routes/>
  </Background>  
  );
}








// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
