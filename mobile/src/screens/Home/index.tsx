import { View, Image, FlatList } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Logo from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View>
      <Image source={Logo} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
