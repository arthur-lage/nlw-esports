import { CheckCircle, X } from "phosphor-react-native";
import React from "react";
import {
  Modal,
  ModalProps,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import Toast, { BaseToast, ToastProps } from "react-native-toast-message";

interface Props extends ModalProps {
  discord: string;
  setIsModalActive: (state: boolean) => void;
}

export function DuoMatch({ discord, setIsModalActive, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  const toastConfig = {
    success: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: THEME.COLORS.SUCCESS }}
        contentContainerStyle={{ paddingHorizontal: 15, backgroundColor: THEME.COLORS.SHAPE }}
        text1Style={{
          fontSize: THEME.FONT_SIZE.MD,
          fontFamily: THEME.FONT_FAMILY.REGULAR,
          color: THEME.COLORS.TEXT
        }}
        
      />
    ),
  };

  async function handleCopyDiscord() {
    setIsCopping(true);

    await Clipboard.setStringAsync(discord);

    Toast.show({
      type: "success",
      text1: "O Discord foi copiado com sucesso!",
    });

    setIsCopping(false);
  }

  return (
    <Modal animationType="fade" statusBarTranslucent transparent {...rest}>
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
            disabled={isCopping}
          >
            {isCopping ? (
              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
            ) : (
              <Text style={styles.discordText}>{discord}</Text>
            )}
          </TouchableOpacity>
        </View>

        <Toast config={toastConfig} />
      </View>
    </Modal>
  );
}
