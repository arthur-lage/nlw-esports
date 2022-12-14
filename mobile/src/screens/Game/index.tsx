import React, { useState, useEffect } from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import NLWLogo from "../../assets/logo-nlw-esports.png";

import { GameParams } from "../../@types/navigation";

import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { Ad } from "../../components/Ad";
import { API_URL } from "../../utils/api";
import { DuoMatch } from "../../components/DuoMatch";
import { Loading } from "../../components/Loading/index";

export function Game() {
  const [adsList, setAdsList] = useState<any[]>([]);
  const [discord, setDiscord] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function getAds() {
      try {
        const res = await fetch(`${API_URL}/games/${game.id}/ads`);
        const json = await res.json();

        setIsLoading(false);
        setAdsList(json);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    }

    getAds();
  }, []);

  async function handleConnect(adId: string) {
    const res = await fetch(`${API_URL}/ads/${adId}/discord`);
    const json = await res.json();

    setDiscord(json);

    setIsModalActive(true);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.75} onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={24}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image style={styles.logo} source={NLWLogo} />
          <View style={styles.emptySpace}></View>
        </View>

        <Image
          resizeMode="cover"
          source={{ uri: game.bannerUrl }}
          style={styles.banner}
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={adsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Ad onConnect={handleConnect} data={item} />
            )}
            horizontal
            style={styles.containerList}
            contentContainerStyle={
              adsList.length > 0
                ? styles.contentList
                : styles.emptyListContainer
            }
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                N??o h?? an??ncios para esse jogo ainda.
              </Text>
            )}
          />
        )}

        <DuoMatch
          discord={discord}
          setIsModalActive={setIsModalActive}
          visible={isModalActive}
        />
      </SafeAreaView>
    </Background>
  );
}
