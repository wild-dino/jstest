
function numbersInOrder(n) {
    for (let i=1; i <= n; i++) {
        switch (i) {
            case 5:  console.log('Пять'); break;
            case 13: console.log('Тринадцать');  break;
            case 22: console.log('Двадцать два'); break;
            case 35: console.log('Тридцать пять'); break;
            case 98: console.log('Девяносто восемь'); break;
            default: console.log(i)
        }
    }
    return 'Всего ' + n;
}

console.log(numbersInOrder(15));

