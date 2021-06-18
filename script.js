function carregar(){
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var saud = window.document.getElementById('saudacao')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  msg.innerHTML = `<h2>Agora são ${hora}:${minutos}</h2>`
  if (hora >= 0 && hora <12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#edac85'
    saud.innerHTML = "<h2>Bom dia!</h2>"
  }else if (hora >= 12 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#f7a13b'
    saud.innerHTML = "<h2>Boa tarde!</h2>"
  }else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#00252d'
    saud.innerHTML = "<h2>Boa noite!</h2>"
  }
}