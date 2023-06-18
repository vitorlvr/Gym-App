import * as React from "react";
import { Text, StyleSheet, Pressable, ScrollView, View } from "react-native";
import { Image } from "expo-image";

const Train = () => {
  return (
    <View style={styles.train}>
      <Text style={[styles.chooseActivitiesTh, styles.detailFlexBox]}>
        Treino A
      </Text>
      <Image
        style={styles.trainChild}
        contentFit="cover"
        source={require("../assets/arrow-4.png")}
      />
      <Image
        style={[styles.blackWgLogo2Icon, styles.pngPosition]}
        contentFit="cover"
        source={require("../assets/black-wg-logo-2.png")}
      />
      <ScrollView
        style={styles.imageParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
      >
        <Image
          style={[styles.imageIcon, styles.detailPosition]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.detail, styles.detailPosition]}>
          <Text style={[styles.title, styles.setsClr]}>Puxada aberta</Text>
          <View style={[styles.info, styles.infoFlexBox]}>
            <View style={styles.infoFlexBox}>
              <Image
                style={styles.icons}
                contentFit="cover"
                source={require("../assets/icons6.png")}
              />
              <Text style={[styles.sets, styles.setsClr]}>3 Sets</Text>
            </View>
            <View style={[styles.repeat, styles.infoFlexBox]}>
              <Image
                style={styles.icons}
                contentFit="cover"
                source={require("../assets/icons7.png")}
              />
              <Text style={[styles.sets, styles.setsClr]}>12 rep</Text>
            </View>
          </View>
          <Pressable style={styles.buttonSolidWrapper}>
            <View style={[styles.buttonSolid, styles.infoFlexBox]}>
              <Text style={[styles.boto, styles.botoTypo]}>Iniciar</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <Image
        style={[styles.iconoPausaBlancoPngPngDow, styles.pngPosition]}
        contentFit="cover"
        source={require("../assets/1171177502-iconopausablancopngpngdownloaddownstealremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  pngPosition: {
    left: "50%",
    position: "absolute",
  },
  detailPosition: {
    borderRadius: 8,
    marginLeft: -182,
    width: 364,
    left: "50%",
    position: "absolute",
  },
  setsClr: {
    color: "#000",
    textAlign: "center",
  },
  infoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  botoTypo: {
    fontFamily: "Roboto_bold",
    fontWeight: "700",
  },
  chooseActivitiesTh: {
    top: 123,
    left: 65,
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: "Poppins_semibold",
    color: "#0a0615",
    display: "flex",
    width: 289,
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  trainChild: {
    top: 30,
    left: 19,
    height: 22,
    width: 24,
    position: "absolute",
  },
  blackWgLogo2Icon: {
    marginTop: -414,
    marginLeft: -76.5,
    width: 153,
    height: 31,
    top: "50%",
  },
  imageIcon: {
    height: 364,
    top: 0,
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    width: 212,
    fontFamily: "Roboto_bold",
    fontWeight: "700",
  },
  icons: {
    height: 24,
    width: 24,
  },
  sets: {
    fontSize: 18,
    lineHeight: 29,
    fontFamily: "Roboto_regular",
    marginLeft: 8,
  },
  repeat: {
    marginLeft: 40,
  },
  info: {
    marginTop: 24,
    justifyContent: "center",
  },
  boto: {
    fontSize: 16,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  },
  buttonSolid: {
    left: 0,
    borderRadius: 6,
    backgroundColor: "#c41230",
    width: 332,
    paddingHorizontal: 24,
    paddingVertical: 16,
    top: 0,
    justifyContent: "center",
    position: "absolute",
  },
  buttonSolidWrapper: {
    alignSelf: "stretch",
    height: 56,
    marginTop: 24,
  },
  detail: {
    marginTop: 99,
    height: 190,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#fff",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageParent: {
    marginLeft: -181.5,
    top: 205,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    maxWidth: 364,
    width: 364,
    left: "50%",
    position: "absolute",
    flex: 1,
  },
  iconoPausaBlancoPngPngDow: {
    marginLeft: -47.5,
    top: 342,
    width: 96,
    height: 90,
  },
  train: {
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
    height: 910,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Train;
