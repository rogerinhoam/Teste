
const firebaseConfig = {
  apiKey: "AIzaSyDS59CJPcKUkzG--dGS8noq1sPGb0Vyioc",
  authDomain: "oficina-f92e4.firebaseapp.com",
  projectId: "oficina-f92e4",
  storageBucket: "oficina-f92e4.firebasestorage.app",
  messagingSenderId: "302619302245",
  appId: "1:302619302245:web:c9eea1fa71e48d25eee98c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function mostrarAba(id) {
  document.querySelectorAll('.aba').forEach(el => el.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

// Exemplo de cadastro e leitura de clientes (básico)
const clientesDiv = document.getElementById('clientes');
clientesDiv.innerHTML = `
  <div class="card">
    <h3>Cadastro de Cliente</h3>
    <input type="text" id="nome" placeholder="Nome" />
    <input type="text" id="carro" placeholder="Carro" />
    <input type="text" id="placa" placeholder="Placa" />
    <button class="action" onclick="salvarCliente()">Salvar Cliente</button>
    <div id="listaClientes"></div>
  </div>
`;

function salvarCliente() {
  const nome = document.getElementById("nome").value;
  const carro = document.getElementById("carro").value;
  const placa = document.getElementById("placa").value;
  db.collection("clientes").add({ nome, carro, placa }).then(() => {
    alert("Cliente salvo com sucesso!");
    listarClientes();
  });
}

function listarClientes() {
  const lista = document.getElementById("listaClientes");
  lista.innerHTML = '';
  db.collection("clientes").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const c = doc.data();
      lista.innerHTML += `<p><strong>${c.nome}</strong> - ${c.carro} [${c.placa}]</p>`;
    });
  });
}

listarClientes();
