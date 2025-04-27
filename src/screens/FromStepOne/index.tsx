import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";

export function FormStepOne() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Criar sua conta
        </Text>

        <Input icon="user"/>
    </View>
  )
}