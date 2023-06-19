import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Schedule = () => {
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
    <View style={styles.schedule}>
      <View style={styles.bg} />
      <Pressable style={styles.button} onPress={() => {}}>
        <Pressable style={styles.bg1Position}>
          <View style={[styles.bg1, styles.bg1Position]} />
          <Text style={styles.startTraining}>Começar treino</Text>
        </Pressable>
      </Pressable>
      <Text style={styles.weCreateA}>
        Ao completar a quantidade de treinos, procure algum de nossos
        professores!
      </Text>
      <View style={styles.grah}>
        <Image
          style={[styles.grahChild, styles.grahLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.grahItem, styles.grahLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>78%</Text>
      </View>
      <Text style={[styles.weCreateYour, styles.textFlexBox]}>Seu treino:</Text>
      <Image
        style={styles.scheduleChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={[styles.blackWgLogo1Icon, styles.blackIconPosition]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <Image
        style={[styles.blackWgLogo2Icon, styles.blackIconPosition]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  grahLayout: {
    height: 254,
    top: 52,
    position: "absolute",
    borderRadius: 23,
  },
  textFlexBox: {
    color: "#0a0615",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  blackIconPosition: {
    height: 31,
    width: 153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  bg: {
    top: -26,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 375,
    height: 838,
    position: "absolute",
  },
  bg1: {
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
  },
  startTraining: {
    top: 16,
    left: 76,
    fontSize: 20,
    lineHeight: 19,
    color: "#fff",
    width: 179,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    position: "absolute",
  },
  button: {
    top: 726,
    left: 15,
    width: 345,
    height: 53,
    position: "absolute",
  },
  weCreateA: {
    top: 516,
    left: 57,
    fontSize: 15,
    lineHeight: 21,
    fontFamily: "Open Sans_regular",
    color: "#0b0616",
    width: 262,
    textAlign: "center",
    position: "absolute",
  },
  grahChild: {
    left: 52,
    width: 227,
  },
  grahItem: {
    left: 89,
    width: 217,
  },
  text: {
    top: 64,
    left: 64,
    fontSize: 50,
    lineHeight: 44,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    width: 231,
    height: 231,
  },
  grah: {
    top: 167,
    left: 8,
    width: 359,
    height: 359,
    position: "absolute",
  },
  weCreateYour: {
    top: 131,
    left: 44,
    fontSize: 26,
    lineHeight: 31,
    width: 287,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    color: "#0a0615",
  },
  scheduleChild: {
    top: 28,
    left: 22,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo1Icon: {
    marginTop: -406,
    marginLeft: -85.5,
  },
  blackWgLogo2Icon: {
    marginTop: -367,
    marginLeft: -76.5,
  },
  schedule: {
    backgroundColor: "#e7e7e7",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    borderRadius: 23,
  },
});

export default Schedule;
