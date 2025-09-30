import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { TipoConsulta } from "../../types/tipoConsulta";
const API_URL = import.meta.env.VITE_API_URL_BASE; 
export default function Consulta() {
  useEffect(() => {
    document.title = "Editar Consulta";  
  }, []);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();        

  const { register, reset, handleSubmit } = useForm<TipoConsulta>();

  useEffect(() => {
    (
      async () => {
        const response = await fetch(`${API_URL}/consultas/${id}`);
        try {
          if (!response.ok) {
            throw new Error(`Erro ao buscar a consulta: ${response.statusText}`);
          }

          const data: TipoConsulta = await response.json();
          reset(data);  
        } catch (error) {
          console.error(error);
        }
      })();
  }, [id, reset]);


  const onSubmit = async (data: TipoConsulta) => {
    await fetch(`${API_URL}/consultas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Consulta editada com sucesso!");
    navigate("/consultas"); 
  };

  return (
    <main>
      <h1>Editar Consulta</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="frmEditarConsulta">
            <legend>Editar Consulta</legend>
            <div>
              <label htmlFor="paciente">Nome do Paciente:</label>
              <input
                type="text"
                id="paciente"
                placeholder="Nome do paciente"
                {...register("paciente")}
              />
            </div>
            <div>
              <label htmlFor="dataConsulta">Data da Consulta:</label>
              <input
                type="date"
                id="dataConsulta"
                {...register("dataConsulta")}
              />
            </div>
            <div>
              <label htmlFor="medico">Médico Responsável:</label>
              <input
                type="text"
                id="medico"
                placeholder="Nome do médico"
                {...register("medico")}
              />
            </div>
            <div>
              <label htmlFor="diagnostico">Diagnóstico:</label>
              <input
                type="text"
                id="diagnostico"
                placeholder="Diagnóstico da consulta"
                {...register("diagnostico")}
              />
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
