let num = +prompt('Введите любое число');

for (let i = 2; i <= num; i++) { 
 
    if (i === num) {
        console.log(num, "/true"); break;
    } else if (num % i === 0) {
        console.log(num, "/false"); break;
    }
}
