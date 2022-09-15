import { StyleSheet, Text } from "react-native";
import { THEME } from "../../theme/index";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  subtitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_400,
  },
});
