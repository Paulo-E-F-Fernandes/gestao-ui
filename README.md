# Projeto Gestão-UI

* Este projeto foi gerado a partir de um outro projeto meu, o `Template-UI`, um projeto escrito em [Angular 6](https://angular.io/), [PrimeNG](https://www.primefaces.org/primeng/#/) e [Bootstrap4](https://getbootstrap.com/) e que continua em evolução, e o mesmo serve como base para os meus projetos pessoais, para experimentos e aprendizado.

---
## Pré-requisitos

* O versionador de código [*Git*](https://git-scm.com/);
* IDE para compatível com [*TypeScript*](https://www.typescriptlang.org/) (Ex.: [*Visual Studio Code*](https://code.visualstudio.com/));
* [*Node.js*](https://nodejs.org/en/) e [*npm*](https://www.npmjs.com/). O *npm* é instalado junto com o *Node.js*;
* [*Angular CLI*](https://cli.angular.io/). Para instalar o *Angular CLI* usaremos o *npm*. Para isso é necessário  1) Abrir um janela de terminal e 2) executar o comando `npm install -g @angular/cli => -g = global`.

---
## Configuração do ambiente

* Clonar os fontes do repositório *git* via **ssh** `git@github.com:Paulo-E-F-Fernandes/gestao-ui.git` **OU** **https** `https://github.com/Paulo-E-F-Fernandes/gestao-ui.git`;
* Entrar no diretório **gestao-ui** que foi criado após o clone do repositório, abrir um terminal neste diretório e executar o comando `npm install`, com isso o diretório **node_modules** é criado com as dependências do projeto;
* Após a execução do **npm install** já é possível iniciar o servidor com o comando `ng serve`;

---
## Servidor de desenvolvimento

* Para executar o servidor de desenvolvimento é só executar no terminal o comando `ng serve`, com isso a aplicação será publicada em um servidor *Node*. Para acessar a aplicação é só colocar a URL `http://localhost:4200/` no browser.

---
# Opções de execução

## Build da aplicação

* Executar o comando `ng build` para buildar o projeto. O artefato gerado será armazenado no diretório `dist/`. Usar a *flag* `--prod` para gerar a aplicação de produção.

---
# Ajuda

* Para ajuda com o Angular CLI use `ng help` ou acesse [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).