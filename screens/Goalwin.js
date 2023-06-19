import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Goalwin = () => {
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
    <View style={styles.goalwin}>
      <Image
        style={styles.goalwinChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={[styles.blackWgLogo2Icon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <Pressable style={[styles.goalwinInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </Pressable>
      <Text style={[styles.home, styles.homePosition]}>Home</Text>
      <Image
        style={[styles.goalwinItem, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/group-255.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 47,
    width: 332,
    position: "absolute",
  },
  goalwinChild: {
    top: 30,
    left: 19,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -414,
    marginLeft: -76.5,
    width: 153,
    height: 31,
    top: "50%",
    left: "50%",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#c41230",
  },
  goalwinInner: {
    top: 731,
    left: 41,
  },
  home: {
    marginTop: 288,
    marginLeft: -23.5,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Roboto_bold",
    color: "#fff",
    textAlign: "center",
    top: "50%",
    left: "50%",
  },
  goalwinItem: {
    marginLeft: -198.5,
    top: 92,
    width: 409,
    height: 563,
  },
  goalwin: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    flex: 1,
    width: "100%",
    height: 910,
    overflow: "hidden",
  },
});

export default Goalwin;
