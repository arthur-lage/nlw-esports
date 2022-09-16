import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
  handleOpenGame: (data: GameCardProps) => void;
}

export function GameCard({ data, handleOpenGame, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={() => handleOpenGame(data)} {...rest} style={styles.container}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
