/**
 * Configurações do Chat Widget - PrismaTech
 * Integração com N8N via SQS (polling assíncrono)
 */

export const chatConfig = {
    // URLs dos webhooks N8N
    webhookUrl: 'https://box.automacaoklyon.com/webhook/prismatech-chat',
    pollingUrl: 'https://box.automacaoklyon.com/webhook/prismatech-chat-poll',

    // Configurações de polling
    pollingInterval: 2000,      // 2 segundos entre cada poll   
    pollingTimeout: 120000,     // 2 minutos máximo de polling

    // Mensagens
    welcomeMessage: 'Oi! Tudo bem? Sou a Lara da PrismaTech. Em que posso te ajudar hoje?',

    errorMessage: 'Ops, tive um probleminha aqui. Pode tentar de novo daqui a pouquinho?',

    // Comportamento
    autoOpen: true,
    autoOpenDelay: 3000,

    // Quick actions
    quickActions: [
        { label: 'Ver cursos', message: 'Quais cursos vocês têm?' },
        { label: 'Preços', message: 'Quanto custa?' },
        { label: 'Agendar visita', message: 'Posso visitar a escola?' },
        { label: 'Endereço', message: 'Onde fica a escola?' }
    ]
};

export default chatConfig;
