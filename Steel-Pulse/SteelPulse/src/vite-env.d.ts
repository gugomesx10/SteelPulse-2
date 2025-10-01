/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  // Adicione outras variáveis aqui se necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
