import whatsappContacts from "../mocks/whatsAppConfigs.js";

export function openWhatsApp(contactKey) {
    const contact = whatsappContacts[contactKey];
    if (!contact) return console.error("Contato WhatsApp não encontrado:", contactKey);
    
    const { number, message } = contact;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
}

window.openWhatsApp = openWhatsApp;