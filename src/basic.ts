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

//函数声明
function sum(x: number, y: number) : number {
    return x + y;
}
//函数表达式
let mySum:(x: number, y: number) => number = function(x: number, y: number):number {
    return x + y;
}
