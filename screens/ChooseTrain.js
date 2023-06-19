import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const ChooseTrain = () => {
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
    <View style={styles.chooseTrain}>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <View style={styles.bg} />
          <Text style={styles.startTraining}>Continue</Text>
        </View>
      </View>
      <Text
        style={[styles.chooseActivitiesTh, styles.chooseActivitiesThFlexBox]}
      >
        Escolha seu treino
      </Text>
      <Image
        style={styles.chooseTrainChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <View style={[styles.chooseTrainInner, styles.chooseInnerPosition]}>
        <View style={styles.chooseShadowBox}>
          <Text style={styles.chooseActivitiesTh1}>A</Text>
          <Text
            style={[
              styles.costasBicepsQuadriceps,
              styles.pernasGlteosOmbroTypo,
            ]}
          >
            Costas, Biceps, Quadriceps
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.chooseInnerPosition]}>
        <View style={styles.chooseShadowBox}>
          <Text style={styles.chooseActivitiesTh1}>B</Text>
          <Text
            style={[
              styles.costasBicepsQuadriceps,
              styles.pernasGlteosOmbroTypo,
            ]}
          >
            Peito, Tríceps, Panturrilha
          </Text>
        </View>
      </View>
      <View style={[styles.chooseTrainInner1, styles.chooseInnerPosition]}>
        <View style={styles.chooseShadowBox}>
          <Text style={styles.chooseActivitiesTh1}>C</Text>
          <Text
            style={[
              styles.costasBicepsQuadriceps,
              styles.pernasGlteosOmbroTypo,
            ]}
          >
            Abdômen, Posterior, Ombro
          </Text>
        </View>
      </View>
      <View style={[styles.chooseTrainInner2, styles.frameViewLayout]}>
        <View style={[styles.frameView, styles.frameViewLayout]}>
          <Text style={styles.chooseActivitiesTh1}>D</Text>
          <Text
            style={[styles.pernasGlteosOmbro, styles.pernasGlteosOmbroTypo]}
          >
            Pernas, Glúteos, Ombro
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chooseActivitiesThFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  chooseInnerPosition: {
    height: 87,
    right: 27,
    left: 28,
    position: "absolute",
  },
  pernasGlteosOmbroTypo: {
    height: 51,
    color: "#000",
    lineHeight: 32,
    fontSize: 20,
    fontFamily: "Poppins_bold",
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
  },
  frameViewLayout: {
    width: 364,
    height: 87,
    position: "absolute",
  },
  bg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 4,
    backgroundColor: "#c41230",
    shadowColor: "rgba(128, 128, 128, 0.2)",
    shadowRadius: 9.62,
    elevation: 9.62,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    position: "absolute",
    width: "100%",
  },
  startTraining: {
    top: 16,
    left: 134,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: "Poppins_medium",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  button: {
    left: 0,
    top: 0,
    height: 53,
    width: 345,
    position: "absolute",
  },
  buttonWrapper: {
    top: 733,
    left: 41,
    height: 53,
    width: 345,
    position: "absolute",
  },
  chooseActivitiesTh: {
    top: 123,
    left: 65,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    width: 289,
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    lineHeight: 31,
    justifyContent: "center",
    position: "absolute",
  },
  chooseTrainChild: {
    top: 30,
    left: 19,
    width: 24,
    height: 22,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -414,
    marginLeft: -76.5,
    top: "50%",
    left: "50%",
    width: 153,
    height: 31,
    position: "absolute",
  },
  chooseActivitiesTh1: {
    fontSize: 32,
    width: 23,
    fontFamily: "Poppins_bold",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: "#0a0615",
    lineHeight: 31,
    textAlign: "center",
  },
  costasBicepsQuadriceps: {
    width: 286,
    justifyContent: "center",
    textAlign: "center",
  },
  chooseShadowBox: {
    justifyContent: "space-between",
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 87,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  chooseTrainInner: {
    top: 205,
  },
  groupView: {
    top: 312,
  },
  chooseTrainInner1: {
    top: 419,
  },
  pernasGlteosOmbro: {
    textAlign: "left",
    width: 257,
    marginLeft: 16,
  },
  frameView: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 364,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    left: 0,
    top: 0,
  },
  chooseTrainInner2: {
    top: 526,
    width: 364,
    left: 28,
  },
  chooseTrain: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    flex: 1,
    height: 910,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChooseTrain;
