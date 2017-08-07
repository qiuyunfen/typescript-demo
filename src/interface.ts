class Student{
    fullName: string;
    id: number;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + ',' + middleName + ',' + lastName;
    }
}
//age? 为可选属性
//[propName] 为任意属性
//readonly 表示属性只能在对象创建时被赋值
interface Person {
    readonly id : number,
    firstName: string,
    lastName: string,
    age?: number,
    [propName: string]: any
}

let persontest: Person = {
    id:123,
    firstName: 'hello',
    lastName: 'world'
}


function greeter(person: Person) {
    return 'Hello,' + person.firstName + person.lastName;
}

var user = new Student('John', 'M.', 'Herry');

document.body.innerHTML = greeter(user);