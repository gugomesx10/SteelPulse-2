import { useState } from "react";

export default function PerfilPage() {
  const [nome, setNome] = useState("Gustavo Gomes");
  const [email, setEmail] = useState("rm555999@fiap.com.br");
  const [telefone, setTelefone] = useState("+55 11 9999-9999");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Editar Perfil</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="telefone" className="block text-gray-700">Telefone</label>
            <input
              type="text"
              id="telefone"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-amber-400 text-white rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
}
