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
        <ImageOption />
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
    </View>
  );
}
