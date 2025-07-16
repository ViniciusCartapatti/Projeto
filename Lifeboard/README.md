# Lifeboard

Lifeboard é um dashboard de vida que permite aos usuários monitorar e atualizar seus dados diários, incluindo sono, humor, metas, finanças, ingestão de água e treino. O projeto é construído com Next.js e utiliza Tailwind CSS para um design responsivo e moderno.

## Funcionalidades

- **Dashboard Interativo**: Visualize dados diários em um único lugar.
- **Componentes Modulares**: Cada aspecto da vida é representado por um componente separado, facilitando a manutenção e a escalabilidade.
- **Gráficos Interativos**: Utilize Chart.js para visualizar dados de forma gráfica e intuitiva.
- **Armazenamento Local**: Gerencie o estado da aplicação com Zustand ou Firebase.
- **Autenticação**: Integração com Clerk para autenticação de usuários.
- **Modo Escuro**: Alternância entre modos claro e escuro para uma melhor experiência do usuário.
- **Responsividade**: Design otimizado para dispositivos móveis.

## Estrutura do Projeto

```
Lifeboard
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Dashboard
│   │   │   ├── SleepCard.tsx
│   │   │   ├── MoodCard.tsx
│   │   │   ├── GoalsCard.tsx
│   │   │   ├── FinanceCard.tsx
│   │   │   ├── WaterCard.tsx
│   │   │   ├── WorkoutCard.tsx
│   │   │   └── Chart.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   ├── tarefas.tsx
│   │   ├── financas.tsx
│   │   └── saude.tsx
│   ├── store
│   │   └── index.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── styles
│   │   └── globals.css
│   ├── utils
│   │   └── chartConfig.ts
│   └── types
│       └── index.ts
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd Lifeboard
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Execute o projeto:
   ```
   npm run dev
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.