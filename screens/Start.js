import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Start = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    'Poppins_semibold': require('../assets/fonts/Poppins_semibold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/sign-in.jpg")}
      />
      <View style={styles.contentContainer}>
        <View style={styles.overlay}>
          <Image
            style={styles.logoImage}
            resizeMode="contain"
            source={require("../assets/academia-world-gym-1-1.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>COMEÇAR</Text>
          <Image
            style={styles.buttonIcon}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 450,
    height: 450,
    alignSelf: "center",
    marginTop: 180,
  },
  buttonContainer: {
    marginTop: 680,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 283,
    height: 66,
    borderRadius: 11,
    backgroundColor: "#c41230",
  },
  buttonIcon: {
    marginLeft: 30,
    marginRight: -30,
    width: 22,
    height: 22,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#fff",
  },
});

export default Start;