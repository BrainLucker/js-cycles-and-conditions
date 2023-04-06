## Задания на использование циклов и условий

1. При помощи цикла вывести в консоль числа от 5 до 10 включительно. Цикл можно использовать любой.

2. При помощи цикла for вывести в консоль числа от 20 до 10. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 – остановить весь цикл.

3. При помощи цикла for вывести в консоль чётные числа от 2 до 10 включительно.

4. Переписать цикл for на вариант с while. Результат должен остаться точно таким же.
Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

5. Заполнить массив цифрами от 5 до 10 включительно. Элементы массива можно сформировать так же, как и обращаться к ним: arr[0].

## Продвинутые задания на использование циклов и условий

1. Заполнить новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаться так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив.

2. Изменить данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка - то к ней было добавлено " - done".
Для определения типа данных использовать typeof();
Должно получиться:
[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

3. Развернуть массив data наоборот при помощи цикла и записать данные в массив result.
Должно получиться:
[ 'Homework', 20, 'Shopping', 10, 5 ]

## Задача на формирование фигуры

Необходимо написать код, который при помощи звездочек (*) выведет в консоли такую фигуру:

     *
    ***
   *****
  *******
 *********
***********

Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС