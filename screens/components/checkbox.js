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
    Poppins_regular: require('../../assets/fonts/Poppins_regular.ttf'),
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
    top: 250,
    left: 45,
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