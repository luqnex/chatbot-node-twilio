const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// aqui vamos inserir a lógica do jogo
app.get("/", (req, res) => {
  res.send("server started!");
});

app.post("/message", (req, res) => {
  console.log("nova mensagem", req.body.Body);

  const userMessage = req.body.Body.toLowerCase();

  const twiml = new twilio.twiml.MessagingResponse();

  switch (userMessage) {
    case "1":
      twiml.message("Aguarde um instante, nosso técnico já vai te atender");
      res.send(twiml.toString());
      break;
    case "2":
      twiml.message("Nossos planos são...");
      res.send(twiml.toString());
      break;
    case "3":
      twiml.message("Seu boleto é...");
      res.send(twiml.toString());
      break;
    case "4":
      twiml.message("Finalizando conversa, obrigado pelo contato!");
      res.send(twiml.toString());
      break;

    default:
      twiml.message(`
Olá, seja bem-vindo ao Assistente Virtual da *LUCAS INTERNET*

Como posso te ajudar? Digite o *NUMERO* da opção desejada:
    
1 - Suporte Técnico
2 - Conhecer planos
3 - 2ª via de boleto
4 - Finalizar
    `);

      res.send(twiml.toString());
      break;
  }
});

app.listen(3000, function () {
  console.log("Servidor ativo na porta 3000!");
});
