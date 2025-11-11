console.log("teste")
let nome = document.getElementById("form-nome");
let assunto = document.getElementById("form-assunto");
let descrisao = document.getElementById("form-descrisao");
let botao = document.getElementById("form-botao");

botao.addEventListener("click", ()=>{
    let mensagem = "Olá, meu nome é" + nome.value + ", gostaria de falar sobre " + assunto.value + ".\n\n" + descrisao.value
    //console.log(mensagem)
    mensagem = encodeURIComponent(mensagem)

    let whatsapp = "https://api.whatsapp.com/send?phone=" + telefone + "&text" + mensagem
    window.open(whatsapp, "_blank")
})