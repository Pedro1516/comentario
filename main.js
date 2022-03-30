
   const nome = document.querySelector('#name')
   const btn = document.querySelector('#btn')
   const tela = document.querySelector('#tela')
   const texto = document.querySelector('#text')
   const fotoInput = document.querySelector('#foto-perfil')
   
function registrar(nome, msg, img){
  const obj = {
    name: nome,
    comentario: msg,
    foto: img
  }
  const objJson = JSON.stringify(obj)
  const position = localStorage.length 
  localStorage.setItem(`comentario${position}`, objJson)
}

function carregarComentarios(){
  for(i = 0; i < localStorage.length; i++){
    comentarioJson= localStorage.getItem(`comentario${i}`)
  console.log(comentarioJson)
  obj = JSON.parse(comentarioJson)
  let perfil = ` <img src="${obj.foto}"><p id="nome">${obj.name} · Há poucos instantes `
  let msg = `<p id="msg">\n ${obj.comentario}</p>`
  let comentario = `<div class="name">${perfil}</div> ${msg}`
  tela.innerHTML += `<div class="comentario"> ${comentario} </div>`
}
}

btn.addEventListener('click', () => {
     if(nome.value.length != 0 && texto.value.length != 0){
       let comentComQuebra = texto.value

       for(i = 0; i < texto.value.length; i++){
         comentComQuebra =  comentComQuebra.replace('\n', '<br>')
       }
    
      let files = fotoInput.files
      
      if(files.length == 0){
        src = 'img_perfil.png'
      }
      else{
         src = URL.createObjectURL(files[0])
      }
      
      registrar(nome.value, comentComQuebra, src)
      
      let perfil = ` <img src="${src}"><p id="nome">${nome.value} · Há poucos instantes `
      let msg = `<p id="msg">\n ${comentComQuebra}</p>`
      let comentario = `<div class="name">${perfil}</div> ${msg}`
      
      tela.innerHTML += `<div class="comentario"> ${comentario} </div>`
     }
})

document.onload = carregarComentarios()


