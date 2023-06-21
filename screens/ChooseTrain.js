import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const ChooseTrain = () => {
  const navigation = useNavigation();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (boxId) => {
    setSelectedBox(boxId);
  };

  const [] = useFonts({
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });

  const getBoxStyle = (boxId) => {
    // Função para retornar o estilo da caixa com base na seleção
    if (selectedBox === boxId) {
      return styles.selectedBox;
    } else {
      return styles.chooseShadowBox;
    }
  };

  return (
    <View style={styles.chooseTrain}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Train")}>
          <View style={styles.bg} />
          <Text style={styles.startTraining}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.chooseActivitiesTh, styles.chooseActivitiesThFlexBox]}>
        Escolha seu treino
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Schedule")}>
        <Image
          style={styles.chooseTrainChild}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <View style={[getBoxStyle(1), styles.chooseTrainInner, styles.chooseInnerPosition]}>
        <TouchableOpacity onPress={() => handleBoxPress(1)}>
          <View style={styles.chooseInnerContent}>
            <Text style={styles.chooseActivitiesTh1}>A</Text>
            <Text style={[styles.costasBicepsQuadriceps, styles.pernasGlteosOmbroTypo]}>
              Costas, Bíceps, Antebraço
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[getBoxStyle(2), styles.groupView, styles.chooseInnerPosition]}>
        <TouchableOpacity onPress={() => handleBoxPress(2)}>
          <View style={styles.chooseInnerContent}>
            <Text style={styles.chooseActivitiesTh1}>B</Text>
            <Text style={[styles.costasBicepsQuadriceps, styles.pernasGlteosOmbroTypo]}>
              Peito, Tríceps, Ombro
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[getBoxStyle(3), styles.chooseTrainInner1, styles.chooseInnerPosition]}>
        <TouchableOpacity onPress={() => handleBoxPress(3)}>
          <View style={styles.chooseInnerContent}>
            <Text style={styles.chooseActivitiesTh1}>C</Text>
            <Text style={[styles.costasBicepsQuadriceps, styles.pernasGlteosOmbroTypo]}>
              Quadríceps, Posterior, Panturilha
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[getBoxStyle(4), styles.chooseTrainInner2, styles.frameViewLayout]}>
        <TouchableOpacity onPress={() => handleBoxPress(4)}>
          <View style={styles.chooseInnerContent}>
            <Text style={styles.chooseActivitiesTh1}>D</Text>
            <Text style={[styles.pernasGlteosOmbro, styles.pernasGlteosOmbroTypo]}>
              Bíceps, Tríceps, Ombro
            </Text>
          </View>
        </TouchableOpacity>
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
    left: "50%",
    marginLeft: -182,
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
    left: "50%",
    marginLeft: -182,
    position: "absolute",
  },
  bg: {
    height: "100%",
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
    left: "50%",
    marginLeft: -172.5,
    height: 53,
    width: 345,
    position: "absolute",
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
  },
  chooseActivitiesTh: {
    top: 123,
    left: "50%",
    marginLeft: -144.5,
    fontSize: 26,
    fontFamily: "Poppins_semibold",
    width: 289,
    display: "flex",
    color: "#0a0615",
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
    position: "absolute",
    width: 153,
    height: 31,
    top: 30,
    position: "absolute",
    marginLeft: -77,
    left: "50%",
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
    width: 364,
    left: 28,
  },
  groupView: {
    top: 312,
    width: 364,
    left: 28,
  },
  chooseTrainInner1: {
    top: 419,
    width: 364,
    left: 28,
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
  },
  chooseTrainInner2: {
    top: 526,
    width: 364,
    left: 28,
  },
  chooseTrain: {
    borderRadius: 8,
    backgroundColor: "#e1e1e1",
    flex: 1,
    height: 910,
    overflow: "hidden",
    width: "100%",
  },
  chooseInnerContent: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
  },
  chooseShadowBox: {
    justifyContent: "space-between",
    right: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    elevation: 4,
    shadowRadius: 8,
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
});

export default ChooseTrain;
