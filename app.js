
function mostrarAba(id) {
  document.querySelectorAll('.aba').forEach(aba => {
    aba.classList.remove('ativa');
  });
  document.getElementById(id).classList.add('ativa');
}

// Firebase SDK e suas credenciais
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDS59CJPcKUkzG--dGS8noq1sPGb0Vyioc",
  authDomain: "oficina-f92e4.firebaseapp.com",
  projectId: "oficina-f92e4",
  storageBucket: "oficina-f92e4.appspot.com",
  messagingSenderId: "302619302245",
  appId: "1:302619302245:web:c9eea1fa71e48d25eee98c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemplo de uso (você pode ajustar para clientes, serviços etc)
async function salvarExemplo() {
  try {
    await addDoc(collection(db, "testes"), {
      nome: "Teste",
      horario: new Date().toISOString()
    });
    alert("Salvo com sucesso!");
  } catch (e) {
    console.error("Erro ao salvar:", e);
  }
}
