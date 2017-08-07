//联合类型
let mynumber : string | number;
mynumber = 'seven';
mynumber = 7;

//访问联合类型的属性或方法,只能访问此联合类型的所有类型里共有的属性或方法
function getString(something: string | number) : string {
    return something.toString();
}

//数组类型
let fibonacci : number[] = [1,2,3,5,8];
//使用泛型
let fibonacci1 : Array<number> = [1,2,3,5,8];

//使用接口表示数组
interface numberArray {
    [index: number] : number
}
let numArray: numberArray = [1,2,3,5,8];

//数组中出现任意类型
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

//函数声明，严格匹配参数列表（个数与类型）
function sum(x: number, y: number) : number {
    return x + y;
}
//函数表达式
let mySum:(x: number, y: number) => number = function(x: number, y: number):number {
    return x + y;
}

//用接口定义函数形状
interface searchFun{
    (source: string, subString: string) : boolean;
}

let mySearch : searchFun;
mySearch = function(source: string, subString: string) : boolean {
    return source.search(subString) !== -1;
}

//函数中包含可选参数
function buildName(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}
let xcatliu = buildName('Xcat', 'Liu');
let xcat = buildName('Xcat');

//函数参数添加默认值，TypeScript会将添加了默认值的参数识别为可选参数，并不受「可选参数必须接在必需参数后面」的限制
function buildNameDefaultValue(firstName: string, lastName: string = 'Qiu') {
    return firstName + lastName;
}

let xcatliu1 = buildNameDefaultValue('Xcat', 'Liu');
let xcat1 = buildNameDefaultValue('Xcat');

//剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}
let a = [];
push(a, 1, 2, 3);

//函数重载，允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse(x: number) : number;
function reverse(x: string) : string;
function reverse(x: number | string) : number | string {
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else {
        return x.split('').reverse().join('');
    }
}

