import { useEffect } from "react";

export default function Saude() {
  useEffect(() => {
    document.title = "Saúde Digital";
  }, []);

  return (
    <main>
      <h1>Saúde Digital</h1>
      <p>Bem-vindo à seção de Saúde Digital. Aqui você encontra recursos, dicas e informações sobre como utilizar a tecnologia para melhorar a sua saúde.</p>
      <section>
        <h2>Consultas Online</h2>
        <p>Agende consultas com profissionais de saúde diretamente pelo nosso sistema.</p>
      </section>
      <section>
        <h2>Monitoramento de Saúde</h2>
        <p>Utilize dispositivos para monitorar sua saúde e envie os dados para seu médico de forma prática.</p>
      </section>
    </main>
  );
}
