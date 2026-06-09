/**
 * Chat Widget - PrismaTech
 * Widget de chat com polling para sistema SQS assíncrono
 * 
 * Recursos:
 * - Polling assíncrono para buscar respostas
 * - Rate limiting para proteção contra spam
 * - Gerenciamento de sessão via localStorage
 */

import { chatConfig } from '../mocks/chatConfig.js';

class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.sessionId = this.getOrCreateSessionId();
        this.ticketId = null;
        this.ticketStatus = 'AGUARDANDO';
        this.isTyping = false;
        this.isPolling = false;
        this.pollingTimer = null;
        this.pollingStartTime = null;
        this.lastMessageId = null;
        this.storageKey = 'prismatech_chat_visited';

        // === RATE LIMITING ===
        this.messageTimestamps = [];
        this.maxMessagesPerMinute = 10;  // Máximo 10 mensagens por minuto
        this.minTimeBetweenMessages = 2000; // Mínimo 2 segundos entre mensagens
        this.lastMessageTime = 0;
        this.isRateLimited = false;

        this.userData = {
            name: null,
            email: null,
            phone: null
        };

        this.init();
    }

    getOrCreateSessionId() {
        const storedSessionId = localStorage.getItem('prismatech_chat_session');
        if (storedSessionId) return storedSessionId;

        const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('prismatech_chat_session', newSessionId);
        return newSessionId;
    }

    isFirstVisit() {
        return !localStorage.getItem(this.storageKey);
    }

    markAsVisited() {
        localStorage.setItem(this.storageKey, 'true');
    }

    // === RATE LIMITING METHODS ===

    checkRateLimit() {
        const now = Date.now();

        // Verifica tempo mínimo entre mensagens
        if (now - this.lastMessageTime < this.minTimeBetweenMessages) {
            return {
                allowed: false,
                reason: 'Aguarde um momento antes de enviar outra mensagem.',
                waitTime: this.minTimeBetweenMessages - (now - this.lastMessageTime)
            };
        }

        // Remove timestamps antigos (mais de 1 minuto)
        this.messageTimestamps = this.messageTimestamps.filter(
            timestamp => now - timestamp < 60000
        );

        // Verifica limite de mensagens por minuto
        if (this.messageTimestamps.length >= this.maxMessagesPerMinute) {
            const oldestTimestamp = this.messageTimestamps[0];
            const waitTime = 60000 - (now - oldestTimestamp);
            return {
                allowed: false,
                reason: 'Você atingiu o limite de mensagens. Aguarde um momento.',
                waitTime: waitTime
            };
        }

        return { allowed: true };
    }

    recordMessage() {
        const now = Date.now();
        this.messageTimestamps.push(now);
        this.lastMessageTime = now;
    }

    // === END RATE LIMITING ===

    init() {
        this.createWidget();
        this.bindEvents();

        if (chatConfig.autoOpen && this.isFirstVisit()) {
            setTimeout(() => {
                this.open();
                this.showWelcomeMessage();
                this.markAsVisited();
            }, chatConfig.autoOpenDelay);
        }
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'chat-widget';
        widget.id = 'chatWidget';

        widget.innerHTML = `
      <button class="chat-toggle-btn" id="chatToggleBtn" aria-label="Abrir chat">
        <svg class="icon-chat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          <circle cx="8" cy="10" r="1.5"/>
          <circle cx="12" cy="10" r="1.5"/>
          <circle cx="16" cy="10" r="1.5"/>
        </svg>
        <svg class="icon-close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
        <span class="notification-dot" id="notificationDot"></span>
      </button>
      
      <div class="chat-container" id="chatContainer">
        <header class="chat-header">
          <img src="./assets/img/logo.png" alt="PrismaTech">
          <div class="chat-header-info">
            <h4 class="chat-header-title">Assistente Virtual</h4>
            <span class="chat-header-status" id="chatStatus">Online agora</span>
          </div>
          <button class="chat-close-btn" id="chatCloseBtn" aria-label="Fechar chat">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </header>
        
        <div class="chat-messages" id="chatMessages"></div>
        
        <div class="chat-quick-actions" id="quickActions">
          <button class="chat-quick-btn" data-message="Quais cursos vocês têm?">Ver cursos</button>
          <button class="chat-quick-btn" data-message="Quanto custa?">Preços</button>
          <button class="chat-quick-btn" data-message="Posso visitar a escola?">Agendar visita</button>
          <button class="chat-quick-btn" data-message="Onde fica a escola?">Endereço</button>
        </div>
        
        <div class="chat-input-area">
          <input 
            type="text" 
            class="chat-input" 
            id="chatInput" 
            placeholder="Digite sua mensagem..."
            autocomplete="off"
            maxlength="500"
          >
          <button class="chat-send-btn" id="chatSendBtn" aria-label="Enviar mensagem">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

        document.body.appendChild(widget);

        this.widget = widget;
        this.toggleBtn = document.getElementById('chatToggleBtn');
        this.closeBtn = document.getElementById('chatCloseBtn');
        this.container = document.getElementById('chatContainer');
        this.messagesContainer = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSendBtn');
        this.quickActions = document.getElementById('quickActions');
        this.notificationDot = document.getElementById('notificationDot');
        this.statusIndicator = document.getElementById('chatStatus');
    }

    bindEvents() {
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.closeBtn.addEventListener('click', () => this.close());

        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        this.quickActions.querySelectorAll('.chat-quick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.input.value = message;
                this.sendMessage();
            });
        });
    }

    open() {
        this.isOpen = true;
        this.widget.classList.add('open');
        this.hideNotification();
        this.input.focus();
    }

    close() {
        this.isOpen = false;
        this.widget.classList.remove('open');
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
            if (this.messages.length === 0) this.showWelcomeMessage();
        }
    }

    showWelcomeMessage() {
        this.addMessage(chatConfig.welcomeMessage, 'bot');
    }

    addMessage(text, sender = 'user', msgId = null) {
        const message = { id: msgId || Date.now(), text, sender, timestamp: new Date() };
        this.messages.push(message);
        this.renderMessage(message);
        this.scrollToBottom();
        if (sender === 'user') this.quickActions.style.display = 'none';
    }

    renderMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${message.sender}`;
        messageEl.innerHTML = `${message.text}<span class="chat-message-time">${this.formatTime(message.timestamp)}</span>`;
        this.messagesContainer.appendChild(messageEl);
    }

    formatTime(date) {
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    showTyping() {
        if (this.isTyping) return;
        this.isTyping = true;
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-message bot typing';
        typingEl.id = 'typingIndicator';
        typingEl.innerHTML = '<span></span><span></span><span></span>';
        this.messagesContainer.appendChild(typingEl);
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        const typingEl = document.getElementById('typingIndicator');
        if (typingEl) typingEl.remove();
    }

    showNotification() { this.notificationDot.style.display = 'block'; }
    hideNotification() { this.notificationDot.style.display = 'none'; }

    updateStatus(status) {
        this.ticketStatus = status;
        const statusTexts = { 'AGUARDANDO': 'Aguardando...', 'ATENDIMENTO': 'Em atendimento', 'ENCERRADO': 'Conversa encerrada' };
        this.statusIndicator.textContent = statusTexts[status] || 'Online agora';
    }

    startPolling() {
        if (this.isPolling) return;
        this.isPolling = true;
        this.pollingStartTime = Date.now();
        this.pollForResponse();
    }

    stopPolling() {
        this.isPolling = false;
        if (this.pollingTimer) {
            clearTimeout(this.pollingTimer);
            this.pollingTimer = null;
        }
    }

    async pollForResponse() {
        if (!this.isPolling) return;

        if (Date.now() - this.pollingStartTime > chatConfig.pollingTimeout) {
            this.stopPolling();
            this.hideTyping();
            this.addMessage('Desculpe, o tempo de espera expirou. Tente novamente.', 'bot');
            this.input.disabled = false;
            this.sendBtn.disabled = false;
            return;
        }

        try {
            const url = `${chatConfig.pollingUrl}?sessionId=${this.sessionId}&lastMessageId=${this.lastMessageId || '0'}`;
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();

                if (data.messages && data.messages.length > 0) {
                    this.hideTyping();
                    data.messages.forEach(msg => {
                        this.addMessage(msg.text, 'bot', msg.id);
                        this.lastMessageId = msg.id;
                    });
                    if (!this.isOpen) this.showNotification();
                    this.stopPolling();
                    this.input.disabled = false;
                    this.sendBtn.disabled = false;
                    this.input.focus();
                    return;
                }

                if (data.ticketStatus) this.updateStatus(data.ticketStatus);
            }
        } catch (error) {
            console.error('Erro no polling:', error);
        }

        if (this.isPolling) {
            this.pollingTimer = setTimeout(() => this.pollForResponse(), chatConfig.pollingInterval);
        }
    }

    async sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        // === RATE LIMITING CHECK ===
        const rateCheck = this.checkRateLimit();
        if (!rateCheck.allowed) {
            this.addMessage(rateCheck.reason, 'bot');
            return;
        }
        // === END RATE LIMITING CHECK ===

        this.input.value = '';
        this.input.disabled = true;
        this.sendBtn.disabled = true;

        // Registra mensagem para rate limiting
        this.recordMessage();

        this.addMessage(text, 'user');
        this.updateStatus('ATENDIMENTO');
        this.showTyping();

        try {
            const response = await this.sendToWebhook(text);

            if (response && response.success) {
                if (response.ticketId) this.ticketId = response.ticketId;
                this.startPolling();
            } else if (response && response.rateLimited) {
                // Resposta de rate limit do servidor
                this.hideTyping();
                this.addMessage('Você está enviando mensagens muito rápido. Aguarde um momento.', 'bot');
                this.input.disabled = false;
                this.sendBtn.disabled = false;
            } else {
                this.hideTyping();
                this.addMessage(chatConfig.errorMessage, 'bot');
                this.input.disabled = false;
                this.sendBtn.disabled = false;
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            this.hideTyping();
            this.addMessage(chatConfig.errorMessage, 'bot');
            this.input.disabled = false;
            this.sendBtn.disabled = false;
        }
    }

    async sendToWebhook(message) {
        const payload = {
            sessionId: this.sessionId,
            ticketId: this.ticketId,
            message: message,
            userData: this.userData,
            timestamp: new Date().toISOString()
        };

        const response = await fetch(chatConfig.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }

    setUserData(field, value) {
        this.userData[field] = value;
        localStorage.setItem('prismatech_chat_userData', JSON.stringify(this.userData));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.chatWidget = new ChatWidget();
});

export default ChatWidget;
