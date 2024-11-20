import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("Home"); // Navega para a tela "Home" após login bem-sucedido
      })
      .catch((error) => {
        console.error("Erro no login: ", error.message);
        alert("Login failed. Please check your credentials.");
      });
  };
  return (
    <View style={styles.container}>
      {/* Título e Subtítulo */}
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed!</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Esquecer senha */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      {/* Opção de criar uma conta */}
      <View style={styles.signupContainer}>
        <Text style={styles.createAccount}>Create new account</Text>
      </View>

      {/* Redes sociais */}
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require("../assets/google.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require("../assets/facebook.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            style={styles.socialIcon}
            source={require("../assets/apple.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",  // Alinha tudo ao topo
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    width: 167,
    height: 45,
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 30,
    textAlign: "center",
    color: "#1F41BB",
    marginTop: 40, // Distância maior do topo
  },
  subtitle: {
    width: 228,
    height: 60,
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 20,
    textAlign: "center",
    color: "#000000",
    marginBottom: 24,  // Menor espaço entre título e subtítulo
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#D0D0D0",
    backgroundColor: "#F1F4FF",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 12,
  },
  forgotPassword: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    marginLeft: 20,
    color: "#1F41BB",
    width: "100%",
    justifyContent: 'flex-end',
    marginBottom: 20,  
  },
  button: {
    width: 357,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#F1F4FF",
    backgroundColor: "#1F41BB",
    shadowColor: "rgba(203, 214, 255, 1.0)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,  // Espaço entre o botão e a opção de criar conta
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    marginBottom: 24,
  },
  createAccount: {
    width: 145,
    height: 21,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "#494949"
  },
  orText: {
    width: 120,
    height: 21,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "#1F41BB",
    marginBottom: 20,  // Distância do botão para os ícones sociais
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 200,  // Aumenta o tamanho dos ícones sociais
    height: 85,
  },

  socialIcon: {
    width: 30,
    height: 30,
  },
});
