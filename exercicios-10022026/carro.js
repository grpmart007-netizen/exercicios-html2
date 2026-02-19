class carro{
    velocidade = 0
  constructor(marca, modelo, ano, cor){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
  }
    acelerar(aceleracao){
        this.velocidade += aceleracao
  }
  freiar(frenagem){
    this.velocidade -= frenagem
    if(this.velocidade < 0 ){
        this.velocidade = 0
    }
  }
}

let lamborguini = new carro("aventor", "lamborguini", 2011, "vermelho")
lamborguini.acelerar(70)
lamborguini.acelerar(50)
lamborguini.freiar(130)
console.log(lamborguini)