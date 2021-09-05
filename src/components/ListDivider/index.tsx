import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {
  isCentered?: boolean;
}

export function ListDivider({isCentered}:Props) {
  const centerStyle = isCentered ? styles.center : styles.notCenter;
  return (
    <View style={[ styles.container, centerStyle ]}/>
  )
}