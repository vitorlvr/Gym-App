import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Final = () => {
  const navigation = useNavigation();
  const [] = useFonts({
      Jost_medium: require('../assets/fonts/Jost_medium.ttf'),
      Open_Sans_regular: require('../assets/fonts/Open_Sans_regular.ttf'),
      Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
      Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
      Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
      Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
      Rambla_regular: require('../assets/fonts/Rambla_regular.ttf'),
      Rambla_bold: require('../assets/fonts/Rambla_bold.ttf'),
  });
  return (
    <View style={styles.final}>
      <View style={styles.bg} />
      <Image
        style={styles.finalChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={styles.finalItem}
        contentFit="cover"
        source={require("../assets/group-30.png")}
      />
      <View style={styles.wohooPagamentoFeitoComSParent}>
        <Text
          style={[styles.wohooPagamentoFeito, styles.startTrainingFlexBox]}
        >{`Wohoo!!!
Pagamento feito 
com sucesso.`}</Text>
        <Text style={styles.obrigadaPorEscolher}>
          Obrigada por escolher a world gym
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.bg1ShadowBox]} />
        <Text
          style={[styles.worldGymLigar, styles.customerCareTypo]}
        >{`World Gym ligará para você sobre sua data e hórario de início

Para qualquer dúvida, sinta-se à vontade para entrar em contato com nosso atendimento ao cliente 
`}</Text>
      </View>
      <View style={[styles.button, styles.bg1ShadowBox]}>
        <Pressable style={styles.bg1Position}>
          <View style={[styles.bg1, styles.bg1Position]} />
          <Text style={[styles.startTraining, styles.startTrainingFlexBox]}>
            Vamos Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Text
          style={[styles.customerCare, styles.customerCareTypo]}
        >{`Customer care : 1500 7373 4666 
(8.00AM-10.00PM)`}</Text>
      </View>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startTrainingFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 163,
    width: 326,
  },
  bg1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  customerCareTypo: {
    textAlign: "left",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.64)",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    position: "absolute",
  },
  bg1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bg: {
    top: -25,
    left: 2,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 375,
    height: 847,
    position: "absolute",
  },
  finalChild: {
    top: 28,
    left: 22,
    width: 24,
    height: 22,
    position: "absolute",
  },
  finalItem: {
    top: 137,
    left: 110,
    width: 156,
    height: 156,
    position: "absolute",
  },
  wohooPagamentoFeito: {
    left: 39,
    fontSize: 24,
    color: "#000",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    textAlign: "center",
    top: 0,
  },
  obrigadaPorEscolher: {
    top: 119,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.64)",
    left: 0,
    textAlign: "center",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    position: "absolute",
  },
  wohooPagamentoFeitoComSParent: {
    top: 321,
    left: 45,
    width: 287,
    height: 143,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: "#fff",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    position: "absolute",
    height: 163,
    width: 326,
    left: 0,
    top: 0,
  },
  worldGymLigar: {
    top: 26,
    left: 6,
    width: 309,
  },
  rectangleParent: {
    top: 489,
    left: 27,
    position: "absolute",
  },
  bg1: {
    borderRadius: 4,
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  startTraining: {
    top: 16,
    left: 86,
    fontSize: 20,
    lineHeight: 19,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#fff",
  },
  button: {
    top: 728,
    left: 17,
    width: 345,
    height: 53,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    position: "absolute",
  },
  vectorIcon: {
    height: "30.56%",
    width: "6.57%",
    top: "8.33%",
    right: "93.9%",
    bottom: "61.11%",
    left: "-0.47%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  customerCare: {
    left: 18,
    top: 0,
    fontSize: 12,
  },
  vectorParent: {
    height: "4.43%",
    width: "56.8%",
    top: "82.76%",
    right: "34.4%",
    bottom: "12.81%",
    left: "8.8%",
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -367,
    marginLeft: -76.5,
    top: "50%",
    left: "50%",
    width: 153,
    height: 31,
    position: "absolute",
  },
  final: {
    borderRadius: 23,
    backgroundColor: "#e7e7e7",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Final;
