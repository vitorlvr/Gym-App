import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <View style={[styles.signInChild, styles.signInChildPosition]} />
      <View style={[styles.signInInner, styles.signInInnerLayout]}>
        <View style={[styles.groupParent, styles.signInInnerLayout]}>
          <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
          </View>
          <Text style={styles.worldGym}>WORLD GYM</Text>
        </View>
      </View>
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
      </Pressable>
      <Text
        style={[styles.dontHaveAn, styles.dontHaveAnClr]}
      >{`Don't have an account? `}</Text>
      <Text style={[styles.signInWith, styles.singInFlexBox]}>
        Sign in with
      </Text>
      <Text style={[styles.forgotPassword, styles.dontHaveAnClr]}>
        Esqueceu sua senha?
      </Text>
      <Pressable
        style={styles.bg}
        onPress={() => navigation.navigate("Gender")}
      />
      <Text style={styles.startTraining}>ENTRAR</Text>
      <View style={[styles.input, styles.inputPosition]} />
      <Text style={[styles.phoneEmail, styles.phoneTypo]}>Senha</Text>
      <View style={[styles.input1, styles.input1Position]} />
      <Text style={[styles.phoneEmail1, styles.input1Position]}>
        Número/ Email
      </Text>
      <Text style={[styles.singIn, styles.singInFlexBox]}>Entrar</Text>
      <View style={styles.input2} />
      <Image
        style={styles.signInItem}
        contentFit="cover"
        source={require("../assets/group-225.png")}
      />
      <Image
        style={styles.wgc2023PrimaryGlobeRed2}
        contentFit="cover"
        source={require("../assets/wgc-2023-primary-globe-red-2.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInChildPosition: {
    top: 0,
    left: 0,
  },
  signInInnerLayout: {
    height: 133,
    width: 195,
    position: "absolute",
  },
  groupChildLayout: {
    height: 87,
    width: 86,
    top: 0,
    position: "absolute",
  },
  signUp1Typo: {
    fontFamily: "Poppins_medium",
    fontWeight: "500",
  },
  dontHaveAnClr: {
    color: "#404b52",
    lineHeight: 23,
    textAlign: "center",
    position: "absolute",
  },
  singInFlexBox: {
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    textAlign: "center",
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: "#f8fafc",
    left: "10.4%",
    right: "10.4%",
    borderRadius: 4,
    width: "79.2%",
  },
  phoneTypo: {
    left: "15.73%",
    width: "25.87%",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: "#404b52",
    fontFamily: "Open Sans_regular",
    lineHeight: 23,
    fontSize: 13,
  },
  input1Position: {
    top: "35.59%",
    height: "5.67%",
    position: "absolute",
  },
  signInChild: {
    borderRadius: 31,
    backgroundColor: "#e2e2e2",
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: "#fdfdfd",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    left: 0,
  },
  rectangleWrapper: {
    left: 55,
  },
  worldGym: {
    top: 87,
    fontSize: 32,
    fontFamily: "Jost_medium",
    color: "#040404",
    textAlign: "center",
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  signInInner: {
    top: 67,
    left: 85,
  },
  signUp1: {
    textDecoration: "underline",
    color: "#000",
    lineHeight: 19,
    fontSize: 13,
    fontFamily: "Poppins_medium",
    textAlign: "center",
  },
  signUp: {
    left: "60%",
    top: "88.92%",
    position: "absolute",
  },
  dontHaveAn: {
    top: "88.67%",
    left: "19.2%",
    fontFamily: "Open Sans_regular",
    color: "#404b52",
    fontSize: 13,
  },
  signInWith: {
    top: 579,
    left: 38,
    fontSize: 19,
    width: 296,
    lineHeight: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
  },
  forgotPassword: {
    top: 488,
    left: 125,
    fontSize: 12,
    fontFamily: "Poppins_medium",
    fontWeight: "500",
  },
  bg: {
    height: "5.54%",
    top: "52.59%",
    right: "10.67%",
    bottom: "41.87%",
    left: "10.13%",
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
    borderRadius: 4,
    width: "79.2%",
    position: "absolute",
  },
  startTraining: {
    top: 439,
    left: 151,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#fff",
    textAlign: "left",
    lineHeight: 19,
    position: "absolute",
  },
  input: {
    top: "43.47%",
    bottom: "50.86%",
    height: "5.67%",
    position: "absolute",
  },
  phoneEmail: {
    top: "43.23%",
    height: "5.67%",
    position: "absolute",
  },
  input1: {
    bottom: "58.74%",
    backgroundColor: "#f8fafc",
    left: "10.4%",
    right: "10.4%",
    borderRadius: 4,
    width: "79.2%",
  },
  phoneEmail1: {
    left: "15.73%",
    width: "25.87%",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: "#404b52",
    fontFamily: "Open Sans_regular",
    lineHeight: 23,
    fontSize: 13,
  },
  singIn: {
    top: 255,
    left: 50,
    fontSize: 20,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    width: 274,
  },
  input2: {
    top: 382,
    left: 33,
    width: 344,
    height: 53,
    position: "absolute",
  },
  signInItem: {
    top: 29,
    left: 30,
    width: 23,
    height: 15,
    position: "absolute",
  },
  wgc2023PrimaryGlobeRed2: {
    top: 62,
    left: 143,
    width: 83,
    height: 96,
    position: "absolute",
  },
  groupIcon: {
    height: "3.79%",
    width: "35.41%",
    top: "76.6%",
    right: "32.85%",
    bottom: "19.61%",
    left: "31.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  signIn: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default SignIn;
