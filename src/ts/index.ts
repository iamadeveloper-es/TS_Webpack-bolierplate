import '../scss/style.scss';
import { Car } from './class/car';

const tesla = new Car('Tesla')

console.log(tesla);

const appTitle: string = '<h1>Webpack TS && SCSS boilerplate</h1>';

const renderTitle = document.getElementById('app')
renderTitle.innerHTML = appTitle