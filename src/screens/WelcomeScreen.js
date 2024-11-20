import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcomeimage.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Discover Your Dream Job here</Text>
        <Text style={styles.subText}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonTextSignup}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  logo: {
    width: 385,
    height: 422,
    marginTop: 50,
    marginBottom: 47,
    marginLeft: 22,
    marginRight: 21,
    borderRadius: 20,
  },

  textContainer: {
    width: 343,
    height: 171,
  },

  mainText: {
    width: 343,
    height: 106,
    fontFamily: "Poppins",
    fontSize: 35,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 35,
    textAlign: "center",
    color: "#1F41BB",
  },

  subText: {
    width: 323,
    height: 42,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "#000000",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    height: 60,
  },

  button: {
    width: 160,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#1F41BB",
    shadowColor: "rgba(203, 214, 255, 1.0)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },

  signupButton: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },

  buttonText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center", // Adicionalmente centraliza o texto
    color: "#FFFFFF",
  },

  buttonTextSignup: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center", // Adicionalmente centraliza o texto
    color: "#0A0A0A",
  },

  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginBottom: 20,
  },

  icon: {
    marginHorizontal: 10,
  },
});
