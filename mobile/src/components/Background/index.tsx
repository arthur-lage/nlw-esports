import { ReactNode } from "react";

import { ImageBackground, View } from "react-native";

import backgroundImage from "../../assets/background-galaxy.png";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
