
import entradaDados from 'readline-sync';
//01
let dia = Number(entradaDados.question("informe o dia da semana:"))

switch (dia) {
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda");
        break;

    case 3:
        console.log("terça");
        break;

    case 4:
        console.log("Quarta");
        break;

    case 5:
        console.log("Quinta");
        break;

    case 6:
        console.log("Sexta");
        break;

    case 7:
        console.log("Sábado");
        break;


    default:
        console.log('Valor Inválido\n Informe o valor no intervalo de 1 á 7!');
        break;
}

// 02

let Mes = Number(entradaDados.question("informe o mês do ano:"))

switch (Mes) {
    case 1:
        console.log("Janeiro");
        break;

    case 2:
        console.log("Fevereiro");
        break;

    case 3:
        console.log("Março");
        break;

    case 4:
        console.log("Abril");
        break;

    case 5:
        console.log("Maio");
        break;

    case 6:
        console.log("Junho");
        break;

    case 7:
        console.log("Julho");
        break;

    case 8:
        console.log("Agosto");
        break;

    case 9:
        console.log("Setembro");
        break;

    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;


    default:
        console.log('Valor Inválido\n Informe o valor no intervalo de 1 á 12!');
        break;
}

// 03
let x = entradaDados.questionFloat('Informe o primeiro valor:')
let y = entradaDados.questionFloat('Informe o segundo valor:')
let op = entradaDados.questionInt('Escolha a opção: \n [1] Soma \n [2] Subtração \n[3] Multiplicação \n[4] divisão')

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;

    case 1:
        console.log(`${x} - ${y} = ${x - y}`);
        break;

    case 1:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 1:
        console.log(`${x} / ${y} = ${x / y}`);
        break;

    default:
        console.log("opção inválida!")
        break;

}

// 04
let salario = entradaDados.questionFloat("Informe seu salario")
let cat = entradaDados.question("Informe a categoria de bonificação").toUpperCase();
let bonus = 0

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salário:${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;

    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo salário:${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;

    case 'C':
        bonus = salario * 0.15;
        console.log(`Novo salário:${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo salário:${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
        break;

    default:
        console.log('Categoria Inválida');
        break;


}
