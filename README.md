# NgNPF

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

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


## 'ng g c auth/login'
## 'ng g c auth/singup'
## 'ng g c content/'
## 'ng g m material/ng-mat'
## 'ng add @angular/material'
## 'const materialCom = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [materialCom],
  exports: [materialCom],
})
export class NgMatModule { }' 


## '
  { path : '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'content', component: ContentComponent}
'

## bootstrap 4 
'// in your terminal in the root of your project
npm install bootstrap jquery popper'

'// scrll down to the style section and add bootstrap line below
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],'

## 