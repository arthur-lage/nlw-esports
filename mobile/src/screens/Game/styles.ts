import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    paddingVertical: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    width: 71,
    height: 40,
  },
  emptySpace: {
    width: 32,
    height: 32,
  },
  banner: {
    marginTop: 32,
    width: 311,
    height: 160,
    borderRadius: 8,
    alignSelf: "center",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  containerList: {
    width: "100%",
  },
});
