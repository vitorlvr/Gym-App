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
      <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.startTraining}>Começar treino</Text>
      </Pressable>
      <Text style={[styles.weCreateA, styles.center]}>
        Ao completar a quantidade de treinos, procure algum de nossos
        professores!
      </Text>
      <View style={[styles.grah, styles.center]}>
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
        <Text style={[styles.text, styles.textFlexBox, styles.center]}>78%</Text>
      </View>
      <Text style={[styles.weCreateYour, styles.textFlexBox, styles.center]}>Seu treino:</Text>
      <Image
        style={styles.scheduleChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
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
  center: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    left: "50%",
    marginLeft: -130,
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
    left: "50%",
  },
  blackIconPosition: {
    left: "50%",
    position: "absolute",
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
    fontWeight: "600",
    position: "absolute",
  },
  button: {
    height: 47,
    width: 332,
    position: "absolute",
    top: 731,
    left: "50%",
    marginLeft: -166,
    height: 47,
    borderRadius: 12,
    backgroundColor: "#c41230",
  },
  weCreateA: {
    top: 516,
    left: 57,
    fontSize: 15,
    lineHeight: 21,
    color: "#0b0616",
    width: 262,
    textAlign: "center",
    position: "absolute",
  },
  grahChild: {
    width: 227,
    marginLeft: -55,
  },
  grahItem: {
    left: 79,
    width: 217,
    marginLeft: -55,
  },
  text: {
    top: 64,
    left: 57,
    fontSize: 50,
    lineHeight: 44,
    fontWeight: "700",
    width: 231,
    height: 231,
  },
  grah: {
    top: 167,
    width: 359,
    height: 359,
    marginLeft: -55,
    position: "absolute",
  },
  weCreateYour: {
    top: 131,
    left: 44,
    fontSize: 26,
    lineHeight: 31,
    width: 287,
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
  blackWgLogo2Icon: {
    width: 153,
    height: 31,
    left: -19,
    top: 30,
    position: "absolute",
    marginLeft: -77,
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
