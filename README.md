# vxo@hand mashup with Angular

## Installation Notes
In order to run the project you need to have Node.js and Angular installed.
You can find installation information for Node.js here: https://nodejs.org/en/.
Then you can use "npm" to install Angular with this command: `npm install -g @angular/cli`.
To install all dependencies for this project run the following command: `npm install` in the root folder of the project.

## Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. If you plan to host your project not in the root directory of your domain, you need to use the `--base-href <FOLDER>` flag. For example, you host this project under www.mydomain.com/mashup/ you need to run the following command: `ng build --base-href /mashup/` 

## Code Scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## PHP Files
For a component (career), a PHP file is necessary. This PHP file needs to be accessible, that means you need to host it seperatly. You find the PHP file in the folder `/src/php`. Currently it is also hosted under `https://celtest1.lnu.se/mashup/php/` and this url is included in the code. If you want to host your own php files (e.g. for local development or to make changes at the php files), you need to change the url in the following file:
`
/src/app/career/career.service.ts
`


