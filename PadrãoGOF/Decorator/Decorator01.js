// Componente
class ComponenteNotificador {
    enviar(msg){
        console.log(`Enviando mensagem: ${msg}`);
    }
}

// Decorador Base
class DecoradorNotificador{
    constructor(componente){
        this.componente = componente;
    }

    enviar(msg){
        this.componente.enviar(msg);
    }
}

// Decorador Concreto 1 - Simulando SMS:
class NotificadorSMS extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando mensagem por SMS: ${msg}`);
    }
}

// Decorador Concreto 2 - Simulando WhatsApp:
class NotificadorWhatsApp extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando mensagem por WhatsApp: ${msg}`);
    }
}

// Decorador Concreto 3 - Simulando Email:
class NotificadorEmail extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando mensagem por Email: ${msg}`);
    }
}

// Interface de Utilização --------------------------------------------------
const notificador           = new ComponenteNotificador();
const notificadorSMS        = new NotificadorSMS(notificador);
const notificadorWhatsApp   = new NotificadorWhatsApp(notificador);
const notificadorEmail      = new NotificadorEmail(notificador);

const mensagem = "Ola Mundo... "
notificadorWhatsApp.enviar(mensagem);
notificadorEmail.enviar(mensagem);
notificadorSMS.enviar(mensagem);

