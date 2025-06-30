
const messages = [
    { from: "sofia", text: "Oi amor, tudo bem? Eu sou a Sofia 💋" },
    { from: "sofia", text: "Tô um pouco nervosa, acabei de me mudar pra cá... 🏙️" },
    { from: "sofia", text: "Tô fazendo faculdade de odontologia e... bom... quero te contar mais 👀" },
    { from: "sofia", text: "Antes, me fala uma coisa... Com o que você trabalha?" },
    { from: "user", text: "Trabalho com marketing digital." },
    { from: "sofia", text: "Uau, sério? Sempre achei isso um mundo diferente... acho sexy quem entende dessas coisas 😈" },
    { from: "sofia", text: "Quantos anos você tem?" },
    { from: "user", text: "Tenho 28 anos." },
    { from: "sofia", text: "Perfeito... um homem maduro, do jeitinho que eu gosto 😍" },
    { from: "sofia", text: "Ah, e você é de [SUA CIDADE]? Que delícia, estamos bem pertinho então 👀" },
    { from: "sofia", text: "Vou te mostrar umas coisinhas... mas antes, precisa escolher um dos meus planos 😏" },
    { from: "sofia", text: "Clique no botão abaixo e vem ser meu VIP agora mesmo... 💖" },
    { from: "sofia", text: "<a href='https://pushinpay.com/sofiavalentina' target='_blank'>👉 Ver meus planos VIP</a>" }
];

const chat = document.getElementById("chat");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessages() {
    for (let i = 0; i < messages.length; i++) {
        const typing = document.createElement("div");
        typing.className = "message typing";
        typing.textContent = "Sofia está digitando...";
        chat.appendChild(typing);
        chat.scrollTop = chat.scrollHeight;
        await sleep(1500 + Math.random() * 1000);
        typing.remove();

        const msg = document.createElement("div");
        msg.className = "message " + messages[i].from;
        msg.innerHTML = messages[i].text;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
        await sleep(1500);
    }
}

showMessages();
