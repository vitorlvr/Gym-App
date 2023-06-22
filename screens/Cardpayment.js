import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Cardpayment = () => {
  const navigation = useNavigation();
  const [texto, setTexto] = useState('');
  const enviarNotificacao = () => {
    Alert.alert('World Gym', 'Pagamento realizado com sucesso!');
  };
  const limparInputEEnviarNotificacao = () => {
    setTexto('');
    enviarNotificacao();
  };
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
  });

  return (
    <View style={[styles.cardpayment, styles.cardpaymentShadowBox]}>
      <View style={styles.cartao}>
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
        <Text style={[styles.text2, styles.textTypo]}>1234 **** **** ****</Text>
      </View>
      <TouchableOpacity style={[styles.groupChild, styles.groupLayout, styles.rectangleParent]} onPress={() => navigation.navigate("Final")}>
        <Text style={[styles.request, styles.requestTypo]}>Request</Text>
      </TouchableOpacity>
      <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
        <TouchableOpacity style={[styles.groupItem, styles.groupLayout]}>
          <Image
            style={styles.telegram1Icon}
            contentFit="cover"
            source={require("../assets/telegram-1.png")}
          />
          <Text style={[styles.transfer, styles.requestTypo]} onPress={limparInputEEnviarNotificacao}>Transfer</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.cardpaymentItem, styles.rectangleGroupPosition]}
      />
      <Text style={[styles.digiteOCdigo, styles.digiteOCdigoTypo]}>
        Digite o código PIN enviado ao seu telefone para confirmar o pagamento
      </Text>
      <TouchableOpacity style={styles.adicionarCartoParent}>
        <Text style={[styles.adicionarCarto, styles.digiteOCdigoTypo]}>
          Adicionar cartão
        </Text>
        <Image
          style={styles.plus2Icon}
          contentFit="cover"
          source={require("../assets/plus-2.png")}
        />
      </TouchableOpacity>
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
        value={texto} 
        onChangeText={setTexto}
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
  cartao: {
    left: "50%",
    marginLeft: -189,
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
    fontFamily: "Poppins_regular",
    position: "absolute",
  },
  rectangleGroupPosition: {
    left: "50%",
    marginLeft: -150,
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
    fontFamily: "Poppins_regular",
    fontSize: 12,
    top: 391,
    position: "absolute",
  },
  debitCard: {
    color: "#d6d6d6",
    left: 75,
    textAlign: "left",
    fontFamily: "Poppins_regular",
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
    top: 23,
    left: "50%",
    marginLeft: -34,
  },
  rectangleParent: {
    top: 688,
    left: "50%",
    marginLeft: 18,
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
    width: 23,
    height: 25,
    top: 25,
    marginLeft: 8,
    position: "absolute",
  },
  transfer: {
    top: 23,
    left: "50%",
    marginLeft: -28,
  },
  rectangleGroup: {
    top: 687,
    width: 130,
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
    left: "50%",
    marginLeft: -100,
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
    left: "50%",
    marginLeft: -108,
    width: 210,
    height: 30,
    position: "absolute",
  },
  cardpaymentInner: {
    top: 30,
    left: 19,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    width: 153,
    height: 31,
    top: 30,
    position: "absolute",
    marginLeft: -77,
    left: "50%",
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
    backgroundColor: "#e7e7e7",
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
