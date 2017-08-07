function greeter(person : string) {
    return 'Hello' + person;
}

var user = "John";

document.body.innerHTML = greeter(user);

let isDone:boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1);
let createdByBoolean:boolean = Boolean(0);

///类型推论
let mynumber;
mynumber = 7;
mynumber = 'seven';