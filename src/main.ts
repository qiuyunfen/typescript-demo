import { sayHello } from './greet';

function showHello(divName: string, msg: string) {
    var ele = document.getElementById(divName);
    ele.innerText = sayHello(msg);
}

showHello('greeting', 'Typescript');