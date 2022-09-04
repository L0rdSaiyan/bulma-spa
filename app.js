function cadastrar() {

    let nome = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirm = document.getElementById("confirm").value

    if (senha !== confirm) {

        alertify.error('As senhas não conferem!')

    }

    else if (nome == "" || senha == "" || confirm == "") {

        alertify.error('Não são permitidos campos em branco!')

    } else if (senha.length < 6) {

        alertify.error('As senhas devem conter no mínimo 6 dígitos!')

    }

    else {

        alertify.alert('Conta criada com sucesso!', `Bem-vindo, ${nome}!`)

        setTimeout(redirect => {

            location.href = "index.html"


        }, 2000)


    }

}

function confirm() {

    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if (usuario == "" || senha == "") {

        alertify.error('Preencha os campos corretamente!')


    } else if (senha < 6) {

        alertify.error('As senhas devem conter 6 dígitos!')

    } else {

        alertify.alert('Login bem sucedido', `Bem vindo, ${usuario}`)

        setTimeout(redirect => {

            window.location.href = "index.html"


        }, 2000)

    }
}