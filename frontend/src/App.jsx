import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mensagem, setMensagem] = useState("Conectando com a API...");

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((resposta) => resposta.json())
      .then((dados) => setMensagem(dados.message))
      .catch(() => setMensagem("Não foi possível conectar com a API."));
  }, []);

  return (
    <main>
      <h1>Portal Acolhimento</h1>
      <p>Orientação e agendamento de serviços gratuitos para imigrantes.</p>

      <section>
        <h2>Estado da conexão</h2>
        <p>{mensagem}</p>
      </section>
    </main>
  );
}

export default App;