import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function Home() {

  function teste() {
    console.log("teste")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do projeto
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={teste}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
