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
        <ImageOption
          image={question.options[0].image}
          text={question.options[0].text}
        />
        <ImageOption
          image={question.options[1].image}
          text={question.options[1].text}
        />
        <ImageOption
          image={question.options[2].image}
          text={question.options[2].text}
        />
        <ImageOption
          image={question.options[3].image}
          text={question.options[3].text}
        />
      </View>
    </View>
  );
}
