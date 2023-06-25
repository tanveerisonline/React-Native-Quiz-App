import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ImageOption from "./src/components/ImageOption";
import styles from "./styles/App.styles";
export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png"
          text="Glass"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"
          text="Cup"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png"
          text="Cup"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png"
          text="Cup"
        />
      </View>
    </View>
  );
}
