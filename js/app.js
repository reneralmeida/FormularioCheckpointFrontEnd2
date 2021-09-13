//Definindo imagem de fundo e posição
document.body.style.backgroundImage = "url('./img/img.jpg')";
document.body.style.backgroundPosition = "bottom center";

//Criando form dinamicamente
document.body.innerHTML += `<h1>YouTube Embedder</h1>
                            <div id='form'>
                            <input class='input1' id='title' (type=text, placeholder='Insert Title / Insira o título')></input>
                            <input class='input2' id='description' (type=text, placeholder='Insert Description / Insira a descrição')></input>
                            <input class='input3' id='url1' (type=text, placeholder='Place your YouTube URL / Insira URL')></input>
                            <button class='button1' onclick='fetching()'>Submit / Incorporar</button>
                            </div>`;

//Criando o card
let elements = 0
let input1 = ""
let input2 = ""
let input3 = ""

function fetching() {
    input1 = document.getElementById("title").value
    input2 = document.getElementById("description").value
    input3 = document.getElementById("url1").value
    input3 = input3.replace("watch?v=", "embed/"); //A main page do YT exige autenticação SSL, porém, ao usar a URL /embed evitamos essa proteção (Pesquisa: https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti)

    let cardSection = document.querySelector('.card');
    cardSection.innerHTML += `<div 'id='iframe-container'> <iframe width="420" height="315" src="${input3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                              <div class='hdois'><h2>${input1}</h2></div>
                              <div class='paragrafo'><p>${input2}<p></div>`;
}

//Criando botão com o form de contato e créditos da equipe
document.body.innerHTML += `<div class='btnEquipe'>
                            <button id='equipe'>Contato</button>
                            </div>`;

document.getElementById('equipe').addEventListener("click", function() {
    document.body.innerHTML += `<div id='formContato'>
                                <input class='input4' (type=text, placeholder='Digite seu nome completo')></input>
                                <input class='input5' (type=text, placeholder='Digite seu email')></input>
                                <button id='enviar'>Enviar</button>
                                </div>`;

    document.body.innerHTML += `<div class='equipe'>
                                <p>Equipe:</p>
                                <p>Guilherme Procópio</p>
                                <p>Nathalia Vieira</p>
                                <p>Rener Almeida</p>
                                </div>`;

    let enviar = document.getElementById('enviar');
    //Alterando a imagem de fundo e simulando o envio do formulário
    enviar.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('./img/img1.jpg')";
        document.getElementById('formContato').innerHTML ="";
    });

});