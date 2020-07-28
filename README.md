# smarkio-watson
Desafio Smarkio Watson
back-end foi utilizado:
Foi utilizado o adonis pra conectar o banco de dados,
end. formato e rota.


Front-end foi utilizado:
react para o front,
atualizacao automatica sem atualizar a pagina usamos o react hooks (funcao useEfect), 
freamwork usado antd(bastante usado),
axios(lib) sistema de rotas para conectar api,
Sox-audio para reproduzir o audio.


//CONFIG DATABASE
- Abrir o arquivo .env.example
- Alterar o:

linha

-8 B_HOST=localhost  //nome do host

-9 DB_PORT=3306  //porta que esta o banco

-10 DB_USER=root  //usuario 

-11 DB_PASSWORD=  //senha

//configurar o .env
- Savar e criar .env na pasta ./watson-API-master

//configurar a api-key e url ->
./watson.Front-master/services/watson.js

linha 

13.........const textToSpeech = new TextToSpeechV1({

14..........authenticator: new IamAuthenticator({ apikey: '<your api-key>' }),
  
15..........url: ' your url'

16......});



//Back-end
- Para instalar as dependencia e rodar o programa Back-end (watson.API-master)

> cd watson.API-master

> npm install

> npm i -g @adonisjs/cli     //(install adonis)

> adonis migration:run      //(database)

> adonis serve --dev

//Front-end
- Para instalar as dependencia e rodar o programa Front-end (watson.Front-master)

> cd watson.Front-master

> npm install 

> npm install sox-audio    //(reprodutor audio)

> npm start

