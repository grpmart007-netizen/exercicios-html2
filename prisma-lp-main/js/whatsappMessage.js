function enviarMensagemDeWhatsapp(areaClicada) {
  let texto = "";

  switch (areaClicada) {
    case "conheca-sobre-nos":
      texto = encodeURIComponent(
        "Olá! Gostaria de saber mais sobre vocês e como funcionam os cursos. Poderiam me contar mais?"
      );
      break;

    case "inscreva-se":
      texto = encodeURIComponent(
        "Olá! Estou interessado em me inscrever, mas vi que ainda não há inscrições abertas. Poderiam me avisar quando estiverem disponíveis?"
      );
      break;

    case "todos-os-cursos":
      texto = encodeURIComponent(
        "Olá! Gostaria de ver a lista completa de cursos disponíveis. Poderiam me enviar mais informações?"
      );
      break;

    case "conheca-mais-cursos":
      texto = encodeURIComponent(
        "Olá! Gostei dos cursos apresentados, mas quero conhecer mais detalhes sobre cada um. Podem me ajudar?"
      );
      break;

    default:
      texto = encodeURIComponent(
        "Olá! Estou interessado em saber mais informações."
      );
  }

  const url = `https://api.whatsapp.com/send?phone=27992027198&text=${texto}`;
  window.open(url, "_blank");
}

window.enviarMensagemDeWhatsapp = enviarMensagemDeWhatsapp;
