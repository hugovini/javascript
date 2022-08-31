function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano || fano.value <= 1800) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','c menino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','j homem.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','j homem.png')
            }else {
                //idoso
                img.setAttribute('src','i homem.png')
            }
        }   else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','c menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','j mulher.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src','j mulher.png')
            }else {
                //idoso
                img.setAttribute('src','i mulher.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}