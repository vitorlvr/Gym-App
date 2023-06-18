import * as React from "react";
import { StyleSheet, View, Text, Image} from "react-native";

const Final = () => {
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
      <Text
        style={[styles.wohooPagamentoFeito, styles.startTrainingFlexBox]}
      >{`Wohoo!!!
Pagamento feito 
com sucesso.`}</Text>
      <Text style={styles.obrigadaPorEscolher}>
        Obrigada por escolher a world gym
      </Text>
      <View style={[styles.finalInner, styles.bg1ShadowBox]} />
      <Text
        style={[styles.worldGymLigar, styles.customerCareTypo]}
      >{`World Gym ligará para você sobre sua data e hórario de início

Para qualquer dúvida, sinta-se à vontade para entrar em contato com nosso atendimento ao cliente 
`}</Text>
      <View style={[styles.button, styles.bg1ShadowBox]}>
        <View style={[styles.bg1, styles.bg1ShadowBox]} />
        <Text style={[styles.startTraining, styles.startTrainingFlexBox]}>
          Vamos Começar
        </Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text
          style={[styles.customerCare, styles.customerCareTypo]}
        >{`Customer care : 1500 7373 4666 
(8.00AM-10.00PM)`}</Text>
      </View>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  startTrainingFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  bg1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    position: "absolute",
  },
  customerCareTypo: {
    textAlign: "left",
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.64)",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    position: "absolute",
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
    top: 321,
    left: 84,
    fontSize: 24,
    color: "#000",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    textAlign: "center",
  },
  obrigadaPorEscolher: {
    top: 440,
    left: 45,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.64)",
    textAlign: "center",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    position: "absolute",
  },
  finalInner: {
    top: 489,
    left: 27,
    borderRadius: 16,
    backgroundColor: "#fff",
    width: 326,
    height: 163,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  worldGymLigar: {
    top: 515,
    left: 33,
    width: 309,
  },
  bg1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
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
    width: "100%",
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
    top: 0,
    left: 18,
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
