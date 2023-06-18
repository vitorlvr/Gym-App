import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import Checkbox from "./components/checkbox";

const SignUp = () => {
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
    <View style={styles.container}>
      <View style={styles.signUp}>
        <View style={styles.singInWith}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.signInWith, styles.signInWithLayout]}>
            Sign in with
          </Text>
        </View>
        <Checkbox style={styles.checkbox} />
        <View style={styles.inputParent}>
          <TextInput
            style={[styles.input1, styles.inputTypo]}
            placeholder="Nome Completo"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={[styles.input2, styles.inputTypo]}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={[styles.input3, styles.inputTypo]}
            placeholder="Número"
            keyboardType="numeric"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={[styles.input4, styles.inputTypo]}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#404b52"
          />
        </View>
        <Image
          style={[styles.blackWgLogo1Icon, styles.signInWithLayout]}
          contentFit="cover"
          source={require("../assets/black-wg-logo-2.png")}
        />
        <Text style={[styles.singUp, styles.singUpFlexBox]}>Cadastro</Text>
        <Image
          style={[styles.signUpChild, styles.singUpPosition]}
          contentFit="cover"
          source={require("../assets/group-224.png")}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { }}>
        <View style={styles.bg} />
        <Text style={styles.startTraining}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e2e2",
  },
  signUp: {
    borderRadius: 23,
    backgroundColor: "#e2e2e2",
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  signInWithLayout: {
    height: 31,
    position: "absolute",
  },
  inputTypo: {
    fontSize: 16,
    height: 50,
    fontFamily: "Poppins_regular",
    width: "80%",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  inputParent: {
    marginTop: Dimensions.get('window').height * 0.27,
    marginBottom: 200,
    alignItems: "center",
  },
  singUpFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    textAlign: "center",
    width: 344,
  },
  singUpPosition: {
    left: 15,
    position: "absolute",
  },
  groupIcon: {
    height: "16.33%",
    width: "38.55%",
    top: "32.65%",
    right: "30.73%",
    bottom: "51.02%",
    left: "30.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signInWith: {
    fontSize: 19,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: "Poppins_medium",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    textAlign: "center",
    width: 344,
    left: 0,
    top: 0,
    height: 31,
  },
  singInWith: {
    top: 593,
    height: 189,
    width: 344,
    left: 15,
    position: "absolute",
  },
  bg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
    position: "absolute",
    width: "100%",
  },
  startTraining: {
    top: 16,
    left: 147,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  button: {
    height: "6.52%",
    width: "92.12%",
    top: "62.19%",
    right: "4.03%",
    bottom: "31.29%",
    left: "3.85%",
    position: "absolute",
  },
  byContinuingYou: {
    left: 27,
    fontSize: 12,
    lineHeight: 17,
    color: "#9299a3",
    textAlign: "left",
    width: 295,
    fontFamily: "Open Sans_regular",
    height: 23,
    alignItems: "center",
    display: "flex",
    top: 0,
    position: "absolute",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Dimensions.get('window').height * 0.45, // Ajuste a posição vertical conforme necessário
    left: Dimensions.get('window').width * 0.35, // Ajuste a posição horizontal conforme necessário
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 12,
    lineHeight: 17,
    color: "#9299a3",
    fontFamily: "Open Sans_regular",
  },
  checkboxIcon: {
    top: 2,
    width: 19,
    height: 19,
    left: 0,
    position: "absolute",
  },
  byContinuingYouAcParent: {
    top: 462,
    left: 24,
    width: 322,
    height: 23,
    position: "absolute",
  },
  input4: {
    top: 400,
  },
  input3: {
    top: 332,
  },
  input2: {
    top: 263,
  },
  input1: {
    top: 195,
  },
  blackWgLogo1Icon: {
    marginLeft: -76.5,
    top: 37,
    left: "50%",
    width: 153,
  },
  singUp: {
    top: 133,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    height: 38,
    left: 15,
    position: "absolute",
  },
  signUpChild: {
    top: 29,
    width: 23,
    height: 15,
  },
  signUp: {
    borderRadius: 23,
    backgroundColor: "#e2e2e2",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
