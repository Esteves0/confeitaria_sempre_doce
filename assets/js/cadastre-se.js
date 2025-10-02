const password = document.getElementById('password')
const confirmapassword = document.getElementById('confirma-password')

function cadastrarUsuario() {

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')



    if (password.value == confirmapassword.value) {
        //  Cadastrar no local storage

        //Verifica se a lista existe no local storage
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            //Não existe a lista, então cria e adiciona o usuáraio
            lista = []

            //adicionar o usuario na lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'senha': password.value
            }
            lista.push(usuario)

            //Salvar no local storage a lista

            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('Usuário cadastrado')

            nome.value = ''
            email.value = ''
            password.value = ''
            confirmapassword.value = ''

        }else{
            //Adicionar novos usuários
            //Primeiro buscar a lista no local storage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'senha': password.value
            }


            //Adiciona na lista

            listaE.push(usuarioA)
            window.localStorage.setItem('Usuários', JSON.stringify(listaE))
            alert('Usuário cadastrado')
            //Limpar os campos

            nome.value = ''
            email.value = ''
            password.value = ''
            confirmapassword.value = ''
        }

    } else {
        alert('Senha não confere, verifique seus dados')
        password.value = ''
        confirmapassword.value = ''
    }
}


function toggleSenha() {
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        //Mostrar senhas
        password.type = 'text'
        confirmapassword.type = 'text'

    } else {
        //Não mostrar as senhas
        password.type = 'password'
        confirmapassword.type = 'password'
    }


    //Cadastrar no local storage
}

