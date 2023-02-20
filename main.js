let name = prompt('what do you want to do? (add, sub, mult, div)', '');
let a;
let b;

if (name == 'add'){
    a=Number(prompt("first number",""));
    b=Number(prompt("second number",""));
    c=a+b;
    alert('add: ' + a+" + "+b+" = "+c);
}
else if(name == 'sub') {
    a=Number(prompt("first number",""));
    b=Number(prompt("second number",""));
    d=a-b;
    alert('sub: ' + a+" - "+b+" = "+d);
}
else if(name == 'mult') {
    a=Number(prompt("first number",""));
    b=Number(prompt("second number",""));
    e=a*b;
    alert('mult: ' + a + " * " + b + " = " + e);
}
else if(name == 'div') {
    a=Number(prompt("first number",""));
    b=Number(prompt("second number",""));
    f=a/b;
    alert('div: ' + a + " / " + b + " = " + f);
}
else{
    alert('error')
}

