function myFunction() {
  // Значения
  const dollars = document.getElementById('dollars').innerHTML;
  const euro = document.getElementById('euro').innerHTML;
  const ruble = document.getElementById('ruble').innerHTML;
  const hrn = document.getElementById('hrn').value;

  // Функция-калькулятор с замыканием
  const currencyConverter = function (rate) {
    return function (hrn) {
      return hrn / rate;
    };
  };
  const doll = currencyConverter(dollars);
  const eur = currencyConverter(euro);
  const rub = currencyConverter(ruble);

  // Вывод на экран значений
  document.getElementById('d').innerHTML = doll(hrn).toFixed(2);
  document.getElementById('e').innerHTML = eur(hrn).toFixed(2);
  document.getElementById('r').innerHTML = rub(hrn).toFixed(2);
}
const d = new Date();
const month = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
document.getElementById('newData').innerHTML = `${d.getFullYear()}-${
  month[d.getMonth()]
}-${d.getDate()}`;
