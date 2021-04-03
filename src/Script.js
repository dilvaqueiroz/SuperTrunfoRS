var carta1 = {
    nome:"Vorago",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQza6oAWMns5lU4rxCuPqgyl_egho_wxDOt2l10842toJp3dfLpiBMsJjvC9Oqyy70xO04&usqp=CAU",
    atributos:{
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var carta2 ={
    nome:"Solak",
    imagem:"https://spacecoastdaily.com/wp-content/uploads/2020/02/runescape-600.jpg",
    atributos:{
        ataque: 70,
        defesa: 65,
        magia:  85
    } 
}

var carta3 = {
    nome: "Nex",
    imagem: "https://www.tip.it/runescape/images/bestiary/1576.png",
    atributos:{
        ataque: 88,
        defesa: 62,
        magia: 90
    }  
}


var carta4 = {
    nome: "Telos",
    imagem: "https://pbs.twimg.com/media/DDWX_4pWsAAO0wW.png",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

var carta5 = {
    nome: "Helwyr",
    imagem: "https://pt.runescape.wiki/images/0/0b/Helwyr.png?76e7e",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

var carta6 = {
    nome: "Gregorovic",
    imagem: "https://pbs.twimg.com/media/Db1NuLPX0AAIeSd.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

var carta7 = {
    nome: "Dragoa Negra Rainha",
    imagem: "http://i.imgur.com/utw1aep.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var carta8 = {
    nome: "Fúrias Gêmeas",
    imagem: "https://i.pinimg.com/originals/90/b5/be/90b5be309c347058f0b5de0998d7ad23.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]

var pontosJogador = 0
var pontosMaquina = 0

function atualizaQuantidadeCartas(){
    var divQuenatidadeCartas = document.getElementById('quantidade-cartas')
    var tmp = "Quantidades de cartas no jogo:" + cartas.length

    divQuenatidadeCartas.innerHTML= tmp
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina= cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina,1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
/*    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador= parseInt(Math.random() * 3)
    }*/
    cartaJogador = cartas[numeroCartaJogador]
   // console.log(cartaJogador)
   cartas.splice(numeroCartaJogador,1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
 //   exibirOpcoes()
}

function exibeCartaJogador() { 
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto=""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' name= 'atributo' value='" + atributo +"'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto + '</div>'
 }

/*function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type = 'radio' name= 'atributo' value='" + atributo +"'>" + atributo
    }

    opcoes.innerHTML = opcoesTexto
}*/

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i< radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado=obtemAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
        //alert('Venceu o jogo')
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
        //alert('Perdeu o jogo')
    }else{
        htmlResultado = '<p class="resultado-final">Empatou</p>'
        //alert('Empatou o jogo')       
    }

    if(cartas.length == 0){
        alert("Fim de Jogo")
        if(pontosJogador>pontosMaquina){
            htmlResultado = '<p class="resultado-final">Venceu<p/>'
        } else if (pontosMaquina> pontosJogador){
            htmlResultado = '<p class="resultado-final">Perdeu<p/>'
        }else{
            htmlResultado = '<p class="resultado-final">Empatou<p/>'
        }
    } else{
        document.getElementById('btnProximaRodada'). disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
    
   // console.log(cartaMaquina)
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto=""

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type = 'text' name= 'atributo' value='" + atributo +"'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto + '</p>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')

    divResultado.innerHTML = ""
}