const express = require('express');
const cors = require('cors');
const sgMail = require ('@sendgrid/mail')
const { KEY } = require('./emailConfig')

const app = express();

sgMail.setApiKey(KEY);

app.use(cors()); 

//Welcome Page
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor de Email SendGrid!!')
});

//email page
app.get('/contato', (req, res) => {
    //Pegar as variáveis da query string

    const { recipient, sender, topic, text } = req.query;

    //Requirimentos do Sengrid
    const msg = { 
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    //Enviar email
    sgMail.send(msg)
    .then( () => console.log(text))
    .catch((error) => {
        console.log('error', error);
    })

    // console.log(msg.text)
})

app.listen(8181, () => console.log("Rodando na porta 8181"));