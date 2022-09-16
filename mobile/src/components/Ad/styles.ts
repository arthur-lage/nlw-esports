import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 180,
    backgroundColor: THEME.COLORS.SHAPE,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 16,
  },
  informationWrapper: {
    marginBottom: 16,
  },
  informationName: {
    fontSize: THEME.FONT_SIZE.SM,
    color: "#C4C4C6",
    marginBottom: 4,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  information: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
  },
  availability: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 6,
    height: 6,
    borderRadius: 16,
    backgroundColor: THEME.COLORS.CAPTION_500,
  },
  usingVoiceChannel: {
    color: THEME.COLORS.SUCCESS,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  notUsingVoiceChannel: {
    color: THEME.COLORS.ALERT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  connect: {
    marginTop: 16,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 25,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  connectText: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    marginLeft: 8
  },
});
