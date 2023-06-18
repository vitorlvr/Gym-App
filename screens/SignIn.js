import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const SignIn = () => {
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
        <View style={styles.signIn}>
            <View style={styles.signInChild} />
            <View style={styles.signUpParent}>
                <TouchableOpacity style={styles.signUp} onPress={() => { }}>
                    <Text style={styles.signUp1}>Cadastre-se</Text>
                </TouchableOpacity>
                <Text
                    style={[styles.dontHaveAn, styles.dontHaveAnClr]}
                >Não possui uma conta?</Text>
            </View>
            <Text style={[styles.signInWith, styles.singInFlexBox]}>
                Entrar com
            </Text>
                <Text style={[styles.forgotPassword, styles.dontHaveAnClr]}>
                    Esqueceu sua senha?
                </Text>
            <TouchableOpacity style={styles.botao} onPress={() => { }} />
            <Text style={styles.startTraining}>ENTRAR</Text>
            <TextInput
                style={[styles.input, styles.inputPosition]}
                placeholder="Senha"
                keyboardType="default"
                secureTextEntry={true}
            />
            <TextInput
                style={[styles.input1, styles.input1Position]}
                placeholder="Número/ Email"
            />
            <Text style={[styles.singIn, styles.singInFlexBox]}>Login:</Text>
            <Image
                style={styles.signInItem}
                contentFit="cover"
                source={require("../assets/group-225.png")}
            />
            <View style={styles.logoSignin}>
                <View style={[styles.logoSigninInner, styles.logoSigninInnerLayout]}>
                    <View style={[styles.rectangleParent, styles.logoSigninInnerLayout]}>
                        <View style={styles.groupChild} />
                        <Text style={styles.worldGym}>WORLD GYM</Text>
                    </View>
                </View>
                <Image
                    style={styles.wgc2023PrimaryGlobeRed2}
                    contentFit="cover"
                    source={require("../assets/wgc-2023-primary-globe-red-2.png")}
                />
            </View>
            <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group2.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dontHaveAnClr: {
        color: "#404b52",
        lineHeight: 23,
        textAlign: "center",
        position: "absolute",
    },
    singInFlexBox: {
        height: 27,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#0a0615",
        textAlign: "center",
        position: "absolute",
        marginTop: -35,
    },
    inputPosition: {
        backgroundColor: "#f8fafc",
        left: "10.4%",
        right: "10.4%",
        borderRadius: 4,
        width: "79.2%",
    },
    phoneTypo: {
        left: "15.73%",
        width: "25.87%",
        textAlign: "left",
        alignItems: "center",
        display: "flex",
        color: "#404b52",
        fontFamily: "Open Sans_regular",
        lineHeight: 23,
        fontSize: 13,
    },
    input1Position: {
        top: "35.59%",
        height: "5.67%",
        position: "absolute",
    },
    logoSigninInnerLayout: {
        height: 133,
        left: 0,
        width: 195,
        position: "absolute",
    },
    signInChild: {
        left: -5,
        borderRadius: 31,
        backgroundColor: "#e2e2e2",
        width: "100%",
        top: 0,
        position: "absolute",
        height: "100%",
    },
    signUp1: {
        textDecoration: "underline",
        color: "#000",
        textAlign: "center",
        lineHeight: 19,
        fontSize: 13,
        fontFamily: "Poppins_medium",
        fontWeight: "500",
        width: 85,
    },
    signUp: {
        left: "74.63%",
        top: "8.33%",
        position: "absolute",
    },
    dontHaveAn: {
        top: "0%",
        left: "0%",
        fontFamily: "Poppins_medium",
        color: "#404b52",
        fontSize: 13,
        textAlign: "center",
    },
    signUpParent: {
        height: "2.96%",
        width: "58.67%",
        top: "88.67%",
        right: "26.13%",
        bottom: "8.37%",
        left: "21.2%",
        position: "absolute",
    },
    signInWith: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "74.59%",
        left: "50%",
        transform: [{ translateX: -148 }], // Half of the signInWith width (296/2)
        fontSize: 19,
        color: "#0a0615",
        fontFamily: "Poppins_medium",
        fontWeight: "500",
        textAlign: "center",
        width: 296,
    },
    forgotPassword: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "5.54%",
        top: "59.59%",
        left: "50%",
        transform: [{ translateX: -62.5 }], // Half of the forgotPassword width (125/2)
        fontSize: 12,
        color: "#404b52",
        fontFamily: "Poppins_medium",
        fontWeight: "500",
        textDecorationLine: "underline",
    },
    startTraining: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "5.54%",
        top: "54.2%",
        left: "50%",
        transform: [{ translateX: -40 }], // Half of the button width (80/2)
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "Poppins_bold",
        color: "#fff",
        textAlign: "center",
        lineHeight: 19,
        width: 80,
    },
    botao: {
        height: "5.54%",
        top: "52.59%",
        left: "50%",
        transform: [{ translateX: -119.5 }], // Half of the button width including margins (239/2)
        backgroundColor: "#c41230",
        shadowColor: "rgba(128, 128, 128, 0.2)",
        shadowOffset: {
            width: 0,
            height: 5.773642539978027,
        },
        shadowRadius: 9.62,
        elevation: 9.62,
        shadowOpacity: 1,
        borderRadius: 4,
        width: 239, // Adjust the button width as per your design
        position: "absolute",
    },
    input: {
        top: "43.47%",
        bottom: "50.86%",
        height: "5.67%",
        position: "absolute",
        fontFamily: "Poppins_semibold",
        paddingLeft: 15,
    },
    phoneEmail: {
        top: "43.23%",
        height: "5.67%",
        position: "absolute",
    },
    input1: {
        bottom: "58.74%",
        backgroundColor: "#f8fafc",
        left: "10.4%",
        right: "10.4%",
        borderRadius: 4,
        width: "79.2%",
        fontFamily: "Poppins_semibold",
        paddingLeft: 15,
    },
    phoneEmail1: {
        left: "15.73%",
        width: "25.87%",
        textAlign: "left",
        alignItems: "center",
        display: "flex",
        color: "#404b52",
        fontFamily: "Open Sans_regular",
        lineHeight: 23,
        fontSize: 13,
    },
    singIn: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 255,
        left: "50%",
        transform: [{ translateX: -137 }], // Half of the signIn width (274/2)
        fontSize: 20,
        lineHeight: 31,
        fontWeight: "600",
        fontFamily: "Poppins_semibold",
        width: 274,
    },
    signInItem: {
        top: 29,
        left: 30,
        width: 23,
        height: 15,
        position: "absolute",
    },
    groupChild: {
        left: 55,
        borderRadius: 12,
        backgroundColor: "#fdfdfd",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        width: 86,
        height: 87,
        top: 0,
        position: "absolute",
    },
    worldGym: {
        top: 87,
        fontSize: 32,
        fontFamily: "Jost_medium",
        color: "#040404",
        left: 0,
        textAlign: "center",
        fontWeight: "500",
        position: "absolute",
    },
    rectangleParent: {
        top: 0,
    },
    logoSigninInner: {
        top: 5,
    },
    wgc2023PrimaryGlobeRed2: {
        left: 56,
        width: 83,
        height: 96,
        top: 0,
        position: "absolute",
    },
    logoSignin: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 62, // Adjust the top position as per your design
        left: "50%",
        marginLeft: -97.5, // Half of the logo width (195/2)
        width: 195,
        height: 138,
    },
    logoSigninInner: {
        width: "100%",
        height: "100%",
    },
    groupIcon: {
        height: "3.79%",
        width: "35.41%",
        top: "76.6%",
        left: "50%",
        transform: [{ translateX: "-50%" }], // Center the image horizontally
        maxWidth: "100%",
        overflow: "hidden",
        maxHeight: "100%",
        position: "absolute",
    },
    signIn: {
        flex: 1,
        width: "100%",
        height: 812,
    },
});

export default SignIn;