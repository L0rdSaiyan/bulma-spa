function cadastrar(){

    let nome = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirm = document.getElementById("confirm").value
    let msg = document.getElementById("msg")
    let msg2 = document.getElementById("msg2")

    if(senha!==confirm){

        msg2.innerText = "As senhas não conferem!"

    }


    else if(nome=="" || senha=="" || confirm==""){

        msg.innerText = "Não são permitidos campos em branco!"

    }

    else{

        location.href="index.html"

    }

}

function confirm(){

let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

if(usuario == "" || senha == ""){

    alertify.error('preencha os campos corretamente!')

}else{

    window.location.href="index.html"

}


}

