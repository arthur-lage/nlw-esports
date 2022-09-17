import { CheckCircle, X } from "phosphor-react-native";
import React from "react";
import { Modal, ModalProps, View, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

import * as Clipboard from "expo-clipboard";

interface Props extends ModalProps {
  discord: string;
  setIsModalActive: (state: boolean) => void;
}

export function DuoMatch({ discord, setIsModalActive, ...rest }: Props) {
  async function handleCopyDiscord() {
    await Clipboard.setStringAsync(discord);
  }

  return (
    <Modal statusBarTranslucent transparent {...rest}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <CheckCircle size={48} color={THEME.COLORS.SUCCESS} />

          <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.8}
            onPress={() => setIsModalActive(false)}
          >
            <X size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <Text style={styles.title}>Let's play!</Text>
          <Text style={styles.subtitle}>Agora é so começar a jogar!</Text>

          <Text style={styles.addToDiscord}>Adicione no Discord</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.discord}
            onPress={handleCopyDiscord}
          >
            <Text style={styles.discordText}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
