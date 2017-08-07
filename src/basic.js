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
//函数声明，严格匹配参数列表（个数与类型）
function sum(x, y) {
    return x + y;
}
//函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
//函数中包含可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    return firstName;
}
var xcatliu = buildName('Xcat', 'Liu');
var xcat = buildName('Xcat');
//函数参数添加默认值，TypeScript会将添加了默认值的参数识别为可选参数，并不受「可选参数必须接在必需参数后面」的限制
function buildNameDefaultValue(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Qiu'; }
    return firstName + lastName;
}
var xcatliu1 = buildNameDefaultValue('Xcat', 'Liu');
var xcat1 = buildNameDefaultValue('Xcat');
//剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
function getName(n) {
    if (typeof n === 'number') {
        return n.toString();
    }
    return n;
}
//元祖， 类型不一致的数组
var xliu = ['xliu', 25];
//xcatliu2[2]  满足联合类型string | number
var xcatliu2;
xcatliu2 = ['Xcat Liu', 25, 'http://xcatliu.com/'];
//枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 1] = "Tue";
    Days[Days["Wed"] = 2] = "Wed";
    Days[Days["Thu"] = 3] = "Thu";
    Days[Days["Fri"] = 4] = "Fri";
    Days[Days["Sat"] = 5] = "Sat";
})(Days || (Days = {}));
;
console.log(Days['Sun'] === 0);
console.log(Days[0] === 'Sun');
console.log(Days['Mon']);
console.log(Days['Wed']);
