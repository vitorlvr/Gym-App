import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

import Checkbox from "./components/checkbox";

const SignUp = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.signUp}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.signUpChild}
            resizeMode="contain"
            source={require("../assets/group-224.png")}
          />
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/black-wg-logo-2.png")}
          />
        </View>
        <Text style={styles.signUpText}>Cadastro</Text>
        <View style={styles.inputParent}>
          <TextInput
            style={styles.input1}
            placeholder="Nome Completo"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={styles.input2}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={styles.input3}
            placeholder="Número"
            keyboardType="numeric"
            placeholderTextColor="#404b52"
          />
          <TextInput
            style={styles.input4}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#404b52"
          />
          <Checkbox style={styles.checkbox} />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Plan")}>
            <View style={styles.bg} />
            <Text style={styles.startTraining}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.signInWith}>
            <Text style={styles.signInWithText}>
              Sign in with
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="contain"
              source={require("../assets/group1.png")}
            />
          </View>
        </View>
      </View>
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
    backgroundColor: "#e2e2e2",
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 153,
    height: 31,
    top: 30,
    position: "absolute",
    marginLeft: -77,
    left: "50%",
  },
  inputParent: {
    alignItems: "center",
    top: 180,
  },
  input1: {
    width: "80%",
    height: 50,
    fontSize: 16,
    fontFamily: "Poppins_regular",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input2: {
    width: "80%",
    height: 50,
    fontSize: 16,
    fontFamily: "Poppins_regular",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input3: {
    width: "80%",
    height: 50,
    fontSize: 16,
    fontFamily: "Poppins_regular",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input4: {
    width: "80%",
    height: 50,
    fontSize: 16,
    fontFamily: "Poppins_regular",
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signInWith: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 350,
    marginBottom: 20,
    width: 200,
  },
  groupIcon: {
    width: 100,
    height: 40,
  },
  signInWithText: {
    fontSize: 19,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: "Poppins_medium",
    color: "#0a0615",
  },
  signUpText: {
    fontSize: 26,
    lineHeight: 31,
    fontFamily: "Poppins_semibold",
    color: "#0a0615",
    textAlign: "center",
    marginBottom: -20,
    marginTop: 20,
    top: 120,
  },
  signUpChild: {
    top: 40,
    left: 35,
    width: 23,
    height: 15,
    position: "absolute",
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    height: 50,
    top: 300,
    backgroundColor: "#c41230",
    borderRadius: 4,
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
  },
  bg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: "#c41230",
  },
  startTraining: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#fff",
  },
  bottomContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SignUp;