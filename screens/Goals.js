import React, { useState } from "react";
import { StyleSheet, Pressable, View, ScrollView, Text, Image } from "react-native";
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
    <View style={estilos.metas}>
      <Image
        style={estilos.logotipoPretoWg2Icone}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <ScrollView
        style={estilos.paiGrupo}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={[estilos.envoltorioQuadro, estilos.posicaoQuadro]}>
          <View style={[estilos.paiQuadro, estilos.caixaSombraQuadro]}>
            <View>
              <Text style={[estilos.titulo, estilos.corTitulo]}>
                Corrida de 5 km
              </Text>
              <Text style={[estilos.titulo1, estilos.corTitulo]}>
                20min 1-10 julho
              </Text>
            </View>
            <Text style={estilos.texto}>09:00</Text>
          </View>
        </View>
        <View style={[estilos.containerQuadro, estilos.posicaoQuadro]}>
          <View style={estilos.caixaSombraQuadro}>
            <View>
              <Text style={[estilos.titulo, estilos.corTitulo]}>Resistência</Text>
              <Text style={[estilos.titulo1, estilos.corTitulo]}>
                20min 10-15 julho
              </Text>
            </View>
            <Text style={[estilos.texto1, estilos.tipografiaTexto]}>09</Text>
            <Text style={[estilos.texto2, estilos.tipografiaTexto]}>08:50</Text>
          </View>
        </View>
        <View style={[estilos.visaoGrupo, estilos.posicaoVisaoGrupo]}>
          <View style={[estilos.visaoQuadro, estilos.caixaSombraQuadro]}>
            <View style={estilos.envoltorioTitulo}>
              <Text style={[estilos.titulo4, estilos.corTitulo]}>
                <Text style={estilos.tipografiaTitulo}>Desafio Plank</Text>
                <Text style={estilos.min}>10min 1- 15 julho</Text>
              </Text>
            </View>
            <Text style={estilos.texto}>08:50</Text>
          </View>
          <Image
            style={estilos.wgc2023GloboPrimarioVermelho3}
            contentFit="cover"
            source={require("../assets/wgc-2023-primary-globe-red-3.png")}
          />
        </View>
      </ScrollView>
      <View style={[estilos.joeMaior1Pai, estilos.layoutJoe]}>
        <Image
          style={[estilos.joeMaior1, estilos.layoutJoe]}
          contentFit="cover"
          source={require("../assets/joe-maior-1.png")}
        />
        <Text
          style={[estilos.escolherAtividadesTh, estilos.posicaoVisaoGrupo]}
        >Desafios Fitness</Text>
      </View>
      <View style={[estilos.metasFilho, estilos.layoutMetas]} />
      <View style={[estilos.metasItem, estilos.layoutMetas]} />
      <Pressable style={[estilos.retanguloPai, estilos.layoutFilhoGrupo]}>
        <View style={[estilos.filhoGrupo, estilos.layoutFilhoGrupo]} />
        <Text style={[estilos.avancar, estilos.tipografiaTitulo]}>Avançar</Text>
      </Pressable>
    </View>
  );
};

const estilos = StyleSheet.create({
  posicaoQuadro: {
    height: 87,
    left: 3,
    right: 0,
    position: "absolute",
  },
  caixaSombraQuadro: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    left: 0,
    top: 0,
    right: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
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
  posicaoVisaoGrupo: {
    left: 0,
    position: "absolute",
  },
  layoutJoe: {
    height: 255,
    position: "absolute",
  },
  layoutMetas: {
    height: 26,
    width: 424,
    backgroundColor: "#c41230",
    left: 0,
    position: "absolute",
  },
  layoutFilhoGrupo: {
    height: 47,
    width: 332,
    position: "absolute",
  },
  tipografiaTitulo: {
    fontFamily: "Poppins_bold",
    fontWeight: "700",
  },
  logotipoPretoWg2Icone: {
    marginTop: -414,
    marginLeft: -76.5,
    width: 153,
    height: 31,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  titulo: {
    textAlign: "left",
    fontFamily: "Poppins_bold",
    fontWeight: "700",
    lineHeight: 26,
    color: "#000",
    fontSize: 16,
  },
  titulo1: {
    fontSize: 18,
    lineHeight: 29,
    fontFamily: "Poppins_regular",
    textAlign: "left",
  },
  texto: {
    textAlign: "center",
    color: "#7c7c8a",
    fontFamily: "Poppins_regular",
    lineHeight: 26,
    fontSize: 16,
  },
  paiQuadro: {
    justifyContent: "space-between",
  },
  embrulhoQuadro: {
    top: 112,
  },
  texto1: {
    textAlign: "left",
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
  visaoQuadro: {
    justifyContent: "space-between",
  },
  wgc2023GloboPrimarioVermelho3: {
    top: 403,
    left: 138,
    width: 0,
    height: 0,
    position: "absolute",
  },
  visaoGrupo: {
    right: 3,
    height: 84,
    top: 0,
  },
  paiGrupo: {
    top: 368,
    right: 25,
    left: 27,
    position: "absolute",
    flex: 1,
  },
  joeMaior1: {
    left: 172,
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
    left: -34,
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
    top: 732,
    left: 38,
  },
  metas: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    height: 910,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Goals;