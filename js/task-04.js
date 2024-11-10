/*
 * Напиши функцию `formatString(string)`, которая принимает строку и форматирует
 * её, если необходимо.
 *
 * - Если длина строки не превышает `40 символов`, функция возвращает её в исходном
 *   виде.
 * - Если длина больше `40 символов`, то функция обрезает строку до 40-ка символов
 *   и добавляет в конец строки троеточие `'...'`, после чего возвращает
 *   укороченную версию.
 */

const formatString = function (string) {
  const maxLength = 40;

  // if (string.length > maxLength) {
  //   return string.slice(0, maxLength - 3) + '...';
  // }

  // return string;

  return string.length <= maxLength
    ? string
    : string.slice(0, maxLength - 3) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернётся оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернётся форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернётся оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернётся форматированная строка
