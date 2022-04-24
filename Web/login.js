function validaLogin()
{
    if (document.cookie == null)
        return;

    if (document.cookie == '')
        return;

    const auxStr = document.cookie.substring(6, document.cookie.length);
    document.getElementById("usuarioLogado").innerText = auxStr;
    document.getElementById("imageLogado").style.visibility = 'visible';
}

function autenticar()
{
    // resetaCookie();
    let login = document.getElementById('login').value;
    let senha = document.getElementById('password').value;

    if (login == null || login == "")
        return;

    if (senha == null || senha == "")
        return;

    document.cookie = "login="+login;//ver se n tem tempo de expiração

    window.location.assign("menu.html");
}

function resetaCookie() {
    var date = new Date();
    document.cookie = 'login=; expires='+date.toGMTString()+';';
}

function habilitaAutenticacao() 
{
    if (document.getElementById("login") == null)
        return;
 
    if (document.getElementById("password") == null)
        return;

    if (document.getElementById("autentica") == null)
        return;

    if (document.getElementById("login").value == "")
        return;

    if (document.getElementById("password").value == "")
        return;
        
    console.log("oi");

    const elemento = document.getElementById("autentica");
    elemento.classList.remove("btn-danger");
    elemento.classList.add("btn-dark");

    document.getElementById("").disabled = false;
}
