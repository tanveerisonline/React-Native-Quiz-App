import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 60,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-around",
  },
});

export default styles;
