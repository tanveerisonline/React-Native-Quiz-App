import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ImageOption from "./src/components/ImageOption";
import styles from "./styles/App.styles";
import question from "./assets/data/oneQuestionWithOption";
export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
          />
        ))}
      </View>
    </View>
  );
}
