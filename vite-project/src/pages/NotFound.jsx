import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você tentou acessar não existe.</p>

      {/* Aqui estamos usando Link corretamente */}
      {/* <Link to="/">Voltar para a Home</Link> */}
    </div>
  );
}

export default NotFound;
