// Importações necessárias do Firebase modular
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações do Firebase do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyAQ_divlzOLfNZr9uudq5L48WqTJ6g0ixI",
  authDomain: "noahapp-405ac.firebaseapp.com",
  projectId: "noahapp-405ac",
  storageBucket: "noahapp-405ac.firebasestorage.app",
  messagingSenderId: "1075725279431",
  appId: "1:1075725279431:web:a756b4ae8d260c1b8f9ee2",
};

// Inicializando o Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Obter o serviço de autenticação
const auth = getAuth(app);

export { auth };
