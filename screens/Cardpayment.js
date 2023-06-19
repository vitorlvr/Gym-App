import * as React from "react";
import { StyleSheet, Text, Pressable, View, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Cardpayment = () => {
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
    <View style={[styles.cardpayment, styles.cardpaymentShadowBox]}>
      <Image
        style={styles.cardpaymentChild}
        contentFit="cover"
        source={require("../assets/creditcard.png")}
      />
      <Text style={styles.text}>02/24</Text>
      <Text style={styles.debitCard}>Debit Card</Text>
      <Text style={[styles.text1, styles.textTypo]}>$1,200</Text>
      <Image
        style={styles.visa12Icon}
        contentFit="cover"
        source={require("../assets/visa1-2.png")}
      />
      <Pressable style={styles.rectangleParent}>
        <Pressable style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.request, styles.requestTypo]}>Request</Text>
      </Pressable>
      <Text style={[styles.text2, styles.textTypo]}>1234 **** **** ****</Text>
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <Pressable style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={styles.telegram1Icon}
          contentFit="cover"
          source={require("../assets/telegram-1.png")}
        />
        <Text style={[styles.transfer, styles.requestTypo]}>Transfer</Text>
      </View>
      <Pressable
        style={[styles.cardpaymentItem, styles.rectangleGroupPosition]}
      />
      <Text style={[styles.digiteOCdigo, styles.digiteOCdigoTypo]}>
        Digite o código PIN enviado ao seu telefone para confirmar o pagamento
      </Text>
      <View style={styles.adicionarCartoParent}>
        <Text style={[styles.adicionarCarto, styles.digiteOCdigoTypo]}>
          Adicionar cartão
        </Text>
        <Image
          style={styles.plus2Icon}
          contentFit="cover"
          source={require("../assets/plus-2.png")}
        />
      </View>
      <Image
        style={styles.cardpaymentInner}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <TextInput
        style={[styles.frameTextinput, styles.cardpaymentShadowBox]}
        placeholder="Digite seu PIN"
        keyboardType="number-pad"
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardpaymentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  textTypo: {
    fontSize: 24,
    left: 75,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Rambla_regular",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: 20,
    left: 0,
    top: 0,
    height: 75,
    width: 130,
    position: "absolute",
  },
  requestTypo: {
    color: "#000",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Rambla_regular",
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: 38,
    height: 75,
    position: "absolute",
  },
  digiteOCdigoTypo: {
    fontFamily: "Poppins_regular",
    color: "#000",
    position: "absolute",
  },
  cardpaymentChild: {
    top: 219,
    left: 28,
    width: 320,
    height: 220,
    position: "absolute",
    borderRadius: 30,
  },
  text: {
    left: 243,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Rambla_regular",
    fontSize: 12,
    top: 391,
    position: "absolute",
  },
  debitCard: {
    color: "#d6d6d6",
    left: 75,
    textAlign: "left",
    fontFamily: "Rambla_regular",
    fontSize: 12,
    top: 391,
    position: "absolute",
  },
  text1: {
    top: 257,
    width: 75,
  },
  visa12Icon: {
    top: 250,
    left: 240,
    width: 64,
    height: 43,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#38f555",
  },
  request: {
    left: 35,
    top: 26,
  },
  rectangleParent: {
    top: 688,
    left: 208,
    height: 75,
    width: 130,
    position: "absolute",
  },
  text2: {
    top: 325,
  },
  groupItem: {
    backgroundColor: "#fef744",
  },
  telegram1Icon: {
    left: 14,
    width: 23,
    height: 25,
    top: 26,
    position: "absolute",
  },
  transfer: {
    top: 27,
    left: 43,
  },
  rectangleGroup: {
    top: 687,
    width: 130,
    left: 38,
  },
  cardpaymentItem: {
    top: 115,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    shadowRadius: 10,
    elevation: 10,
    width: 300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  digiteOCdigo: {
    marginLeft: -158.5,
    top: 594,
    fontSize: 15,
    textAlign: "center",
    width: 317,
    left: "50%",
  },
  adicionarCarto: {
    fontSize: 20,
    left: 0,
    top: 0,
    fontFamily: "Poppins_regular",
    textAlign: "left",
  },
  plus2Icon: {
    top: 2,
    left: 189,
    width: 21,
    height: 26,
    position: "absolute",
  },
  adicionarCartoParent: {
    top: 137,
    left: 104,
    width: 210,
    height: 30,
    position: "absolute",
  },
  cardpaymentInner: {
    top: 28,
    left: 22,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -367,
    marginLeft: -76.5,
    top: "50%",
    width: 153,
    height: 31,
    left: "50%",
    position: "absolute",
  },
  frameTextinput: {
    marginLeft: -161.5,
    top: 485,
    borderRadius: 15,
    backgroundColor: "#f9f9f9",
    shadowRadius: 4,
    elevation: 4,
    width: 324,
    height: 77,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
  },
  cardpayment: {
    backgroundColor: "#fff",
    shadowRadius: 40,
    elevation: 40,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    borderRadius: 30,
  },
});

export default Cardpayment;
