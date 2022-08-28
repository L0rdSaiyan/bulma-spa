function cadastrar(){

    let nome = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirm = document.getElementById("confirm").value
    let msg = document.getElementById("msg")

    if(nome=="" || senha=="" || confirm==""){

        msg.innerText = "Não são permitidos campos em branco!"

    }

}