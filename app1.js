//Здесь число а равно 1 инкремент  прибавляет +1 поэтому с равно 2
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2 число b равно 1 по идее если это декремент он должен уменьшить был на 1, тут не понятно
d = b++;
alert(d); //ответ: 1

//пример 3 здесь а у нас уже равна 2 см.выше к ней мы прибавляем инкремент +1 и прибавляем 2.
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4 здесь b равно 1 по идее декремент прибавит 1 будет два, затем 2 + 2 будет 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
