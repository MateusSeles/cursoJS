function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imagens/dia.png.jpg'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.png.jpg'
        document.body.style.background = 'Darkorange'
    } else {
        // boa noite
        img.src = 'imagens/noite.png.jpg'
        document.body.style.background = 'black'
    }

}