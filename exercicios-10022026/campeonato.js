class Time{
    constructor(nomedotime){
        this.nome = nomedotime
        this.vitorias = 0
        this.derrotas = 0
        this.empates = 0
        this.golsMarcados = 0
        this.golsSofridos = 0
    }

    calculaPontos(){
        let pontos = this.vitorias * 3 + this.empates
        return pontos
    }

    calculaSaldo(){
        let saldo = this.golsMarcados - this.golsSofridos
        return saldo
    }

    registrarFimDeJogo(golsPro, golsContra){
        this.golsMarcados += golsPro
        this.golsSofridos += golsContra

        if(golsPro > golsContra){
            this.vitorias ++
        }else if(golsContra > golsPro){
            this.derrotas ++
        }else{
            this.empates ++
        }
    }
}


let flamengo = new Time("Flamengo")
flamengo.registraFimdeJogo(30,0)

console.log(flamengo)

class Partida{
    constructor(mandante, visitante){
        this.mandante = mandante
        this.visitante = visitante
    }

    jogar(golsM, golsV){
        this.mandante.registrarFimDeJogo(golsM, golsV)
        this.visitante.registrarFimDeJogo(golsV, golsM)
    }
}

let time1 = new Time("Barcelona")
let time2 = new Time("Real Madrid")

let partida = new Partida(time1, time2)
partida.jogar(5, 6)

console.log(time1)
console.log(time2)