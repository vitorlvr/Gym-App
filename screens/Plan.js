import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Carousel from "react-native-snap-carousel";

const renderCarouselItem = ({ item }) => {
  return (
    <View style={[styles.planInner, styles.planInnerLayout]}>
      {item === 1 && (
        <View style={[styles.image3Parent, styles.parentLayout]}>
          <Image
            style={styles.image3Icon}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Text style={[styles.specialGuide, styles.planoFitTypo]}>
            {"Suplementação\n Alimentar"}
          </Text>
        </View>
      )}
      {item === 2 && (
        <View style={[styles.image2Parent, styles.parentLayout]}>
          <Image
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Text style={[styles.specialGuide, styles.planoFitTypo]}>
            {"Personal\n Trainer"}
          </Text>
        </View>
      )}
      {item === 3 && (
        <View style={[styles.image1Parent, styles.parentLayout]}>
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <Text style={[styles.planoFit, styles.planoFitTypo]}>{"PLANO\n FIT"}</Text>
        </View>
      )}
    </View>
  );
};

const Plan = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Open_Sans_regular: require('../assets/fonts/Open_Sans_regular.ttf'),
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });
  return (
    <View style={styles.plan}>
      <TouchableOpacity style={[styles.button, styles.textFlexBox]} onPress={() => navigation.navigate("Cardpayment")}>
        <Text style={[styles.startTraining, styles.textTypo]}>Continue</Text>
      </TouchableOpacity>
      <Text
        style={[styles.selecioneSuaAssinatura, styles.textTypo]}
      >{`Selecione sua 
assinatura`}</Text>
      <View style={styles.frameParent}>
        <View style={styles.selecionadoLayout}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Image
            style={[styles.frameItem, styles.frameItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <View style={[styles.selecionado, styles.frameInnerPosition]}>
            <View style={[styles.selecionadoChild, styles.frameChildLayout]} />
            <Image
              style={styles.selecionadoItem}
              contentFit="cover"
              source={require("../assets/vector-1.png")}
            />
            <Image
              style={styles.selecionadoInner}
              contentFit="cover"
              source={require("../assets/polygon-1.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>%</Text>
          </View>
          <Text style={[styles.r12990mensal, styles.diasDeTesteTypo]}>
            R$129,90/mensal
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.frameChildLayout]}>
          <View style={[styles.frameInner, styles.frameChildLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.frameItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.diasDeTeste, styles.diasDeTesteTypo]}>
            7 Dias de teste grátis
          </Text>
        </View>
      </View>
      <Image
        style={styles.planChild}
        contentFit="cover"
        source={require("../assets/group-272.png")}
      />
      <Carousel style={styles.carousel} data={[1, 2, 3]} renderItem={renderCarouselItem} sliderWidth={400} itemWidth={293} inactiveSlideOpacity={1} inactiveSlideScale={1} loop={true} containerCustomStyle={styles.carouselContainer}
        contentContainerCustomStyle={styles.carouselContentContainer}

      />
      <TouchableOpacity style={styles.planItem} onPress={() => navigation.navigate("SignIn")}>
        <Image
          style={styles.planItem}
          contentFit="cover"
          source={require("../assets/arrow-4.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    position: "absolute",
  },
  frameChildLayout: {
    height: 66,
    width: 293,
  },
  frameItemLayout: {
    height: 23,
    width: 23,
    left: 19,
    position: "absolute",
  },
  frameInnerPosition: {
    left: 0,
    position: "absolute",
  },
  diasDeTesteTypo: {
    textAlign: "left",
    color: "#000",
    fontSize: 15,
    top: 23,
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    lineHeight: 19,
    position: "absolute",
  },
  planInnerLayout: {
    width: 293,
    height: 232,
  },
  planoFitTypo: {
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    lineHeight: 28,
    fontSize: 24,
    textAlign: "left",
    color: "#000",
    position: "absolute",
  },
  parentLayout: {
    marginLeft: 18,
    borderRadius: 13,
    height: 232,
    width: 293,
  },
  startTraining: {
    fontSize: 20,
    color: "#fff",
    width: 100,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
  },
  button: {
    height: "6.52%",
    width: "92.12%",
    top: "89.41%",
    right: "3.88%",
    bottom: "4.07%",
    left: "4%",
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
    justifyContent: "center",
  },
  selecioneSuaAssinatura: {
    top: 110,
    left: "50%",
    marginLeft: -83,
    fontSize: 26,
    lineHeight: 31,
    color: "#0a0615",
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    position: "absolute",
  },
  frameChild: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 66,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    top: 21,
  },
  selecionadoChild: {
    borderStyle: "solid",
    borderColor: "#01cb9b",
    borderWidth: 1,
    borderRadius: 5,
    height: 66,
    left: 0,
    top: 0,
    position: "absolute",
  },
  selecionadoItem: {
    left: 23,
    width: 14,
    height: 11,
    top: 28,
    position: "absolute",
  },
  selecionadoInner: {
    top: 30,
    left: 257,
    borderRadius: 2,
    width: 33,
    height: 33,
    position: "absolute",
  },
  text: {
    top: 43,
    left: 270,
    fontSize: 12,
    display: "flex",
    width: 20,
    height: 16,
    color: "#fff",
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  selecionado: {
    top: 0,
    left: 0,
    height: 83,
    width: 310,
  },
  r12990mensal: {
    left: 54,
    letterSpacing: 1,
  },
  selecionadoLayout: {
    height: 83,
    width: 310,
    marginTop: 20,
    marginLeft: 16,
  },
  frameInner: {
    backgroundColor: "#fff",
    left: 0,
    position: "absolute",
    top: 0,
  },
  ellipseIcon: {
    top: 22,
  },
  diasDeTeste: {
    left: 51,
  },
  rectangleGroup: {
    marginTop: -6,
    marginLeft: 16,
  },
  frameParent: {
    top: 508,
    left: 44,
    height: 142,
    width: 310,
    position: "absolute",
  },
  planChild: {
    top: 460,
    left: 167,
    width: 48,
    height: 8,
    position: "absolute",
  },
  rectangleIcon: {
    top: 99,
    left: 1,
    width: 157,
    height: 125,
    borderRadius: 13,
    position: "absolute",
  },
  flexibleSchedule: {
    left: 152,
    top: 28,
  },
  rectangleContainer: {
    borderRadius: 13,
    height: 232,
  },
  image2Icon: {
    top: 19,
    left: 11,
    width: 248,
    height: 205,
    position: "absolute",
  },
  specialGuide: {
    left: 78,
    top: 28,
  },
  image2Parent: {
    backgroundColor: "#fff",
  },
  image1Icon: {
    top: 15,
    left: 97,
    width: 185,
    height: 217,
    position: "absolute",
  },
  planoFit: {
    top: 37,
    left: 27,
  },
  image1Parent: {
    backgroundColor: "#ffe860",
  },
  frameChild1: {
    top: 41,
    left: 40,
    width: 253,
    height: 191,
    borderRadius: 13,
    position: "absolute",
  },
  dietPlan: {
    top: 32,
    left: 56,
  },
  image3Icon: {
    top: 65,
    width: 181,
    height: 167,
    borderRadius: 13,
  },
  freeSupplies: {
    top: 27,
    left: 161,
  },
  image3Parent: {
    backgroundColor: "#97be0d",
  },
  frameGroup: {
    top: -14,
    left: -301,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 3,
    elevation: 3,
    width: 1537,
    flexDirection: "row",
    height: 232,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.773642539978027,
    },
    position: "absolute",
  },
  planInner: {
    top: 228,
    left: 38,
    height: 232,
    position: "absolute",
  },
  planItem: {
    top: 25,
    left: 20,
    width: 23,
    height: 23,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    width: 153,
    height: 31,
    top: 50,
    position: "absolute",
    marginLeft: -77,
    left: "50%",
  },
  plan: {
    borderRadius: 23,
    backgroundColor: "#eee",
    flex: 1,
    width: "100%",
    height: 812,
  },
  carouselContainer: {
    marginBottom: 400,
    marginTop: 50,
  },
  carouselContentContainer: {
    marginTop: -110,
  },
});

export default Plan;
