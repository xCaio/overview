import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import Hotwheels from "./assets/hotwheels.png";

export default function App() {
  const [valorInput, setValorInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  function handleSwitch() {
    setIsActive(!isActive);
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text> Aplicando Imagem externa</Text>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/50676424?v=4",
          }}
          width={200}
          height={200}
        />
        <Text>Aplicando imagem interna</Text>
        <Image source={Hotwheels} width={5} height={5} style={{display: isActive? "flex" : "none"}}/>
        <StatusBar style="auto" />
        <Button
          title="Botao"
          onPress={() => {
            Alert.alert("Aviso", "Botão nativo Pressionado");
          }}
        />
        <Text
          style={[
            {
              marginTop: 10,
              fontSize: 20,
              backgroundColor: "red",
              color: "#FFF",
              padding: 5,
            },
            styles.testeArrayStyle,
          ]}
          onLongPress={() => {
            Alert.alert("Pressionado", "Ao segurar o Botão chama esse evento");
          }}
        >
          Botão 2 com Text
        </Text>
        <Text>{valorInput}</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Texto de fundo"
          onChangeText={setValorInput}
          value={valorInput}
        />

        <Button
          title="Pegar Valor do Input Acima"
          onPress={() => {
            Alert.alert("Resultado", valorInput);
          }}
        />
      </View>
      <View style={styles.switchView}>
        <Text> UTILIZANDO COMPONENTE SWITCH</Text>
        <Switch value={isActive} onValueChange={handleSwitch}></Switch>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  testeArrayStyle: {
    borderRadius: 8,
  },
  textinput: {
    borderWidth: 1,
    marginVertical: 10,
    // paddingHorizontal: 50,
    borderRadius: 8,
    width: 250,
    height: 50,
  },
  scroll: {
    padding: 50,
  },
  switchView:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
