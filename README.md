# migrating-to-eslint

SPA para teste de migração de tslint para eslint.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Feitos pós gerar SPA

*Sequencias de comandos:*
- npm i tslint@5.18 --save-dev
- ng add @angular-eslint/schematics
- ng g @angular-eslint/schematics:convert-tslint-to-eslint {{nome-do-projeto}}
- Deletar tslint.json
- npm uninstall tslint

*Plugins*:
- npm install prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-sonarjs eslint-plugin-jsdoc eslint-plugin-import eslint-plugin-prefer-arrow --save-dev

*Referências*:
https://coderarena.com.br/posts/como-usar-prettier-com-eslint-e-typescript-no-vscode/
https://github.com/angular-eslint/angular-eslint#readme
https://dev.to/bhargavmantha/the-secret-to-configuring-eslint-prettier-prettier-eslint-plugin-in-vscode-for-angular-ts-and-js-project-51la

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
