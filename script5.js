const cpf = document.querySelector("#CPF");
const nome = document.getElementById('nome')
const ddd = document.getElementById('DDD')
const telefone = document.getElementById('telefone')
const email = document.getElementById("email")

cpf.addEventListener("blur", function(){
   if(cpf.value.length == 11) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
   validaCPF(cpf)
});

email.addEventListener('blur', function() {
    validacaoEmail(email)
})

nome.addEventListener('blur', function() {
    validaNome(nome)
})

ddd.addEventListener('blur', function() {
    validaDDD(ddd)
})

telefone.addEventListener('blur', function() {
    validaTelefone(telefone)
})

function validacaoEmail(email) {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    
if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        email.style.border = 'none'
        return true
} else {
        email.style.border = 'solid red'
        return false
    }
}

function validaCPF (cpf) {
    if (cpf.value.length == 14) {
        cpf.style.border = 'none'
        return true
    } else {
        cpf.style.border = 'solid red'
        return false
    }
}

function validaNome (nome) {
    if (nome.value.indexOf(" ") != -1) {
        nome.style.border = 'none'
        return true
    } else {
        nome.style.border = 'solid red'
        return false
    }
}

function validaDDD (ddd) {
    if (ddd.value.length == 2) {
        ddd.style.border = 'none'
        return true
    } else {
        ddd.style.border = 'solid red'
        return false
    }
}

function validaTelefone (telefone) {
    if (telefone.value.length == 9) {
        telefone.style.border = 'none'
        return true
    } else {
        telefone.style.border = 'solid red'
        return false
    }
}

function avancar() {
    if(validacaoEmail(email) && validaCPF(cpf) && validaNome(nome) && validaDDD(ddd) && validaTelefone(telefone)) {
        window.location = "agradecimento.html"
    } else {
        validacaoEmail(email) 
        validaCPF(cpf) 
        validaNome(nome) 
        validaDDD(ddd) 
        validaTelefone(telefone)
    }
}