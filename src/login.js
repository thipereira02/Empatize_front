function logar(){
  const usuario = document.querySelector('#usuario');
  const labelUsuario = document.querySelector('#labelUsuario')

  const senha = document.querySelector('#senha')
  const labelSenha = document.querySelector('#labelSenha')

  let listaUser = []

  let userValid = {
      nome: '',
      user: '', 
      senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

listaUser.forEach((item) =>{
    if(usuario.value == item.userCadastrado && senha.value == item.senhaCadastrada){
        userValid = {
            nome: item.nomeCadastrado,
            user: item.userCadastrado,
            senha: item.senhaCadastrada
        }

    }
})

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        alert('voce logou!')
        window.location.href = 'logado.html'

    }else(
        alert('senha incorreta'),
        labelUsuario.setAttribute('style', 'color: red'),
        usuario.setAttribute('style', 'color: red'),
        labelSenha.setAttribute('style', 'color: red'),
        usuario.setAttribute('style', 'color: red')
    )
}