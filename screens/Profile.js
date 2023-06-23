import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { TouchableOpacity } from "react-native-web";

const Profile = () => {
  const navigation = useNavigation();
  const [] = useFonts({
    Poppins_medium: require('../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../assets/fonts/Poppins_semibold.ttf'),
  });

  return (
    <View style={styles.profile}>
      <View style={styles.textFieldWrapper}>
        <View style={styles.textField}>
          <Text style={styles.text}>Leticia Macedo</Text>
        </View>
      </View>
      <View style={styles.textFieldContainer}>
        <View style={styles.textField}>
          <Text style={styles.text}>lelek@gmail.com</Text>
        </View>
      </View>
      <View style={styles.textFieldFrame}>
        <View style={styles.textField}>
          <Text style={styles.text}>40028922</Text>
        </View>
      </View>
      <View style={styles.groupView}>
        <View style={styles.textField}>
          <Text style={styles.text}>************</Text>
        </View>
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/group-263.png")}
      />
      <View style={styles.textFieldParent}>
        <View style={styles.textField4}>
          <Text style={styles.text4} />
        </View>
        <View style={styles.link}>
          <Text style={styles.link1}>BÔNUS:</Text>
        </View>
        <Text style={styles.text5}>$ 950</Text>
      </View>
      <View style={styles.textFieldGroup}>
        <View style={styles.textField4}>
          <Text style={styles.text6}>$ 2250,00</Text>
        </View>
        <View style={styles.link2}>
          <Text style={styles.link1}>NÍVEL:</Text>
        </View>
        <Text style={styles.text5}>20/100</Text>
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
      <Image
        style={styles.cadeado1Icon}
        contentFit="cover"
        source={require("../assets/cadeado-1.png")}
      />
      <TouchableOpacity style={styles.rectangleParent} onPress={() => { }}>
        <View style={styles.groupChild} />
        <Text style={styles.sair}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    borderRadius: 30,
    backgroundColor: "#e7e7e7",
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
  textFieldWrapper: {
    height: 56,
    position: "absolute",
    top: 461,
    width: 348,
    marginLeft: -174,
    left: "50%",
  },
  textField: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    position: "absolute",
    top: 0,
    width: 348,
    left: "50%",
    marginLeft: -174,
  },
  text: {
    alignItems: "center",
    color: "#000",
    display: "flex",
    fontFamily: "Poppins_medium",
    fontSize: 16,
    height: 24,
    lineHeight: 26,
    textAlign: "left",
    width: 296,
    marginLeft: 25,
  },
  textFieldContainer: {
    top: 529,
    height: 56,
    position: "absolute",
    width: 348,
    marginLeft: -174,
    left: "50%",
  },
  textField1: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    position: "absolute",
    left: 0,
    right: 0,
  },
  textFieldFrame: {
    top: 598,
    height: 56,
    position: "absolute",
    width: 348,
    marginLeft: -174,
    left: "50%",
  },
  groupView: {
    top: 667,
    height: 56,
    position: "absolute",
    width: 348,
    marginLeft: -174,
    left: "50%",
  },
  profileChild: {
    width: 155,
    height: 292,
    position: "absolute",
    left: "50%",
    top: 30,
    marginLeft: -77,
    bottom: 593,
  },
  textFieldParent: {
    top: 359,
    right: "55%",
    left: "10%",
    height: 76,
    position: "absolute",
    width: 140,
  },
  textField4: {
    backgroundColor: "#202024",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingBottom: 60,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  link: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 6,
    left: "50%",
    marginLeft: -52,
    top: 6,
    position: "absolute",
  },
  text4: {
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    lineHeight: 26,
    fontSize: 16,
  },
  link1: {
    color: "#c4c4cc",
    fontFamily: "Poppins_medium",
  },
  text5: {
    fontSize: 24,
    lineHeight: 38,
    width: 111,
    textAlign: "center",
    color: "#ffd700",
    fontFamily: "Poppins_medium",
    fontWeight: "500",
    height: 24,
    display: "flex",
    top: 39,
    left: 12,
    position: "absolute",
  },
  textFieldGroup: {
    top: 358,
    left: "55%",
    right: "10%",
    width: 140,
    height: 76,
    position: "absolute",
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
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 6,
    left: "50%",
    marginLeft: -56.5,
    top: 6,
    position: "absolute",
  },
  doUtilizador1Icon: {
    width: 22,
    height: 22,
    position: "absolute",
    top: 477,
    left: "50%",
    marginLeft: -165,
  },
  eMail1Icon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 545,
    left: "50%",
    marginLeft: -165,
  },
  telefone1Icon: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 611,
    left: "50%",
    marginLeft: -170,
  },
  cadeado1Icon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 680,
    left: "50%",
    marginLeft: -168,
  },
  groupChild: {
    borderRadius: 12,
    backgroundColor: "#c41230",
    position: "absolute",
    left: 0,
    top: 0,
  },
  sair: {
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
  rectangleParent: {
    top: 753,
    left: "50%",
    marginLeft: -166,
    height: 47,
    width: 332,
    borderRadius: 12,
    backgroundColor: "#c41230",
  },
  iphoneFrameIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    top: 0,
    right: 19,
    bottom: 0,
    left: 19,
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
