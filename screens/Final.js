import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Final = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
  });
  return (
    <View style={styles.final}>
      <View style={styles.bg} />
      <TouchableOpacity onPress={() => navigation.navigate("Cardpayment")}>
        <Image
          style={styles.finalChild}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
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
      <Text
        style={[styles.customerCare, styles.customerCareTypo, styles.customerCareFlexBox]}
      >{`Customer care : 1500 7373 4666 
(8.00AM-10.00PM)`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.bg1ShadowBox]} />
        <Text
          style={[styles.worldGymLigar, styles.customerCareTypo]}
        >{`World Gym ligará para você sobre sua data e hórario de início

Para qualquer dúvida, sinta-se à vontade para entrar em contato com nosso atendimento ao cliente 
`}</Text>
      </View>
      <View style={[styles.button, styles.bg1ShadowBox]}>
        <TouchableOpacity style={styles.bg1Position} onPress={() => navigation.navigate("Gender")} >
          <View style={[styles.bg1, styles.bg1Position]} />
          <Text style={[styles.startTraining, styles.startTrainingFlexBox]}>
            Vamos Começar
          </Text>
        </TouchableOpacity>
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
    left: "50%",
    marginLeft: -163,
  },
  bg1ShadowBox: {
    shadowColor: "#000",
    shadowRadius: 6,
    elevation: 9.62,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  customerCareFlexBox: {
    top: 670,
    left: "50%",
    marginLeft: -157,
  },
  customerCareTypo: {
    textAlign: "left",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.64)",
    fontFamily: "Poppins_medium",
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
    left: "50%",
    marginLeft: -78,
    width: 156,
    height: 156,
    position: "absolute",
  },
  wohooPagamentoFeito: {
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
    marginLeft: -41,
    textAlign: "center",
    fontFamily: "Poppins_medium",
    position: "absolute",
  },
  wohooPagamentoFeitoComSParent: {
    top: 321,
    left: "50%",
    marginLeft: -102,
    width: 287,
    height: 143,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowRadius: 9.62,
    elevation: 9.62,
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
    left: "50%",
    marginLeft: -163,
    position: "absolute",
  },
  bg1: {
    borderRadius: 4,
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowRadius: 9.62,
    elevation: 9.62,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  startTraining: {
    top: 16,
    left: "50%",
    marginLeft: -87,
    fontSize: 20,
    lineHeight: 19,
    fontFamily: "Poppins_semibold",
    color: "#fff",
  },
  button: {
    top: 728,
    left: "50%",
    marginLeft: -173,
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
    top: 30,
    left: 19,
    width: 24,
    height: 22,
    position: "absolute",
  },
  customerCare: {
    left: 18,
    top: 0,
    fontSize: 12,
  },
  vectorParent: {
    top: 28,
    left: 22,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    width: 153,
    height: 31,
    left: "50%",
    marginLeft: -76.5,
    top: 30,
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
