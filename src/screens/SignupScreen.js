import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Account created successfully!");
        navigation.navigate("Login"); // Redireciona para a tela de login
      })
      .catch((error) => {
        console.error("Erro no cadastro: ", error.message);
        alert("Sign up failed. Please try again.");
      });
  };
  return (
    <View style={styles.container}>
      {/* Título e Subtítulo */}
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Opção de login */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account</Text>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#1F41BB",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 12,
  },
  button: {
    width: 357,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#1F41BB",
    shadowColor: "rgba(203, 214, 255, 1.0)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginBottom: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 60,
  },
  loginContainer: {
    marginBottom: 24,
  },
  loginText: {
    color: "#4E72B4",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  orText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#1F41BB",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 250, // Ajuste para melhor visualização
    height: 50,
  },
  socialButton: {
    marginHorizontal: 10, // Ajuste para reduzir a distância
  },
  socialIcon: {
    width: 35,
    height: 35,
  },
});
