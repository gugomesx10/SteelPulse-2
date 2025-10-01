# SteelPulse


## Descrição
SteelPulse é um sistema de hospital para agendamento de consultas médicas online. O objetivo é facilitar o acesso dos pacientes aos médicos, permitindo que agendem consultas de forma rápida, segura e sem burocracia. O sistema oferece uma interface moderna, responsiva e totalmente em português, voltada para clínicas, hospitais ou consultórios que desejam digitalizar o atendimento.

Utiliza React + TypeScript, Vite, Tailwind CSS e Context API para garantir performance, escalabilidade e facilidade de manutenção.

## Funcionalidades
- Cadastro e login de usuários
- Listagem de médicos por especialidade
- Agendamento de consultas
- Visualização de consultas marcadas
- Perfil do usuário
- Interface responsiva e intuitiva

## Tecnologias
- React 19 + TypeScript
 Menu interativo no topo: ao clicar na foto de perfil, você pode visualizar informações do desenvolvedor, acessar o GitHub e fechar o menu.

## Instalação
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

## Configuração do ambiente
- Crie um arquivo `.env` na raiz do projeto e defina a URL do backend:
  ```
  VITE_BACKEND_URL=http://localhost:3000
  ```

## Estrutura de pastas
```
SteelPulse/
  src/
    components/    # Componentes reutilizáveis
    context/       # Contexto global
    routes/        # Páginas do sistema
    index.css      # Estilos globais
    main.tsx       # Entrada principal
  tailwind.config.js
  postcss.config.cjs
  package.json
  ...
```

## Observações
- O projeto utiliza Tailwind CSS customizado (cor `primary` definida em `tailwind.config.js`).
- Para funcionar corretamente, mantenha os arquivos de configuração do Tailwind e PostCSS na raiz do projeto.
- As imagens devem estar presentes na pasta `src/assets`.

## Licença
MIT
      reactDom.configs.recommended,
    ],
    languageOptions: {
      },
      // other options...
    },
  },
])
```
