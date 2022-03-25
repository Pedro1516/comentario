
   const nome = document.querySelector('#name')
   const btn = document.querySelector('#btn')
   const tela = document.querySelector('#tela')
   const texto = document.querySelector('#text')
   const fotoInput = document.querySelctor('#foto-perfil')

   btn.addEventListener('click', () => {
     if(nome.value.length != 0 && texto.value.length != 0){
       let comentComQuebra = texto.value

       for(i = 0; i < texto.value.length; i++){
         comentComQuebra =  comentComQuebra.replace('\n', '<br>')
       }

      let perfil = ` <img src="img_perfil.png"><p id="nome">${nome.value} · Há poucos instantes `
      let msg = `<p id="msg">\n ${comentComQuebra}</p>`
      let comentario = `<div class="name">${perfil}</div> ${msg}`
      tela.innerHTML += `<div class="comentario"> ${comentario} </div>`
   }
   })

fotoInput.addEventListener('change', () => {
  console.log('Enviado')
})
