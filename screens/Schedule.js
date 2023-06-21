import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Schedule = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
  });

  return (
    <View style={styles.schedule}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ChooseTrain")}>
        <Text style={styles.startTraining}>Começar treino</Text>
      </TouchableOpacity>
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
        <Text style={[styles.center, styles.textFlexBox, styles.text]}>78%</Text>
        <Text style={[styles.central]}>Seu treino:</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Gender")}>
        <Image
          style={styles.scheduleChild}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
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
  central: {
    marginTop: -380,
    marginLeft: 48,
    fontSize: 26,
    fontFamily: "Poppins_semibold",
    width: 287,
    color: "#0a0615",
  },
  grahLayout: {
    height: 254,
    top: 52,
    left: 95,
    position: "absolute",
    borderRadius: 23,
  },
  textFlexBox: {
    color: "#0a0615",
    textAlign: "center",
    marginRight: 100,
    position: "absolute",
    left: 120,
  },
  blackIconPosition: {
    left: "50%",
    position: "absolute",
  },
  startTraining: {
    top: 10,
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
    left: 62,
    fontSize: 16,
    fontFamily: "Poppins_regular",
    color: "#0b0616",
    width: 262,
    textAlign: "center",
    position: "absolute",
  },
  grahChild: {
    width: 227,
    marginLeft: -92,
  },
  grahItem: {
    width: 217,
    marginLeft: -55,
  },
  text: {
    top: 64,
    left: 144,
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
