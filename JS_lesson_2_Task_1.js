// JS. Lesson 2 Task 1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Т.к. форма префиксная, инкрементирование // производится сразу,и возрват - уже с обновленным значением
d = b++; alert(d);           // 1 Т.к. форма постфиксная сначала происходит // возврат значения, а потом уже выполняется инкрементирование
c = (2+ ++a); alert(c);      // 5 В переменной, a у нас уже хранится 2, // форма префиксная, значит инкрементирование происходит сразу, т.е. в а уже // 3, и прибавляем 2, получаем 2+3=5 
d = (2+ b++); alert(d);      // 4 В переменной b? у нас уже  хранится 2, // форма постфиксная значит ++ не учитываем, а сразу складываем с 2, т.о. 2 // + 2 = 4, прям как в школе)
alert(a);                    // 3 В переменной a, у нас хранилось 3, смотри этап с выражением "c"
alert(b);                    // 3 В пременной b, у нас хранилось 2, смотри этап с выражением "d", но там было постфиксная форма, т.о. добавляется ещё и она, т.е. + 1 и таким образом, b = 2 + 1 = 3.

//Почему код даёт именно такие результаты? Ответы в комментариях.