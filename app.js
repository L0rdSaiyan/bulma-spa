function cadastrar(){

    let nome = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirm = document.getElementById("confirm").value
    let msg = document.getElementById("msg")
    let msg2 = document.getElementById("msg2")

    if(senha!==confirm){

        msg2.innerText = "As senhas não conferem!"

    }


    if(nome=="" || senha=="" || confirm==""){

        msg.innerText = "Não são permitidos campos em branco!"

    }

}