function GerarSenha(){
    let str = "";
    let geraSenha = Math.random().toString(36).slice(-10);
    document.querySelector('input[name="resultado"]').value = geraSenha;
    console.log(geraSenha);      
}
