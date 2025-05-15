// 01
let apartamento = {
    quartos: 2,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
};

console.log(
    `Apartamento com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`
);

//02
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
};

console.log(
    `O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por R$ ${produtoEmbalado.preco.toFixed(2)}.`
);

//03
class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}.`
    }
}



let casa = new Imovel(3, 'sobrado', ' Rua das dores, bairro programador, nº 1010');
let apto = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
console.log(casa.exibirInformacoes());
console.log(apto.exibirInformacoes());


//04
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo}, ano ${this.ano}.`;
    }
}

let carro = new Veiculo("Toyota", "Corolla", 2022);
let moto = new Veiculo("Honda", "CBR600RR", 2021);

console.log(carro.exibirDetalhes());
console.log(moto.exibirDetalhes());




