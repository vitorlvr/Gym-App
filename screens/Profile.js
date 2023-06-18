import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.textFieldWrapper, styles.groupViewLayout]}>
        <View style={[styles.textField, styles.menuFlexBox]}>
          <Text style={[styles.text, styles.textLayout1]}> Leticia Macedo</Text>
        </View>
      </View>
      <View style={[styles.textFieldContainer, styles.textPosition2]}>
        <View style={[styles.textField1, styles.textPosition]}>
          <Text style={[styles.text, styles.textLayout1]}>
            {" "}
            lelek@gmail.com
          </Text>
        </View>
      </View>
      <View style={[styles.textFieldFrame, styles.textPosition2]}>
        <View style={[styles.textField1, styles.textPosition]}>
          <Text style={[styles.text2, styles.textLayout1]}> 356 789 5286</Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.textField1, styles.textPosition]}>
          <Text style={[styles.text, styles.textLayout1]}> ************</Text>
        </View>
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/group-263.png")}
      />
      <View style={[styles.textFieldParent, styles.textLayout]}>
        <View style={[styles.textField4, styles.textLayout]}>
          <Text style={[styles.text4, styles.textTypo]} />
        </View>
        <View style={[styles.link, styles.linkFlexBox]}>
          <Text style={[styles.link1, styles.sairTypo]}>BÔNUS:</Text>
        </View>
        <Text style={[styles.text5, styles.linkFlexBox]}>$ 950</Text>
      </View>
      <View style={[styles.textFieldGroup, styles.textLayout]}>
        <View style={[styles.textField4, styles.textLayout]}>
          <Text style={[styles.text6, styles.linkFlexBox]}>$ 2250,00</Text>
        </View>
        <View style={[styles.link2, styles.linkFlexBox]}>
          <Text style={[styles.link1, styles.sairTypo]}>NÍVEL:</Text>
        </View>
        <Text style={[styles.text5, styles.linkFlexBox]}>20/100</Text>
      </View>
      <Image
        style={styles.doUtilizador1Icon}
        contentFit="cover"
        source={require("../assets/doutilizador-1.png")}
      />
      <Image
        style={styles.eMail1Icon}
        contentFit="cover"
        source={require("../assets/email-1.png")}
      />
      <Image
        style={styles.telefone1Icon}
        contentFit="cover"
        source={require("../assets/telefone-1.png")}
      />
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.sair, styles.sairTypo]}>Sair</Text>
      </Pressable>
      <Image
        style={styles.iphoneFrameIcon}
        contentFit="cover"
        source={require("../assets/iphone-frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupViewLayout: {
    height: 56,
    position: "absolute",
  },
  menuFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  textLayout1: {
    display: "flex",
    height: 24,
  },
  textPosition2: {
    left: 40,
    right: 40,
    height: 56,
    position: "absolute",
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  textLayout: {
    height: 76,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
  },
  linkFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  sairTypo: {
    fontFamily: "Roboto_bold",
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center",
    fontSize: 16,
  },
  groupChildLayout: {
    height: 47,
    width: 332,
    position: "absolute",
  },
  text: {
    width: 296,
    height: 24,
    textAlign: "left",
    color: "#000",
    fontFamily: "Roboto_regular",
    display: "flex",
    lineHeight: 26,
    fontSize: 16,
    alignItems: "center",
  },
  textField: {
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    width: 348,
    left: "50%",
    marginLeft: -174,
    position: "absolute",
  },
  textFieldWrapper: {
    top: 461,
    width: 348,
    marginLeft: -174,
    height: 56,
    left: "50%",
  },
  textField1: {
    right: 0,
    left: 0,
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#fff",
    position: "absolute",
  },
  textFieldContainer: {
    top: 529,
  },
  text2: {
    height: 24,
    textAlign: "left",
    color: "#000",
    fontFamily: "Roboto_regular",
    display: "flex",
    lineHeight: 26,
    fontSize: 16,
    alignItems: "center",
    flex: 1,
  },
  textFieldFrame: {
    top: 598,
  },
  groupView: {
    top: 667,
    right: 39,
    left: 41,
  },
  profileChild: {
    marginLeft: -81,
    bottom: 593,
    width: 155,
    height: 292,
    left: "50%",
    position: "absolute",
  },
  text4: {
    lineHeight: 26,
    fontSize: 16,
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
  },
  textField4: {
    backgroundColor: "#202024",
    left: 0,
    top: 0,
    right: 0,
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    borderRadius: 6,
  },
  link1: {
    color: "#c4c4cc",
  },
  link: {
    marginLeft: -52,
    padding: 4,
    top: 6,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 6,
    left: "50%",
    position: "absolute",
  },
  text5: {
    top: 39,
    left: 12,
    fontSize: 24,
    lineHeight: 38,
    width: 111,
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    height: 24,
    display: "flex",
    position: "absolute",
  },
  textFieldParent: {
    top: 359,
    right: 223,
    left: 41,
  },
  text6: {
    display: "none",
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    height: 24,
    lineHeight: 26,
    fontSize: 16,
    flex: 1,
  },
  link2: {
    marginLeft: -56.5,
    padding: 4,
    top: 6,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 6,
    left: "50%",
    position: "absolute",
  },
  textFieldGroup: {
    top: 358,
    left: 229,
    right: 40,
    height: 76,
  },
  doUtilizador1Icon: {
    top: 477,
    left: 56,
    width: 22,
    height: 22,
    position: "absolute",
  },
  eMail1Icon: {
    top: 545,
    left: 53,
    width: 25,
    height: 25,
    position: "absolute",
  },
  telefone1Icon: {
    top: 611,
    left: 51,
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: "#c41230",
    left: 0,
    top: 0,
  },
  sair: {
    top: 11,
    left: 152,
    color: "#fff",
    position: "absolute",
  },
  rectangleParent: {
    top: 753,
    left: 48,
  },
  iphoneFrameIcon: {
    right: 19,
    bottom: 0,
    left: 19,
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    borderRadius: 30,
    backgroundColor: "#e7e7e7",
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default Profile;
