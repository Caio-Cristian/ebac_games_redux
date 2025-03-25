# Resumo do Projeto

Este projeto é uma aplicação React criada com o Create React App. Ele simula uma loja de jogos, permitindo que os usuários visualizem produtos, adicionem itens ao carrinho e interajam com uma API simulada.

## Captura de Tela

![Captura de Tela do Projeto](./midia/games.png)

## Funcionalidades Principais:

Interface de Usuário: Desenvolvida com React, oferecendo uma experiência interativa e responsiva.
Gerenciamento de Estado: Utiliza Redux e RTK-Query para gerenciar o estado global e realizar chamadas à API.
API Simulada: Um servidor JSON (json-server) é usado para simular uma API REST, acessível em http://localhost:4000.
Testes Automatizados: Inclui testes com Jest e React Testing Library para garantir a qualidade do código.

## Introdução ao Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada automaticamente sempre que você fizer alterações no código.
Você também verá mensagens de erro ou avisos no console.

### `npx json-server db.json --port 4000`

Inicia um servidor JSON para simular uma API.
O servidor estará acessível em [http://localhost:4000](http://localhost:4000).

### `npm test`

Inicia o executor de testes no modo interativo.
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.
O React é empacotado no modo de produção e os arquivos são otimizados para melhor desempenho.

Os arquivos de saída serão minificados e terão nomes com hashes para cache eficiente.
Seu aplicativo estará pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais detalhes.

### `npm run eject`

**Atenção: esta é uma operação sem retorno. Após usar `eject`, não é possível desfazer!**

Se você não estiver satisfeito com as configurações padrão do Create React App, pode usar `eject` a qualquer momento.
Este comando copia todos os arquivos de configuração e dependências transitivas (como Webpack, Babel e ESLint) diretamente para o projeto, permitindo controle total sobre eles.

Após ejetar, todos os scripts continuarão funcionando, mas apontarão para as configurações copiadas, que você poderá personalizar.
No entanto, lembre-se de que essa ação deve ser usada com cautela.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, acesse a [documentação oficial do React](https://reactjs.org/).

---
**Nota:** Este projeto também inclui um servidor JSON para simular uma API. Certifique-se de executar o comando correspondente antes de testar funcionalidades que dependem de dados dinâmicos.
