import { useState } from "react";
import "./atividade.css";

function Atividade() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);

  async function pegarCEP(e) {
    if (e.key === "Enter") {
      if (!cep.trim() || cep.length !== 8 || isNaN(cep)) {
        alert("Por favor, insira um CEP válido.");
        return;
      }

      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();

        if (data.erro) {
          alert("CEP não encontrado!");
          setEndereco(null);
        } else {
          setEndereco(data);
        }
      } catch (err) {
        console.error(err);
        alert("Erro ao buscar o CEP.");
      }
    }
  }

  return (
    <div className="container">
      <h2>Buscar CEP com Enter</h2>
      <input
        className="cep"
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onKeyDown={pegarCEP} // ✅ importante
      />

      {endereco && (
        <div className="resultado">
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default Atividade;
