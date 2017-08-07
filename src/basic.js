//联合类型
var mynumber;
mynumber = 'seven';
mynumber = 7;
//访问联合类型的属性或方法,只能访问此联合类型的所有类型里共有的属性或方法
function getString(something) {
    return something.toString();
}
//数组类型
var fibonacci = [1, 2, 3, 5, 8];
//使用泛型
var fibonacci1 = [1, 2, 3, 5, 8];
var numArray = [1, 2, 3, 5, 8];
//数组中出现任意类型
var list = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
//函数声明
function sum(x, y) {
    return x + y;
}
//函数表达式
var mySum = function (x, y) {
    return x + y;
};
