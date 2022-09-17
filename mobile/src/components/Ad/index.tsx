import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";
import { GameController } from "phosphor-react-native";

interface AdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

interface Props {
  data: AdProps;
  onConnect: (adId: string) => void;
}

export function Ad({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.informationWrapper}>
        <Text style={styles.informationName}>Nome</Text>
        <Text style={styles.information}>{data.name}</Text>
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.informationName}>Tempo de jogo</Text>
        <Text style={styles.information}>{data.yearsPlaying} anos</Text>
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.informationName}>Disponibilidade</Text>
        <Text style={styles.availability}>
          <Text>{data.weekDays.length} dias </Text>
          <View style={styles.separator}></View>
          <Text>
            {" "}
            {data.hourStart}h - {data.hourEnd}h
          </Text>
        </Text>
      </View>
      <View style={styles.informationWrapper}>
        <Text style={styles.informationName}>Chamada de áudio?</Text>
        {data.useVoiceChannel ? (
          <Text style={styles.usingVoiceChannel}>Sim</Text>
        ) : (
          <Text style={styles.notUsingVoiceChannel}>Não</Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => onConnect(data.id)}
        style={styles.connect}
      >
        <GameController size={20} color="#fff" />
        <Text style={styles.connectText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
