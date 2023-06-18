import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start}>
      <Image
        style={styles.signInIcon}
        contentFit="cover"
        source={require("../assets/sign-in.png")}
      />
      <Image
        style={[styles.academiaWorldGym11, styles.comearPosition]}
        contentFit="cover"
        source={require("../assets/academia-world-gym-1-1.png")}
      />
      <TouchableOpacity
        style={styles.vectorParent}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/arrow-2.png")}
        />
        <Text style={[styles.comear, styles.comearPosition]}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  comearPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signInIcon: {
    top: 0,
    left: 0,
    borderRadius: 31,
    width: 375,
    position: "absolute",
    height: 812,
  },
  academiaWorldGym11: {
    marginTop: -189,
    marginLeft: -188.5,
    width: 378,
    height: 378,
  },
  frameChild: {
    top: 22,
    left: 236,
    width: 22,
    height: 22,
    position: "absolute",
  },
  comear: {
    marginTop: -21,
    marginLeft: -76.5,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#fff",
    textAlign: "center",
  },
  vectorParent: {
    top: 714,
    left: 46,
    borderRadius: 11,
    backgroundColor: "#c41230",
    width: 283,
    height: 66,
    position: "absolute",
  },
  start: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Start;
