import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.singInWith}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={[styles.signInWith, styles.signInWithLayout]}>
          Sign in with
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Gender")}
      >
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={styles.startTraining}>Entrar</Text>
      </Pressable>
      <View style={styles.byContinuingYouAcParent}>
        <Text style={[styles.byContinuingYou, styles.phoneEmailFlexBox]}>
          By continuing you accept our Privacy Policy
        </Text>
        <Image
          style={styles.checkboxIcon}
          contentFit="cover"
          source={require("../assets/checkbox.png")}
        />
      </View>
      <View style={[styles.input4, styles.inputLayout]}>
        <View style={[styles.input, styles.bgPosition]} />
        <Text style={[styles.phoneEmail, styles.phoneEmailFlexBox]}>Senha</Text>
      </View>
      <View style={[styles.input3, styles.inputLayout]}>
        <View style={[styles.input, styles.bgPosition]} />
        <Text style={[styles.phoneEmail, styles.phoneEmailFlexBox]}>
          Número
        </Text>
      </View>
      <View style={[styles.input2, styles.inputLayout]}>
        <View style={[styles.input, styles.bgPosition]} />
        <Text style={[styles.phoneEmail, styles.phoneEmailFlexBox]}>Email</Text>
      </View>
      <View style={[styles.input11, styles.inputLayout]}>
        <View style={[styles.input, styles.bgPosition]} />
        <Text style={[styles.phoneEmail, styles.phoneEmailFlexBox]}>
          Nome Completo
        </Text>
      </View>
      <Image
        style={[styles.blackWgLogo1Icon, styles.signInWithLayout]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-1.png")}
      />
      <Text style={[styles.singUp, styles.singUpFlexBox]}>Cadastro</Text>
      <Image
        style={[styles.signUpChild, styles.singUpPosition]}
        contentFit="cover"
        source={require("../assets/group-224.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInWithLayout: {
    height: 31,
    position: "absolute",
  },
  bgPosition: {
    borderRadius: 4,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  phoneEmailFlexBox: {
    textAlign: "left",
    fontFamily: "Open Sans_regular",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  inputLayout: {
    height: 53,
    width: 344,
    left: 15,
    position: "absolute",
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
    fontWeight: "500",
    fontFamily: "Poppins_medium",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    textAlign: "center",
    width: 344,
    lineHeight: 23,
    height: 31,
    left: 0,
    top: 0,
  },
  singInWith: {
    top: 593,
    height: 189,
    width: 344,
    left: 15,
    position: "absolute",
  },
  bg: {
    right: "0%",
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
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
    width: 295,
    height: 23,
    fontFamily: "Open Sans_regular",
    top: 0,
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
  input: {
    width: "100.28%",
    right: "-0.28%",
    backgroundColor: "#f8fafc",
  },
  phoneEmail: {
    width: "32.68%",
    left: "6.7%",
    fontSize: 13,
    color: "#404b52",
    top: "0%",
    height: "100%",
    fontFamily: "Open Sans_regular",
    lineHeight: 23,
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
  input11: {
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
