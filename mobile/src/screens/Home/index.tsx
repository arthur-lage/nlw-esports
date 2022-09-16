import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { API_URL } from "../../utils/api";

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[] | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    async function getGames() {
      const res = await fetch(`${API_URL}/games`);
      const json = await res.json();
      setGames(json);
    }

    getGames();
  }, []);

  function handleOpenGame(data: GameCardProps) {
    navigation.navigate("game", {
      id: data.id,
      title: data.title,
      bannerUrl: data.bannerUrl
    });
  }

  return (
    <Background>
      <SafeAreaView>
        <Image source={Logo} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard handleOpenGame={handleOpenGame} data={item} />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
