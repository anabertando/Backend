import rl from 'readline-sync';

// let num = rl.questionInt("Informe um Numero:");
// while (num <= 10) {
//     num++;
//     if (num % 2 == 0) {
//         continue;
//     }
//     else {
//         console.log(num)
//     }
// }

// WHILE - Exercício 01: Tabuada

let numero = rl.questionInt("Digite um número para ver a tabuada:");
let cont = 1;


while (cont <= 10) {
    console.log(`${numero} x ${cont} = ${numero * cont}`);
    cont++;
}

// WHILE - Exercício 02: Média Geral da Turma

let quantidadeAlunos = rl.questionInt("Digite o número de alunos da turma:");
let somaMedias = 0;
let aluno = 1;


while (aluno <= quantidadeAlunos) {
    console.log(`Aluno ${aluno}`);

    let contBimestres = 1;
    let somaNotas = 0;


    while (contBimestres <= 4) {
        let nota = rl.questionInt(`Aluno ${aluno} - Nota do ${contBimestres}º bimestre:`);
        somaNotas += nota;
        contBimestres++;
    }

    let mediaAluno = somaNotas / 4;

    somaMedias += mediaAluno;
    console.log(`Média do aluno ${aluno}: ${mediaAluno.toFixed(2)}`);
    aluno++;
}

let mediaTurma = somaMedias / quantidadeAlunos;
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);

// DO WHILE - Exercício 01: Jogo de Adivinhação

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;

do {
    tentativa = rl.questionInt("Adivinhe o número entre 1 e 100:");

    if (tentativa === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
    } else if (tentativa < numeroSecreto) {
        console.log("O número é maior!");
    } else {
        console.log("Tente um número menor");
    }
} while (tentativa !== numeroSecreto);

// FOR - Exercício 01: Sequência de Fibonacci
/
let a = 0, b = 1;

console.log("\n=== Sequência de Fibonacci ===");
for (let i = 0; i < 20; i++) {
console.log(a);
let temp = a + b;
a = b;
b = temp;
}

// FOR - Exercício 02: Imposto de Renda



for (let i = 1; i <= 10; i++) {
    let nome = rl.question(`Digite o nome da pessoa ${i}:`);
    let salario = rl.question(`Digite o salário bruto de ${nome}:`);
    let imposto = 0;

    if (salario > 4660) {
        imposto = salario * 0.275;
    } else if (salario > 3750) {
        imposto = salario * 0.225;
    } else if (salario > 2800) {
        imposto = salario * 0.15;
    } else if (salario > 2100) {
        imposto = salario * 0.075;
    }

    console.log(`${nome} deve pagar R$ ${imposto.toFixed(2)} de imposto.`);
    totalImposto += imposto;
}

console.log(`Total de Imposto de Renda: R$ ${totalImposto.toFixed(2)}`);

// FOR IN - Exercício 01: Propriedades de Objeto

let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
    };
    
    for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
    }
    
// FOR OF - Exercício 02: Elementos de um Array

let frutas = ["maçã", "banana", "laranja"];

console.log("\n=== Frutas ===");
for (let fruta of frutas) {
console.log(fruta);
}

