import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Plan = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_regular: require('../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../assets/fonts/Poppins_bold.ttf'),
  });

  return (
    <View style={styles.plan}>
      <View style={styles.bg} />
      <TouchableOpacity style={[styles.button, styles.bg1ShadowBox]} onPress={() => { }}>
        <Text style={[styles.startTraining, styles.textTypo]}>Continue</Text>
      </TouchableOpacity>
      <Text style={[styles.weCreateYour, styles.textTypo]}>{`Selecione sua 
assinatura`}</Text>
      <TouchableOpacity style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>%</Text>
        <Text style={[styles.r12990mensal, styles.diasDeTesteTypo]}>
          R$129,90/mensal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]}>
        <Pressable style={[styles.rectanglePressable, styles.groupLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Text style={[styles.diasDeTeste, styles.diasDeTesteTypo]}>
          7 Dias de teste grátis
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.planChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={[styles.planItem, styles.planChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.planInner, styles.planChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.planChild1, styles.planChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.planChild2, styles.planChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.planChild3, styles.planChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <View style={[styles.frameView, styles.viewGroupLayout]}>
        <View style={[styles.groupParent, styles.bg1ShadowBox]}>
          <View style={[styles.rectangleContainer, styles.viewGroupLayout]}>
            <View style={[styles.rectangleView, styles.iconGroupLayout]} />
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={[styles.planoFit, styles.planoFitTypo]}>{`PLANO 
FIT`}</Text>
          </View>
          <View style={[styles.groupView, styles.viewGroupLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-323.png")}
            />
            <Image
              style={[styles.groupChild1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-319.png")}
            />
            <Text style={[styles.dietPlan, styles.planoFitTypo]}>{`Diet
Plan`}</Text>
          </View>
          <View style={[styles.rectangleParent1, styles.viewGroupLayout]}>
            <View style={[styles.groupChild2, styles.iconGroupLayout]} />
            <Image
              style={styles.image2Icon}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
            <Text style={[styles.specialGuide, styles.planoFitTypo]}>{`Special
Guide`}</Text>
          </View>
          <View style={[styles.rectangleParent2, styles.viewGroupLayout]}>
            <View style={[styles.groupChild3, styles.iconGroupLayout]} />
            <Image
              style={[styles.image3Icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/image-3.png")}
            />
            <Text style={[styles.freeSupplies, styles.planoFitTypo]}>{`Free
Supplies`}</Text>
          </View>
          <View style={[styles.rectangleParent3, styles.viewGroupLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-3231.png")}
            />
            <Image
              style={[styles.groupChild5, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-3191.png")}
            />
            <Text
              style={[styles.flexibleSchedule, styles.planoFitTypo]}
            >{`Flexible
Schedule`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.blackWgLogo2Icon}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 66,
    width: 293,
    position: "absolute",
  },
  groupItemLayout: {
    height: 23,
    width: 23,
    left: 19,
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
  planChildLayout: {
    height: 8,
    width: 8,
    top: 460,
    position: "absolute",
  },
  viewGroupLayout: {
    width: 293,
    height: 232,
  },
  iconGroupLayout: {
    borderRadius: 13,
    position: "absolute",
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
  bg: {
    top: -26,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 375,
    height: 838,
    left: 0,
    position: "absolute",
  },
  bg1: {
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
    width: "100%",
  },
  startTraining: {
    top: 16,
    left: 125,
    fontSize: 20,
    color: "#fff",
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
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
  weCreateYour: {
    top: 107,
    left: 96,
    fontSize: 26,
    lineHeight: 31,
    color: "#0a0615",
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
  },
  groupChild: {
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    borderRadius: 5,
    height: 66,
  },
  groupItem: {
    top: 21,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: "#01cb9b",
    borderWidth: 1,
    borderRadius: 5,
    height: 66,
    top: 0,
    left: 0,
  },
  vectorIcon: {
    left: 23,
    width: 14,
    height: 11,
    top: 28,
    position: "absolute",
  },
  polygonIcon: {
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
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 16,
    color: "#fff",
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "Poppins_semibold",
    fontWeight: "600",
  },
  r12990mensal: {
    left: 54,
    letterSpacing: 1,
  },
  rectangleParent: {
    top: 508,
    width: 310,
    height: 83,
    left: 44,
    position: "absolute",
  },
  rectanglePressable: {
    backgroundColor: "#fff",
    top: 0,
    left: 0,
  },
  ellipseIcon: {
    top: 22,
  },
  diasDeTeste: {
    left: 51,
  },
  rectangleGroup: {
    top: 584,
    left: 44,
  },
  planChild: {
    width: 24,
    height: 22,
    top: 28,
    left: 19,
    position: "absolute",
  },
  planItem: {
    left: 187,
  },
  planInner: {
    left: 177,
  },
  planChild1: {
    left: 167,
  },
  planChild2: {
    left: 197,
  },
  planChild3: {
    left: 207,
  },
  rectangleView: {
    backgroundColor: "#ffe860",
    height: 232,
    width: 293,
    top: 0,
    left: 0,
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
  rectangleContainer: {
    left: 622,
    height: 232,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: 232,
    width: 293,
    top: 0,
    left: 0,
  },
  groupChild1: {
    top: 41,
    left: 360,
    width: 253,
    height: 191,
  },
  dietPlan: {
    top: 32,
    left: 56,
  },
  groupView: {
    left: 933,
    height: 232,
    top: 0,
    position: "absolute",
  },
  groupChild2: {
    height: 232,
    width: 293,
    backgroundColor: "#fff",
    top: 0,
    left: 0,
  },
  image2Icon: {
    top: 19,
    left: -291,
    width: 248,
    height: 205,
    position: "absolute",
  },
  specialGuide: {
    left: 141,
    top: 28,
  },
  rectangleParent1: {
    left: 311,
    height: 232,
    top: 0,
    position: "absolute",
  },
  groupChild3: {
    backgroundColor: "#97be0d",
    height: 232,
    width: 293,
    top: 0,
    left: 0,
  },
  image3Icon: {
    top: 65,
    width: 181,
    height: 167,
    left: 0,
  },
  freeSupplies: {
    top: 27,
    left: 161,
  },
  rectangleParent2: {
    left: 1244,
    height: 232,
    top: 0,
    position: "absolute",
  },
  groupChild5: {
    top: 99,
    left: 1,
    width: 157,
    height: 125,
  },
  flexibleSchedule: {
    left: 152,
    top: 28,
  },
  rectangleParent3: {
    height: 232,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    left: -613,
    shadowRadius: 3,
    elevation: 3,
    width: 1537,
    height: 232,
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  frameView: {
    top: 208,
    left: 41,
    height: 232,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -367,
    marginLeft: -76.5,
    top: "50%",
    left: "50%",
    width: 153,
    height: 31,
    position: "absolute",
  },
  plan: {
    borderRadius: 23,
    backgroundColor: "#eee",
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Plan;
