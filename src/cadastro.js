const nome = document.querySelector('#nome')
const labelNome = document.querySelector('#labelNome')
let validNome = false

const usuario = document.querySelector('#usuario')
const labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

const empresa = document.querySelector('#empresa')
const labelEmpresa = document.querySelector('#labelEmpresa')
let validEmpresa = false

const senha = document.querySelector('#senha')
const labelSenha = document.querySelector('#labelSenha')
let validSenha = false

const confirmSenha = document.querySelector('#confirmSenha')
const labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres ' 
        validNome = false
    }else
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    validNome = true
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 2){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 3 caracteres ' 
        validUsuario = false
    }else
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuario'
    validUsuario = true
})

empresa.addEventListener('keyup', () => {
    if(empresa.value.length <= 2){
        labelEmpresa.setAttribute('style', 'color: red')
        labelEmpresa.innerHTML = 'Empresa *Insira no minimo 3 caracteres ' 
        validEmpresa = false
    }else
    labelEmpresa.setAttribute('style', 'color: green')
    labelEmpresa.innerHTML = 'Empresa'
    validEmpresa = true
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 2){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 3 caracteres ' 
        validUsuario = false
    }else
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    validUsuario = true
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value ){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *Insira no minimo 3 caracteres ' 
        validUsuario = false
    }else
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    validUsuario = true
})



function cadastrar(){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]' )

    listaUser.push({
        nomeCadastrado: nome.value,
        userCadastrado: usuario.value,
        empresaCadastrada: empresa.value,
        senhaCadastrada: senha.value,
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    alert('cadastrado com sucesso')

    window.location.href = 'index.html'

}

