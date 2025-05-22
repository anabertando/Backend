import rl from 'readline-sync';

let num = rl.questionInt("Informe um Numero:");
while (num <= 10) {
    num++;
    if (num % 2 == 0) {
        continue;
    }
    else {
        console.log(num)
    }
}