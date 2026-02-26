class Time{

 constructor(nome){
this.nome=nome
this.golsMarcados=0
this.golsSofridos=0
this.vitorias=0
this.derrotas=0
this.empate=0
 }
    calcularPontos(){
    let pontos = this.vitorias * 3 + this.empate
    return pontos
    }

    calcularSaldo(){
    let saldo =this.golsMarcados - this.golsSofridos
    return saldo
    }

    registrarFimDeJogo(golsPro,golsContra){
        this.golsMarcados += golsPro
        this.golsSofridos += golsContra

        if(golsPro > golsContra){
         this.vitorias ++
        }else if (golsContra > golsPro){
            this.derrotas ++
        }else{
            this.empate ++
        }
    }

}
class Partida{

    constructor(mandante,visitante){
        this.mandante =mandante
        this.visitante =visitante
    }
jogar(golM,golsV){
    this.mandante.registrarFimDeJogo(golM,golsV)
    this.visitante.registrarFimDeJogo(golsV,golM)
}


}

let time1= new Time("barcelona")
let time2= new Time("real madrid")

let partida= new Partida(time1,time2)
partida.jogar(5,6)
console.log(time1)
console.log(time2)