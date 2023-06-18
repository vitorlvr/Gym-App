import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Slider as RNESlider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const Gender = () => {
  const [groupSliderValue, setGroupSliderValue] = useState(2);
  const navigation = useNavigation();

  return (
    <View style={styles.gender}>
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("Schedule")}
      >
        <View style={[styles.bg, styles.bgShadowBox]} />
        <Text style={styles.startTraining}>Continue</Text>
      </Pressable>
      <Pressable style={[styles.gender1, styles.genderPosition1]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={[styles.title, styles.titleTypo]}>Feminino</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={[styles.groupItem, styles.buttonPosition]}
            contentFit="cover"
            source={require("../assets/group-220.png")}
          />
        </View>
        <Image
          style={styles.genderChild}
          contentFit="cover"
          source={require("../assets/group-223.png")}
        />
      </Pressable>
      <View style={[styles.gender2, styles.genderPosition]}>
        <View style={styles.bgPosition}>
          <View style={[styles.bg1, styles.bg1Position]} />
          <Text style={[styles.chooseGender, styles.chooseTypo1]}>{`19 `}</Text>
          <Image
            style={[styles.groupInner, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/polygon-2.png")}
          />
          <Image
            style={[styles.polygonIcon, styles.groupInnerPosition]}
            contentFit="cover"
            source={require("../assets/polygon-3.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </View>
      </View>
      <View style={[styles.gender3, styles.genderPosition]}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <RNESlider
          style={styles.genderItem}
          minimumValue={40}
          maximumValue={150}
          step={1}
          value={groupSliderValue}
          onValueChange={setGroupSliderValue}
          thumbStyle={styles.groupSliderts}
          thumbTintColor="#ff0000"
          minimumTrackTintColor="#3f3f3f"
          maximumTrackTintColor="#b3b3b3"
        />
        <Text style={[styles.chooseGender1, styles.chooseTypo1]}>64</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Pressable style={[styles.genderActive, styles.genderPosition1]}>
        <View style={[styles.bg4, styles.bg1Position]} />
        <Text style={[styles.title1, styles.titleTypo]}>Masculino</Text>
        <Image
          style={styles.genderActiveChild}
          contentFit="cover"
          source={require("../assets/group-221.png")}
        />
      </Pressable>
      <Text style={[styles.chooseGender2, styles.chooseTypo]}>
        Selecione seu sexo
      </Text>
      <Text style={[styles.chooseGender3, styles.chooseTypo]}>
        Selecione sua idade
      </Text>
      <Text style={styles.chooseGender4}>Selecione seu peso</Text>
      <Image
        style={styles.genderInner}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={styles.blackWgLogo1Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupSliderts: {
    height: 25,
    width: 25,
  },
  buttonPosition: {
    left: 15,
    position: "absolute",
  },
  bgShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    borderRadius: 4,
  },
  genderPosition1: {
    height: 85,
    left: 15,
    position: "absolute",
  },
  bg1Position: {
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderRadius: 15,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  titleTypo: {
    height: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#0a0615",
    fontSize: 15,
    left: 85,
    top: "50%",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    lineHeight: 19,
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  genderPosition: {
    left: 17,
    width: 344,
    borderRadius: 100,
    position: "absolute",
  },
  chooseTypo1: {
    lineHeight: 31,
    fontSize: 32,
    color: "#0a0615",
    textAlign: "center",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    position: "absolute",
  },
  groupInnerPosition: {
    borderRadius: 2,
    left: 204,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chooseTypo: {
    height: 38,
    width: 313,
    justifyContent: "center",
    left: 31,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 31,
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    textAlign: "center",
    position: "absolute",
  },
  bg: {
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowRadius: 9.62,
    elevation: 9.62,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  startTraining: {
    top: 16,
    left: 134,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    lineHeight: 19,
    position: "absolute",
  },
  button: {
    top: 718,
    height: 53,
    width: 345,
  },
  bg1: {
    borderColor: "#e5e9ef",
    borderWidth: 1,
  },
  title: {
    marginTop: -10.93,
    width: 236,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: "#edecec",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    borderRadius: 4,
  },
  groupItem: {
    top: 12,
    width: 18,
    height: 18,
  },
  rectangleParent: {
    top: 19,
    left: 12,
  },
  genderChild: {
    top: 46,
    left: 27,
    width: 17,
    height: 14,
    position: "absolute",
  },
  gender1: {
    top: 262,
    width: 344,
    borderRadius: 100,
    height: 85,
  },
  chooseGender: {
    top: 21,
    left: 156,
  },
  groupInner: {
    top: 13,
    width: 25,
    height: 25,
  },
  polygonIcon: {
    top: 36,
    width: 19,
    height: 17,
  },
  groupIcon: {
    height: "41.26%",
    width: "8.83%",
    top: "28.77%",
    right: "85.65%",
    bottom: "29.97%",
    left: "5.52%",
  },
  bgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  gender2: {
    top: 406,
    height: 73,
  },
  genderItem: {
    height: "18.26%",
    width: "68.62%",
    top: "55.65%",
    right: "8.41%",
    bottom: "26.09%",
    left: "22.97%",
    position: "absolute",
  },
  chooseGender1: {
    top: "18.26%",
    left: "43.9%",
  },
  vectorIcon: {
    height: "30.43%",
    width: "10.17%",
    top: "41.74%",
    right: "84.01%",
    bottom: "27.83%",
    left: "5.81%",
  },
  gender3: {
    top: 546,
    backgroundColor: "#f54242",
    height: 115,
  },
  bg4: {
    borderColor: "#000",
    borderWidth: 2,
  },
  title1: {
    marginTop: -9.74,
    width: 138,
  },
  genderActiveChild: {
    top: 18,
    width: 60,
    height: 60,
    left: 12,
    position: "absolute",
  },
  genderActive: {
    top: 162,
    borderRadius: 8,
    width: 345,
    overflow: "hidden",
  },
  chooseGender2: {
    top: 113,
  },
  chooseGender3: {
    top: 357,
  },
  chooseGender4: {
    top: 512,
    left: 88,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 31,
    color: "#0a0615",
    textAlign: "center",
    position: "absolute",
  },
  genderInner: {
    top: 30,
    left: 20,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo1Icon: {
    marginTop: -365,
    marginLeft: -76.5,
    left: "50%",
    width: 153,
    height: 31,
    top: "50%",
    position: "absolute",
  },
  gender: {
    borderRadius: 23,
    backgroundColor: "#e2e2e2",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Gender;
