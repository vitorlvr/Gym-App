import * as React from "react";
import { StyleSheet, Pressable, View, ScrollView, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Goals = () => {
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
    <View style={styles.goals}>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <ScrollView
        style={styles.groupParent}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={[styles.frameWrapper, styles.framePosition]}>
          <View style={[styles.frameParent, styles.frameShadowBox]}>
            <View>
              <Text style={[styles.title, styles.titleClr]}>
                Corrida de 5 km
              </Text>
              <Text style={[styles.title1, styles.titleClr]}>
                20min 1-10 julho
              </Text>
            </View>
            <Text style={styles.text}>09:00</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.framePosition]}>
          <View style={styles.frameShadowBox}>
            <View>
              <Text style={[styles.title, styles.titleClr]}>Resistência</Text>
              <Text style={[styles.title1, styles.titleClr]}>
                20min 10-15 julho
              </Text>
            </View>
            <Text style={[styles.text1, styles.textTypo]}>09</Text>
            <Text style={[styles.text2, styles.textTypo]}>08:50</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.frameView, styles.frameShadowBox]}>
            <View style={styles.titleWrapper}>
              <Text style={[styles.title4, styles.titleClr]}>
                <Text style={styles.titleTypo}>{`Plank Challenge
`}</Text>
                <Text style={styles.min}>10min 1- 15 julho</Text>
              </Text>
            </View>
            <Text style={styles.text}>08:50</Text>
          </View>
          <Image
            style={styles.wgc2023PrimaryGlobeRed3}
            contentFit="cover"
            source={require("../assets/wgc-2023-primary-globe-red-3.png")}
          />
        </View>
      </ScrollView>
      <View style={[styles.joeMaior1Parent, styles.joeLayout]}>
        <Image
          style={[styles.joeMaior1, styles.joeLayout]}
          contentFit="cover"
          source={require("../assets/joe-maior-1.png")}
        />
        <Text
          style={[styles.chooseActivitiesTh, styles.groupViewPosition]}
        >{`DESAFIOS
FITNESS`}</Text>
      </View>
      <View style={[styles.goalsChild, styles.goalsLayout]} />
      <View style={[styles.goalsItem, styles.goalsLayout]} />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.avanar, styles.titleTypo]}>Avançar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    height: 87,
    left: 3,
    right: 0,
    position: "absolute",
  },
  frameShadowBox: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    left: 0,
    top: 0,
    right: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
  },
  titleClr: {
    color: "#000",
    textAlign: "left",
  },
  textTypo: {
    marginLeft: 150,
    color: "#7c7c8a",
    fontFamily: "Roboto_regular",
    lineHeight: 26,
    fontSize: 16,
  },
  groupViewPosition: {
    left: 0,
    position: "absolute",
  },
  joeLayout: {
    height: 255,
    position: "absolute",
  },
  goalsLayout: {
    height: 26,
    width: 424,
    backgroundColor: "#c41230",
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 47,
    width: 332,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: "Roboto_bold",
    fontWeight: "700",
  },
  blackWgLogo2Icon: {
    marginTop: -414,
    marginLeft: -76.5,
    width: 153,
    height: 31,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  title: {
    textAlign: "left",
    fontFamily: "Roboto_bold",
    fontWeight: "700",
    lineHeight: 26,
    color: "#000",
    fontSize: 16,
  },
  title1: {
    fontSize: 18,
    lineHeight: 29,
    fontFamily: "Roboto_regular",
    textAlign: "left",
  },
  text: {
    textAlign: "center",
    color: "#7c7c8a",
    fontFamily: "Roboto_regular",
    lineHeight: 26,
    fontSize: 16,
  },
  frameParent: {
    justifyContent: "space-between",
  },
  frameWrapper: {
    top: 112,
  },
  text1: {
    textAlign: "left",
  },
  text2: {
    textAlign: "center",
  },
  frameContainer: {
    top: 224,
  },
  min: {
    fontFamily: "Roboto_regular",
  },
  title4: {
    textAlign: "left",
    lineHeight: 26,
    color: "#000",
    fontSize: 16,
  },
  titleWrapper: {
    width: 284,
  },
  frameView: {
    justifyContent: "space-between",
  },
  wgc2023PrimaryGlobeRed3: {
    top: 403,
    left: 138,
    width: 0,
    height: 0,
    position: "absolute",
  },
  groupView: {
    right: 3,
    height: 84,
    top: 0,
  },
  groupParent: {
    top: 368,
    right: 25,
    left: 27,
    position: "absolute",
    flex: 1,
  },
  joeMaior1: {
    left: 172,
    width: 318,
    top: 0,
  },
  chooseActivitiesTh: {
    top: 116,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#0a0615",
    display: "flex",
    justifyContent: "center",
    width: 289,
    textAlign: "center",
    alignItems: "center",
  },
  joeMaior1Parent: {
    top: 79,
    left: -34,
    width: 490,
  },
  goalsChild: {
    top: 317,
  },
  goalsItem: {
    top: 91,
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: "#c41230",
    width: 332,
    left: 0,
    top: 0,
  },
  avanar: {
    marginTop: -11.5,
    marginLeft: -29,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
    left: 38,
  },
  goals: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    height: 910,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Goals;
