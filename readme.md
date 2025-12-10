# Portfolio - Leonardo Matheus

Portfolio pessoal desenvolvido com React e Vite, apresentando projetos, habilidades e experiência profissional.

![Portfolio Preview](./portfolio-preview.png)

**Acesso ao projeto em produção:** [Link Vercel](#)

## Estrutura do Projeto

```
portfolio-leomatth-react/
├── public/                 # Arquivos estáticos públicos
│   └── vite.svg
├── src/                    # Código-fonte da aplicação
│   ├── assets/            # Recursos estáticos (imagens, ícones)
│   ├── App.jsx            # Componente principal da aplicação
│   ├── App.css            # Estilos do componente App
│   ├── main.jsx           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais
├── .github/
│   └── workflows/         # Configurações de CI/CD
│       └── ci.yml         # Pipeline de integração contínua
├── dist/                  # Build de produção (gerado automaticamente)
├── eslint.config.js       # Configuração do ESLint
├── vite.config.js         # Configuração do Vite
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

## Funcionalidades

- **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela
- **Hot Module Replacement (HMR)**: Atualização instantânea durante o desenvolvimento
- **Build Otimizado**: Processo de build otimizado com Vite para produção
- **Code Quality**: Integração com ESLint para manutenção da qualidade do código
- **CI/CD**: Pipeline automatizado de integração contínua via GitHub Actions
- **Performance**: Carregamento rápido e otimizado de assets

## Tech Stack

### Dependências Principais
- **React 19.2.0**: Biblioteca JavaScript para construção de interfaces de usuário
- **React DOM 19.2.0**: Renderização de componentes React no DOM

### Ferramentas de Desenvolvimento
- **Vite 7.2.4**: Build tool e dev server de alta performance
- **@vitejs/plugin-react 5.1.1**: Plugin oficial do React para Vite
- **ESLint 9.39.1**: Linter para identificação de problemas no código
- **@eslint/js 9.39.1**: Configuração base do ESLint
- **eslint-plugin-react-hooks 7.0.1**: Regras do ESLint para React Hooks
- **eslint-plugin-react-refresh 0.4.24**: Suporte ao Fast Refresh do React
- **globals 16.5.0**: Variáveis globais para configuração do ESLint

### Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Executar build de produção
npm run build

# Executar linter
npm run lint

# Visualizar preview do build de produção
npm run preview
```

## Seções

O portfolio inclui as seguintes seções principais:

- **Início**: Apresentação pessoal e introdução
- **Sobre**: Informações sobre experiência e formação
- **Projetos**: Portfólio de projetos desenvolvidos
- **Habilidades**: Tecnologias e ferramentas dominadas
- **Contato**: Formas de entrar em contato

## Multilíngua

O projeto suporta múltiplos idiomas, permitindo navegação em diferentes localizações.

## Contribuindo

Contribuições são bem-vindas! Para contribuir com este projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- Siga as regras do ESLint configuradas no projeto
- Mantenha o código limpo e bem documentado
- Escreva commits descritivos seguindo o padrão convencional

## Encontrou um Bug?

Se você encontrou um bug ou tem uma sugestão de melhoria, por favor:

1. Verifique se o problema já foi reportado nas [Issues](https://github.com/leomatth/portfolio-leomatth/issues)
2. Se não encontrar, abra uma nova issue descrevendo:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. comportamento atual
   - Ambiente (navegador, versão do Node.js, etc.)

## Recursos e Documentação

### Documentação das Tecnologias

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [ESLint Documentation](https://eslint.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Ferramentas Utilizadas

- [Vercel](https://vercel.com/) - Deploy e hospedagem
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [ESLint](https://eslint.org/) - Linting e qualidade de código

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
