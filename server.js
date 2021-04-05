const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.static('.')) //serve as pastas, paginas estáticas, no local em que este ficheiro estiver guardado
app.use('/form', bodyParser.urlencoded({extended: true})) // responsavel por fazer o parse da url quando é submetido um formulario
app.use(bodyParser.json()) // responsavel por transformar json em objeto

app.post('/form', (req, res) => {
    filePath = __dirname + `/public/${Date.now()}formData.json` //diretorio e ficheiro onde será guardado as informações do formulario
    const formProperties = {...req.body}
    const formJson = JSON.stringify(formProperties)
    let response = ''

    for(let obj in formProperties){
        response += `${obj}: ${formProperties[obj]}\n`
    }

    fs.appendFile(filePath, formJson, () => {
        res.send(`Seu formulário foi enviado com sucesso!\n${response}`) //Se o formulario for guardado essa resposta retornará para o front end
    })
})

app.listen("https://fichaprojecto.azurewebsites.net", () => console.log("executando..."))
