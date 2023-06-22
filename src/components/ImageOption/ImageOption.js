import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const ImageOption = () => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        }}
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>Glass</Text>
    </View>
  );
};
export default ImageOption;
