import { StyleSheet } from "react-native";
import { THEME } from "../../theme/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.OVERLAY,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: THEME.COLORS.SHAPE,
    padding: 32,
    width: 311,
    position: "relative",
    alignItems: "center",
  },
  closeButton: {
    top: 16,
    right: 16,
    position: "absolute",
  },
  title: {
    marginTop: 24,
    marginBottom: 8,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
  },
  subtitle: {
    marginBottom: 24,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_400,
  },
  addToDiscord: {
    marginBottom: 8,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
  },
  discord: {
    borderRadius: 4,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    paddingVertical: 11,
    paddingHorizontal: 56.5,
  },
  discordText: {
    color: "#E4E4E7",
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
