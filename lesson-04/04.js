/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/


function doubleEachCharacter(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        result += element + element
    }
    return result
}

console.log(doubleEachCharacter('Daniel'));