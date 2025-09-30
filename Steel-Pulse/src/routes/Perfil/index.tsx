import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { TipoPerfil } from "../../types/tipoPerfil";
const API_URL = import.meta.env.VITE_API_URL_BASE;

export default function Perfil() {
  useEffect(() => {
    document.title = "Perfil do Paciente";
  }, []);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { register, reset, handleSubmit } = useForm<TipoPerfil>();

  useEffect(() => {
    (
      async () => {
        const response = await fetch(`${API_URL}/perfil/${id}`);
        try {
          if (!response.ok) {
            throw new Error(`Erro ao buscar perfil: ${response.statusText}`);
          }

          const data: TipoPerfil = await response.json();
          reset(data);
        } catch (error) {
          console.error(error);
        }
      })();
  }, [id, reset]);

  const onSubmit = async (data: TipoPerfil) => {
    await fetch(`${API_URL}/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Perfil atualizado com sucesso!");
    navigate("/perfil");
  };

  return (
    <main>
      <h1>Editar Perfil</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="frmEditarPerfil">
            <legend>Editar Perfil</legend>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" placeholder="Nome do paciente" {...register("nome")} />
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input type="date" id="dataNascimento" {...register("dataNascimento")} />
            </div>
            <div>
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" placeholder="Telefone" {...register("telefone")} />
            </div>
            <div>
              <button type="submit">Salvar Alterações</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
