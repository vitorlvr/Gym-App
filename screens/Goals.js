import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Goals = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });
  return (
    <View style={styles.metas}>
      <Image
        style={styles.logotipoPretoWg2Icone}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <View style={[styles.quadro1, styles.caixaSombraQuadro]}>
        <View style={styles.Layoutesquerda}>
          <Text style={[styles.titulo, styles.corTitulo]}>Corrida de 5 km</Text>
          <Text style={[styles.titulo1, styles.corTitulo]}>20min</Text>
        </View>
        <View style={styles.Layoutdireita}>
          <Text style={styles.texto}>09:00</Text>
          <Text style={[styles.data, styles.position]}>01-10 julho</Text>
        </View>
      </View>
      <View style={[styles.quadro2, styles.caixaSombraQuadro]}>
        <View style={styles.Layoutesquerda}>
          <Text style={[styles.titulo, styles.corTitulo]}>Resistência</Text>
          <Text style={[styles.texto1]}>08:50</Text>
        </View>
        <View style={styles.Layoutdireita}>
          <Text style={styles.data1}>10-15 julho</Text>
        </View>
      </View>
      <View style={[styles.quadro3, styles.caixaSombraQuadro]}>
        <View style={styles.Layoutesquerda}>
          <Text style={styles.titulo}>Desafio Plank</Text>
          <Text style={styles.min}>10min</Text>
        </View>
        <View style={styles.Layoutdireita}>
          <Text style={styles.texto3}>08:50</Text>
          <Text style={styles.data}>15-20 julho</Text>
        </View>
      </View>
      <Image
        style={styles.wgc2023GloboPrimarioVermelho3}
        contentFit="cover"
        source={require("../assets/wgc-2023-primary-globe-red-3.png")}
      />
      <View style={[styles.joeMaior1Pai, styles.layoutJoe]}>
        <Image
          style={[styles.joeMaior1, styles.layoutJoe]}
          contentFit="cover"
          source={require("../assets/joe-maior-1.png")}
        />
        <Text
          style={[styles.escolherAtividadesTh, styles.posicaoVisaoGrupo]}
        >Desafios Fitness</Text>
      </View>
      <View style={[styles.metasFilho, styles.layoutMetas]} />
      <View style={[styles.metasItem, styles.layoutMetas]} />
      <TouchableOpacity style={styles.retanguloPai} onPress={() => navigation.navigate("Goalwin")}>
        <View style={[styles.filhoGrupo, styles.layoutFilhoGrupo]} />
        <Text style={[styles.avancar, styles.tipografiaTitulo]}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  caixaSombraQuadro: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  data: {
    marginTop: 5,
    marginRight: 135,
  },
  position: {
    marginLeft: -150,
  },
  Layoutdireita: {
    marginTop: 10,
    marginRight: 10,
  },
  quadro1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 365,
    width: 364,
    height: 84,
    left: "50%",
    marginLeft: -182,
  },
  quadro2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 382,
    width: 364,
    height: 84,
    left: "50%",
    marginLeft: -182,
  },
  quadro3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 399,
    width: 364,
    height: 84,
    left: "50%",
    marginLeft: -182,
  },
  texto3: {
    color: "#7c7c8a",
    fontFamily: "Poppins_regular",
    fontSize: 16,
    marginLeft: 160,
    marginTop: 12,
  },
  corTitulo: {
    color: "#000",
    textAlign: "left",
  },
  tipografiaTexto: {
    marginLeft: 150,
    color: "#7c7c8a",
    fontFamily: "Poppins_regular",
    lineHeight: 26,
    fontSize: 16,
  },
  data1: {
    marginTop: 40,
    left: "50%",
    marginLeft: -205,
  },
  posicaoVisaoGrupo: {
    position: "absolute",
    marginLeft: 30,
    width: 100,
  },
  layoutJoe: {
    height: 255,
    position: "absolute",
  },
  layoutMetas: {
    height: 26,
    width: "100%",
    backgroundColor: "#c41230",
    position: "absolute",
  },
  tipografiaTitulo: {
    fontFamily: "Poppins_bold",
    fontWeight: "700",
  },
  logotipoPretoWg2Icone: {
    width: 153,
    height: 31,
    top: 30,
    position: "absolute",
    marginLeft: -77,
    left: "50%",
  },
  titulo: {
    textAlign: "left",
    fontFamily: "Poppins_bold",
    color: "#000",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  titulo1: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "Poppins_regular",
    textAlign: "left",
  },
  min: {
    color: "#000",
    fontFamily: "Poppins_regular",
    fontSize: 20,
    marginLeft: 10,
  },
  texto: {
    color: "#7c7c8a",
    fontFamily: "Poppins_regular",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 12,
  },
  paiQuadro: {
    justifyContent: "space-between",
  },
  embrulhoQuadro: {
    top: 112,
  },
  texto1: {
    color: "#7c7c8a",
    fontFamily: "Poppins_regular",
    fontSize: 16,
    marginLeft: 305,
    marginTop: -8,
    textAlign: "right",
  },
  texto2: {
    textAlign: "center",
  },
  containerQuadro: {
    top: 224,
  },
  minuto: {
    fontFamily: "Poppins_regular",
  },
  titulo4: {
    textAlign: "left",
    lineHeight: 26,
    color: "#000",
    fontSize: 16,
  },
  embrulhoTitulo: {
    width: 284,
  },
  wgc2023GloboPrimarioVermelho3: {
    top: 403,
    left: "50%",
    marginLeft: -75,
    height: 0,
    position: "absolute",
  },
  joeMaior1: {
    left: 102,
    width: 318,
    top: 0,
  },
  escolherAtividadesTh: {
    top: 116,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#0a0615",
    display: "flex",
    justifyContent: "center",
    width: 289,
    textAlign: "center",
    alignItems: "center",
  },
  joeMaior1Pai: {
    top: 79,
    left: "50%",
    marginLeft: -166,
    width: 490,
  },
  metasFilho: {
    top: 317,
  },
  metasItem: {
    top: 91,
  },
  filhoGrupo: {
    borderRadius: 12,
    backgroundColor: "#c41230",
    width: 332,
    left: 0,
    top: 0,
  },
  avancar: {
    marginTop: -11.5,
    marginLeft: -29,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  retanguloPai: {
    height: 47,
    width: 332,
    position: "absolute",
    top: 731,
    left: "50%",
    marginLeft: -166,
    height: 47,
    borderRadius: 12,
    backgroundColor: "#c41230",
  },
  metas: {
    backgroundColor: "#e1e1e1",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Goals;