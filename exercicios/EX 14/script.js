function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
if(hora >= 0 && hora < 12){
msg.innerHTML="Bom dia meu porco!!"
img.src = 'fotomanha.png'
document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora < 18){
    msg.innerHTML="Boa tarde meu consagrado!!"
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
}else if (hora >= 18 && hora <= 23){
    msg.innerHTML="Boa noite meu bom!!"
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}

}
