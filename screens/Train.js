import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Treino = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });
  return (
    <View style={styles.treino}>
      <Text style={[styles.tituloTreino, styles.centralizado]}>
        Treino A
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("ChooseTrain")}>
        <Image
          style={styles.setaImagem}
          resizeMode="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.logoImagem, styles.posicaoLogo]}
        resizeMode="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <Image
        style={[styles.imagemTreino, styles.posicaoDetalhes]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <View style={[styles.detalhes, styles.posicaoDetalhes]}>
        <Text style={[styles.tituloExercicio, styles.corTexto]}>Puxada aberta</Text>
        <View style={[styles.informacoes, styles.flexBox]}>
          <View style={styles.flexBox}>
            <Image
              style={styles.icone}
              resizeMode="cover"
              source={require("../assets/icons6.png")}
            />
            <Text style={[styles.series, styles.corTexto]}>3 Sets</Text>
          </View>
          <View style={[styles.repeticoes, styles.flexBox]}>
            <Image
              style={styles.icone}
              resizeMode="cover"
              source={require("../assets/icons7.png")}
            />
            <Text style={[styles.series, styles.corTexto]}>12 rep</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.wrapperBotao} onPress={() => navigation.navigate("Goals")}>
          <View style={[styles.botao, styles.flexBox]}>
            <Text style={[styles.textoBotao, styles.textoNegrito]}>Iniciar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.iconePausa, styles.posicaoLogo]}
        resizeMode="cover"
        source={require("../assets/pauseicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centralizado: {
    alignItems: "center",
    justifyContent: "center",
  },
  posicaoLogo: {
    left: "50%",
    position: "absolute",
  },
  posicaoDetalhes: {
    borderRadius: 8,
    marginLeft: -182,
    width: 364,
    left: "50%",
    position: "absolute",
  },
  corTexto: {
    color: "#000",
    textAlign: "center",
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoNegrito: {
    fontFamily: "Poppins_bold",
    fontWeight: "700",
  },
  tituloTreino: {
    top: 123,
    left: "50%",
    fontSize: 26,
    fontFamily: "Poppins_semibold",
    color: "#0a0615",
    width: 289,
    position: "absolute",
    marginLeft: -55,
  },
  setaImagem: {
    top: 30,
    left: 19,
    width: 24,
    height: 22,
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
  },
  logoImagem: {
    width: 153,
    height: 31,
    left: -19,
    top: 30,
    position: "absolute",
    marginLeft: -77,
  },
  imagemTreino: {
    height: 364,
    top: 190,
  },
  tituloExercicio: {
    fontSize: 22,
    lineHeight: 32,
    width: 212,
    fontFamily: "poppins_bold",
  },
  icone: {
    height: 24,
    width: 24,
  },
  series: {
    fontSize: 18,
    fontFamily: "poppins_semibold",
    marginLeft: 8,
  },
  repeticoes: {
    fontSize: 18,
    fontFamily: "poppins_semibold",
    marginLeft: 40,
  },
  informacoes: {
    marginTop: 24,
    justifyContent: "center",
  },
  textoBotao: {
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  },
  botao: {
    left: 0,
    borderRadius: 6,
    backgroundColor: "#c41230",
    width: 332,
    paddingHorizontal: 24,
    paddingVertical: 16,
    top: 0,
    justifyContent: "center",
    position: "absolute",
  },
  wrapperBotao: {
    alignSelf: "stretch",
    height: 56,
    marginTop: 24,
  },
  detalhes: {
    height: 190,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#fff",
    top: 565,
    justifyContent: "center",
    alignItems: "center",
  },
  iconePausa: {
    marginLeft: -47.5,
    top: 342,
    width: 96,
    height: 90,
  },
  treino: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    height: 910,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  botaoHome: {
    borderRadius: 12,
    backgroundColor: "#c41230",
    justifyContent: "center",
    alignItems: "center",
  },
  layoutBotaoHome: {
    height: 47,
    width: 332,
    position: "absolute",
  },
  textoBotaoHome: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Poppins_semibold",
    color: "#fff",
    textAlign: "center",
  },
});

export default Treino;