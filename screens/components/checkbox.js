import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const [] = useFonts({
    Jost_medium: require('../../assets/fonts/Jost_medium.ttf'),
    Open_Sans_regular: require('../../assets/fonts/Open_Sans_regular.ttf'),
    Poppins_regular: require('../../assets/fonts/Poppins_regular.ttf'),
    Poppins_medium: require('../../assets/fonts/Poppins_medium.ttf'),
    Poppins_semibold: require('../../assets/fonts/Poppins_semibold.ttf'),
    Poppins_bold: require('../../assets/fonts/Poppins_bold.ttf'),
    Rambla_regular: require('../../assets/fonts/Rambla_regular.ttf'),
    Rambla_bold: require('../../assets/fonts/Rambla_bold.ttf'),
  });

  return (
    <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
      {checked ? (
        <MaterialIcons name="check-box" size={24} color="#0a0615" />
      ) : (
        <MaterialIcons name="check-box-outline-blank" size={24} color="#0a0615" />
      )}
      <Text style={styles.checkboxLabel}>By continuing you accept our Privacy Policy</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Dimensions.get('window').height * 0.56, // Ajuste a posição vertical conforme necessário
    left: Dimensions.get('window').width * 0.05, // Ajuste a posição horizontal conforme necessário
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 12,
    lineHeight: 17,
    color: "#9299a3",
    fontFamily: "Poppins_regular",
  },
});

export default Checkbox;