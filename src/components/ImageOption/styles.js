import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  optionContainer: {
    //Border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    //Size
    height: "48%",
    width: "48%",
    alignItems: "center",

    //spacing
    padding: 10,
  },

  optionImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  optionText: {
    display: "flex",
    justifyContent: "center",
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
  },
});
export default styles;
