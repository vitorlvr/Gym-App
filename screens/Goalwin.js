import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Goalwin = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
  });
  return (
    <View style={styles.goalwin}>
      <TouchableOpacity onPress={() => navigation.navigate("Goals")}>
        <Image
          style={styles.goalwinChild}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.blackWgLogo2Icon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <TouchableOpacity style={[styles.goalwinInner, styles.groupChildLayout]} onPress={() => navigation.navigate("Train")}>
        <Text style={[styles.home]}>Home</Text>
      </TouchableOpacity>
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
    marginTop: -422,
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
  goalwinInner: {
    top: 731,
    left: "50%",
    marginLeft: -166,
    height: 47,
    borderRadius: 12,
    backgroundColor: "#c41230",
  },
  home: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Poppins_semibold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -23.5 }, { translateY: -12 }],
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
    justifyContent: "center",
  },
});

export default Goalwin;