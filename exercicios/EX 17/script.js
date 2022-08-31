function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML=''
    for(d = n; c <= 10; c++){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${d*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    }
    }
}